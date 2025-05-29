import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Sistema de Gestión de Libros
      </h1>
      <div className="max-w-4xl mx-auto space-y-10">
        <BookForm />
        <BookList />
      </div>
    </div>
  );
}
