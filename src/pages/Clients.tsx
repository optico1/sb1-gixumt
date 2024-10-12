import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';

const Clients: React.FC = () => {
  const [clients, setClients] = useState([
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com', phone: '555-1234' },
    { id: 2, name: 'María García', email: 'maria@example.com', phone: '555-5678' },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gestión de Clientes</h1>
      <div className="mb-4 flex justify-between items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar clientes..."
            className="pl-10 pr-4 py-2 border rounded-lg"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus size={20} className="mr-2" />
          Nuevo Cliente
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Nombre</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Teléfono</th>
              <th className="py-2 px-4 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className="border-b">
                <td className="py-2 px-4">{client.name}</td>
                <td className="py-2 px-4">{client.email}</td>
                <td className="py-2 px-4">{client.phone}</td>
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

export default Clients;