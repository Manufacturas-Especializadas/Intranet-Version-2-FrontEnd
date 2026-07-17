import { useMemo, useState, type ElementType } from "react";
import {
  BadgeCheck,
  Camera,
  Copy,
  Database,
  Edit3,
  Eye,
  EyeOff,
  FileText,
  Filter,
  HardDrive,
  KeyRound,
  Laptop,
  LockKeyhole,
  Mail,
  Network,
  Phone,
  Plus,
  Printer,
  RotateCcw,
  Save,
  Search,
  Server,
  ShieldCheck,
  Trash2,
  Wifi,
  X,
} from "lucide-react";
import {
  initialSistemasRows,
  sistemasCategories,
  type SistemasCategory,
  type SistemasRow,
} from "./sistemasDocumentationData";

const STORAGE_KEY = "mesa:sistemas-documentation";

const createId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random()}`;
};

const createEmptyRow = (category: SistemasCategory): SistemasRow => ({
  id: createId(),
  category,
  nombre: "",
  tipo: "",
  host: "",
  usuario: "",
  password: "",
  url: "",
  notas: "",
});

const getInitialRows = () => {
  try {
    const savedRows = window.localStorage.getItem(STORAGE_KEY);

    if (!savedRows) {
      return initialSistemasRows;
    }

    return JSON.parse(savedRows) as SistemasRow[];
  } catch {
    return initialSistemasRows;
  }
};

const copyToClipboard = async (value: string) => {
  if (!value) return;

  try {
    await navigator.clipboard.writeText(value);
  } catch {
    console.warn("No se pudo copiar al portapapeles");
  }
};

const categoryIconMap: Record<string, ElementType> = {
  Todo: FileText,
  Credenciales: KeyRound,
  Servidores: Server,
  NAS: Database,
  "Red / WiFi": Wifi,
  Red: Network,
  Correo: Mail,
  VPN: Network,
  Impresoras: Printer,
  Telefonía: Phone,
  Seguridad: ShieldCheck,
  Procedimientos: FileText,
  Licencias: BadgeCheck,
  Equipos: Laptop,
  Cámaras: Camera,
  Camaras: Camera,
  Otros: HardDrive,
};

const getCategoryIcon = (category: string) => {
  return categoryIconMap[category] ?? FileText;
};

export const Sistemas = () => {
  const [rows, setRows] = useState<SistemasRow[]>(getInitialRows);
  const [selectedCategory, setSelectedCategory] =
    useState<SistemasCategory | "Todo">("Todo");
  const [searchQuery, setSearchQuery] = useState("");
  const [editing, setEditing] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);

  const filteredRows = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return rows.filter((row) => {
      const matchesCategory =
        selectedCategory === "Todo" || row.category === selectedCategory;

      const matchesSearch =
        !normalizedQuery ||
        [
          row.category,
          row.nombre,
          row.tipo,
          row.host,
          row.usuario,
          row.url,
          row.notas,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [rows, selectedCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    return sistemasCategories.reduce(
      (accumulator, category) => {
        accumulator[category] = rows.filter(
          (row) => row.category === category
        ).length;

        return accumulator;
      },
      {} as Record<SistemasCategory, number>
    );
  }, [rows]);

  const totals = useMemo(() => {
    return {
      total: rows.length,
      filtered: filteredRows.length,
      sensibles: rows.filter((row) => row.password.trim().length > 0).length,
      categorias: sistemasCategories.length,
    };
  }, [rows, filteredRows.length]);

  const updateRow = (
    id: string,
    field: keyof SistemasRow,
    value: string
  ) => {
    setRows((currentRows) =>
      currentRows.map((row) =>
        row.id === id
          ? {
              ...row,
              [field]: value,
            }
          : row
      )
    );
  };

  const addRow = () => {
    const category =
      selectedCategory === "Todo"
        ? sistemasCategories[0] ?? ("Credenciales" as SistemasCategory)
        : selectedCategory;

    setRows((currentRows) => [createEmptyRow(category), ...currentRows]);
    setEditing(true);
  };

  const deleteRow = (id: string) => {
    setRows((currentRows) => currentRows.filter((row) => row.id !== id));
  };

  const saveRows = () => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(rows));
    setEditing(false);
  };

  const resetRows = () => {
    setRows(initialSistemasRows);
    window.localStorage.removeItem(STORAGE_KEY);
    setEditing(false);
  };

  return (
    <div className="mx-auto w-full max-w-[1720px] px-4 pb-12 pt-6 sm:px-5 lg:px-6">
      <section className="relative overflow-hidden rounded-[34px] border border-blue-100 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white to-sky-50/90" />
        <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-28 h-80 w-80 rounded-full bg-cyan-200/35 blur-3xl" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,51,160,0.07)_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.13]"
        />

        <div className="relative z-10 p-5 sm:p-6">
          <div className="mb-6 overflow-hidden rounded-[30px] bg-gradient-to-br from-[#0033a0] via-[#005bea] to-[#1685df] p-6 text-white shadow-[0_18px_44px_rgba(0,51,160,0.26)]">
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <div className="h-full w-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:24px_24px]" />
            </div>

            <div className="relative flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.24em] text-blue-100 backdrop-blur-md">
                  <ShieldCheck className="h-4 w-4" strokeWidth={2.2} />
                  Área interna de Sistemas
                </div>

                <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl">
                  Documentación y gestión de Sistemas
                </h1>

                <p className="mt-3 max-w-4xl text-sm leading-6 text-blue-50/90">
                  Centro editable para administrar accesos, servidores, equipos,
                  impresoras, cámaras, red, NAS, correo, licencias, telefonía,
                  procedimientos y soporte técnico interno.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 xl:min-w-[520px]">
                <article className="rounded-2xl border border-white/15 bg-white/12 p-3 backdrop-blur-md">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-100">
                    Registros
                  </p>
                  <p className="mt-1 text-2xl font-black">{totals.total}</p>
                </article>

                <article className="rounded-2xl border border-white/15 bg-white/12 p-3 backdrop-blur-md">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-100">
                    Vista
                  </p>
                  <p className="mt-1 text-2xl font-black">
                    {totals.filtered}
                  </p>
                </article>

                <article className="rounded-2xl border border-white/15 bg-white/12 p-3 backdrop-blur-md">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-100">
                    Claves
                  </p>
                  <p className="mt-1 text-2xl font-black">
                    {totals.sensibles}
                  </p>
                </article>

                <article className="rounded-2xl border border-white/15 bg-white/12 p-3 backdrop-blur-md">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-100">
                    Categorías
                  </p>
                  <p className="mt-1 text-2xl font-black">
                    {totals.categorias}
                  </p>
                </article>
              </div>
            </div>
          </div>

          <div className="grid items-stretch gap-5 xl:grid-cols-[290px_minmax(0,1fr)]">
            <aside className="h-full xl:sticky xl:top-24">
              <div className="flex h-full min-h-[560px] flex-col rounded-[28px] border border-blue-100 bg-white/85 p-4 shadow-sm backdrop-blur-sm">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-600">
                      Módulos
                    </p>

                    <h2 className="mt-1 text-lg font-black text-[#123f7a]">
                      Categorías
                    </h2>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-[#0033a0] ring-1 ring-blue-100">
                    <Filter className="h-5 w-5" strokeWidth={2} />
                  </div>
                </div>

                <div className="custom-scrollbar min-h-0 flex-1 space-y-2 overflow-y-auto pr-1">
                  {(["Todo", ...sistemasCategories] as Array<
                    SistemasCategory | "Todo"
                  >).map((category) => {
                    const Icon = getCategoryIcon(category);
                    const active = selectedCategory === category;
                    const count =
                      category === "Todo"
                        ? rows.length
                        : categoryCounts[category] ?? 0;

                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setSelectedCategory(category)}
                        className={`
                          group flex w-full items-center gap-3
                          rounded-2xl border p-2.5 text-left
                          transition-all duration-300
                          ${
                            active
                              ? "border-blue-300 bg-gradient-to-r from-[#0033a0] to-[#1685df] text-white shadow-[0_10px_24px_rgba(0,51,160,0.22)]"
                              : "border-transparent bg-white/70 text-slate-600 hover:-translate-y-0.5 hover:border-blue-100 hover:bg-blue-50/70 hover:text-[#0033a0]"
                          }
                        `}
                      >
                        <div
                          className={`
                            flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition
                            ${
                              active
                                ? "bg-white/15 text-white"
                                : "bg-blue-50 text-[#0033a0] group-hover:bg-[#0033a0] group-hover:text-white"
                            }
                          `}
                        >
                          <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-black">
                            {category}
                          </p>

                          <p
                            className={`text-[11px] ${
                              active ? "text-blue-100" : "text-slate-400"
                            }`}
                          >
                            {count} registros
                          </p>
                        </div>

                        <span
                          className={`
                            shrink-0 rounded-full px-2 py-1 text-[10px] font-black
                            ${
                              active
                                ? "bg-white/15 text-white"
                                : "bg-slate-100 text-slate-500"
                            }
                          `}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            <main className="min-w-0 space-y-4">
              <div className="rounded-[28px] border border-blue-100 bg-white/90 p-4 shadow-sm backdrop-blur-sm">
                <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-600">
                      Vista actual
                    </p>

                    <h2 className="mt-1 text-2xl font-black text-[#123f7a]">
                      {selectedCategory === "Todo"
                        ? "Toda la documentación"
                        : selectedCategory}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      {filteredRows.length} registros visibles
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 lg:flex-row">
                    <div className="relative">
                      <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                      <input
                        value={searchQuery}
                        onChange={(event) =>
                          setSearchQuery(event.target.value)
                        }
                        placeholder="Buscar por nombre, IP, usuario, nota..."
                        className="
                          h-11 w-full rounded-2xl border border-slate-200
                          bg-white pl-10 pr-4 text-sm text-slate-700
                          outline-none transition
                          focus:border-blue-300 focus:ring-2 focus:ring-blue-100
                          lg:w-[360px]
                        "
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => setEditing((current) => !current)}
                      className="
                        inline-flex h-11 items-center justify-center gap-2 rounded-2xl
                        border border-blue-100 bg-white px-4
                        text-xs font-black text-[#0033a0]
                        shadow-sm transition hover:border-blue-300 hover:bg-blue-50
                      "
                    >
                      <Edit3 className="h-4 w-4" />
                      {editing ? "Bloquear" : "Editar"}
                    </button>

                    <button
                      type="button"
                      onClick={saveRows}
                      className="
                        inline-flex h-11 items-center justify-center gap-2 rounded-2xl
                        bg-gradient-to-r from-[#0033a0] to-[#1685df]
                        px-4 text-xs font-black text-white
                        shadow-[0_8px_20px_rgba(0,51,160,0.22)]
                        transition hover:-translate-y-0.5 hover:shadow-md
                      "
                    >
                      <Save className="h-4 w-4" />
                      Guardar
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setShowPasswords((current) => !current)
                    }
                    className="
                      inline-flex items-center gap-2 rounded-2xl
                      border border-amber-200 bg-amber-50 px-4 py-2.5
                      text-xs font-black text-amber-700 transition
                      hover:bg-amber-100
                    "
                  >
                    {showPasswords ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                    {showPasswords ? "Ocultar claves" : "Mostrar claves"}
                  </button>

                  <button
                    type="button"
                    onClick={addRow}
                    className="
                      inline-flex items-center gap-2 rounded-2xl
                      border border-blue-100 bg-blue-50 px-4 py-2.5
                      text-xs font-black text-[#0033a0] transition
                      hover:border-blue-300 hover:bg-blue-100
                    "
                  >
                    <Plus className="h-4 w-4" />
                    Nuevo registro
                  </button>

                  <button
                    type="button"
                    onClick={resetRows}
                    className="
                      inline-flex items-center gap-2 rounded-2xl
                      border border-slate-200 bg-white px-4 py-2.5
                      text-xs font-black text-slate-500 transition
                      hover:border-red-200 hover:bg-red-50 hover:text-red-600
                    "
                  >
                    <RotateCcw className="h-4 w-4" />
                    Restaurar base
                  </button>

                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="
                        inline-flex items-center gap-2 rounded-2xl
                        border border-slate-200 bg-white px-4 py-2.5
                        text-xs font-black text-slate-500 transition
                        hover:bg-slate-50
                      "
                    >
                      <X className="h-4 w-4" />
                      Limpiar búsqueda
                    </button>
                  )}
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-blue-100 bg-white shadow-sm">
                <div className="flex items-center justify-between gap-3 border-b border-blue-100 bg-gradient-to-r from-blue-50 via-white to-sky-50 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0033a0] text-white shadow-sm">
                      <FileText className="h-5 w-5" strokeWidth={2} />
                    </div>

                    <div>
                      <p className="text-sm font-black text-[#123f7a]">
                        Tabla de documentación
                      </p>

                      <p className="text-xs text-slate-500">
                        Edita, copia y administra registros internos.
                      </p>
                    </div>
                  </div>

                  <div className="hidden items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-amber-700 sm:inline-flex">
                    <LockKeyhole className="h-3.5 w-3.5" />
                    Sensible
                  </div>
                </div>

                <div className="max-h-[560px] overflow-auto">
                  <table className="w-max min-w-[1080px] table-fixed border-collapse text-left">
                    <colgroup>
                      <col className="w-[125px]" />
                      <col className="w-[155px]" />
                      <col className="w-[165px]" />
                      <col className="w-[135px]" />
                      <col className="w-[175px]" />
                      <col className="w-[165px]" />
                      <col className="w-[210px]" />
                      <col className="w-[260px]" />
                      <col className="w-[95px]" />
                    </colgroup>

                    <thead className="sticky top-0 z-10 bg-slate-50 text-[11px] uppercase tracking-[0.12em] text-slate-500 shadow-sm">
                      <tr>
                        <th className="border-b border-slate-200 px-3 py-3">
                          Categoría
                        </th>
                        <th className="border-b border-slate-200 px-3 py-3">
                          Nombre
                        </th>
                        <th className="border-b border-slate-200 px-3 py-3">
                          Tipo
                        </th>
                        <th className="border-b border-slate-200 px-3 py-3">
                          IP / Host
                        </th>
                        <th className="border-b border-slate-200 px-3 py-3">
                          Usuario
                        </th>
                        <th className="border-b border-slate-200 px-3 py-3">
                          Contraseña
                        </th>
                        <th className="border-b border-slate-200 px-3 py-3">
                          URL
                        </th>
                        <th className="border-b border-slate-200 px-3 py-3">
                          Notas
                        </th>
                        <th className="border-b border-slate-200 px-3 py-3 text-center">
                          Acciones
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100 text-sm">
                      {filteredRows.map((row) => (
                        <tr
                          key={row.id}
                          className="h-[64px] transition hover:bg-blue-50/50"
                        >
                          <td className="px-3 py-2 align-middle">
                            {editing ? (
                              <select
                                value={row.category}
                                onChange={(event) =>
                                  updateRow(
                                    row.id,
                                    "category",
                                    event.target.value
                                  )
                                }
                                className="w-[110px] rounded-xl border border-slate-200 bg-white px-2 py-2 text-[11px] font-bold text-slate-700 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                              >
                                {sistemasCategories.map((category) => (
                                  <option key={category}>{category}</option>
                                ))}
                              </select>
                            ) : (
                              <span className="inline-flex max-w-[110px] truncate rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[10px] font-black text-[#0033a0]">
                                {row.category}
                              </span>
                            )}
                          </td>

                          <td className="px-3 py-2 align-middle">
                            {editing ? (
                              <input
                                value={row.nombre}
                                onChange={(event) =>
                                  updateRow(
                                    row.id,
                                    "nombre",
                                    event.target.value
                                  )
                                }
                                className="w-[145px] rounded-xl border border-slate-200 px-2 py-2 text-sm outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                              />
                            ) : (
                              <p className="line-clamp-2 font-black leading-5 text-[#123f7a]">
                                {row.nombre || "Sin nombre"}
                              </p>
                            )}
                          </td>

                          <td className="px-3 py-2 align-middle">
                            {editing ? (
                              <input
                                value={row.tipo}
                                onChange={(event) =>
                                  updateRow(
                                    row.id,
                                    "tipo",
                                    event.target.value
                                  )
                                }
                                className="w-[155px] rounded-xl border border-slate-200 px-2 py-2 text-sm outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                              />
                            ) : (
                              <p className="line-clamp-2 text-slate-600">
                                {row.tipo || "-"}
                              </p>
                            )}
                          </td>

                          <td className="px-3 py-2 align-middle">
                            {editing ? (
                              <input
                                value={row.host}
                                onChange={(event) =>
                                  updateRow(
                                    row.id,
                                    "host",
                                    event.target.value
                                  )
                                }
                                className="w-[125px] rounded-xl border border-slate-200 px-2 py-2 font-mono text-xs outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                              />
                            ) : (
                              <button
                                type="button"
                                onClick={() => copyToClipboard(row.host)}
                                className="rounded-lg px-1 font-mono text-xs font-bold text-slate-600 transition hover:bg-blue-50 hover:text-[#0033a0]"
                              >
                                {row.host || "-"}
                              </button>
                            )}
                          </td>

                          <td className="px-3 py-2 align-middle">
                            {editing ? (
                              <input
                                value={row.usuario}
                                onChange={(event) =>
                                  updateRow(
                                    row.id,
                                    "usuario",
                                    event.target.value
                                  )
                                }
                                className="w-[165px] rounded-xl border border-slate-200 px-2 py-2 font-mono text-xs outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                              />
                            ) : (
                              <button
                                type="button"
                                onClick={() =>
                                  copyToClipboard(row.usuario)
                                }
                                className="max-w-[165px] truncate rounded-lg px-1 font-mono text-xs font-bold text-slate-600 transition hover:bg-blue-50 hover:text-[#0033a0]"
                              >
                                {row.usuario || "-"}
                              </button>
                            )}
                          </td>

                          <td className="px-3 py-2 align-middle">
                            {editing ? (
                              <input
                                value={row.password}
                                onChange={(event) =>
                                  updateRow(
                                    row.id,
                                    "password",
                                    event.target.value
                                  )
                                }
                                className="w-[155px] rounded-xl border border-amber-200 bg-amber-50/50 px-2 py-2 font-mono text-xs outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-100"
                              />
                            ) : (
                              <button
                                type="button"
                                onClick={() =>
                                  copyToClipboard(row.password)
                                }
                                className="max-w-[155px] truncate rounded-lg px-1 font-mono text-xs font-bold text-amber-700 transition hover:bg-amber-50 hover:text-amber-800"
                              >
                                {row.password
                                  ? showPasswords
                                    ? row.password
                                    : "••••••••••"
                                  : "-"}
                              </button>
                            )}
                          </td>

                          <td className="px-3 py-2 align-middle">
                            {editing ? (
                              <input
                                value={row.url}
                                onChange={(event) =>
                                  updateRow(
                                    row.id,
                                    "url",
                                    event.target.value
                                  )
                                }
                                className="w-[200px] rounded-xl border border-slate-200 px-2 py-2 text-xs outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                              />
                            ) : row.url ? (
                              <a
                                href={row.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="line-clamp-1 max-w-[200px] text-xs font-bold text-blue-600 hover:text-blue-800"
                              >
                                {row.url}
                              </a>
                            ) : (
                              <span className="text-slate-400">-</span>
                            )}
                          </td>

                          <td className="px-3 py-2 align-middle">
                            {editing ? (
                              <textarea
                                value={row.notas}
                                onChange={(event) =>
                                  updateRow(
                                    row.id,
                                    "notas",
                                    event.target.value
                                  )
                                }
                                className="h-[42px] w-[250px] resize-none rounded-xl border border-slate-200 px-2 py-2 text-xs leading-5 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                              />
                            ) : (
                              <p className="line-clamp-2 max-w-[250px] text-xs leading-5 text-slate-600">
                                {row.notas || "-"}
                              </p>
                            )}
                          </td>

                          <td className="px-3 py-2 text-center align-middle">
                            <div className="flex items-center justify-center gap-1.5">
                              <button
                                type="button"
                                onClick={() =>
                                  copyToClipboard(
                                    [
                                      row.nombre,
                                      row.host,
                                      row.usuario,
                                      row.password,
                                      row.url,
                                      row.notas,
                                    ]
                                      .filter(Boolean)
                                      .join("\n")
                                  )
                                }
                                className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-[#0033a0] transition hover:bg-blue-100"
                                title="Copiar registro"
                              >
                                <Copy className="h-4 w-4" />
                              </button>

                              {editing && (
                                <button
                                  type="button"
                                  onClick={() => deleteRow(row.id)}
                                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-600 transition hover:bg-red-100"
                                  title="Eliminar registro"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}

                      {filteredRows.length === 0 && (
                        <tr>
                          <td colSpan={9} className="px-4 py-16 text-center">
                            <Search className="mx-auto mb-3 h-8 w-8 text-blue-500" />

                            <p className="text-sm font-black text-[#123f7a]">
                              No se encontró documentación
                            </p>

                            <p className="mt-1 text-xs text-slate-500">
                              Intenta con otra búsqueda o categoría.
                            </p>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};