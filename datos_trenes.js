// Archivo: datos_trenes.js
// Red de trenes del Área Metropolitana de Buenos Aires (AMBA)

const RED_TRENES = {

    "MITRE": {
        color: "#0072BB",
        nombre: "Tren Mitre",
        operador: "Trenes Argentinos",
        ramal: "Tigre",
        direccion: "Tigre",
        estaciones: [
            { id: 0,  nombre: "Retiro",           bajada: "centroizqder", comb: ["BELGRANO_N", "SAN_MARTIN", "subte_C", "subte_E", "Omnibus"], salidas: ["Av. Ramos Mejía", "Av. Antártida Argentina"] },
            { id: 1,  nombre: "Palermo",           bajada: "centro",       comb: ["subte_D"],                   salidas: ["Av. Santa Fe", "Av. Juan B. Justo"] },
            { id: 2,  nombre: "Colegiales",        bajada: "normal",       comb: [],                            salidas: ["Av. Elcano", "Av. Cabildo"] },
            { id: 3,  nombre: "Ministro Carranza", bajada: "centro",       comb: ["subte_D"],                   salidas: ["Av. Cabildo", "Dorrego"] },
            { id: 4,  nombre: "Korn",              bajada: "normal",       comb: [],                            salidas: ["Av. Cabildo", "Av. Federico Lacroze"] },
            { id: 5,  nombre: "Belgrano C",        bajada: "normal",       comb: [],                            salidas: ["Av. Cabildo", "Ciudad de la Paz"] },
            { id: 6,  nombre: "Núñez",             bajada: "normal",       comb: [],                            salidas: ["Av. del Libertador", "Alberdi"] },
            { id: 7,  nombre: "Rivadavia",         bajada: "normal",       comb: [],                            salidas: ["Av. Rivadavia (Olivos)", "Italia"] },
            { id: 8,  nombre: "Olivos",            bajada: "normal",       comb: [],                            salidas: ["Av. del Libertador", "Maipú"] },
            { id: 9,  nombre: "Martinez",          bajada: "centro",       comb: [],                            salidas: ["Hipólito Yrigoyen", "Av. Mitre"] },
            { id: 10, nombre: "Anchorena",         bajada: "normal",       comb: [],                            salidas: ["Av. del Libertador", "Anchorena"] },
            { id: 11, nombre: "San Isidro",        bajada: "centro",       comb: [],                            salidas: ["Av. del Libertador", "Dean Funes"] },
            { id: 12, nombre: "Beccar",            bajada: "normal",       comb: [],                            salidas: ["Paraná", "Av. Centenario"] },
            { id: 13, nombre: "Santa Lucía",       bajada: "normal",       comb: [],                            salidas: ["Hipólito Yrigoyen", "Santa Lucía"] },
            { id: 14, nombre: "Borges",            bajada: "normal",       comb: [],                            salidas: ["Av. Bernardo de Irigoyen", "Borges"] },
            { id: 15, nombre: "Delta",             bajada: "normal",       comb: [],                            salidas: ["Pasaje Rivadavia", "Av. del Tigre"] },
            { id: 16, nombre: "Tigre",             bajada: "centroizqder", comb: ["Ferry Delta"],               salidas: ["Av. Cazón", "Fluvial"] }
        ]
    },

    "SARMIENTO": {
        color: "#00A3E0",
        nombre: "Tren Sarmiento",
        operador: "Trenes Argentinos",
        ramal: "Moreno",
        direccion: "Moreno",
        estaciones: [
            { id: 0,  nombre: "Once",                bajada: "centroizqder", comb: ["subte_A", "subte_H"],         salidas: ["Av. Rivadavia", "Av. Pueyrredón"] },
            { id: 1,  nombre: "Caballito",            bajada: "normal",       comb: [],                            salidas: ["Av. Rivadavia", "Av. J. B. Alberdi"] },
            { id: 2,  nombre: "Flores",               bajada: "normal",       comb: [],                            salidas: ["Av. Rivadavia", "Pte. Illia"] },
            { id: 3,  nombre: "Floresta",             bajada: "normal",       comb: [],                            salidas: ["Av. Rivadavia", "Artigas"] },
            { id: 4,  nombre: "Villa Luro",           bajada: "normal",       comb: [],                            salidas: ["Av. Rivadavia", "Cruz"] },
            { id: 5,  nombre: "Liniers",              bajada: "normal",       comb: [],                            salidas: ["Av. Rivadavia", "Av. Crovara"] },
            { id: 6,  nombre: "Padua",                bajada: "normal",       comb: [],                            salidas: ["Av. Rivadavia", "Padua"] },
            { id: 7,  nombre: "Merlo",                bajada: "centro",       comb: [],                            salidas: ["Av. del Valle", "Av. Libertad"] },
            { id: 8,  nombre: "Paso del Rey",         bajada: "normal",       comb: [],                            salidas: ["Av. Presidente Perón", "Bolívar"] },
            { id: 9,  nombre: "Marinos del Crucero General Belgrano", bajada: "normal", comb: [], salidas: ["Av. Constitución"] },
            { id: 10, nombre: "Moreno",               bajada: "centroizqder", comb: [],                            salidas: ["Av. Hipólito Yrigoyen", "Av. Gaona"] }
        ]
    },

    "ROCA": {
        color: "#0055A5",
        nombre: "Tren Roca",
        operador: "Trenes Argentinos",
        ramal: "La Plata",
        direccion: "La Plata",
        estaciones: [
            { id: 0,  nombre: "Constitución",         bajada: "centroizqder", comb: ["subte_C"],                   salidas: ["Estación Constitución", "Lima"] },
            { id: 1,  nombre: "Gerli",                bajada: "normal",       comb: [],                            salidas: ["Av. Meeks", "Av. Lacarra"] },
            { id: 2,  nombre: "Lanús",                bajada: "normal",       comb: [],                            salidas: ["Av. Hipólito Yrigoyen", "Av. 25 de Mayo"] },
            { id: 3,  nombre: "Remedios de Escalada", bajada: "centro",       comb: [],                            salidas: ["Av. Remedios de Escalada"] },
            { id: 4,  nombre: "Banfield",             bajada: "normal",       comb: [],                            salidas: ["Av. Rivadavia", "Av. Mitre"] },
            { id: 5,  nombre: "Lomas de Zamora",      bajada: "centro",       comb: [],                            salidas: ["Av. Hipólito Yrigoyen", "Manuel Castro"] },
            { id: 6,  nombre: "Temperley",            bajada: "centro",       comb: ["ROCA_EZEIZA"],               salidas: ["Av. Almafuerte", "Spiro"] },
            { id: 7,  nombre: "Turdera",              bajada: "normal",       comb: [],                            salidas: ["Pte. Perón", "Quintana"] },
            { id: 8,  nombre: "Claypole",             bajada: "normal",       comb: [],                            salidas: ["Av. Rivadavia", "Salta"] },
            { id: 9,  nombre: "Ardén",                bajada: "normal",       comb: [],                            salidas: ["Caamaño", "Brandsen"] },
            { id: 10, nombre: "Varela",               bajada: "centro",       comb: [],                            salidas: ["Av. Hipólito Yrigoyen", "Av. 9 de Julio"] },
            { id: 11, nombre: "Hudson",               bajada: "normal",       comb: [],                            salidas: ["Av. Rivadavia (Hudson)"] },
            { id: 12, nombre: "Villa Elisa",          bajada: "normal",       comb: [],                            salidas: ["Av. 44", "Av. 7"] },
            { id: 13, nombre: "City Bell",            bajada: "normal",       comb: [],                            salidas: ["Av. 19", "Av. 7"] },
            { id: 14, nombre: "Gonnet",               bajada: "normal",       comb: [],                            salidas: ["Av. 19", "Calle 480"] },
            { id: 15, nombre: "La Plata",             bajada: "centroizqder", comb: ["BUS Interurbano"],           salidas: ["Av. 1", "Av. 44"] }
        ]
    },

    "SAN_MARTIN": {
        color: "#00843D",
        nombre: "Tren San Martín",
        operador: "Trenes Argentinos",
        ramal: "Palermo - Morón",
        direccion: "Palermo",
        estaciones: [
            { id: 0,  nombre: "Palermo",              bajada: "centroizqder", comb: ["subte_D"],                   salidas: ["Av. Santa Fe", "Av. Juan B. Justo"] },
            { id: 1,  nombre: "Villa del Parque",     bajada: "normal",       comb: [],                            salidas: ["Av. de los Incas", "Bahía Blanca"] },
            { id: 2,  nombre: "Villa Devoto",         bajada: "normal",       comb: [],                            salidas: ["Francisco Beiró", "Pte. Roca"] },
            { id: 3,  nombre: "Villa del Parque",     bajada: "normal",       comb: [],                            salidas: ["Av. Segurola", "Varela"] },
            { id: 4,  nombre: "Ciudadela",            bajada: "normal",       comb: [],                            salidas: ["Av. San Martín", "Av. Rivadavia"] },
            { id: 5,  nombre: "Ramos Mejía",          bajada: "normal",       comb: [],                            salidas: ["Bernardo de Irigoyen", "Av. San Martín"] },
            { id: 6,  nombre: "Haedo",                bajada: "centro",       comb: [],                            salidas: ["Av. de Mayo", "Av. San Martín"] },
            { id: 7,  nombre: "El Palomar",           bajada: "normal",       comb: [],                            salidas: ["Lisandro de la Torre", "Rivadavia"] },
            { id: 8,  nombre: "Morón",                bajada: "centroizqder", comb: ["BUS Interurbano"],           salidas: ["Av. Rivadavia", "Bartolomé Mitre"] }
        ]
    },

    "BELGRANO_N": {
        color: "#c8102e",
        nombre: "Tren Belgrano Norte",
        operador: "Trenes Argentinos",
        ramal: "Retiro - Villa Rosa",
        direccion: "Villa Rosa",
        estaciones: [
            { id: 0,  nombre: "Retiro",               bajada: "centroizqder", comb: ["MITRE", "SAN_MARTIN", "subte_C", "subte_E", "Omnibus"], salidas: ["Av. Ramos Mejía", "Av. Antártida Argentina"] },
            { id: 1,  nombre: "Palermo Chico",        bajada: "normal",       comb: [],                            salidas: ["Av. Bullrich", "Av. del Libertador"] },
            { id: 2,  nombre: "Villa Ortúzar",        bajada: "normal",       comb: [],                            salidas: ["Av. de los Incas", "Lemos"] },
            { id: 3,  nombre: "Paternal",             bajada: "normal",       comb: [],                            salidas: ["Av. Warnes", "Av. San Martín"] },
            { id: 4,  nombre: "Villa del Parque",     bajada: "normal",       comb: [],                            salidas: ["Av. Segurola", "Campillo"] },
            { id: 5,  nombre: "Palermo",              bajada: "normal",       comb: [],                            salidas: ["Av. San Martín", "Av. Gaona"] },
            { id: 6,  nombre: "Palermo Norte",        bajada: "normal",       comb: [],                            salidas: ["Av. San Martín"] },
            { id: 7,  nombre: "Grand Bourg",          bajada: "normal",       comb: [],                            salidas: ["Av. Maipú", "Av. Presidente Perón"] },
            { id: 8,  nombre: "Malvinas Argentinas",  bajada: "normal",       comb: [],                            salidas: ["Av. Presidente Perón", "Blas Parera"] },
            { id: 9,  nombre: "Los Polvorines",       bajada: "normal",       comb: [],                            salidas: ["Av. Alberdi", "Av. Hipólito Yrigoyen"] },
            { id: 10, nombre: "Pablo Nogués",         bajada: "normal",       comb: [],                            salidas: ["Av. Berutti", "Av. Maipú"] },
            { id: 11, nombre: "Villa Rosa",           bajada: "centroizqder", comb: [],                            salidas: ["Ruta 8", "Av. Hipólito Yrigoyen"] }
        ]
    },

    "URQUIZA": {
        color: "#E3000F",
        nombre: "Tren Urquiza",
        operador: "Metrovías",
        ramal: "Lacroze - General Lemos",
        direccion: "General Lemos",
        estaciones: [
            { id: 0,  nombre: "Federico Lacroze",     bajada: "centroizqder", comb: ["subte_B"],                   salidas: ["Av. Federico Lacroze", "Av. Triunvirato"] },
            { id: 1,  nombre: "Chacarita",            bajada: "normal",       comb: [],                            salidas: ["Av. Forest", "Av. Corrientes"] },
            { id: 2,  nombre: "La Paternal",          bajada: "normal",       comb: [],                            salidas: ["Av. San Martín", "Av. Warnes"] },
            { id: 3,  nombre: "Villa del Parque",     bajada: "normal",       comb: [],                            salidas: ["Av. Segurola", "Av. Gaona"] },
            { id: 4,  nombre: "Devoto",               bajada: "normal",       comb: [],                            salidas: ["Av. Francisco Beiró", "Av. Gaona"] },
            { id: 5,  nombre: "Villa del Parque",     bajada: "normal",       comb: [],                            salidas: ["Gaona", "Carlos Pellegrini"] },
            { id: 6,  nombre: "Lemos",                bajada: "centro",       comb: [],                            salidas: ["Av. Rivadavia", "Crovara"] },
            { id: 7,  nombre: "La Reja",              bajada: "normal",       comb: [],                            salidas: ["Av. Rivadavia", "Rivadavia"] },
            { id: 8,  nombre: "General Lemos",        bajada: "centroizqder", comb: [],                            salidas: ["Av. Presidente Perón", "Formosa"] }
        ]
    }

};

// Diccionario de colores para combinaciones entre trenes y con subtes
const COLORS_TRENES_COMB = {
    // Líneas de trenes
    'MITRE':       RED_TRENES["MITRE"].color,
    'SARMIENTO':   RED_TRENES["SARMIENTO"].color,
    'ROCA':        RED_TRENES["ROCA"].color,
    'SAN_MARTIN':  RED_TRENES["SAN_MARTIN"].color,
    'BELGRANO_N':  RED_TRENES["BELGRANO_N"].color,
    'URQUIZA':     RED_TRENES["URQUIZA"].color,
    'ROCA_EZEIZA': '#0055A5',

    // Subtes (para mostrar cuando hay combinación)
    'subte_A': '#00aedb',
    'subte_B': '#ed1c24',
    'subte_C': '#0072ce',
    'subte_D': '#00884A',
    'subte_E': '#662c91',
    'subte_H': '#F3C800',

    // Otros
    'Ferry Delta':      '#1a7fc1',
    'BUS Interurbano':  '#4b5563',
    'Omnibus':          '#4b5563',
    'Premetro':         '#E86C00',
};