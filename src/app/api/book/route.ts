import { NextRequest, NextResponse } from "next/server";

import { NewTodo, db, todoTable } from "@/app/lib/drizzle";

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
    id: req.id,
    title: req.title,
    description: req.description,
  };
  await db.insert(todoTable).values(body).returning();
  return NextResponse.json({ "message":"data added" });
}

export async function PUT(request:NextRequest) {
  
}