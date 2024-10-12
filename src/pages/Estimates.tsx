import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2, Download } from 'lucide-react';

const Estimates: React.FC = () => {
  const [estimates, setEstimates] = useState([
    { id: 1, client: 'Juan Pérez', vehicle: 'Toyota Corolla', date: '2023-03-20', total: 150.00 },
    { id: 2, client: 'María García', vehicle: 'Honda Civic', date: '2023-03-18', total: 200.00 },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Presupuestos</h1>
      <div className="mb-4 flex justify-between items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar presupuestos..."
            className="pl-10 pr-4 py-2 border rounded-lg"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus size={20} className="mr-2" />
          Nuevo Presupuesto
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Cliente</th>
              <th className="py-2 px-4 text-left">Vehículo</th>
              <th className="py-2 px-4 text-left">Fecha</th>
              <th className="py-2 px-4 text-left">Total</th>
              <th className="py-2 px-4 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {estimates.map((estimate) => (
              <tr key={estimate.id} className="border-b">
                <td className="py-2 px-4">{estimate.client}</td>
                <td className="py-2 px-4">{estimate.vehicle}</td>
                <td className="py-2 px-4">{estimate.date}</td>
                <td className="py-2 px-4">${estimate.total.toFixed(2)}</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500 mr-2">
                    <Edit size={20} />
                  </button>
                  <button className="text-green-500 mr-2">
                    <Download size={20} />
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

export default Estimates;