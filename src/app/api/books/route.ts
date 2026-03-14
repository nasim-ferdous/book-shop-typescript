import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { Book } from "@/types/book";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("bookshop");

  // We tell TypeScript the result will be an array of Books
  const books = await db.collection<Book>("books").find({}).toArray();

  return NextResponse.json(books);
}

export async function POST(request: Request) {
  const client = await clientPromise;
  const db = client.db("bookshop");

  const body: Book = await request.json(); // Type the incoming data

  const result = await db.collection("books").insertOne(body);

  return NextResponse.json({ id: result.insertedId }, { status: 201 });
}
