"use client";

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function InventarioPage() {
  const router = useRouter();
  const [mensaje, setMensaje] = useState('');

  const [formData, setFormData] = useState({
    nombre: '',
    ingrediente: '',
    stock: '',
    codigo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Por el momento, solo simulamos el éxito para QA
    setMensaje(`El medicamento ${formData.nombre} (${formData.codigo}) fue registrado con éxito.`);
    
    // Limpiamos el formulario
    setFormData({ nombre: '', ingrediente: '', stock: '', codigo: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-800">Registrar Medicamento</h1>
          <button 
            onClick={() => router.push('/dashboard')}
            data-testid="btn-volver-dashboard"
            className="text-slate-500 hover:text-slate-800 transition-colors font-medium"
          >
            ← Volver
          </button>
        </div>

        {mensaje && (
          <div 
            data-testid="mensaje-exito-inventario"
            className="mb-6 bg-emerald-50 text-emerald-700 p-4 rounded-lg border border-emerald-200 font-medium"
          >
            {mensaje}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
              <input
                type="text"
                name="nombre"
                data-testid="input-nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-4 py-2 text-slate-900 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Código</label>
              <input
                type="text"
                name="codigo"
                data-testid="input-codigo"
                value={formData.codigo}
                onChange={handleChange}
                className="w-full px-4 py-2 text-slate-900 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Ingrediente Activo</label>
              <input
                type="text"
                name="ingrediente"
                data-testid="input-ingrediente"
                value={formData.ingrediente}
                onChange={handleChange}
                className="w-full px-4 py-2 text-slate-900 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Stock Inicial</label>
              <input
                type="number"
                name="stock"
                min="0"
                data-testid="input-stock"
                value={formData.stock}
                onChange={handleChange}
                className="w-full px-4 py-2 text-slate-900 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>

          </div>

          <button
            type="submit"
            data-testid="btn-guardar-medicamento"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-lg transition-colors mt-4"
          >
            Guardar Medicamento
          </button>
        </form>

      </div>
    </div>
  );
}