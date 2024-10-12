import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Cog, Package, Wrench, Clipboard, FileText, BarChart2, Settings } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <BarChart2 className="mr-2" /> Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/clients" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <Users className="mr-2" /> Clientes
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/parts" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <Cog className="mr-2" /> Piezas
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/services" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <Wrench className="mr-2" /> Servicios
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/inventory" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <Package className="mr-2" /> Inventario de Vehículos
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/records" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <Clipboard className="mr-2" /> Expedientes
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/estimates" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <FileText className="mr-2" /> Presupuestos
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/exports" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <BarChart2 className="mr-2" /> Exportaciones
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/settings" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <Settings className="mr-2" /> Configuración
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;