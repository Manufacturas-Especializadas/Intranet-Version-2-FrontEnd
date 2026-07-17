export type SistemasCategory =
  | "Credenciales"
  | "Servidores"
  | "NAS"
  | "Red / WiFi"
  | "Correo"
  | "VPN"
  | "Impresoras"
  | "Telefonía"
  | "Seguridad"
  | "Procedimientos"
  | "Licencias"
  | "Otros";

export type SistemasRow = {
  id: string;
  category: SistemasCategory;
  nombre: string;
  tipo: string;
  host: string;
  usuario: string;
  password: string;
  url: string;
  notas: string;
};

export const sistemasCategories: SistemasCategory[] = [
  "Credenciales",
  "Servidores",
  "NAS",
  "Red / WiFi",
  "Correo",
  "VPN",
  "Impresoras",
  "Telefonía",
  "Seguridad",
  "Procedimientos",
  "Licencias",
  "Otros",
];

export const initialSistemasRows: SistemasRow[] = [
  {
    id: "srv-appsrvmesa",
    category: "Servidores",
    nombre: "APPSRVMESA",
    tipo: "Servidor",
    host: "192.168.25.130",
    usuario: "APPSVRMESA\\Administrator",
    password: "",
    url: "",
    notas: "Servidor de aplicaciones / FUTURE.",
  },
  {
    id: "srv-epicor-training",
    category: "Servidores",
    nombre: "EPICOR TRAINING",
    tipo: "Servidor",
    host: "192.168.25.84",
    usuario: "Administrator",
    password: "",
    url: "",
    notas: "Ambiente de entrenamiento Epicor.",
  },
  {
    id: "srv-sworks",
    category: "Servidores",
    nombre: "SWORKS",
    tipo: "Servidor",
    host: "192.168.25.44",
    usuario: "Administrator",
    password: "",
    url: "",
    notas: "Servidor relacionado a SolidWorks.",
  },
  {
    id: "srv-dominio",
    category: "Servidores",
    nombre: "Servidor Dominio",
    tipo: "Active Directory",
    host: "192.168.25.4",
    usuario: "Administrator",
    password: "",
    url: "",
    notas: "Servidor de dominio.",
  },
  {
    id: "nas-synology",
    category: "NAS",
    nombre: "NAS Synology",
    tipo: "NAS",
    host: "192.168.25.54",
    usuario: "Synadmin",
    password: "",
    url: "",
    notas: "Carpetas compartidas y usuarios.",
  },
  {
    id: "xencenter",
    category: "Servidores",
    nombre: "XenCenter",
    tipo: "Virtualización",
    host: "192.168.25.8",
    usuario: "root",
    password: "",
    url: "",
    notas: "Consola XenCenter / Citrix.",
  },
  {
    id: "vmware-console",
    category: "Servidores",
    nombre: "Consola VMware",
    tipo: "Virtualización",
    host: "192.168.25.5",
    usuario: "root",
    password: "",
    url: "",
    notas: "Consola de virtualización.",
  },
  {
    id: "conmutador",
    category: "Telefonía",
    nombre: "Conmutador",
    tipo: "Panasonic / Web Maintenance Console",
    host: "192.168.26.5",
    usuario: "INSTALLER",
    password: "",
    url: "",
    notas: "Consola de telefonía.",
  },
  {
    id: "wifi-mesacorp",
    category: "Red / WiFi",
    nombre: "MesaCorp",
    tipo: "WiFi",
    host: "",
    usuario: "",
    password: "",
    url: "",
    notas: "SSID corporativo.",
  },
  {
    id: "wifi-opermesa",
    category: "Red / WiFi",
    nombre: "OperMesa",
    tipo: "WiFi",
    host: "",
    usuario: "",
    password: "",
    url: "",
    notas: "SSID operativo.",
  },
  {
    id: "wifi-salas",
    category: "Red / WiFi",
    nombre: "SalasJuntas",
    tipo: "WiFi",
    host: "",
    usuario: "",
    password: "",
    url: "",
    notas: "SSID salas de juntas.",
  },
  {
    id: "vpn-forticlient",
    category: "VPN",
    nombre: "VPN MESA",
    tipo: "FortiClient",
    host: "",
    usuario: "",
    password: "",
    url: "",
    notas: "Configurar gateway, puerto y usuario autorizado.",
  },
  {
    id: "bitdefender",
    category: "Seguridad",
    nombre: "Bitdefender GravityZone",
    tipo: "Antivirus / Endpoint Security",
    host: "",
    usuario: "",
    password: "",
    url: "https://gravityzone.bitdefender.com/",
    notas: "Consola de administración de endpoints.",
  },
  {
    id: "mail-mesa",
    category: "Correo",
    nombre: "Mail MESA",
    tipo: "Correo / Admin",
    host: "",
    usuario: "",
    password: "",
    url: "https://mail.mesa.ms:901/",
    notas: "Administración de correo.",
  },
  {
    id: "imp-oficinas",
    category: "Impresoras",
    nombre: "Oficinas Generales",
    tipo: "Impresora Ecosys M3145",
    host: "192.168.25.200",
    usuario: "",
    password: "",
    url: "",
    notas: "Impresora oficinas generales.",
  },
  {
    id: "imp-aluminio",
    category: "Impresoras",
    nombre: "Aluminio",
    tipo: "Impresora Ecosys M2040dn",
    host: "192.168.25.216",
    usuario: "",
    password: "",
    url: "",
    notas: "Impresora área aluminio.",
  },
  {
    id: "imp-laboratorio",
    category: "Impresoras",
    nombre: "Laboratorio",
    tipo: "Impresora Ecosys M2040dn",
    host: "192.168.25.65",
    usuario: "",
    password: "",
    url: "",
    notas: "Impresora laboratorio.",
  },
  {
    id: "proc-solidworks",
    category: "Procedimientos",
    nombre: "Instalación SolidWorks",
    tipo: "Procedimiento",
    host: "",
    usuario: "",
    password: "",
    url: "",
    notas: "Documentar instalación, servidor de licencia y puerto.",
  },
  {
    id: "proc-nomina-compaq",
    category: "Procedimientos",
    nombre: "Recibos de nómina CONTPAQ",
    tipo: "Procedimiento",
    host: "",
    usuario: "",
    password: "",
    url: "",
    notas: "Ruta de reportes y solución cuando no imprime recibos.",
  },
];