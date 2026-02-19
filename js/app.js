
// --- VARIABLES DE ESTADO GLOBAL ---
let globalData = []; 
let globalPendientes = [];
let uniqueDistricts = new Set();
let selectedDistricts = new Set(); 
let uniqueMunicipios = new Set();
let selectedMunicipios = new Set();
let sectionMaps = {}; 
let districtMunicipiosMap = {};
let dynamicDistrictsData = [];
let carouselInterval;

function initApp() {
    console.log("Iniciando aplicación...");
    renderDistrictsCarousel(defaultDistrictsData); 
    fetchSheetData(); 
    
    // startCarousel();  <-- BORRA O COMENTA ESTA LÍNEA (ya no empezamos en Home)
    
    renderCharts();
    renderRegionalTabs();
    
    // Listener para el buscador
    const searchInput = document.getElementById('searchInput');
    if(searchInput) searchInput.addEventListener('input', filterAndRender);

    // ... otros listeners ...

    // AGREGA ESTA LÍNEA AL FINAL:
    // switchView('metas'); // Eliminado - MPA no requiere forzar vista
}

// Iniciar carga al abrir el documento
document.addEventListener('DOMContentLoaded', initApp);


// --- LÓGICA DE REGIONAL TABS ---
function renderRegionalTabs() {
    // regionsData viene de regional-data.js
    if (typeof regionsData === 'undefined') return;

    Object.keys(regionsData).forEach(key => {
        const region = regionsData[key];
        const container = document.getElementById(`regional-content-${key}`);
        
        if (container) {
            // 1. Stats bars
            const statsHtml = region.stats.map(s => `
                <div class="w-full flex items-center gap-3 text-xs mb-3">
                    <div class="w-5/12 truncate text-text-sub dark:text-gray-200 font-bold" title="${s.label}">${s.label}</div>
                    <div class="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 relative shadow-inner">
                        <div class="absolute top-0 left-0 h-full bg-slate-700 rounded-full transition-all duration-1000 ease-out shadow-sm" style="width: ${s.val}%"></div>
                    </div>
                    <div class="w-10 text-right font-black text-slate-800 dark:text-slate-400 text-sm">${s.val}%</div>
                </div>
            `).join('');

            // 2. Table
            let tableHtml = '';
            if (region.tableData && region.tableData.length > 0) {
                const tableRows = region.tableData.map(row => {
                    const rowClass = row.priority 
                        ? "bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-l-yellow-400 font-bold" 
                        : "hover:bg-gray-50/50 dark:hover:bg-white/5 border-l-4 border-l-transparent";
                    
                    return `
                        <tr class="${rowClass} transition-colors border-b border-gray-100 dark:border-white/5 text-xs text-text-sub dark:text-gray-300">
                            <td class="px-4 py-3 font-bold text-text-main dark:text-white sticky left-0 bg-inherit shadow-sm min-w-[140px]">${row.muni}</td>
                            <td class="px-3 py-3 text-center min-w-[80px]">${row.pavi}</td>
                            <td class="px-3 py-3 text-center min-w-[80px]">${row.agua}</td>
                            <td class="px-3 py-3 text-center min-w-[80px]">${row.dren}</td>
                            <td class="px-3 py-3 text-center min-w-[80px]">${row.alum}</td>
                            <td class="px-3 py-3 text-center min-w-[80px]">${row.salud}</td>
                            <td class="px-3 py-3 text-center min-w-[80px]">${row.social}</td>
                            <td class="px-3 py-3 text-center min-w-[80px]">${row.seg}</td>
                            <td class="px-3 py-3 text-center min-w-[80px]">${row.bas}</td>
                            <td class="px-3 py-3 text-center min-w-[80px]">${row.viv}</td>
                            <td class="px-3 py-3 text-center min-w-[80px]">${row.emp}</td>
                            <td class="px-3 py-3 text-center min-w-[80px]">${row.perro}</td>
                            <td class="px-3 py-3 text-center min-w-[80px]">${row.verde}</td>
                            <td class="px-3 py-3 text-center min-w-[80px]">${row.amb}</td>
                        </tr>
                    `;
                }).join('');

                tableHtml = `
                    <div class="glass-panel rounded-2xl overflow-hidden shadow-lg border border-white/60 mt-4">
                        <div class="px-6 py-4 border-b border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-black/20 backdrop-blur-sm flex justify-between items-center">
                            <h3 class="text-sm font-bold text-text-main dark:text-white uppercase tracking-wider">Desglose por Municipio</h3>
                            <div class="flex items-center gap-2 text-[10px] font-bold text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded border border-yellow-200 dark:border-yellow-800">
                                <span class="size-2 rounded-full bg-yellow-500"></span> Prioritarios
                            </div>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left border-collapse whitespace-nowrap">
                                <thead class="bg-gray-100/80 dark:bg-black/40 border-b border-gray-200 dark:border-white/10 text-[10px] font-black text-text-sub uppercase tracking-wider">
                                    <tr>
                                        <th class="px-4 py-3 sticky left-0 bg-gray-100 dark:bg-slate-900 z-10 shadow-md">Municipio</th>
                                        <th class="px-3 py-3 text-center">Pavim.</th>
                                        <th class="px-3 py-3 text-center">Agua</th>
                                        <th class="px-3 py-3 text-center">Drenaje</th>
                                        <th class="px-3 py-3 text-center">Alumb.</th>
                                        <th class="px-3 py-3 text-center">Salud</th>
                                        <th class="px-3 py-3 text-center">Social</th>
                                        <th class="px-3 py-3 text-center">Segur.</th>
                                        <th class="px-3 py-3 text-center">Basura</th>
                                        <th class="px-3 py-3 text-center">Vivien.</th>
                                        <th class="px-3 py-3 text-center">Empleo</th>
                                        <th class="px-3 py-3 text-center">Perros</th>
                                        <th class="px-3 py-3 text-center">Verdes</th>
                                        <th class="px-3 py-3 text-center">Amb/Edu</th>
                                    </tr>
                                </thead>
                                <tbody>${tableRows}</tbody>
                            </table>
                        </div>
                    </div>
                `;
            }
            
            // 3. Conclusions
            let conclusionsHtml = '';
            if (region.conclusions && region.conclusions.length > 0) {
                const itemsHtml = region.conclusions.map(c => `
                    <li class="flex gap-3 items-start">
                        <span class="material-symbols-outlined text-primary mt-1 shrink-0">check_circle</span>
                        <div>
                            <span class="font-bold text-text-main dark:text-white block mb-1">${c.title}</span>
                            <span class="text-text-sub dark:text-gray-400 text-sm leading-relaxed">${c.text}</span>
                        </div>
                    </li>
                `).join('');
                
                conclusionsHtml = `
                    <div class="glass-panel p-6 rounded-2xl shadow-lg border border-white/60 mt-4">
                        <h3 class="text-lg font-black text-text-main dark:text-white mb-4 flex items-center gap-2">
                            <span class="material-symbols-outlined text-primary">lightbulb</span>
                            Conclusiones Clave de la Región
                        </h3>
                        <ul class="grid md:grid-cols-2 gap-6">${itemsHtml}</ul>
                    </div>
                `;
            }

            container.innerHTML = `
                <div class="flex flex-col md:flex-row gap-4 h-[65vh] w-full">
                    <div class="w-full md:w-1/2 h-full glass-panel p-3 rounded-2xl flex flex-col gap-2 border-l-4 border-l-slate-700 shadow-xl">
                        <div class="flex items-center justify-between px-1">
                            <h2 class="text-lg font-black tracking-tight text-text-main dark:text-white">${region.title}</h2>
                            <a href="${region.map.replace('embed', 'edit')}" target="_blank" class="flex items-center gap-1 text-[10px] font-bold text-slate-700 hover:underline bg-slate-100 px-2 py-1 rounded-lg">
                                <span class="material-symbols-outlined text-xs">open_in_new</span> Expandir
                            </a>
                        </div>
                        <div class="flex-1 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-100 relative shadow-inner">
                            <iframe src="${region.map}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        <div class="mt-2 text-center bg-primary/5 rounded-xl p-3 border border-primary/10 shadow-sm backdrop-blur-sm">
                            <p class="text-xs font-bold text-text-sub dark:text-gray-400 uppercase tracking-widest mb-1">Población Proyectada 2027</p>
                            <p class="text-4xl font-black text-primary drop-shadow-sm tracking-tight leading-none">${region.population || 'N/A'}</p>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 h-full glass-panel p-5 rounded-2xl border border-white/60 shadow-lg flex flex-col overflow-hidden">
                        <div class="flex items-center gap-2 mb-4 flex-shrink-0 border-b border-gray-100 pb-3">
                            <div class="p-1.5 bg-slate-100 text-slate-700 rounded-lg"><span class="material-symbols-outlined text-sm">bar_chart</span></div>
                            <div><h3 class="text-sm font-bold text-text-main dark:text-white leading-tight">Necesidades Regionales</h3><p class="text-[10px] text-text-sub dark:text-gray-400">Prioridades ciudadanas</p></div>
                        </div>
                        <div class="flex-1 overflow-y-auto pr-2 scrollbar-hide flex flex-col justify-center">
                            ${statsHtml}
                        </div>
                    </div>
                </div>
                ${tableHtml}
                ${conclusionsHtml}
            `;
        }
    });
}

