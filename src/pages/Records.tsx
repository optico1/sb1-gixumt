import React, { useState } from 'react';
import { Search, FileText, Download } from 'lucide-react';

const Records: React.FC = () => {
  const [records, setRecords] = useState([
    { id: 1, client: 'Juan Pérez', vehicle: 'Toyota Corolla', date: '2023-03-15', service: 'Cambio de aceite' },
    { id: 2, client: 'María García', vehicle: 'Honda Civic', date: '2023-03-10', service: 'Alineación y balanceo' },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Expedientes</h1>
      <div className="mb-4 flex justify-between items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar expedientes..."
            className="pl-10 pr-4 py-2 border rounded-lg"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Cliente</th>
              <th className="py-2 px-4 text-left">Vehículo</th>
              <th className="py-2 px-4 text-left">Fecha</th>
              <th className="py-2 px-4 text-left">Servicio</th>
              <th className="py-2 px-4 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id} className="border-b">
                <td className="py-2 px-4">{record.client}</td>
                <td className="py-2 px-4">{record.vehicle}</td>
                <td className="py-2 px-4">{record.date}</td>
                <td className="py-2 px-4">{record.service}</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500 mr-2">
                    <FileText size={20} />
                  </button>
                  <button className="text-green-500">
                    <Download size={20} />
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

export default Records;