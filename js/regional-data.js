/* js/regional-data.js */

// --- DATOS DE LAS GRÁFICAS GENERALES ---
const chartData = [
    { label: "Pavimentación y Bacheo", gen: 20, soc: 6 },
    { label: "Agua Potable", gen: 12, soc: 20 },
    { label: "Seguridad Pública", gen: 15, soc: 10 },
    { label: "Alumbrado Público", gen: 14, soc: 4 },
    { label: "Apoyos Sociales", gen: 6, soc: 14 },
    { label: "Empleo", gen: 6, soc: 12 },
    { label: "Recolección de Basura", gen: 6, soc: 5 },
    { label: "Servicios de Salud", gen: 4, soc: 9 },
    { label: "Apoyos Vivienda", gen: 4, soc: 8 },
    { label: "Drenaje y Alcantarillado", gen: 4, soc: 7 },
    { label: "Areas Verdes", gen: 4, soc: 1 },
    { label: "Medio Ambiente/Educación", gen: 3, soc: 3 },
    { label: "Perros Callejeros", gen: 1, soc: 1 }
];

// --- DATOS DETALLADOS POR REGIÓN ---
const regionsData = {
    centro: {
        map: "https://www.google.com/maps/d/embed?mid=1U_Duf_rJwKodirjkaeMT11epC7iiJ2o",
        title: "Región Centro",
        population: "302,103",
        stats: [
            { label: "Pavimentación y Bacheo", val: 21 },
            { label: "Seguridad Pública", val: 16 },
            { label: "Alumbrado Público", val: 13 },
            { label: "Agua Potable", val: 12 },
            { label: "Apoyos Sociales", val: 9 },
            { label: "Apoyos Vivienda", val: 6 },
            { label: "Servicios de Salud", val: 4 },
            { label: "Recolección de Basura", val: 4 },
            { label: "Empleo", val: 4 },
            { label: "Areas Verdes", val: 3 },
            { label: "Medio Ambiente/Educación", val: 3 },
            { label: "Drenaje y Alcantarillado", val: 3 },
            { label: "Perros Callejeros", val: 1 }
        ],
        conclusions: [
            { title: "Calles y servicios básicos al tope de la agenda", text: "se repiten solicitudes de pavimentación/bacheo y drenaje/alcantarillado, junto con alumbrado para mejorar seguridad y movilidad." },
            { title: "Agua potable y vivienda digna", text: "apoyos para materiales y programas de mejora de vivienda; además de apoyos sociales a población vulnerable." },
            { title: "Salud y empleo", text: "servicios médicos más accesibles y oportunidades de empleo/capacitación para dinamizar la economía local." }
        ],
        tableData: [
            { muni: "Cuauhtemoc", reg: "Región Centro", pavi: "20%", agua: "13%", dren: "2%", alum: "14%", salud: "1%", social: "9%", seg: "26%", bas: "4%", viv: "3%", emp: "1%", perro: "1%", verde: "3%", amb: "4%", priority: true },
            { muni: "Guerrero", reg: "Región Centro", pavi: "24%", agua: "8%", dren: "2%", alum: "13%", salud: "4%", social: "12%", seg: "2%", bas: "5%", viv: "13%", emp: "11%", perro: "0%", verde: "3%", amb: "3%", priority: true },
            { muni: "Namiquipa", reg: "Región Centro", pavi: "20%", agua: "20%", dren: "13%", alum: "8%", salud: "20%", social: "7%", seg: "1%", bas: "3%", viv: "4%", emp: "1%", perro: "0%", verde: "1%", amb: "3%", priority: true },
            { muni: "Gomez Farias", reg: "Región Centro", pavi: "0%", agua: "0%", dren: "0%", alum: "0%", salud: "100%", social: "0%", seg: "0%", bas: "0%", viv: "0%", emp: "0%", perro: "0%", verde: "0%", amb: "0%", priority: true },
            { muni: "Riva Palacio", reg: "Región Centro", pavi: "0%", agua: "0%", dren: "0%", alum: "0%", salud: "0%", social: "0%", seg: "0%", bas: "0%", viv: "0%", emp: "0%", perro: "0%", verde: "0%", amb: "0%", priority: false },
            { muni: "Bachiniva", reg: "Región Centro", pavi: "31%", agua: "16%", dren: "1%", alum: "3%", salud: "23%", social: "12%", seg: "0%", bas: "2%", viv: "10%", emp: "1%", perro: "0%", verde: "1%", amb: "1%", priority: false },
            { muni: "Cusihuiriachi", reg: "Región Centro", pavi: "9%", agua: "31%", dren: "1%", alum: "17%", salud: "3%", social: "1%", seg: "4%", bas: "17%", viv: "6%", emp: "9%", perro: "0%", verde: "2%", amb: "0%", priority: false },
            { muni: "Santa Isabel", reg: "Región Centro", pavi: "38%", agua: "3%", dren: "9%", alum: "25%", salud: "0%", social: "6%", seg: "0%", bas: "9%", viv: "3%", emp: "0%", perro: "3%", verde: "0%", amb: "3%", priority: false },
            { muni: "Gran Morelos", reg: "Región Centro", pavi: "0%", agua: "0%", dren: "0%", alum: "67%", salud: "0%", social: "17%", seg: "0%", bas: "8%", viv: "0%", emp: "0%", perro: "0%", verde: "0%", amb: "8%", priority: false },
            { muni: "Dr. Belisario Dominguez", reg: "Región Centro", pavi: "8%", agua: "20%", dren: "0%", alum: "8%", salud: "31%", social: "7%", seg: "0%", bas: "1%", viv: "5%", emp: "13%", perro: "2%", verde: "3%", amb: "1%", priority: false },
            { muni: "San Francisco De Borja", reg: "Región Centro", pavi: "0%", agua: "0%", dren: "0%", alum: "0%", salud: "0%", social: "0%", seg: "0%", bas: "0%", viv: "0%", emp: "0%", perro: "0%", verde: "0%", amb: "0%", priority: false }
        ]
    },
    este: {
        map: "https://www.google.com/maps/d/embed?mid=1yMBhIj2J850QB_O_ok5vJaNvWxR_EZI",
        title: "Región Este",
        population: "1,114,609",
        stats: [
            { label: "Seguridad Pública", val: 27 },
            { label: "Pavimentación y Bacheo", val: 19 },
            { label: "Alumbrado Público", val: 16 },
            { label: "Agua Potable", val: 8 },
            { label: "Recolección de Basura", val: 7 },
            { label: "Apoyos Sociales", val: 5 },
            { label: "Areas Verdes", val: 4 },
            { label: "Drenaje y Alcantarillado", val: 3 },
            { label: "Apoyos Vivienda", val: 3 },
            { label: "Perros Callejeros", val: 3 },
            { label: "Medio Ambiente/Educación", val: 3 },
            { label: "Servicios de Salud", val: 1 },
            { label: "Empleo", val: 1 }
        ],
        conclusions: [
            { title: "Mantenimiento urbano continuo", text: "pavimentación, drenaje y alumbrado, además de recolección de basura más regular." },
            { title: "Seguridad y salud", text: "mayor vigilancia y mejoras en servicios de salud (incluidos medicamentos)." },
            { title: "Cuidado infantil y educación", text: "necesidad de estancias infantiles y oferta de educación superior." }
        ],
        tableData: [
            { muni: "Chihuahua", reg: "Región Este", pavi: "18%", agua: "8%", dren: "2%", alum: "16%", salud: "1%", social: "5%", seg: "30%", bas: "7%", viv: "3%", emp: "1%", perro: "3%", verde: "5%", amb: "3%", priority: true },
            { muni: "Aldama", reg: "Región Este", pavi: "27%", agua: "1%", dren: "1%", alum: "4%", salud: "0%", social: "13%", seg: "28%", bas: "3%", viv: "0%", emp: "1%", perro: "0%", verde: "5%", amb: "16%", priority: true },
            { muni: "Ojinaga", reg: "Región Este", pavi: "31%", agua: "15%", dren: "20%", alum: "25%", salud: "1%", social: "3%", seg: "0%", bas: "3%", viv: "1%", emp: "1%", perro: "0%", verde: "0%", amb: "0%", priority: true },
            { muni: "Aquiles Serdan", reg: "Región Este", pavi: "8%", agua: "8%", dren: "0%", alum: "15%", salud: "1%", social: "15%", seg: "18%", bas: "18%", viv: "3%", emp: "1%", perro: "1%", verde: "2%", amb: "10%", priority: true },
            { muni: "Manuel Benavides", reg: "Región Este", pavi: "0%", agua: "0%", dren: "0%", alum: "0%", salud: "0%", social: "0%", seg: "0%", bas: "0%", viv: "0%", emp: "0%", perro: "0%", verde: "0%", amb: "0%", priority: false },
            { muni: "Coyame Del Sotol", reg: "Región Este", pavi: "0%", agua: "0%", dren: "0%", alum: "0%", salud: "0%", social: "0%", seg: "0%", bas: "0%", viv: "0%", emp: "0%", perro: "0%", verde: "0%", amb: "0%", priority: false }
        ]
    },
    noroeste: {
        map: "https://www.google.com/maps/d/embed?mid=1OIs_j6XpDUlClPtNNQ5_J67Imezcfe8",
        title: "Región Noroeste",
        population: "166,521",
        stats: [
            { label: "Pavimentación y Bacheo", val: 20 },
            { label: "Servicios de Salud", val: 19 },
            { label: "Alumbrado Público", val: 14 },
            { label: "Agua Potable", val: 10 },
            { label: "Apoyos Sociales", val: 7 },
            { label: "Empleo", val: 7 },
            { label: "Seguridad Pública", val: 6 },
            { label: "Recolección de Basura", val: 5 },
            { label: "Apoyos Vivienda", val: 5 },
            { label: "Drenaje y Alcantarillado", val: 2 },
            { label: "Areas Verdes", val: 2 },
            { label: "Medio Ambiente/Educación", val: 2 },
            { label: "Perros Callejeros", val: 1 }
        ],
        conclusions: [
            { title: "Infraestructura hidráulica primero", text: "drenaje/alcantarillado como prioridad, seguido de pavimentación y alumbrado." },
            { title: "Red de apoyo social y seguridad", text: "apoyos sociales para personas adultas mayores y con discapacidad, además de mayor vigilancia." }
        ],
        tableData: [
            { muni: "Nuevo Casas Grandes", reg: "Región Noroeste", pavi: "27%", agua: "4%", dren: "0%", alum: "14%", salud: "6%", social: "6%", seg: "16%", bas: "14%", viv: "1%", emp: "3%", perro: "1%", verde: "5%", amb: "3%", priority: true },
            { muni: "Ascension", reg: "Región Noroeste", pavi: "25%", agua: "4%", dren: "3%", alum: "15%", salud: "28%", social: "2%", seg: "1%", bas: "1%", viv: "2%", emp: "17%", perro: "0%", verde: "1%", amb: "1%", priority: true },
            { muni: "Buenaventura", reg: "Región Noroeste", pavi: "7%", agua: "0%", dren: "2%", alum: "8%", salud: "35%", social: "23%", seg: "0%", bas: "0%", viv: "20%", emp: "3%", perro: "0%", verde: "2%", amb: "0%", priority: true },
            { muni: "Casas Grandes", reg: "Región Noroeste", pavi: "24%", agua: "71%", dren: "0%", alum: "6%", salud: "0%", social: "0%", seg: "0%", bas: "0%", viv: "0%", emp: "0%", perro: "0%", verde: "0%", amb: "0%", priority: true },
            { muni: "Janos", reg: "Región Noroeste", pavi: "0%", agua: "7%", dren: "0%", alum: "13%", salud: "7%", social: "7%", seg: "0%", bas: "3%", viv: "33%", emp: "7%", perro: "0%", verde: "0%", amb: "23%", priority: false },
            { muni: "Galeana", reg: "Región Noroeste", pavi: "14%", agua: "38%", dren: "6%", alum: "20%", salud: "16%", social: "1%", seg: "2%", bas: "0%", viv: "1%", emp: "0%", perro: "0%", verde: "0%", amb: "1%", priority: false },
            { muni: "Ignacio Zaragoza", reg: "Región Noroeste", pavi: "19%", agua: "30%", dren: "9%", alum: "13%", salud: "6%", social: "11%", seg: "2%", bas: "0%", viv: "0%", emp: "0%", perro: "4%", verde: "0%", amb: "6%", priority: false }
        ]
    },
    norte: {
        map: "https://www.google.com/maps/d/embed?mid=1i8J5jaCnCPv0nOiXmMs12QC4R3z82eo",
        title: "Región Norte",
        population: "1,687,060",
        stats: [
            { label: "Pavimentación y Bacheo", val: 25 },
            { label: "Agua Potable", val: 22 },
            { label: "Seguridad Pública", val: 11 },
            { label: "Alumbrado Público", val: 11 },
            { label: "Areas Verdes", val: 10 },
            { label: "Drenaje y Alcantarillado", val: 9 },
            { label: "Apoyos Sociales", val: 5 },
            { label: "Apoyos Vivienda", val: 2 },
            { label: "Servicios de Salud", val: 1 },
            { label: "Recolección de Basura", val: 1 },
            { label: "Empleo", val: 1 },
            { label: "Perros Callejeros", val: 1 },
            { label: "Medio Ambiente/Educación", val: 1 }
        ],
        conclusions: [
            { title: "Seguridad como urgencia transversal", text: "preocupación central por inseguridad/violencia; se solicita pavimentación/bacheo, drenaje y alumbrado para entornos más seguros." },
            { title: "Servicios y atención comunitaria", text: "servicios médicos, estancias infantiles y educación; además de control de animales en vía pública." }
        ],
        tableData: [
            { muni: "Juarez", reg: "Región Norte", pavi: "25%", agua: "22%", dren: "9%", alum: "11%", salud: "1%", social: "4%", seg: "12%", bas: "1%", viv: "2%", emp: "1%", perro: "1%", verde: "10%", amb: "1%", priority: true },
            { muni: "Ahumada", reg: "Región Norte", pavi: "21%", agua: "13%", dren: "0%", alum: "21%", salud: "17%", social: "14%", seg: "0%", bas: "1%", viv: "1%", emp: "6%", perro: "0%", verde: "5%", amb: "3%", priority: false },
            { muni: "Praxedis G. Guerrero", reg: "Región Norte", pavi: "0%", agua: "0%", dren: "0%", alum: "0%", salud: "0%", social: "0%", seg: "0%", bas: "0%", viv: "0%", emp: "0%", perro: "0%", verde: "0%", amb: "0%", priority: false },
            { muni: "Guadalupe", reg: "Región Norte", pavi: "0%", agua: "0%", dren: "0%", alum: "0%", salud: "0%", social: "0%", seg: "0%", bas: "0%", viv: "0%", emp: "0%", perro: "0%", verde: "0%", amb: "0%", priority: false }
        ]
    },
    sur: {
        map: "https://www.google.com/maps/d/embed?mid=1v6UVl47uIme1F4fjWpMBLQM20_Fr9KI",
        title: "Región Sur",
        population: "202,852",
        stats: [
            { label: "Agua Potable", val: 21 },
            { label: "Empleo", val: 16 },
            { label: "Pavimentación y Bacheo", val: 13 },
            { label: "Alumbrado Público", val: 9 },
            { label: "Servicios de Salud", val: 9 },
            { label: "Apoyos Vivienda", val: 9 },
            { label: "Apoyos Sociales", val: 6 },
            { label: "Seguridad Pública", val: 6 },
            { label: "Medio Ambiente/Educación", val: 4 },
            { label: "Areas Verdes", val: 3 },
            { label: "Drenaje y Alcantarillado", val: 2 },
            { label: "Recolección de Basura", val: 2 },
            { label: "Perros Callejeros", val: 0 }
        ],
        conclusions: [
            { title: "Rehabilitación de básicos", text: "énfasis en pavimentación/bacheo, drenaje/agua potable y alumbrado para recuperar la infraestructura cotidiana." },
            { title: "Bienestar social y salud", text: "apoyos sociales y mejores servicios de salud, además de empleo para reactivar economías locales." }
        ],
        tableData: [
            { muni: "Hidalgo Del Parral", reg: "Región Sur", pavi: "12%", agua: "34%", dren: "2%", alum: "6%", salud: "3%", social: "5%", seg: "15%", bas: "4%", viv: "4%", emp: "3%", perro: "1%", verde: "9%", amb: "3%", priority: true },
            { muni: "Balleza", reg: "Región Sur", pavi: "8%", agua: "20%", dren: "5%", alum: "7%", salud: "22%", social: "1%", seg: "1%", bas: "1%", viv: "14%", emp: "16%", perro: "0%", verde: "2%", amb: "3%", priority: true },
            { muni: "Santa Barbara", reg: "Región Sur", pavi: "38%", agua: "0%", dren: "0%", alum: "16%", salud: "15%", social: "29%", seg: "0%", bas: "0%", viv: "0%", emp: "2%", perro: "0%", verde: "0%", amb: "0%", priority: true },
            { muni: "Allende", reg: "Región Sur", pavi: "18%", agua: "25%", dren: "1%", alum: "16%", salud: "6%", social: "9%", seg: "7%", bas: "0%", viv: "0%", emp: "15%", perro: "0%", verde: "1%", amb: "2%", priority: true },
            { muni: "Valle De Zaragoza", reg: "Región Sur", pavi: "6%", agua: "41%", dren: "0%", alum: "2%", salud: "1%", social: "16%", seg: "2%", bas: "1%", viv: "5%", emp: "3%", perro: "0%", verde: "19%", amb: "3%", priority: true },
            { muni: "San Francisco Del Oro", reg: "Región Sur", pavi: "11%", agua: "10%", dren: "3%", alum: "10%", salud: "4%", social: "5%", seg: "2%", bas: "4%", viv: "2%", emp: "46%", perro: "0%", verde: "1%", amb: "2%", priority: false },
            { muni: "Matamoros", reg: "Región Sur", pavi: "25%", agua: "3%", dren: "1%", alum: "6%", salud: "1%", social: "1%", seg: "2%", bas: "0%", viv: "18%", emp: "28%", perro: "0%", verde: "1%", amb: "15%", priority: false },
            { muni: "Lopez", reg: "Región Sur", pavi: "6%", agua: "2%", dren: "0%", alum: "6%", salud: "19%", social: "16%", seg: "1%", bas: "1%", viv: "16%", emp: "29%", perro: "0%", verde: "0%", amb: "4%", priority: false },
            { muni: "Satevo", reg: "Región Sur", pavi: "20%", agua: "22%", dren: "1%", alum: "23%", salud: "4%", social: "0%", seg: "9%", bas: "3%", viv: "3%", emp: "7%", perro: "0%", verde: "3%", amb: "5%", priority: false },
            { muni: "Nonoava", reg: "Región Sur", pavi: "13%", agua: "5%", dren: "2%", alum: "32%", salud: "0%", social: "3%", seg: "7%", bas: "0%", viv: "26%", emp: "0%", perro: "0%", verde: "11%", amb: "0%", priority: false },
            { muni: "Rosario", reg: "Región Sur", pavi: "16%", agua: "21%", dren: "2%", alum: "5%", salud: "3%", social: "21%", seg: "0%", bas: "3%", viv: "9%", emp: "15%", perro: "0%", verde: "1%", amb: "5%", priority: false },
            { muni: "Coronado", reg: "Región Sur", pavi: "7%", agua: "24%", dren: "3%", alum: "6%", salud: "15%", social: "3%", seg: "2%", bas: "0%", viv: "20%", emp: "9%", perro: "1%", verde: "1%", amb: "9%", priority: false },
            { muni: "El Tule", reg: "Región Sur", pavi: "0%", agua: "0%", dren: "0%", alum: "0%", salud: "0%", social: "0%", seg: "0%", bas: "0%", viv: "0%", emp: "0%", perro: "0%", verde: "0%", amb: "0%", priority: false },
            { muni: "Huejotitan", reg: "Región Sur", pavi: "5%", agua: "0%", dren: "0%", alum: "3%", salud: "17%", social: "35%", seg: "0%", bas: "0%", viv: "15%", emp: "25%", perro: "0%", verde: "0%", amb: "0%", priority: false }
        ]
    },
    sureste: {
        map: "https://www.google.com/maps/d/embed?mid=1407A9pU39QkDqbTNn_BVHyH-43yfq_U",
        title: "Región Sureste",
        population: "377,437",
        stats: [
            { label: "Pavimentación y Bacheo", val: 25 },
            { label: "Alumbrado Público", val: 15 },
            { label: "Seguridad Pública", val: 12 },
            { label: "Recolección de Basura", val: 10 },
            { label: "Empleo", val: 9 },
            { label: "Apoyos Sociales", val: 7 },
            { label: "Agua Potable", val: 5 },
            { label: "Drenaje y Alcantarillado", val: 3 },
            { label: "Servicios de Salud", val: 3 },
            { label: "Areas Verdes", val: 3 },
            { label: "Apoyos Vivienda", val: 2 },
            { label: "Medio Ambiente/Educación", val: 2 },
            { label: "Perros Callejeros", val: 1 }
        ],
        conclusions: [
            { title: "Servicios urbanos integrales", text: "reiteración de pavimentación, drenaje y alumbrado, con solicitudes de seguridad y salud." },
            { title: "Gestión de residuos y espacios públicos", text: "recolección de basura más eficiente y mantenimiento de áreas verdes (más y mejor cuidado de parques)." }
        ],
        tableData: [
            { muni: "Delicias", reg: "Región Sureste", pavi: "21%", agua: "3%", dren: "3%", alum: "16%", salud: "1%", social: "5%", seg: "19%", bas: "21%", viv: "1%", emp: "2%", perro: "1%", verde: "4%", amb: "2%", priority: true },
            { muni: "Camargo", reg: "Región Sureste", pavi: "22%", agua: "2%", dren: "1%", alum: "21%", salud: "3%", social: "17%", seg: "11%", bas: "5%", viv: "2%", emp: "6%", perro: "1%", verde: "5%", amb: "4%", priority: true },
            { muni: "Meoqui", reg: "Región Sureste", pavi: "30%", agua: "3%", dren: "2%", alum: "14%", salud: "3%", social: "13%", seg: "12%", bas: "7%", viv: "4%", emp: "5%", perro: "2%", verde: "2%", amb: "2%", priority: true },
            { muni: "Jimenez", reg: "Región Sureste", pavi: "19%", agua: "10%", dren: "7%", alum: "20%", salud: "10%", social: "3%", seg: "4%", bas: "1%", viv: "1%", emp: "18%", perro: "1%", verde: "3%", amb: "2%", priority: true },
            { muni: "Saucillo", reg: "Región Sureste", pavi: "30%", agua: "7%", dren: "2%", alum: "9%", salud: "3%", social: "5%", seg: "12%", bas: "5%", viv: "1%", emp: "21%", perro: "0%", verde: "3%", amb: "3%", priority: true },
            { muni: "Rosales", reg: "Región Sureste", pavi: "32%", agua: "2%", dren: "3%", alum: "6%", salud: "5%", social: "23%", seg: "7%", bas: "13%", viv: "2%", emp: "1%", perro: "4%", verde: "1%", amb: "2%", priority: true },
            { muni: "Julimes", reg: "Región Sureste", pavi: "20%", agua: "17%", dren: "7%", alum: "14%", salud: "8%", social: "4%", seg: "2%", bas: "16%", viv: "0%", emp: "2%", perro: "0%", verde: "6%", amb: "3%", priority: true },
            { muni: "La Cruz", reg: "Región Sureste", pavi: "47%", agua: "1%", dren: "7%", alum: "16%", salud: "2%", social: "2%", seg: "2%", bas: "0%", viv: "14%", emp: "5%", perro: "0%", verde: "1%", amb: "1%", priority: false },
            { muni: "San Francisco De Conchos", reg: "Región Sureste", pavi: "11%", agua: "37%", dren: "3%", alum: "13%", salud: "16%", social: "3%", seg: "0%", bas: "3%", viv: "1%", emp: "6%", perro: "0%", verde: "8%", amb: "0%", priority: false },
            { muni: "Maguarichi", reg: "Región Sureste", pavi: "0%", agua: "0%", dren: "0%", alum: "0%", salud: "0%", social: "0%", seg: "0%", bas: "0%", viv: "0%", emp: "0%", perro: "0%", verde: "0%", amb: "0%", priority: false }
        ]
    },
    suroeste: {
        map: "https://www.google.com/maps/d/embed?mid=1-q4WcnsThRQbI_CSRUQdoyfTi5rOcZY",
        title: "Región Suroeste",
        population: "258,140",
        stats: [
            { label: "Agua Potable", val: 22 },
            { label: "Apoyos Vivienda", val: 16 },
            { label: "Servicios de Salud", val: 14 },
            { label: "Alumbrado Público", val: 10 },
            { label: "Empleo", val: 9 },
            { label: "Pavimentación y Bacheo", val: 7 },
            { label: "Apoyos Sociales", val: 7 },
            { label: "Medio Ambiente/Educación", val: 5 },
            { label: "Drenaje y Alcantarillado", val: 4 },
            { label: "Seguridad Pública", val: 2 },
            { label: "Recolección de Basura", val: 2 },
            { label: "Perros Callejeros", val: 1 },
            { label: "Areas Verdes", val: 1 }
        ],
        conclusions: [
            { title: "Salud como prioridad estructural en zonas serranas", text: "falta de acceso a servicios médicos; se sugiere telemedicina y fortalecimiento de programas estatales." },
            { title: "Infraestructura básica pendiente", text: "pavimentación, drenaje/alcantarillado, agua potable y alumbrado; además de apoyos sociales a población vulnerable." }
        ],
        tableData: [
            { muni: "Guachochi", reg: "Región Suroeste", pavi: "10%", agua: "9%", dren: "6%", alum: "7%", salud: "0%", social: "6%", seg: "3%", bas: "0%", viv: "55%", emp: "1%", perro: "0%", verde: "0%", amb: "2%", priority: true },
            { muni: "Guadalupe Y Calvo", reg: "Región Suroeste", pavi: "5%", agua: "31%", dren: "4%", alum: "6%", salud: "10%", social: "12%", seg: "1%", bas: "0%", viv: "17%", emp: "9%", perro: "0%", verde: "1%", amb: "6%", priority: true },
            { muni: "Madera", reg: "Región Suroeste", pavi: "23%", agua: "5%", dren: "3%", alum: "3%", salud: "34%", social: "13%", seg: "2%", bas: "0%", viv: "3%", emp: "9%", perro: "0%", verde: "0%", amb: "5%", priority: true },
            { muni: "Bocoyna", reg: "Región Suroeste", pavi: "12%", agua: "13%", dren: "8%", alum: "20%", salud: "1%", social: "1%", seg: "5%", bas: "7%", viv: "6%", emp: "19%", perro: "5%", verde: "1%", amb: "2%", priority: true },
            { muni: "Urique", reg: "Región Suroeste", pavi: "28%", agua: "21%", dren: "11%", alum: "4%", salud: "10%", social: "7%", seg: "0%", bas: "0%", viv: "0%", emp: "19%", perro: "0%", verde: "0%", amb: "0%", priority: true },
            { muni: "Batopilas De Manuel Gomez Morin", reg: "Región Suroeste", pavi: "27%", agua: "24%", dren: "13%", alum: "4%", salud: "10%", social: "0%", seg: "7%", bas: "0%", viv: "0%", emp: "19%", perro: "0%", verde: "0%", amb: "0%", priority: false },
            { muni: "Guazapares", reg: "Región Suroeste", pavi: "7%", agua: "13%", dren: "2%", alum: "13%", salud: "33%", social: "3%", seg: "1%", bas: "5%", viv: "3%", emp: "5%", perro: "0%", verde: "3%", amb: "11%", priority: false },
            { muni: "Morelos", reg: "Región Suroeste", pavi: "29%", agua: "8%", dren: "13%", alum: "7%", salud: "14%", social: "14%", seg: "15%", bas: "0%", viv: "0%", emp: "0%", perro: "0%", verde: "0%", amb: "0%", priority: false },
            { muni: "Ocampo", reg: "Región Suroeste", pavi: "1%", agua: "27%", dren: "5%", alum: "9%", salud: "17%", social: "17%", seg: "0%", bas: "0%", viv: "13%", emp: "11%", perro: "0%", verde: "0%", amb: "1%", priority: false },
            { muni: "Carichi", reg: "Región Suroeste", pavi: "12%", agua: "36%", dren: "0%", alum: "0%", salud: "20%", social: "4%", seg: "16%", bas: "0%", viv: "8%", emp: "4%", perro: "0%", verde: "0%", amb: "0%", priority: false },
            { muni: "Chinipas", reg: "Región Suroeste", pavi: "3%", agua: "5%", dren: "0%", alum: "5%", salud: "33%", social: "18%", seg: "0%", bas: "3%", viv: "15%", emp: "0%", perro: "0%", verde: "5%", amb: "15%", priority: false },
            { muni: "Temosachic", reg: "Región Suroeste", pavi: "29%", agua: "22%", dren: "11%", alum: "5%", salud: "11%", social: "7%", seg: "15%", bas: "0%", viv: "0%", emp: "0%", perro: "0%", verde: "0%", amb: "0%", priority: false },
            { muni: "Uruachi", reg: "Región Suroeste", pavi: "6%", agua: "47%", dren: "0%", alum: "7%", salud: "9%", social: "0%", seg: "0%", bas: "0%", viv: "20%", emp: "10%", perro: "0%", verde: "0%", amb: "0%", priority: false },
            { muni: "Moris", reg: "Región Suroeste", pavi: "29%", agua: "22%", dren: "11%", alum: "5%", salud: "11%", social: "7%", seg: "15%", bas: "0%", viv: "0%", emp: "0%", perro: "0%", verde: "0%", amb: "0%", priority: false },
            { muni: "Matachi", reg: "Región Suroeste", pavi: "11%", agua: "23%", dren: "11%", alum: "13%", salud: "2%", social: "2%", seg: "0%", bas: "0%", viv: "26%", emp: "9%", perro: "0%", verde: "2%", amb: "2%", priority: false }
        ]
    }
};