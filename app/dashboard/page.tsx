"use client";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 font-sans">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
          Sistema de Farmacia
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row gap-8 md:gap-12">
        
        <button 
          onClick={() => console.log("Navegando a Ventas...")}
          className="group flex flex-col items-center justify-center w-64 h-64 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          data-testid="btn-ventas"
        >
          <svg className="w-24 h-24 text-white mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="text-2xl font-bold text-white tracking-wide text-center leading-tight">
            Registrar<br/>venta
          </span>
        </button>

        <button 
          onClick={() => console.log("Navegando a Inventario...")}
          className="group flex flex-col items-center justify-center w-64 h-64 bg-gradient-to-tr from-emerald-600 to-emerald-400 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          data-testid="btn-inventario"
        >
          {/* Ícono de cajas/inventario */}
          <svg className="w-24 h-24 text-white mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <span className="text-2xl font-bold text-white tracking-wide text-center leading-tight">
            Gestión de<br/>inventario
          </span>
        </button>

      </div>
    </div>
  );
}