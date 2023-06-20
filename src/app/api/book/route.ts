import { NextRequest, NextResponse } from "next/server";

import { NewTodo, db, todoTable } from "@/app/lib/drizzle";
import { eq } from "drizzle-orm";

export async function GET() {
  const res = await db.select().from(todoTable);
  return new NextResponse(
    JSON.stringify({
      res,
    })
  );
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  const body: NewTodo = {
    
    title: req.title,
    description: req.description,
  };
  await db.insert(todoTable).values(body).returning();
  return NextResponse.json({ message: "data added" });
}

export async function PUT(request: NextRequest) {
  const req = await request.json();
  if (req.id) {
    const updated = await db
      .update(todoTable)
      .set({ title: req.title, description: req.description })
      .where(eq(todoTable.id, req.id))
      .returning();
    return NextResponse.json({ message: "data updated" });
  }
}