function switchRegionalTab(regionId) {
    document.querySelectorAll('[id^="regional-content-"]').forEach(el => {
        if(el) {
            el.classList.add('hidden');
            el.classList.remove('flex');
        }
    });
    const selectedContent = document.getElementById(`regional-content-${regionId}`);
    if(selectedContent) {
        selectedContent.classList.remove('hidden');
        selectedContent.classList.add('flex');
    }
    const tabs = ['general', 'centro', 'este', 'noroeste', 'norte', 'sur', 'sureste', 'suroeste'];
    tabs.forEach(t => {
        const btn = document.getElementById(`reg-tab-${t}`);
        if(btn) {
            if(t === regionId) {
                btn.className = "px-5 py-2.5 rounded-full text-sm font-bold bg-primary text-white shadow-md shadow-primary/30 whitespace-nowrap transition-all hover:scale-105";
            } else {
                btn.className = "px-5 py-2.5 rounded-full text-sm font-medium bg-white text-text-sub hover:bg-gray-50 hover:text-primary border border-gray-200 shadow-sm whitespace-nowrap transition-all";
            }
        }
    });
}

// --- CHART RENDERING ---
function renderCharts() {
    // chartData viene de regional-data.js
    if (typeof chartData === 'undefined') return;

    const genContainer = document.getElementById('chart-general-container');
    const socContainer = document.getElementById('chart-social-container');
    if(!genContainer || !socContainer) return;
    
    genContainer.innerHTML = '';
    socContainer.innerHTML = '';

    chartData.forEach(item => {
        const genBar = document.createElement('div');
        genBar.className = "w-full flex items-center gap-3 text-xs"; 
        genBar.innerHTML = `
            <div class="w-5/12 truncate text-text-sub dark:text-gray-200 font-bold" title="${item.label}">${item.label}</div> 
            <div class="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 relative shadow-inner"> 
                <div class="absolute top-0 left-0 h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out shadow-sm" style="width: 0%" data-width="${item.gen}%"></div>
            </div>
            <div class="w-10 text-right font-black text-blue-700 dark:text-blue-400 text-sm">${item.gen}%</div> 
        `;
        genContainer.appendChild(genBar);

        const socBar = document.createElement('div');
        socBar.className = "w-full flex items-center gap-3 text-xs";
        socBar.innerHTML = `
            <div class="w-5/12 truncate text-text-sub dark:text-gray-200 font-bold" title="${item.label}">${item.label}</div>
            <div class="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 relative shadow-inner">
                <div class="absolute top-0 left-0 h-full bg-purple-600 rounded-full transition-all duration-1000 ease-out shadow-sm" style="width: 0%" data-width="${item.soc}%"></div>
            </div>
            <div class="w-10 text-right font-black text-purple-700 dark:text-purple-400 text-sm">${item.soc}%</div>
        `;
        socContainer.appendChild(socBar);
    });

    setTimeout(() => {
        document.querySelectorAll('[data-width]').forEach(el => {
            el.style.width = el.getAttribute('data-width');
        });
    }, 100);
}

