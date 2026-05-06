// Archivo: datos_trenes.js
// Red de trenes del Área Metropolitana de Buenos Aires (AMBA)

const RED_TRENES = {

    "MITRE": {
        color: "#0072BB",
        nombre: "Tren Mitre",
        operador: "Trenes Argentinos",
        ramal: "Retiro - Tigre",
        direccion: "Tigre",
        estaciones: [
            { id: 0,  nombre: "Retiro",                bajada: "centroizqder", comb: ["BELGRANO_N", "SAN_MARTIN", "subte_C", "subte_E", "Omnibus"], salidas: ["Av. Ramos Mejía", "Av. del Libertador"] },
            { id: 1,  nombre: "Lisandro de la Torre",  bajada: "normal",       comb: [],                            salidas: ["Olleros", "Av. del Libertador"] },
            { id: 2,  nombre: "Belgrano C",            bajada: "normal",       comb: [],                            salidas: ["Av. Juramento", "Echeverría"] },
            { id: 3,  nombre: "Núñez",                 bajada: "normal",       comb: [],                            salidas: ["Manuela Pedraza", "Crisólogo Larralde"] },
            { id: 4,  nombre: "Rivadavia",             bajada: "normal",       comb: [],                            salidas: ["Av. General Paz", "Zapiola"] },
            { id: 5,  nombre: "Vicente López",         bajada: "normal",       comb: [],                            salidas: ["Melo", "Gral. San Martín"] },
            { id: 6,  nombre: "Olivos",                bajada: "normal",       comb: [],                            salidas: ["Corrientes", "Matías Sturiza"] },
            { id: 7,  nombre: "La Lucila",             bajada: "normal",       comb: [],                            salidas: ["Borges", "Av. del Libertador"] },
            { id: 8,  nombre: "Martínez",              bajada: "normal",       comb: [],                            salidas: ["Alvear", "Eduardo Costa"] },
            { id: 9,  nombre: "Acassuso",              bajada: "normal",       comb: [],                            salidas: ["Perú", "Eduardo Costa"] },
            { id: 10, nombre: "San Isidro",            bajada: "normal",       comb: [],                            salidas: ["Belgrano", "Cosme Marín"] },
            { id: 11, nombre: "Beccar",                bajada: "normal",       comb: [],                            salidas: ["Ayacucho", "Av. Centenario"] },
            { id: 12, nombre: "Victoria",              bajada: "normal",       comb: [],                            salidas: ["Av. Presidente Perón", "Santamarina"] },
            { id: 13, nombre: "Virreyes",              bajada: "normal",       comb: [],                            salidas: ["Avellaneda", "Brandsen"] },
            { id: 14, nombre: "San Fernando",          bajada: "normal",       comb: [],                            salidas: ["Madero", "Sarmiento"] },
            { id: 15, nombre: "Carupá",                bajada: "normal",       comb: [],                            salidas: ["Av. Juan B. Justo", "Colón"] },
            { id: 16, nombre: "Tigre",                 bajada: "centroizqder", comb: ["Ferry Delta", "Omnibus"],    salidas: ["Av. de las Naciones Unidas", "Estación Fluvial"] }
        ]
    },

    "SARMIENTO": {
        color: "#00A3E0",
        nombre: "Tren Sarmiento",
        operador: "Trenes Argentinos",
        ramal: "Once - Moreno",
        direccion: "Moreno",
        estaciones: [
            { id: 0,  nombre: "Once",                  bajada: "centroizqder", comb: ["subte_A", "subte_H", "Omnibus"], salidas: ["Av. Pueyrredón", "Bartolomé Mitre"] },
            { id: 1,  nombre: "Caballito",             bajada: "normal",       comb: ["subte_A"],                   salidas: ["Rojas", "Federico García Lorca"] },
            { id: 2,  nombre: "Flores",                bajada: "normal",       comb: ["subte_A"],                   salidas: ["Gral. José Gervasio Artigas", "Condarco"] },
            { id: 3,  nombre: "Floresta",              bajada: "normal",       comb: [],                            salidas: ["Joaquín V. González", "Bahía Blanca"] },
            { id: 4,  nombre: "Villa Luro",            bajada: "normal",       comb: [],                            salidas: ["Lope de Vega", "Víctor Hugo"] },
            { id: 5,  nombre: "Liniers",               bajada: "normal",       comb: ["Omnibus"],                   salidas: ["Cuzco", "José León Suárez"] },
            { id: 6,  nombre: "Ciudadela",             bajada: "normal",       comb: [],                            salidas: ["San Martín", "Gómez"] },
            { id: 7,  nombre: "Ramos Mejía",           bajada: "normal",       comb: [],                            salidas: ["Av. Rivadavia", "Necochea"] },
            { id: 8,  nombre: "Haedo",                 bajada: "normal",       comb: ["ROCA"],                      salidas: ["Av. Rivadavia", "Caseros"] },
            { id: 9,  nombre: "Morón",                 bajada: "normal",       comb: ["Omnibus"],                   salidas: ["Av. Rivadavia", "Belgrano"] },
            { id: 10, nombre: "Castelar",              bajada: "normal",       comb: [],                            salidas: ["Buenos Aires", "Martín Irigoyen"] },
            { id: 11, nombre: "Ituzaingó",             bajada: "normal",       comb: [],                            salidas: ["Mariano Acosta", "Juncal"] },
            { id: 12, nombre: "San Antonio de Padua",  bajada: "normal",       comb: [],                            salidas: ["Zárate", "Noguera"] },
            { id: 13, nombre: "Merlo",                 bajada: "normal",       comb: [],                            salidas: ["Moreno", "Av. Pres. Juan Domingo Perón"] },
            { id: 14, nombre: "Paso del Rey",          bajada: "normal",       comb: [],                            salidas: ["Salvador María del Carril", "Bartolomé Mitre"] },
            { id: 15, nombre: "Moreno",                bajada: "centroizqder", comb: ["Omnibus"],                   salidas: ["Av. Alcorta", "Bartolomé Mitre"] }
        ]
    },

    "ROCA": {
        color: "#0055A5",
        nombre: "Tren Roca",
        operador: "Trenes Argentinos",
        ramal: "Constitución - La Plata",
        direccion: "La Plata",
        estaciones: [
            { id: 0,  nombre: "Constitución",          bajada: "centroizqder", comb: ["subte_C", "Omnibus"],        salidas: ["Av. Brasil", "Lima"] },
            { id: 1,  nombre: "D. Santillán y M. Kosteki (Avellaneda)", bajada: "normal", comb: ["ROCA_EZEIZA"], salidas: ["Av. Hipólito Yrigoyen", "Obreros de La Negra"] },
            { id: 2,  nombre: "Sarandí",               bajada: "normal",       comb: [],                            salidas: ["Av. Bartolomé Mitre", "Salto"] },
            { id: 3,  nombre: "Villa Domínico",        bajada: "normal",       comb: [],                            salidas: ["Otero", "Emilio Zola"] },
            { id: 4,  nombre: "Wilde",                 bajada: "normal",       comb: [],                            salidas: ["Ramón Franco", "Las Flores"] },
            { id: 5,  nombre: "Don Bosco",             bajada: "normal",       comb: [],                            salidas: ["Los Andes", "Uriburu"] },
            { id: 6,  nombre: "Bernal",                bajada: "normal",       comb: [],                            salidas: ["San Martín", "Avellaneda"] },
            { id: 7,  nombre: "Quilmes",               bajada: "normal",       comb: [],                            salidas: ["Gaboto", "Rivadavia"] },
            { id: 8,  nombre: "Ezpeleta",              bajada: "normal",       comb: [],                            salidas: ["San Martín", "Chile"] },
            { id: 9,  nombre: "Berazategui",           bajada: "normal",       comb: [],                            salidas: ["Lisandro de la Torre", "Calle 14"] },
            { id: 10, nombre: "Plátanos",              bajada: "normal",       comb: [],                            salidas: ["Lisandro de la Torre", "Calle 158"] },
            { id: 11, nombre: "Hudson",                bajada: "normal",       comb: [],                            salidas: ["Calle 58", "Calle 161"] },
            { id: 12, nombre: "Pereyra",               bajada: "normal",       comb: [],                            salidas: ["Parque Pereyra Iraola"] },
            { id: 13, nombre: "Villa Elisa",           bajada: "normal",       comb: [],                            salidas: ["Camino Centenario", "Arana"] },
            { id: 14, nombre: "City Bell",             bajada: "normal",       comb: [],                            salidas: ["Camino Centenario", "Cantilo"] },
            { id: 15, nombre: "Gonnet",                bajada: "normal",       comb: [],                            salidas: ["Camino Centenario", "Calle 502"] },
            { id: 16, nombre: "Ringuelet",             bajada: "normal",       comb: [],                            salidas: ["Calle 7", "Calle 514"] },
            { id: 17, nombre: "Tolosa",                bajada: "normal",       comb: [],                            salidas: ["Calle 1", "Calle 528"] },
            { id: 18, nombre: "La Plata",              bajada: "centroizqder", comb: ["Omnibus"],                   salidas: ["Av. 1", "Diag. 80"] }
        ]
    },

    "SAN_MARTIN": {
        color: "#0293CF",
        nombre: "Tren San Martín",
        operador: "Trenes Argentinos",
        ramal: "Retiro - Pilar",
        direccion: "Pilar",
        estaciones: [
            { id: 0,  nombre: "Retiro",                bajada: "centroizqder", comb: ["MITRE", "BELGRANO_N", "subte_C", "subte_E"], salidas: ["Av. Ramos Mejía", "Av. Antártida Argentina"] },
            { id: 1,  nombre: "Palermo",               bajada: "normal",       comb: ["subte_D"],                   salidas: ["Av. Santa Fe", "Av. Juan B. Justo"] },
            { id: 2,  nombre: "Chacarita",             bajada: "normal",       comb: ["subte_B", "URQUIZA"],        salidas: ["Av. Corrientes", "Dorrego"] },
            { id: 3,  nombre: "La Paternal",           bajada: "normal",       comb: [],                            salidas: ["Trezegüet", "Osorio"] },
            { id: 4,  nombre: "Villa del Parque",      bajada: "normal",       comb: [],                            salidas: ["Cuenca", "Ricardo Gutiérrez"] },
            { id: 5,  nombre: "Devoto",                bajada: "normal",       comb: [],                            salidas: ["Ricardo Gutiérrez", "Nueva York"] },
            { id: 6,  nombre: "Sáenz Peña",            bajada: "normal",       comb: [],                            salidas: ["Florentino Ameghino", "Av. América"] },
            { id: 7,  nombre: "Santos Lugares",        bajada: "normal",       comb: [],                            salidas: ["Sudamérica", "Severino Langeri"] },
            { id: 8,  nombre: "Caseros",               bajada: "normal",       comb: [],                            salidas: ["Justo José de Urquiza", "Valentín Gómez"] },
            { id: 9,  nombre: "El Palomar",            bajada: "normal",       comb: [],                            salidas: ["Rosales", "Itacumbú"] },
            { id: 10, nombre: "Hurlingham",            bajada: "normal",       comb: ["URQUIZA"],                   salidas: ["Remedios de Escalada", "Arturo Jauretche"] },
            { id: 11, nombre: "William Morris",        bajada: "normal",       comb: [],                            salidas: ["Villegas", "Argandoña"] },
            { id: 12, nombre: "Bella Vista",           bajada: "normal",       comb: [],                            salidas: ["Ricchieri", "Sarmiento"] },
            { id: 13, nombre: "Muñiz",                 bajada: "normal",       comb: [],                            salidas: ["Conesa", "Sarmiento"] },
            { id: 14, nombre: "San Miguel",            bajada: "normal",       comb: [],                            salidas: ["Leandro N. Alem", "Sarmiento"] },
            { id: 15, nombre: "José C. Paz",           bajada: "normal",       comb: ["Omnibus"],                   salidas: ["Ruta 197", "Av. Presidente Perón"] },
            { id: 16, nombre: "Sol y Verde",           bajada: "normal",       comb: [],                            salidas: ["Cura Brochero", "Sarmiento"] },
            { id: 17, nombre: "Presidente Derqui",     bajada: "normal",       comb: [],                            salidas: ["Eva Perón", "Antonio Toro"] },
            { id: 18, nombre: "Villa Astolfi",         bajada: "normal",       comb: [],                            salidas: ["Santa Lucía", "Rondeau"] },
            { id: 19, nombre: "Pilar",                 bajada: "centroizqder", comb: ["Omnibus"],                   salidas: ["Tomás Márquez", "Nazarre"] }
        ]
    },

    "BELGRANO_N": {
        color: "#c8102e",
        nombre: "Tren Belgrano Norte",
        operador: "Ferrovías",
        ramal: "Retiro - Villa Rosa",
        direccion: "Villa Rosa",
        estaciones: [
            { id: 0,  nombre: "Retiro",                bajada: "centroizqder", comb: ["MITRE", "SAN_MARTIN", "subte_C", "subte_E"], salidas: ["Av. Ramos Mejía", "Av. Antártida Argentina"] },
            { id: 1,  nombre: "Saldías",               bajada: "normal",       comb: [],                            salidas: ["Jerónimo Salguero", "Av. Costanera Rafael Obligado"] },
            { id: 2,  nombre: "R. S. Ortiz",           bajada: "normal",       comb: [],                            salidas: ["Pabellón III", "Puente Ángel Labruna"] },
            { id: 3,  nombre: "Aristóbulo del Valle",  bajada: "normal",       comb: [],                            salidas: ["Av. Maipú", "Aristóbulo del Valle"] },
            { id: 4,  nombre: "Padilla",               bajada: "normal",       comb: [],                            salidas: ["Lavalle", "Laprida"] },
            { id: 5,  nombre: "Florida",               bajada: "normal",       comb: [],                            salidas: ["Gral. José de San Martín", "Ayacucho"] },
            { id: 6,  nombre: "Munro",                 bajada: "normal",       comb: [],                            salidas: ["Av. Vélez Sársfield", "Carlos Villate"] },
            { id: 7,  nombre: "Carapachay",            bajada: "normal",       comb: [],                            salidas: ["Independencia", "Drysdale"] },
            { id: 8,  nombre: "Villa Adelina",         bajada: "normal",       comb: [],                            salidas: ["Av. de Mayo", "Paraná"] },
            { id: 9,  nombre: "Boulogne Sur Mer",      bajada: "normal",       comb: [],                            salidas: ["Av. Avelino Rolón", "Moisés Lebensohn"] },
            { id: 10, nombre: "Vicealmirante Montes",  bajada: "normal",       comb: [],                            salidas: ["Av. del Trabajo", "Ruta 202"] },
            { id: 11, nombre: "Don Torcuato",          bajada: "normal",       comb: [],                            salidas: ["Ruta 202", "Alvear"] },
            { id: 12, nombre: "Adolfo Sordeaux",       bajada: "normal",       comb: [],                            salidas: ["San Martín", "Pellegrini"] },
            { id: 13, nombre: "Villa de Mayo",         bajada: "normal",       comb: [],                            salidas: ["Sucre", "Eva Perón"] },
            { id: 14, nombre: "Los Polvorines",        bajada: "normal",       comb: [],                            salidas: ["Ruta 197", "General Savio"] },
            { id: 15, nombre: "Pablo Nogués",          bajada: "normal",       comb: [],                            salidas: ["Av. del Sesquicentenario", "San Martín"] },
            { id: 16, nombre: "Grand Bourg",           bajada: "normal",       comb: [],                            salidas: ["El Callao", "Francisco Beiró"] },
            { id: 17, nombre: "Tierras Altas",         bajada: "normal",       comb: [],                            salidas: ["Uruguay", "Cura Brochero"] },
            { id: 18, nombre: "Tortuguitas",           bajada: "normal",       comb: [],                            salidas: ["Luis María Drago", "Directorio"] },
            { id: 19, nombre: "Manuel Alberti",        bajada: "normal",       comb: [],                            salidas: ["Santa Ana", "Hipólito Yrigoyen"] },
            { id: 20, nombre: "Del Viso",              bajada: "normal",       comb: [],                            salidas: ["Independencia", "Gómez Cornet"] },
            { id: 21, nombre: "Villa Rosa",            bajada: "centroizqder", comb: [],                            salidas: ["Ruta 25", "Sarmiento"] }
        ]
    },

    "URQUIZA": {
        color: "#FF7D36",
        nombre: "Tren Urquiza",
        operador: "Metrovías",
        ramal: "Federico Lacroze - General Lemos",
        direccion: "General Lemos",
        estaciones: [
            { id: 0,  nombre: "Federico Lacroze",      bajada: "centroizqder", comb: ["subte_B", "SAN_MARTIN"],     salidas: ["Av. Federico Lacroze", "Av. Corrientes"] },
            { id: 1,  nombre: "Artigas",               bajada: "normal",       comb: [],                            salidas: ["Av. Elcano", "Gral. José Gervasio Artigas"] },
            { id: 2,  nombre: "Arata",                 bajada: "normal",       comb: [],                            salidas: ["Av. Chorroarín", "Combatientes de Malvinas"] },
            { id: 3,  nombre: "Francisco Beiró",       bajada: "normal",       comb: [],                            salidas: ["Av. Francisco Beiró", "Terrada"] },
            { id: 4,  nombre: "El Libertador",         bajada: "normal",       comb: [],                            salidas: ["Av. San Martín", "Asunción"] },
            { id: 5,  nombre: "Devoto",                bajada: "normal",       comb: [],                            salidas: ["Lincoln", "Gualeguaychú"] },
            { id: 6,  nombre: "Coronel Lynch",         bajada: "normal",       comb: [],                            salidas: ["Av. General Paz", "Cuenca"] },
            { id: 7,  nombre: "Fernández Moreno",      bajada: "normal",       comb: [],                            salidas: ["Av. La Plata", "Rodríguez Peña"] },
            { id: 8,  nombre: "Lourdes",               bajada: "normal",       comb: [],                            salidas: ["Mitre", "La Merced"] },
            { id: 9,  nombre: "Tropezón",              bajada: "normal",       comb: [],                            salidas: ["1 de Mayo", "Antártida Argentina"] },
            { id: 10, nombre: "José María Bosch",      bajada: "normal",       comb: [],                            salidas: ["Bosch", "Antártida Argentina"] },
            { id: 11, nombre: "Martín Coronado",       bajada: "normal",       comb: [],                            salidas: ["San Lorenzo", "Presidente Perón"] },
            { id: 12, nombre: "Pablo Podestá",         bajada: "normal",       comb: [],                            salidas: ["Av. Márquez", "Presidente Perón"] },
            { id: 13, nombre: "Jorge Newbery",         bajada: "normal",       comb: [],                            salidas: ["Márquez", "Combate de los Pozos"] },
            { id: 14, nombre: "Rubén Darío",           bajada: "normal",       comb: ["SAN_MARTIN"],                salidas: ["Roca", "Pilcomayo"] },
            { id: 15, nombre: "Ejército de los Andes", bajada: "normal",       comb: [],                            salidas: ["Av. Julio A. Roca", "Gral. Pedro Díaz"] },
            { id: 16, nombre: "Juan B. de La Salle",   bajada: "normal",       comb: [],                            salidas: ["Av. Julio A. Roca", "Solís"] },
            { id: 17, nombre: "Capitán Lozano",        bajada: "normal",       comb: [],                            salidas: ["Av. Julio A. Roca", "Gral. Belgrano"] },
            { id: 18, nombre: "Teniente Agneta",       bajada: "normal",       comb: [],                            salidas: ["Av. Julio A. Roca", "Avenida Illia"] },
            { id: 19, nombre: "Campo de Mayo",         bajada: "normal",       comb: [],                            salidas: ["Ruta 8", "Avenida Illia"] },
            { id: 20, nombre: "Sargento Cabral",       bajada: "normal",       comb: [],                            salidas: ["Av. Pres. Arturo Illia", "Sargento Cabral"] },
            { id: 21, nombre: "General Lemos",         bajada: "centroizqder", comb: ["Omnibus"],                   salidas: ["Ruta 202", "Av. Arturo Illia"] }
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