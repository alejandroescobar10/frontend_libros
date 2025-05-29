import { useState } from "react";
import axios from "axios";

const defaultForm = {
  title: "",
  author: "",
  year: new Date().getFullYear(),
  publisher: "",
  type: "",
  photo: "",
  avaliable: true,
};

export default function BookForm() {
  const [form, setForm] = useState(defaultForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("http://dabral-alejandro-escobar-ms-projects.vercel.app/books/createBook", form);
    setForm(defaultForm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded p-6 space-y-4"
    >
      <h2 className="text-lg font-semibold text-gray-700">Agregar Libro</h2>
      <input
        name="title"
        placeholder="Título"
        value={form.title}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="author"
        placeholder="Autor"
        value={form.author}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="year"
        type="number"
        placeholder="Año"
        value={form.year}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="publisher"
        placeholder="Editorial"
        value={form.publisher}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="type"
        placeholder="Tipo"
        value={form.type}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="photo"
        placeholder="URL de la imagen (opcional)"
        value={form.photo}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="avaliable"
          checked={form.avaliable}
          onChange={handleChange}
        />
        <span>Disponible</span>
      </label>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Guardar Libro
      </button>
    </form>
  );
}
