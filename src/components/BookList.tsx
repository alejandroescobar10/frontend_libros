import { useEffect, useState } from "react";
import axios from "axios";

interface Libro {
  id: number;
  title: string;
  author: string;
  year: number;
  publisher: string;
  type: string;
  photo?: string;
  avaliable: boolean;
}

export default function BookList() {
  const [books, setBooks] = useState<Libro[]>([]);

  const fetchBooks = async () => {
    const res = await axios.get("https://dabral-alejandro-escobar-ms-projects.vercel.app/books/getBooks");
    setBooks(res.data);
  };

  const deleteBook = async (id: number) => {
    await axios.delete(`https://dabral-alejandro-escobar-ms-projects.vercel.app/books/deleteBook/${id}`);
    fetchBooks();
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Libros Registrados</h2>
      <ul className="space-y-4">
        {books.map((book) => (
          <li
            key={book.id}
            className="border p-4 rounded flex justify-between items-start gap-4"
          >
            <div>
              <p className="font-bold text-lg">{book.title}</p>
              <p className="text-gray-600 text-sm">
                {book.author} • {book.year}
              </p>
              <p className="text-gray-400 text-xs">
                {book.type} - {book.publisher}
              </p>
              <p>{book.avaliable ? "✅ Disponible" : "❌ No disponible"}</p>
              {book.photo && (
                <img
                  src={book.photo}
                  alt={book.title}
                  className="mt-2 w-32 rounded"
                />
              )}
            </div>
            <button
              onClick={() => deleteBook(book.id)}
              className="text-red-600 hover:underline text-sm"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
