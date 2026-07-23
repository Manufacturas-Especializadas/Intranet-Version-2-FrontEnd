export const AplicacionesHeader = () => {
  return (
    <header>
      <p
        className="
          text-[11px] font-extrabold
          uppercase tracking-[0.22em]
          text-cyan-200
        "
      >
        Herramientas corporativas
      </p>

      <h1
        className="
          mt-1 text-[34px] font-black
          leading-tight tracking-tight
          text-white
          sm:text-[38px]
        "
      >
        Aplicaciones
      </h1>

      <p
        className="
          mt-1.5 max-w-2xl
          text-sm leading-5
          text-blue-50/80
        "
      >
        Selecciona una herramienta para abrirla en una pestaña nueva.
      </p>

      <div className="mt-3 flex items-center gap-2">
        <div className="h-1 w-14 rounded-full bg-white" />
        <div className="h-1 w-5 rounded-full bg-cyan-300" />
        <div className="h-1 w-2 rounded-full bg-white/40" />
      </div>
    </header>
  );
};
