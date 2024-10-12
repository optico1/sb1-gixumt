import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';

const Services: React.FC = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'Cambio de aceite', duration: '30 min', price: 50.00 },
    { id: 2, name: 'Alineación y balanceo', duration: '1 hora', price: 80.00 },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Catálogo de Servicios</h1>
      <div className="mb-4 flex justify-between items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar servicios..."
            className="pl-10 pr-4 py-2 border rounded-lg"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus size={20} className="mr-2" />
          Nuevo Servicio
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Nombre</th>
              <th className="py-2 px-4 text-left">Duración</th>
              <th className="py-2 px-4 text-left">Precio</th>
              <th className="py-2 px-4 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="border-b">
                <td className="py-2 px-4">{service.name}</td>
                <td className="py-2 px-4">{service.duration}</td>
                <td className="py-2 px-4">${service.price.toFixed(2)}</td>
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

export default Services;