import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';

const Parts: React.FC = () => {
  const [parts, setParts] = useState([
    { id: 1, name: 'Filtro de aceite', stock: 50, price: 15.99 },
    { id: 2, name: 'Pastillas de freno', stock: 30, price: 45.50 },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Catálogo de Piezas</h1>
      <div className="mb-4 flex justify-between items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar piezas..."
            className="pl-10 pr-4 py-2 border rounded-lg"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus size={20} className="mr-2" />
          Nueva Pieza
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Nombre</th>
              <th className="py-2 px-4 text-left">Stock</th>
              <th className="py-2 px-4 text-left">Precio</th>
              <th className="py-2 px-4 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {parts.map((part) => (
              <tr key={part.id} className="border-b">
                <td className="py-2 px-4">{part.name}</td>
                <td className="py-2 px-4">{part.stock}</td>
                <td className="py-2 px-4">${part.price.toFixed(2)}</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500 mr-2">
                    <Edit size={20} />
                  </button>
                  <button className="text-red-500">
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Parts;