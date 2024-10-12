import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2, CheckSquare } from 'lucide-react';

const VehicleInventory: React.FC = () => {
  const [vehicles, setVehicles] = useState([
    { id: 1, plate: 'ABC123', make: 'Toyota', model: 'Corolla', year: 2020 },
    { id: 2, plate: 'XYZ789', make: 'Honda', model: 'Civic', year: 2019 },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Inventario de Vehículos</h1>
      <div className="mb-4 flex justify-between items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar vehículos..."
            className="pl-10 pr-4 py-2 border rounded-lg"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus size={20} className="mr-2" />
          Nuevo Vehículo
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Placa</th>
              <th className="py-2 px-4 text-left">Marca</th>
              <th className="py-2 px-4 text-left">Modelo</th>
              <th className="py-2 px-4 text-left">Año</th>
              <th className="py-2 px-4 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id} className="border-b">
                <td className="py-2 px-4">{vehicle.plate}</td>
                <td className="py-2 px-4">{vehicle.make}</td>
                <td className="py-2 px-4">{vehicle.model}</td>
                <td className="py-2 px-4">{vehicle.year}</td>
                <td className="py-2 px-4">
                  <button className="text-green-500 mr-2">
                    <CheckSquare size={20} />
                  </button>
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

export default VehicleInventory;