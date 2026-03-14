# 📚 Book Shop - Full Stack CRUD Application

A modern, responsive Book Shop management system built with **Next.js 15**, **TypeScript**, and **MongoDB**. This project demonstrates full CRUD (Create, Read, Update, Delete) operations using the native MongoDB driver and a sleek UI powered by **DaisyUI**.

## 🚀 Features

- **Dynamic Hero Section**: Engaging landing page with a modern aesthetic.
- **Book Management**:
  - **Create**: Add new books via a dedicated form.
  - **Read**: View all books as responsive cards with a search filter.
  - **Update**: Edit book details through an interactive modal.
  - **Delete**: Remove books with a secure confirmation dialog (SweetAlert2).
- **Search**: Real-time client-side filtering by book title.
- **Responsive Design**: Optimized for mobile, tablet, and desktop views.
- **Type Safety**: Built entirely with TypeScript for robust code.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database**: [MongoDB](https://www.mongodb.com/) (Native Driver)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- **Notifications**: [SweetAlert2](https://sweetalert2.github.io/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18.x or later
- A MongoDB Atlas account or a local MongoDB instance

## ⚙️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/nasim-ferdous/book-shop-typescript.git](https://github.com/nasim-ferdous/book-shop-typescript.git)
   cd book-shop
   ```
2. Install dependencies:

   npm install

3. Environment Variables:

Create a .env.local file in the root directory and add your MongoDB URI:

MONGODB_URI=your_mongodb_connection_string_here

4. Run the development server:

   npm run dev

Open http://localhost:3000 with your browser to see the result.

📂 Project Structure

- /src/app/api/books - Main API route for GET and POST.

- /src/app/api/books/[id] - Dynamic API routes for PUT and DELETE.

- /src/components - Reusable UI components (Navbar, AllBooks, etc.).

- /src/lib/mongodb.ts - Shared MongoDB client connection logic.

- /src/types - TypeScript interfaces and definitions.

📝 License

Distributed under the MIT License. See LICENSE for more information.
