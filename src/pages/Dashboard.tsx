import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Resumen de Clientes</h2>
          <p className="text-3xl font-bold">150</p>
          <p className="text-gray-600">Clientes activos</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Servicios Pendientes</h2>
          <p className="text-3xl font-bold">12</p>
          <p className="text-gray-600">Servicios en progreso</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Ingresos del Mes</h2>
          <p className="text-3xl font-bold">$25,000</p>
          <p className="text-gray-600">Ingresos totales</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;