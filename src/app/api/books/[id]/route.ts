import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }, // Change to Promise
) {
  const { id } = await params; // Await the params!

  const client = await clientPromise;
  const db = client.db("bookshop");

  const result = await db
    .collection("books")
    .deleteOne({ _id: new ObjectId(id) });

  if (result.deletedCount === 0) {
    return NextResponse.json({ error: "Book not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Book deleted" });
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }, // Change to Promise
) {
  const { id } = await params; // Await the params!

  const client = await clientPromise;
  const db = client.db("bookshop");
  const updateData = await req.json();

  const result = await db
    .collection("books")
    .updateOne({ _id: new ObjectId(id) }, { $set: updateData });

  if (result.matchedCount === 0) {
    return NextResponse.json({ error: "Book not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Book updated" });
}
