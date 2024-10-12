import React from 'react';
import { User, Lock, Bell, Sliders } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Configuración</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <User className="mr-2" /> Perfil de Usuario
          </h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Guardar Cambios</button>
          </form>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Lock className="mr-2" /> Seguridad
          </h2>
          <form>
            <div className="mb-4">
              <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">Contraseña Actual</label>
              <input type="password" id="current-password" name="current-password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">Nueva Contraseña</label>
              <input type="password" id="new-password" name="new-password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">Cambiar Contraseña</button>
          </form>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Bell className="mr-2" /> Notificaciones
          </h2>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Recibir notificaciones por correo</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Notificaciones push</span>
            </label>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Sliders className="mr-2" /> Preferencias del Sistema
          </h2>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Modo oscuro</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Mostrar tutorial al inicio</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;