import React from 'react';
import { FileText, FileSpreadsheet } from 'lucide-react';

const Exports: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Exportaciones</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Exportar a PDF</h2>
          <p className="mb-4">Genere informes en formato PDF para imprimir o compartir fácilmente.</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center">
            <FileText size={20} className="mr-2" />
            Exportar a PDF
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Exportar a Excel</h2>
          <p className="mb-4">Exporte datos a hojas de cálculo de Excel para análisis detallados.</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center">
            <FileSpreadsheet size={20} className="mr-2" />
            Exportar a Excel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exports;