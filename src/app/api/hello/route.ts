import { db } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const client = await db.connect();

  const pets = await client.sql`SELECT * FROM Pets;`;
  return NextResponse.json({ pets });
}

export async function POST(request: NextRequest) {
  const client = await db.connect();
  try {
    const req = await request.json();
    
    await client.sql`INSERT INTO Pets (Name, Owner) VALUES (${req.Name},${req.Owner});`;
  } catch (error) {
    return NextResponse.json(
      { error },
      {
        status: 500,
      }
    );
  }
  const pets = await client.sql`SELECT * FROM Pets;`;
  return NextResponse.json({ pets });
}
