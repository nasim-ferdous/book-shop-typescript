"use client";
import { Book } from "@/types/book";
import React, { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";

const AllBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // State for the Update Modal
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  // 2. Wrap the fetch function in useCallback
  const fetchBooks = useCallback(async () => {
    try {
      const res = await fetch("/api/books");
      const data = await res.json();
      setBooks(data);
    } catch (error) {
      console.error("Failed to fetch books:", error);
    } finally {
      setLoading(false);
    }
  }, []); // Empty array means the function is stable

  // 3. Now the linter is happy because fetchBooks is a stable dependency
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const handleDelete = (id: string) => {
    // Removed async from here as it's handled in the promise
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this book",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      // Added async here!
      if (result.isConfirmed) {
        try {
          const res = await fetch(`/api/books/${id}`, { method: "DELETE" });

          if (res.ok) {
            // Update local state so the card disappears immediately
            setBooks((prevBooks) =>
              prevBooks.filter((book) => book._id?.toString() !== id),
            );

            Swal.fire({
              title: "Deleted!",
              text: "Your Book has been deleted.",
              icon: "success",
            });
          } else {
            throw new Error("Failed to delete");
          }
        } catch (error) {
          Swal.fire("Error", "Could not delete the book.", "error");
        }
      }
    });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBook || !selectedBook._id) return;

    // Create a copy without the _id to send to the body
    // (Mongo doesn't like it if you try to "update" the _id field itself)
    const { _id, ...updateData } = selectedBook;

    try {
      const res = await fetch(`/api/books/${_id.toString()}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData),
      });

      if (res.ok) {
        await fetchBooks(); // Refresh the list from the server
        setSelectedBook(null); // Close modal
        Swal.fire("Updated!", "Book details have been saved.", "success");
      } else {
        Swal.fire("Error", "Failed to update book.", "error");
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  // --- SEARCH FILTER ---
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (loading)
    return (
      <div className="text-center mt-10 animate-bounce">Loading shelf...</div>
    );

  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">Our Book Collection</h1>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by title..."
          className="input input-bordered w-full max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <div
            key={book._id?.toString()}
            className="card bg-base-100 shadow-xl border border-gray-200"
          >
            <div className="card-body">
              <h2 className="card-title text-primary">{book.title}</h2>
              <p className="text-gray-600">By {book.author}</p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-xl font-bold">${book.price}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedBook(book)}
                    className="btn btn-sm btn-info"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(book._id!.toString())}
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- UPDATE MODAL --- */}
      {selectedBook && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update Book Information</h3>
            <form onSubmit={handleUpdate} className="py-4 space-y-4">
              <input
                type="text"
                className="input input-bordered w-full"
                value={selectedBook.title}
                onChange={(e) =>
                  setSelectedBook({ ...selectedBook, title: e.target.value })
                }
              />
              <input
                type="text"
                className="input input-bordered w-full"
                value={selectedBook.author}
                onChange={(e) =>
                  setSelectedBook({ ...selectedBook, author: e.target.value })
                }
              />
              <input
                type="number"
                className="input input-bordered w-full"
                value={selectedBook.price}
                onChange={(e) =>
                  setSelectedBook({
                    ...selectedBook,
                    price: Number(e.target.value),
                  })
                }
              />
              <div className="modal-action">
                <button
                  type="button"
                  className="btn"
                  onClick={() => setSelectedBook(null)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllBooks;