// --- CSV PARSER (Simple) ---
function parseCSV(str) {
    const arr = [];
    let quote = false;  
    let col, c;
    for (let row = col = c = 0; c < str.length; c++) {
        var cc = str[c], nc = str[c+1];
        arr[row] = arr[row] || [];
        arr[row][col] = arr[row][col] || '';
        if (cc == '"' && quote && nc == '"') { arr[row][col] += cc; ++c; continue; }
        if (cc == '"') { quote = !quote; continue; }
        if (cc == ',' && !quote) { ++col; continue; }
        if (cc == '\r' && nc == '\n' && !quote) { ++row; col = 0; ++c; continue; }
        if (cc == '\n' && !quote) { ++row; col = 0; continue; }
        if (cc == '\r' && !quote) { ++row; col = 0; continue; }
        arr[row][col] += cc;
    }
    return arr;
}

// --- DATA PROCESSING ---
function processMainData(csvRows) {
    if (!csvRows || csvRows.length < 2) return [];
    const headers = csvRows[0].map(h => h.trim().toUpperCase());
    const dataRows = csvRows.slice(1);
    
    const idx = {
        ID: headers.indexOf('ID'),
        ZONA: headers.indexOf('ZONA'),
        ESTADO: headers.indexOf('ESTADO'),
        BRIGADISTA: headers.indexOf('BRIGADISTA'),
        TELEFONO: headers.indexOf('TELEFONO'),
        ORDEN: headers.indexOf('ORDEN DESPLIEGUE'),
        DISTRITO: headers.indexOf('DISTRITO LOCAL'),
        MUNICIPIO: headers.indexOf('MUNICIPIO'),
        LINK: headers.indexOf('ENLACE ZONA')
    };

    return dataRows.map((row, index) => {
        if (row.length <= 1) return null; 
        const id = row[idx.ID] || '';
        const zonaRaw = row[idx.ZONA] || '';
        const sections = zonaRaw ? String(zonaRaw).split(/[,|\/\-\n]/).map(s => s.trim()).filter(s => s.length > 0) : [];
        if (sections.length === 0 && zonaRaw) sections.push(zonaRaw);
        if (sections.length === 0) sections.push("Sin asignación");

        let dist = row[idx.DISTRITO] ? String(row[idx.DISTRITO]).trim() : "N/A";
        if(!dist) dist = "N/A";
        uniqueDistricts.add(dist);

        let muni = row[idx.MUNICIPIO] ? String(row[idx.MUNICIPIO]).trim() : "N/A";
        if(!muni) muni = "N/A";
        uniqueMunicipios.add(muni);

        let orderVal = row[idx.ORDEN] ? row[idx.ORDEN] : (index + 1).toString();
        let statusVal = row[idx.ESTADO] || '';
        let isAssigned = statusVal.toLowerCase().includes('asignad') || statusVal.toLowerCase() === 'assigned';
        if (!isAssigned && row[idx.BRIGADISTA] && row[idx.BRIGADISTA].length > 2) isAssigned = true;

        return {
            id: id,
            zoneSections: sections,
            order: orderVal,
            district: dist,
            municipio: muni,
            assigned: isAssigned,
            brigadista: row[idx.BRIGADISTA] || '',
            phone: row[idx.TELEFONO] || '',
            mapLink: row[idx.LINK] || '#'
        };
    }).filter(item => item !== null);
}

function processMapsData(csvRows) {
    if (!csvRows || csvRows.length < 2) return;
    const headers = csvRows[0].map(h => h.trim().toUpperCase());
    const idx = {
        SECCION: headers.indexOf('SECCION'),
        LINK: headers.indexOf('LINKS'),
        GAMMA: headers.indexOf('GAMMA')
    };
    
    csvRows.slice(1).forEach(row => {
        const seccion = row[idx.SECCION];
        if (seccion) {
            sectionMaps[seccion.trim()] = {
                map: row[idx.LINK] || '#',
                data: row[idx.GAMMA] || '#'
            };
        }
    });
}

function processDistrictData(csvRows) {
    if (!csvRows || csvRows.length < 2) return defaultDistrictsData;
    const headers = csvRows[0].map(h => h.trim().toUpperCase());
    const idx = {
        DISTRITO: headers.indexOf('DISTRITO LOCAL'),
        LINK: headers.indexOf('LINK')
    };
    
    return csvRows.slice(1).map(row => {
        const rawDist = row[idx.DISTRITO] || '';
        const id = rawDist.replace(/\D/g, ''); // Extract number
        return {
            id: id || rawDist,
            url: row[idx.LINK] || '#'
        };
    }).filter(d => d.id);
}

function processMunicipiosData(csvRows) {
    if (!csvRows || csvRows.length < 2) return {};
    const headers = csvRows[0].map(h => h.trim().toUpperCase());
    const idx = {
        NOMBRE: headers.indexOf('NOMBRE'),
        LINK: headers.indexOf('LINK'),
        DISTRITO: headers.indexOf('DISTRITO LOCAL')
    };
    
    const map = {};
    csvRows.slice(1).forEach(row => {
        const name = row[idx.NOMBRE];
        const link = row[idx.LINK];
        const rawDist = row[idx.DISTRITO];
        
        if (name && rawDist) {
            const distId = rawDist.replace(/\D/g, ''); 
            const key = String(parseInt(distId, 10)); // e.g., "02" -> "2"
            
            if (!map[key]) map[key] = [];
            map[key].push({ name, link: link || '#' });
        }
    });
    return map;
}

