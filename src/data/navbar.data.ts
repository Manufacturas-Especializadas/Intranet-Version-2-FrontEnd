import {
  type QuickAccessItem,
  companyApplications,
  quickAccessRegistry,
  registerRecentAccess,
} from "./accessRegistry";

export interface SearchResult extends QuickAccessItem {
  description: string;
  group: string;
  searchableText: string;
  iconBackground?: string;
}

export const currentUser = {
  firstName: "Juan",
  fullName: "Juan Pérez",
  department: "Ingeniería",
  initials: "JP",
};

export const sectionDescriptions: Record<string, string> = {
  home: "Página principal de la intranet MESA",
  noticias: "Noticias, comunicados y novedades de la empresa",
  departamento: "Información y publicaciones de mi departamento",
  aplicaciones: "Aplicaciones, sistemas y páginas corporativas",
  posteos: "Publicaciones recientes de los colaboradores",
  calendario: "Calendario anual, eventos y fechas importantes",
  directorio: "Directorio interno, extensiones, correos y teléfonos",
  cumpleanos: "Cumpleaños de los colaboradores",
  ingresos: "Nuevos ingresos y colaboradores",
  accesos: "Consulta de permisos y accesos asignados",
  perfil: "Información y configuración de mi perfil",
  sgi: "Sistema de Gestión Integral",
  documentos: "Documentos, archivos y formatos corporativos",
  compras: "Herramientas, solicitudes y procesos de compras",
  reportes: "Indicadores, informes y reportes empresariales",
  capacitacion: "Cursos, capacitaciones y material de formación",
  tickets: "Solicitudes y seguimiento de soporte técnico",
};

export const searchAliases: Record<string, string> = {
  home: "inicio principal dashboard portada",
  noticias: "noticia avisos comunicados novedades",
  departamento: "departamento área depto información",
  aplicaciones: "apps sistemas programas herramientas páginas web enlaces",
  posteos: "post publicaciones comunidad comentarios",
  calendario: "eventos fechas agenda anual organización",
  directorio: "contactos teléfonos extensiones correos personal colaboradores",
  cumpleanos: "cumpleaños festejos colaboradores",
  ingresos: "nuevos empleados altas colaboradores",
  accesos: "permisos seguridad usuarios autorizaciones",
  perfil: "usuario cuenta datos personales",
  sgi: "calidad seguridad gestión integral",
  documentos: "archivos formatos procedimientos carpetas",
  compras: "requisiciones ordenes proveedores",
  reportes: "informes indicadores estadísticas power bi",
  capacitacion: "cursos entrenamiento formación",
  tickets: "soporte sistemas ayuda incidencia",
};

export const normalizeText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

export const applicationById = new Map(
  companyApplications.map((application) => [application.id, application]),
);

export const searchableItems: SearchResult[] = quickAccessRegistry.map(
  (item) => {
    const application = applicationById.get(item.id);

    const description =
      application?.description ??
      sectionDescriptions[item.id] ??
      "Sección disponible dentro de la intranet MESA";

    const group = application?.category ?? "Intranet";

    const searchableText = normalizeText(
      [
        item.title,
        item.id,
        item.path,
        description,
        group,
        searchAliases[item.id] ?? "",
        application?.title ?? "",
        application?.shortTitle ?? "",
      ].join(" "),
    );

    return {
      ...item,
      description,
      group,
      searchableText,
      iconBackground: application?.iconBackground,
    };
  },
);

export { registerRecentAccess };
