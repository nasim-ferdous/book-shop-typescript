"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author, price: Number(price) }),
    });

    if (response.ok) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/all-books"); // Redirect to home page after adding
      router.refresh(); // Refresh data
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-5">Add a New Book</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Book Title"
          className="input input-bordered w-full"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          className="input input-bordered w-full"
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          className="input input-bordered w-full"
          onChange={(e) => setPrice(Number(e.target.value))}
          required
        />
        <button type="submit" className="btn btn-primary w-full">
          Save Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