function processPendientesData(csvRows) {
    if (!csvRows || csvRows.length < 2) return [];
    const headers = csvRows[0].map(h => h.trim().toUpperCase());
    const idx = {
        BRIGADISTA: headers.indexOf('BRIGADISTA'),
        MUNICIPIO: headers.indexOf('MUNICIPIO')
    };
    
    return csvRows.slice(1).map(row => {
        return {
            name: row[idx.BRIGADISTA] || 'Desconocido',
            municipio: row[idx.MUNICIPIO] || 'N/A'
        };
    }).filter(item => item.name && item.name !== 'Desconocido' && item.name.trim() !== '');
}

// --- FETCHING LOGIC ---
async function fetchSheetData() {
    const loadingIndicator = document.getElementById('loading-indicator');
    if (loadingIndicator) loadingIndicator.classList.remove('hidden');
    
    try {
        // Fetch All Sheets in Parallel
        const [mainRes, mapsRes, distRes, muniRes, pendRes] = await Promise.all([
            fetch(URLS.main).then(r => r.ok ? r.text() : fetch(BASE_CSV_URL + '&output=csv').then(r2=>r2.text())), 
            fetch(URLS.mapas).then(r => r.text()),
            fetch(URLS.distritos).then(r => r.text()),
            fetch(URLS.municipios).then(r => r.text()),
            fetch(URLS.pendientes).then(r => r.text())
        ]);

        // 1. Process Mapas
        sectionMaps = {}; 
        processMapsData(parseCSV(mapsRes));

        // 2. Process Municipios
        districtMunicipiosMap = processMunicipiosData(parseCSV(muniRes));

        // 3. Process Distritos
        dynamicDistrictsData = processDistrictData(parseCSV(distRes));
        if(dynamicDistrictsData.length > 0) renderDistrictsCarousel(dynamicDistrictsData);
        else renderDistrictsCarousel(defaultDistrictsData);

        // 4. Process Pendientes
        globalPendientes = processPendientesData(parseCSV(pendRes));

        // 5. Process Main Data
        uniqueDistricts.clear();
        uniqueMunicipios.clear();
        const parsedData = processMainData(parseCSV(mainRes));

        parsedData.sort((a, b) => {
            const orderA = parseInt(a.order) || 9999;
            const orderB = parseInt(b.order) || 9999;
            return orderA - orderB;
        });

        globalData = parsedData;
        populateDistricts(Array.from(uniqueDistricts));
        populateMunicipios(Array.from(uniqueMunicipios));
        filterAndRender();

    } catch (error) {
        console.error("Error fetching data:", error);
        // alert("Error cargando datos. Revisa la consola.");
    } finally {
        if (loadingIndicator) loadingIndicator.classList.add('hidden');
    }
}

// --- VIEW SWITCHING ---
function switchView(viewName) {
    const views = {
        'dashboard': 'dashboard.html',
        'metas': 'metas.html',
        'regional': 'regional.html',
        'home': 'contexto.html',
        'cedula': 'cedula.html',
        'callcenter': 'callcenter.html',
        'calendar': 'calendario.html',
        'acciones': 'acciones.html',
        'history': 'historico.html',
        'documento': 'documento.html'
    };
    
    if (views[viewName]) {
        window.location.href = views[viewName];
    }
}


// --- MODAL FUNCTIONS ---
/* --- EN js/app.js --- */

// 1. Añade esta lista fija ANTES de la función openPendientesModal
const backupPendientes = [
    { name: "Pilar Adame Muñoz", municipio: "Bachiniva" },
    { name: "Nora Vely Velez Saenz", municipio: "Camargo" },
    { name: "Adrian Duran Mendoza", municipio: "Chihuahua" },
    { name: "Karen Guadalupe Fierro Garcia", municipio: "Chihuahua" },
    { name: "Marlene Yareli Hernandez Milian", municipio: "Chihuahua" },
    { name: "Silvia Susana Marin Olivas", municipio: "Chihuahua" },
    { name: "Enrique Ramirez Peña", municipio: "Chihuahua" },
    { name: "Fabian Cardoso Bermeo", municipio: "Chihuahua" },
    { name: "David Leyva Lopez", municipio: "Chihuahua" },
    { name: "Luis Fernando Lopez Abarca", municipio: "Chihuahua" },
    { name: "Claudia Berenice Hernandez", municipio: "Chihuahua" }
];

function openPendientesModal() {
            const modal = document.getElementById('pendientesModal');
            const listContainer = document.getElementById('pendientesListContainer');
            const emptyMsg = document.getElementById('emptyPendientesMsg');
            
            listContainer.innerHTML = '';
            
            if (globalPendientes.length === 0) {
                emptyMsg.classList.remove('hidden');
                emptyMsg.classList.add('flex');
            } else {
                emptyMsg.classList.add('hidden');
                emptyMsg.classList.remove('flex');
                
                globalPendientes.forEach(p => {
                    const tr = document.createElement('tr');
                    tr.className = "hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors";
                    tr.innerHTML = `
                        <td class="px-6 py-4 font-medium text-text-main dark:text-white">${p.name}</td>
                        <td class="px-6 py-4 text-text-sub dark:text-gray-300">${p.municipio}</td>
                    `;
                    listContainer.appendChild(tr);
                });
            }
            
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

function closePendientesModal() {
    const modal = document.getElementById('pendientesModal');
    if(modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function openGeneralMap() {
    const modal = document.getElementById('mapModal');
    const iframe = document.getElementById('generalMapFrame');
    if (iframe && !iframe.src) iframe.src = GENERAL_MAP_URL;
    if(modal) modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; 
}

function closeGeneralMap() {
    const modal = document.getElementById('mapModal');
    if(modal) modal.classList.add('hidden');
    document.body.style.overflow = ''; 
}

// --- CAROUSEL ---
function renderDistrictsCarousel(data) {
    const container = document.getElementById('districtsContainer');
    if(!container) return;
    container.innerHTML = '';
    
    data.forEach(dist => {
        const card = document.createElement('div');
        // Updated to use glass-morphism and removed bg-white/95 to match index.html aesthetic
        card.className = "flex-none w-72 md:w-80 glass-morphism rounded-xl p-6 flex flex-col items-center justify-center gap-4 snap-center transition-all hover:-translate-y-1 hover:shadow-xl";
        
        const distIdKey = String(parseInt(String(dist.id).replace(/\D/g, ''), 10)); 
        const munis = districtMunicipiosMap[distIdKey] || [];
        
        let footerHtml = '';
        if (munis.length > 0) {
            const options = munis.map(m => `<option value="${m.link}">${m.name}</option>`).join('');
            footerHtml = `
                <div class="mt-2 w-full flex flex-col gap-3">
                    <a href="${dist.url}" target="_blank" class="w-full text-center px-4 py-3 rounded-lg bg-gradient-to-r from-primary to-accent-blue text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                        Explorar Distrito <span class="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                    <div class="relative">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary/60 text-sm pointer-events-none">location_city</span>
                        <select onchange="if(this.value !== '#') window.open(this.value, '_blank')" class="w-full text-sm bg-white/50 border border-primary/10 text-slate-700 rounded-lg pl-9 pr-8 py-2 outline-none focus:ring-2 focus:ring-accent-blue/20 cursor-pointer appearance-none">
                            <option value="#" selected disabled>Ver Municipios...</option>
                            ${options}
                        </select>
                        <span class="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary/60 text-sm pointer-events-none">expand_more</span>
                    </div>
                </div>
            `;
        } else {
            footerHtml = `
                <a href="${dist.url}" target="_blank" class="mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent-blue text-white font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-accent-blue/40 hover:scale-105 transition-all flex items-center gap-2">
                    Explorar <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
            `;
        }

        card.innerHTML = `
            <div class="size-16 rounded-full bg-gradient-to-br from-primary to-accent-blue flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-primary/20">
                ${dist.id}
            </div>
            <div class="text-center">
                <h3 class="text-xl font-bold text-primary">Distrito Local ${dist.id}</h3>
            </div>
            ${footerHtml}
        `;
        container.appendChild(card);
    });
}

function scrollDistricts(direction) {
    const container = document.getElementById('districtsContainer');
    if(!container) return;
    if (direction === 'left') container.scrollBy({ left: -340, behavior: 'smooth' });
    else container.scrollBy({ left: 340, behavior: 'smooth' });
}

function startCarousel() {
    if (carouselInterval) clearInterval(carouselInterval);
    const container = document.getElementById('districtsContainer');
    if (!container) return;
    carouselInterval = setInterval(() => {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 50) container.scrollTo({ left: 0, behavior: 'smooth' });
        else container.scrollBy({ left: 340, behavior: 'smooth' });
    }, 3000);
}

function stopCarousel() { clearInterval(carouselInterval); }


// --- DATA WRITING / UPDATING ---
async function updateSheet(id, field, value, inputElement) {
    if(inputElement) inputElement.classList.add('saving-pulse');
    try {
        const row = globalData.find(r => r.id === id);
        if (row) {
            if (field === 'status') row.assigned = (value === 'assigned');
            else row[field] = value;
        }
        await fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify({ id, field, value })
        });
        showSaveConfirmation();
    } catch (error) {
        console.error("Save Error:", error);
        alert("Error al guardar en la nube.");
    } finally {
        if(inputElement) inputElement.classList.remove('saving-pulse');
    }
}

function showSaveConfirmation() {
    const el = document.getElementById('save-status');
    if(!el) return;
    el.classList.remove('hidden'); el.classList.add('flex');
    setTimeout(() => { el.classList.add('hidden'); el.classList.remove('flex'); }, 3000);
}

function handleStatusChange(select, id) {
    const isAssigned = select.value === 'assigned';
    const greenClass = "appearance-none cursor-pointer pl-3 pr-8 py-1.5 rounded-full text-xs font-bold border focus:ring-2 transition-all outline-none bg-green-100/80 text-green-700 border-green-200 backdrop-blur-sm shadow-sm";
    const grayClass = "appearance-none cursor-pointer pl-3 pr-8 py-1.5 rounded-full text-xs font-bold border focus:ring-2 transition-all outline-none bg-gray-100/80 dark:bg-white/10 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-sm";
    select.className = isAssigned ? greenClass : grayClass;
    updateSheet(id, 'status', select.value, select);
}

function updateSectionMapLink(select, mapAnchorId, rowMapLink) {
    const selectedSection = select.value;
    const mapAnchor = document.getElementById(mapAnchorId);
    const dataAnchorId = mapAnchorId.replace('map', 'data');
    const dataAnchor = document.getElementById(dataAnchorId);
    
    if(!mapAnchor || !dataAnchor) return;

    const sectionInfo = sectionMaps[selectedSection]; 
    let mapUrl = sectionInfo ? sectionInfo.map : null;
    let dataUrl = sectionInfo ? sectionInfo.data : null;

    if (!mapUrl && rowMapLink && rowMapLink !== '#' && rowMapLink.length > 5) {
        mapUrl = rowMapLink;
    }

    if (mapUrl && mapUrl !== '#') {
        mapAnchor.href = mapUrl;
        mapAnchor.classList.remove('opacity-50', 'pointer-events-none', 'grayscale');
        mapAnchor.classList.add('hover:scale-110', 'hover:shadow-lg');
        mapAnchor.title = sectionInfo ? `Ver mapa de sección ${selectedSection}` : "Ver mapa general de zona";
    } else {
        mapAnchor.removeAttribute('href');
        mapAnchor.classList.add('opacity-50', 'pointer-events-none', 'grayscale');
        mapAnchor.classList.remove('hover:scale-110', 'hover:shadow-lg');
    }
    
    if (dataUrl && dataUrl !== '#') {
        dataAnchor.href = dataUrl;
        dataAnchor.classList.remove('opacity-50', 'pointer-events-none', 'grayscale');
        dataAnchor.classList.add('hover:scale-110', 'hover:shadow-lg');
    } else {
        dataAnchor.removeAttribute('href');
        dataAnchor.classList.add('opacity-50', 'pointer-events-none', 'grayscale');
        dataAnchor.classList.remove('hover:scale-110', 'hover:shadow-lg');
    }
}


// --- FILTERS & DROPDOWNS ---
function toggleDistritoDropdown() {
    const content = document.getElementById('distritoDropdownContent');
    const arrow = document.getElementById('distritoArrow');
    if(!content || !arrow) return;
    
    content.classList.toggle('hidden'); content.classList.toggle('flex');
    arrow.style.transform = content.classList.contains('flex') ? 'rotate(180deg)' : 'rotate(0deg)';
    
    // Close other
    const other = document.getElementById('municipioDropdownContent');
    const otherArrow = document.getElementById('municipioArrow');
    if(other) { other.classList.add('hidden'); other.classList.remove('flex'); }
    if(otherArrow) otherArrow.style.transform = 'rotate(0deg)';
}

function toggleMunicipioDropdown() {
    const content = document.getElementById('municipioDropdownContent');
    const arrow = document.getElementById('municipioArrow');
    if(!content || !arrow) return;

    content.classList.toggle('hidden'); content.classList.toggle('flex');
    arrow.style.transform = content.classList.contains('flex') ? 'rotate(180deg)' : 'rotate(0deg)';
    
    // Close other
    const other = document.getElementById('distritoDropdownContent');
    const otherArrow = document.getElementById('distritoArrow');
    if(other) { other.classList.add('hidden'); other.classList.remove('flex'); }
    if(otherArrow) otherArrow.style.transform = 'rotate(0deg)';
}

function populateDistricts(districts) {
    const container = document.getElementById('distritosCheckboxContainer');
    if(!container) return;
    container.innerHTML = ''; 
    districts.sort((a, b) => {
        const numA = parseInt(a.replace(/\D/g, '')); const numB = parseInt(b.replace(/\D/g, ''));
        if(!isNaN(numA) && !isNaN(numB)) return numA - numB;
        return a.localeCompare(b);
    });
    districts.forEach(d => {
        const label = document.createElement('label');
        label.className = "flex items-center gap-3 px-4 py-2 hover:bg-primary/10 dark:hover:bg-white/10 cursor-pointer transition-colors";
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox"; checkbox.value = d;
        checkbox.className = "form-checkbox size-4 text-primary rounded border-gray-300 dark:border-gray-500 bg-white/50 focus:ring-primary cursor-pointer";
        checkbox.checked = selectedDistricts.has(d);
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) selectedDistricts.add(d); else selectedDistricts.delete(d);
            updateDistritoButtonLabel(); filterAndRender();
        });
        const span = document.createElement('span');
        span.textContent = d.startsWith('Distrito') ? d : `Distrito ${d}`;
        span.className = "text-sm font-medium text-text-main dark:text-gray-200";
        label.appendChild(checkbox); label.appendChild(span); container.appendChild(label);
    });
    updateDistritoButtonLabel();
}

function populateMunicipios(municipios) {
    const container = document.getElementById('municipiosCheckboxContainer');
    if(!container) return;
    container.innerHTML = ''; 
    municipios.sort((a, b) => a.localeCompare(b));
    municipios.forEach(m => {
        const label = document.createElement('label');
        label.className = "flex items-center gap-3 px-4 py-2 hover:bg-primary/10 dark:hover:bg-white/10 cursor-pointer transition-colors";
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox"; checkbox.value = m;
        checkbox.className = "form-checkbox size-4 text-primary rounded border-gray-300 dark:border-gray-500 bg-white/50 focus:ring-primary cursor-pointer";
        checkbox.checked = selectedMunicipios.has(m);
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) selectedMunicipios.add(m); else selectedMunicipios.delete(m);
            updateMunicipioButtonLabel(); filterAndRender();
        });
        const span = document.createElement('span');
        span.textContent = m;
        span.className = "text-sm font-medium text-text-main dark:text-gray-200";
        label.appendChild(checkbox); label.appendChild(span); container.appendChild(label);
    });
    updateMunicipioButtonLabel();
}

function updateDistritoButtonLabel() {
    const btnText = document.getElementById('distritoButtonText');
    if(!btnText) return;
    if (selectedDistricts.size === 0) btnText.textContent = "Todos los Distritos";
    else if (selectedDistricts.size === 1) { const d = Array.from(selectedDistricts)[0]; btnText.textContent = d.startsWith('Distrito') ? d : `Distrito ${d}`; } 
    else btnText.textContent = `${selectedDistricts.size} Distritos Selecc.`;
}

function updateMunicipioButtonLabel() {
    const btnText = document.getElementById('municipioButtonText');
    if(!btnText) return;
    if (selectedMunicipios.size === 0) btnText.textContent = "Todos los Municipios";
    else if (selectedMunicipios.size === 1) btnText.textContent = Array.from(selectedMunicipios)[0];
    else btnText.textContent = `${selectedMunicipios.size} Municipios Selecc.`;
}

function filterAndRender() {
    const searchInput = document.getElementById('searchInput');
    if(!searchInput) return;
    const searchTerm = searchInput.value.toLowerCase();
    const filtered = globalData.filter(item => {
        const sectionsStr = item.zoneSections.join(" ").toLowerCase();
        const matchesSearch = sectionsStr.includes(searchTerm) || (item.brigadista && item.brigadista.toLowerCase().includes(searchTerm)) || (item.id && String(item.id).toLowerCase().includes(searchTerm));
        const matchesDistrict = selectedDistricts.size === 0 || selectedDistricts.has(item.district);
        const matchesMunicipio = selectedMunicipios.size === 0 || selectedMunicipios.has(item.municipio);
        return matchesSearch && matchesDistrict && matchesMunicipio;
    });
    renderTable(filtered);
    const countEl = document.getElementById('result-count');
    if(countEl) countEl.textContent = filtered.length;
    updateStats(filtered);
}

function getInputClass(isAssigned) {
    const base = "w-full px-3 py-2 text-sm rounded-lg transition-all focus:ring-2 focus:ring-primary/50 outline-none backdrop-blur-sm ";
    return isAssigned ? base + "bg-transparent border-transparent hover:bg-white/40 dark:hover:bg-white/10 focus:bg-white/80 dark:focus:bg-slate-800/80 border hover:border-white/30" : base + "glass-input shadow-sm";
}

function renderTable(data) {
    const tableBody = document.getElementById('table-body');
    if(!tableBody) return;
    tableBody.innerHTML = '';
    if (data.length === 0) { tableBody.innerHTML = `<tr><td colspan="7" class="px-6 py-12 text-center text-text-sub font-medium">No se encontraron resultados</td></tr>`; return; }

    data.forEach(row => {
        const tr = document.createElement('tr');
        const isPending = !row.assigned;
        tr.className = `group transition-colors border-b border-gray-100/30 dark:border-white/5 hover:bg-white/40 dark:hover:bg-white/5 ${isPending ? 'bg-orange-50/20 dark:bg-orange-900/10' : ''}`;
        
        const inputClass = getInputClass(!isPending);
        const zoneOptions = row.zoneSections.map(sec => `<option value="${sec}">${sec}</option>`).join('');
        
        const statusBaseClass = "appearance-none cursor-pointer pl-3 pr-8 py-1.5 rounded-full text-xs font-bold border focus:ring-2 transition-all outline-none shadow-sm backdrop-blur-sm";
        const statusColorClass = row.assigned ? "bg-green-100/80 text-green-700 border-green-200 focus:ring-green-500" : "bg-gray-100/80 dark:bg-white/10 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-white/10 focus:ring-gray-500";

        const mapAnchorId = `map-link-${row.id}`;
        const dataAnchorId = `data-link-${row.id}`; 

        tr.innerHTML = `
            <td class="px-6 py-4 align-middle font-mono text-xs text-text-sub font-bold opacity-60">${row.order}</td>
            <td class="px-6 py-4 align-middle"><span class="text-xs font-extrabold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md whitespace-nowrap shadow-sm backdrop-blur-sm">${row.id}</span></td>
            <td class="px-6 py-4 align-middle">
                <div class="flex items-center gap-2">
                    <select onchange="updateSectionMapLink(this, '${mapAnchorId}', '${row.mapLink}')" class="w-full bg-transparent border-none text-sm font-bold text-text-main dark:text-white p-0 focus:ring-0 cursor-pointer appearance-none truncate pr-4 outline-none">${zoneOptions}</select>
                    <a id="${mapAnchorId}" href="#" target="_blank" class="flex items-center justify-center size-8 rounded-full bg-blue-50 border border-blue-200 text-blue-600 shadow-sm hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 group/btn" title="Ver mapa"><span class="material-symbols-outlined text-[18px] group-hover/btn:scale-110 transition-transform">public</span></a>
                    <a id="${dataAnchorId}" href="#" target="_blank" class="flex items-center justify-center size-8 rounded-full bg-purple-50 border border-purple-200 text-purple-600 shadow-sm hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200 group/btn opacity-50 pointer-events-none grayscale" title="Ver datos electorales"><span class="material-symbols-outlined text-[18px] group-hover/btn:scale-110 transition-transform">analytics</span></a>
                </div>
                <div class="text-[10px] font-semibold text-text-sub/70 mt-0.5 truncate max-w-[200px] flex items-center gap-1"><span class="size-1.5 rounded-full bg-primary/50"></span>Distrito: ${row.district || 'N/A'} | ${row.municipio || 'N/A'}</div>
            </td>
            <td class="px-6 py-4 align-middle">
                    <div class="relative inline-block">
                    <select onchange="handleStatusChange(this, '${row.id}')" class="${statusBaseClass} ${statusColorClass}">
                        <option value="pending" ${!row.assigned ? 'selected' : ''}>Pendiente</option>
                        <option value="assigned" ${row.assigned ? 'selected' : ''}>Asignada</option>
                    </select>
                </div>
            </td>
            <td class="px-6 py-4 align-middle"><input class="${inputClass}" placeholder="Nombre" type="text" value="${row.brigadista || ''}" onchange="updateSheet('${row.id}', 'brigadista', this.value, this)"/></td>
            <td class="px-6 py-4 align-middle"><input class="${inputClass}" placeholder="Teléfono" type="tel" value="${row.phone || ''}" onchange="updateSheet('${row.id}', 'phone', this.value, this)"/></td>
            <td class="px-6 py-4 align-middle text-center">
                ${row.mapLink && row.mapLink !== '#' && row.mapLink.length > 5
                    ? `<a href="${row.mapLink}" target="_blank" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all shadow-sm hover:shadow-emerald-500/30 font-semibold text-xs group/map"><span class="material-symbols-outlined text-[16px] group-hover/map:animate-bounce">map</span>Ver Ubicación</a>`
                    : `<span class="inline-flex items-center justify-center size-8 rounded-full bg-gray-100/50 dark:bg-white/5 text-gray-300 cursor-not-allowed"><span class="material-symbols-outlined text-[18px]">map_off</span></span>`
                }
            </td>
        `;
        tableBody.appendChild(tr);
        const selectEl = tr.querySelector('select');
        if (selectEl) updateSectionMapLink(selectEl, mapAnchorId, row.mapLink);
    });
}

function updateStats(data) {
    const total = document.getElementById('stat-total-zonas');
    const asig = document.getElementById('stat-asignadas');
    const pend = document.getElementById('stat-pendientes');
    
    if(total) total.textContent = data.length;
    const assigned = data.filter(d => d.assigned).length;
    if(asig) asig.textContent = assigned;
    if(pend) pend.textContent = data.length - assigned;
}
/* --- LÓGICA PARA LA VISTA DE ACCIONES (PESTAÑAS) --- */
function switchAccionesTab(tabName) {
    // 1. Ocultar todos los contenidos
    const tabs = ['apoyos', 'salud', 'vulnerables', 'lluvias'];
    
    tabs.forEach(t => {
        const content = document.getElementById(`acc-content-${t}`);
        const btn = document.getElementById(`btn-acc-${t}`);
        
        if (content) content.classList.add('hidden');
        
        if (btn) {
            // Quitar estilos de "activo" (Azul)
            btn.classList.remove('bg-primary', 'text-white', 'shadow-lg', 'shadow-primary/30', 'scale-105');
            // Poner estilos de "inactivo" (Blanco/Gris)
            btn.classList.add('bg-white', 'text-text-sub', 'border', 'border-gray-200');
        }
    });

    // 2. Mostrar el seleccionado
    const selectedContent = document.getElementById(`acc-content-${tabName}`);
    const selectedBtn = document.getElementById(`btn-acc-${tabName}`);

    if (selectedContent) {
        selectedContent.classList.remove('hidden');
    }

    if (selectedBtn) {
        // Poner estilos de "activo"
        selectedBtn.classList.remove('bg-white', 'text-text-sub', 'border', 'border-gray-200');
        selectedBtn.classList.add('bg-primary', 'text-white', 'shadow-lg', 'shadow-primary/30', 'scale-105');
    }
}

function switchBeneficiariosTab(tabName) {
    const tabs = ['cobertura', 'estancias', 'vulnerables', 'comedores', 'cursos'];
    
    tabs.forEach(t => {
        const content = document.getElementById(`ben-content-${t}`);
        const btn = document.getElementById(`btn-ben-${t}`);
        
        if (content) {
            content.classList.add('hidden');
            content.classList.remove('block');
        }
        
        if (btn) {
            btn.classList.remove('bg-primary', 'text-white', 'shadow-lg', 'shadow-primary/30', 'scale-105');
            btn.classList.add('bg-white', 'text-slate-500', 'border', 'border-slate-200');
        }
    });

    const selectedContent = document.getElementById(`ben-content-${tabName}`);
    const selectedBtn = document.getElementById(`btn-ben-${tabName}`);

    if (selectedContent) {
        selectedContent.classList.remove('hidden');
        selectedContent.classList.add('block');
    }

    if (selectedBtn) {
        selectedBtn.classList.remove('bg-white', 'text-slate-500', 'border', 'border-slate-200');
        selectedBtn.classList.add('bg-primary', 'text-white', 'shadow-lg', 'shadow-primary/30', 'scale-105');
    }
}

function switchVulnerablesSubTab(subTabName) {
    const tabs = ['adulto', 'discapacidad', 'situacion'];

    tabs.forEach(t => {
        const content = document.getElementById(`vul-content-${t}`);
        const btn = document.getElementById(`btn-vul-${t}`);

        if (content) {
            content.classList.add('hidden');
            content.classList.remove('block');
        }

        if (btn) {
            btn.classList.remove('bg-white', 'text-primary', 'shadow-sm');
            btn.classList.add('text-slate-500', 'hover:bg-white/50');
        }
    });

    const selectedContent = document.getElementById(`vul-content-${subTabName}`);
    const selectedBtn = document.getElementById(`btn-vul-${subTabName}`);

    if (selectedContent) {
        selectedContent.classList.remove('hidden');
        selectedContent.classList.add('block');
    }

    if (selectedBtn) {
        selectedBtn.classList.remove('text-slate-500', 'hover:bg-white/50');
        selectedBtn.classList.add('bg-white', 'text-primary', 'shadow-sm');
    }
}

function toggleNavDropdown() {
    const dropdown = document.getElementById('nav-dropdown');
    const arrow = document.getElementById('nav-arrow');
    if(dropdown) {
        dropdown.classList.toggle('hidden');
        if(arrow) {
            arrow.style.transform = dropdown.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
        }
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('nav-dropdown');
    const button = document.getElementById('nav-dropdown-btn');
    if (dropdown && !dropdown.classList.contains('hidden') && button && !button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.add('hidden');
        const arrow = document.getElementById('nav-arrow');
        if(arrow) arrow.style.transform = 'rotate(0deg)';
    }
});

function toggleDocumentoTab(tabName) {
    const tabDocs = document.getElementById('tab-documentacion');
    const tabMetodo = document.getElementById('tab-metodo');
    const btnDocs = document.getElementById('btn-tab-docs');
    const btnMetodo = document.getElementById('btn-tab-metodo');

    if (!tabDocs || !tabMetodo) return;

    if (tabName === 'documentacion') {
        tabDocs.classList.remove('hidden');
        tabMetodo.classList.add('hidden');
        
        btnDocs.classList.add('bg-white', 'text-primary', 'shadow-md');
        btnDocs.classList.remove('bg-transparent', 'text-text-sub', 'hover:bg-white/50');
        
        btnMetodo.classList.remove('bg-white', 'text-primary', 'shadow-md');
        btnMetodo.classList.add('bg-transparent', 'text-text-sub', 'hover:bg-white/50');
    } else {
        tabDocs.classList.add('hidden');
        tabMetodo.classList.remove('hidden');

        btnMetodo.classList.add('bg-white', 'text-primary', 'shadow-md');
        btnMetodo.classList.remove('bg-transparent', 'text-text-sub', 'hover:bg-white/50');
        
        btnDocs.classList.remove('bg-white', 'text-primary', 'shadow-md');
        btnDocs.classList.add('bg-transparent', 'text-text-sub', 'hover:bg-white/50');
    }
}
