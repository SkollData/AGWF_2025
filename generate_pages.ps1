
# Template function for generating page HTML files
$baseDir = "c:\Users\SVCPP\OneDrive\Respaldo PC\Escritorio\Landing"

$menuItems = @(
    @{name="Metas"; file="metas.html"; icon="flag"},
    @{name="Calendario"; file="calendario.html"; icon="calendar_month"},
    @{name="Acciones"; file="acciones.html"; icon="bolt"},
    @{name="Call Center"; file="callcenter.html"; icon="call"},
    @{name="Regiones"; file="regiones.html"; icon="map"},
    @{name="Zonas"; file="zonas.html"; icon="location_on"},
    @{name="Histórico"; file="historico.html"; icon="history"},
    @{name="Beneficiarios"; file="beneficiarios.html"; icon="people"},
    @{name="Amigos"; file="amigos.html"; icon="handshake"},
    @{name="Cédula"; file="cedula.html"; icon="badge"},
    @{name="Metodología"; file="metodologia.html"; icon="science"},
    @{name="Contexto"; file="contexto.html"; icon="info"}
)

function Get-MenuHtml($activeName) {
    $html = ""
    foreach ($item in $menuItems) {
        if ($item.name -eq $activeName) {
            $html += "<a href=`"$($item.file)`" class=`"menu-item flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/5 group`"><span class=`"material-symbols-outlined text-primary`">$($item.icon)</span><span class=`"font-semibold text-primary`">$($item.name)</span></a>`n"
        } else {
            $html += "<a href=`"$($item.file)`" class=`"menu-item flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/5 transition-colors group`"><span class=`"material-symbols-outlined text-accent-blue`">$($item.icon)</span><span class=`"font-semibold text-slate-700 group-hover:text-primary transition-colors`">$($item.name)</span></a>`n"
        }
    }
    return $html
}

function Get-PageHtml($title, $activeMenu, $description, $bodyContent) {
    $menuHtml = Get-MenuHtml $activeMenu
    return @"
<!DOCTYPE html>
<html lang="es"><head><meta charset="utf-8"/><meta content="width=device-width, initial-scale=1.0" name="viewport"/><title>$title | VotoAnalitico</title><meta name="description" content="$description"/><script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/><script>tailwind.config={darkMode:"class",theme:{extend:{colors:{"primary":"#1a3c6b","accent-blue":"#2196f3","background-light":"#f6f7f8","background-dark":"#0d1b2a"},fontFamily:{"display":["Inter","sans-serif"]}}}}</script><style>.glass-morphism{background:rgba(255,255,255,0.7);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.3)}.hero-gradient{background:linear-gradient(135deg,#1a3c6b 0%,#2196f3 100%);position:relative;overflow:hidden}.hero-gradient::before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background-image:radial-gradient(#ffffff22 1px,transparent 1px);background-size:30px 30px;opacity:0.3}.slide-menu{transform:translateX(100%);transition:transform 0.35s cubic-bezier(0.4,0,0.2,1)}.slide-menu.open{transform:translateX(0)}.menu-overlay{opacity:0;pointer-events:none;transition:opacity 0.35s ease}.menu-overlay.open{opacity:1;pointer-events:all}.menu-item{transform:translateX(20px);opacity:0;transition:all 0.3s ease}.slide-menu.open .menu-item{transform:translateX(0);opacity:1}.slide-menu.open .menu-item:nth-child(1){transition-delay:.08s}.slide-menu.open .menu-item:nth-child(2){transition-delay:.12s}.slide-menu.open .menu-item:nth-child(3){transition-delay:.16s}.slide-menu.open .menu-item:nth-child(4){transition-delay:.20s}.slide-menu.open .menu-item:nth-child(5){transition-delay:.24s}.slide-menu.open .menu-item:nth-child(6){transition-delay:.28s}.slide-menu.open .menu-item:nth-child(7){transition-delay:.32s}.slide-menu.open .menu-item:nth-child(8){transition-delay:.36s}.slide-menu.open .menu-item:nth-child(9){transition-delay:.40s}.slide-menu.open .menu-item:nth-child(10){transition-delay:.44s}.slide-menu.open .menu-item:nth-child(11){transition-delay:.48s}.slide-menu.open .menu-item:nth-child(12){transition-delay:.52s}</style></head>
<body class="font-display bg-background-light text-slate-900 overflow-x-hidden">
<div id="menuOverlay" class="menu-overlay fixed inset-0 bg-black/50 z-[60]" onclick="toggleMenu()"></div>
<div id="slideMenu" class="slide-menu fixed top-0 right-0 h-full w-80 bg-white z-[70] shadow-2xl flex flex-col"><div class="flex items-center justify-between px-6 py-6 border-b border-slate-100"><div class="flex items-center gap-2"><div class="bg-primary p-1.5 rounded-lg text-white"><span class="material-symbols-outlined text-lg">query_stats</span></div><span class="font-extrabold text-primary tracking-tight">MENU</span></div><button onclick="toggleMenu()" class="p-2 hover:bg-slate-100 rounded-full transition-colors"><span class="material-symbols-outlined text-slate-500">close</span></button></div><nav class="flex-1 overflow-y-auto py-4 px-4">
$menuHtml
</nav><div class="px-6 py-4 border-t border-slate-100"><p class="text-xs text-slate-400 tracking-wider uppercase">2027 VotoAnalitico</p></div></div>
<nav class="fixed top-0 w-full z-50 glass-morphism border-b border-primary/10"><div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"><a href="index.html" class="flex items-center gap-3"><div class="bg-primary p-2 rounded-lg text-white"><span class="material-symbols-outlined text-2xl">query_stats</span></div><h1 class="text-xl font-extrabold tracking-tight text-primary uppercase">VotoAnalitico</h1></a><div class="flex items-center gap-6"><a href="index.html" class="hidden md:block text-sm font-semibold text-primary/80 hover:text-primary transition-colors">Inicio</a><button onclick="toggleMenu()" class="p-2 hover:bg-primary/5 rounded-full transition-colors"><span class="material-symbols-outlined text-primary">menu</span></button></div></div></nav>
<section class="hero-gradient pt-32 pb-20 px-6"><div class="max-w-7xl mx-auto relative z-10"><div class="flex items-center gap-3 text-white/60 text-sm mb-4"><a href="index.html" class="hover:text-white transition-colors">Inicio</a><span class="material-symbols-outlined text-xs">chevron_right</span><span class="text-white">$title</span></div><h1 class="text-white text-4xl md:text-5xl font-black tracking-tighter">$title</h1><p class="text-white/70 mt-4 max-w-2xl">$description</p></div></section>
<section class="px-6 -mt-10 relative z-20 pb-20"><div class="max-w-7xl mx-auto">
$bodyContent
</div></section>
<footer class="bg-background-dark text-white py-12 px-6"><div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4"><div class="flex items-center gap-3"><span class="material-symbols-outlined text-accent-blue">query_stats</span><span class="font-black uppercase tracking-tight">VotoAnalitico</span></div><p class="text-white/30 text-xs tracking-widest uppercase">2027 VotoAnalitico. Todos los derechos reservados.</p></div></footer>
<script>function toggleMenu(){document.getElementById('slideMenu').classList.toggle('open');document.getElementById('menuOverlay').classList.toggle('open');document.body.style.overflow=document.getElementById('slideMenu').classList.contains('open')?'hidden':''}document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.getElementById('slideMenu').classList.remove('open');document.getElementById('menuOverlay').classList.remove('open');document.body.style.overflow=''}})</script>
</body></html>
"@
}

# --- CALL CENTER ---
$callcenterBody = @"
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div class="glass-morphism p-6 rounded-xl shadow-lg"><div class="flex items-center gap-3 mb-3"><div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center"><span class="material-symbols-outlined text-green-600">call</span></div><p class="text-sm font-bold text-slate-500">Llamadas Hoy</p></div><h3 class="text-3xl font-black text-primary">347</h3></div>
<div class="glass-morphism p-6 rounded-xl shadow-lg"><div class="flex items-center gap-3 mb-3"><div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"><span class="material-symbols-outlined text-accent-blue">person</span></div><p class="text-sm font-bold text-slate-500">Contactos Nuevos</p></div><h3 class="text-3xl font-black text-primary">89</h3></div>
<div class="glass-morphism p-6 rounded-xl shadow-lg"><div class="flex items-center gap-3 mb-3"><div class="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center"><span class="material-symbols-outlined text-amber-600">timer</span></div><p class="text-sm font-bold text-slate-500">Tiempo Promedio</p></div><h3 class="text-3xl font-black text-primary">4:32</h3></div>
<div class="glass-morphism p-6 rounded-xl shadow-lg"><div class="flex items-center gap-3 mb-3"><div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center"><span class="material-symbols-outlined text-purple-600">trending_up</span></div><p class="text-sm font-bold text-slate-500">Tasa de Exito</p></div><h3 class="text-3xl font-black text-primary">73%</h3></div>
</div>
<div class="glass-morphism rounded-xl p-12 text-center shadow-lg"><span class="material-symbols-outlined text-6xl text-accent-blue/30 mb-4">call</span><h3 class="text-xl font-bold text-primary mb-2">Centro de Llamadas</h3><p class="text-slate-500 max-w-md mx-auto">Panel de monitoreo del call center. Aqui se mostraran los indicadores de rendimiento y bitacora de llamadas.</p></div>
"@
$callcenterHtml = Get-PageHtml "Call Center" "Call Center" "Monitoreo y metricas del centro de llamadas electoral." $callcenterBody
[System.IO.File]::WriteAllText("$baseDir\callcenter.html", $callcenterHtml, [System.Text.Encoding]::UTF8)

# --- REGIONES ---
$regionesBody = @"
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div class="glass-morphism p-8 rounded-xl shadow-lg hover:-translate-y-1 transition-all cursor-pointer"><div class="w-12 h-12 bg-gradient-to-br from-primary to-accent-blue rounded-lg flex items-center justify-center text-white mb-4"><span class="material-symbols-outlined">north</span></div><h3 class="text-lg font-extrabold text-primary">Region Norte</h3><p class="text-slate-500 text-sm mt-2">4 zonas activas</p><div class="mt-4 h-1 bg-slate-200 rounded-full"><div class="h-full bg-accent-blue rounded-full" style="width:78%"></div></div><p class="text-xs text-right text-primary/60 mt-1">78% avance</p></div>
<div class="glass-morphism p-8 rounded-xl shadow-lg hover:-translate-y-1 transition-all cursor-pointer"><div class="w-12 h-12 bg-gradient-to-br from-primary to-accent-blue rounded-lg flex items-center justify-center text-white mb-4"><span class="material-symbols-outlined">widgets</span></div><h3 class="text-lg font-extrabold text-primary">Region Centro</h3><p class="text-slate-500 text-sm mt-2">5 zonas activas</p><div class="mt-4 h-1 bg-slate-200 rounded-full"><div class="h-full bg-accent-blue rounded-full" style="width:65%"></div></div><p class="text-xs text-right text-primary/60 mt-1">65% avance</p></div>
<div class="glass-morphism p-8 rounded-xl shadow-lg hover:-translate-y-1 transition-all cursor-pointer"><div class="w-12 h-12 bg-gradient-to-br from-primary to-accent-blue rounded-lg flex items-center justify-center text-white mb-4"><span class="material-symbols-outlined">south</span></div><h3 class="text-lg font-extrabold text-primary">Region Sur</h3><p class="text-slate-500 text-sm mt-2">3 zonas activas</p><div class="mt-4 h-1 bg-slate-200 rounded-full"><div class="h-full bg-accent-blue rounded-full" style="width:82%"></div></div><p class="text-xs text-right text-primary/60 mt-1">82% avance</p></div>
</div>
<div class="glass-morphism rounded-xl p-12 text-center shadow-lg"><span class="material-symbols-outlined text-6xl text-accent-blue/30 mb-4">map</span><h3 class="text-xl font-bold text-primary mb-2">Mapa de Regiones</h3><p class="text-slate-500 max-w-md mx-auto">Visualizacion interactiva de regiones territoriales y su avance operativo.</p></div>
"@
$regionesHtml = Get-PageHtml "Regiones" "Regiones" "Analisis y seguimiento de regiones territoriales electorales." $regionesBody
[System.IO.File]::WriteAllText("$baseDir\regiones.html", $regionesHtml, [System.Text.Encoding]::UTF8)

# --- ZONAS ---
$zonasBody = @"
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
<div class="glass-morphism p-6 rounded-xl shadow-lg"><p class="text-sm font-bold text-primary/50 uppercase tracking-wider">Total Zonas</p><h3 class="text-3xl font-black text-primary mt-2">156</h3></div>
<div class="glass-morphism p-6 rounded-xl shadow-lg"><p class="text-sm font-bold text-primary/50 uppercase tracking-wider">Zonas Cubiertas</p><h3 class="text-3xl font-black text-green-600 mt-2">128</h3></div>
<div class="glass-morphism p-6 rounded-xl shadow-lg"><p class="text-sm font-bold text-primary/50 uppercase tracking-wider">Por Cubrir</p><h3 class="text-3xl font-black text-amber-600 mt-2">28</h3></div>
</div>
<div class="glass-morphism rounded-xl p-12 text-center shadow-lg"><span class="material-symbols-outlined text-6xl text-accent-blue/30 mb-4">location_on</span><h3 class="text-xl font-bold text-primary mb-2">Detalle de Zonas Territoriales</h3><p class="text-slate-500 max-w-md mx-auto">Panel de gestion y monitoreo por zona. Se agregara informacion detallada de cada zona territorial.</p></div>
"@
$zonasHtml = Get-PageHtml "Zonas" "Zonas" "Gestion y monitoreo de zonas territoriales electorales." $zonasBody
[System.IO.File]::WriteAllText("$baseDir\zonas.html", $zonasHtml, [System.Text.Encoding]::UTF8)

# --- HISTORICO ---
$historicoBody = @"
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div class="glass-morphism p-6 rounded-xl shadow-lg"><p class="text-sm font-bold text-primary/50 uppercase tracking-wider">Eleccion 2021</p><h3 class="text-2xl font-black text-primary mt-2">45.2%</h3><p class="text-xs text-green-600 font-bold mt-1">+3.1% vs 2018</p></div>
<div class="glass-morphism p-6 rounded-xl shadow-lg"><p class="text-sm font-bold text-primary/50 uppercase tracking-wider">Eleccion 2024</p><h3 class="text-2xl font-black text-primary mt-2">52.8%</h3><p class="text-xs text-green-600 font-bold mt-1">+7.6% vs 2021</p></div>
<div class="glass-morphism p-6 rounded-xl shadow-lg"><p class="text-sm font-bold text-primary/50 uppercase tracking-wider">Participacion</p><h3 class="text-2xl font-black text-primary mt-2">67.3%</h3><p class="text-xs text-slate-500 font-bold mt-1">Promedio historico</p></div>
<div class="glass-morphism p-6 rounded-xl shadow-lg"><p class="text-sm font-bold text-primary/50 uppercase tracking-wider">Tendencia 2027</p><h3 class="text-2xl font-black text-accent-blue mt-2">58.4%</h3><p class="text-xs text-accent-blue font-bold mt-1">Proyeccion</p></div>
</div>
<div class="glass-morphism rounded-xl p-12 text-center shadow-lg"><span class="material-symbols-outlined text-6xl text-accent-blue/30 mb-4">history</span><h3 class="text-xl font-bold text-primary mb-2">Datos Historicos</h3><p class="text-slate-500 max-w-md mx-auto">Analisis de tendencias electorales historicas y proyecciones basadas en datos de elecciones anteriores.</p></div>
"@
$historicoHtml = Get-PageHtml "Historico" "Histórico" "Analisis de datos historicos electorales y tendencias." $historicoBody
[System.IO.File]::WriteAllText("$baseDir\historico.html", $historicoHtml, [System.Text.Encoding]::UTF8)

# --- BENEFICIARIOS ---
$beneficiariosBody = @"
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div class="glass-morphism p-6 rounded-xl shadow-lg"><div class="flex items-center gap-3 mb-3"><div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"><span class="material-symbols-outlined text-accent-blue">groups</span></div><p class="text-sm font-bold text-slate-500">Total Registrados</p></div><h3 class="text-3xl font-black text-primary">24,853</h3></div>
<div class="glass-morphism p-6 rounded-xl shadow-lg"><div class="flex items-center gap-3 mb-3"><div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center"><span class="material-symbols-outlined text-green-600">verified</span></div><p class="text-sm font-bold text-slate-500">Verificados</p></div><h3 class="text-3xl font-black text-primary">18,421</h3></div>
<div class="glass-morphism p-6 rounded-xl shadow-lg"><div class="flex items-center gap-3 mb-3"><div class="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center"><span class="material-symbols-outlined text-amber-600">pending_actions</span></div><p class="text-sm font-bold text-slate-500">En Revision</p></div><h3 class="text-3xl font-black text-primary">4,127</h3></div>
<div class="glass-morphism p-6 rounded-xl shadow-lg"><div class="flex items-center gap-3 mb-3"><div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center"><span class="material-symbols-outlined text-purple-600">person_add</span></div><p class="text-sm font-bold text-slate-500">Nuevos / Semana</p></div><h3 class="text-3xl font-black text-primary">312</h3></div>
</div>
<div class="glass-morphism rounded-xl p-12 text-center shadow-lg"><span class="material-symbols-outlined text-6xl text-accent-blue/30 mb-4">people</span><h3 class="text-xl font-bold text-primary mb-2">Registro de Beneficiarios</h3><p class="text-slate-500 max-w-md mx-auto">Base de datos de beneficiarios con geolocalizacion y seguimiento de verificacion.</p></div>
"@
$beneficiariosHtml = Get-PageHtml "Beneficiarios" "Beneficiarios" "Registro y seguimiento de beneficiarios del programa electoral." $beneficiariosBody
[System.IO.File]::WriteAllText("$baseDir\beneficiarios.html", $beneficiariosHtml, [System.Text.Encoding]::UTF8)

# --- AMIGOS ---
$amigosBody = @"
<div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
<div class="glass-morphism p-6 rounded-xl shadow-lg text-center"><span class="material-symbols-outlined text-4xl text-accent-blue mb-2">diversity_3</span><h3 class="text-3xl font-black text-primary">8,547</h3><p class="text-sm text-slate-500 font-semibold">Red de Amigos</p></div>
<div class="glass-morphism p-6 rounded-xl shadow-lg text-center"><span class="material-symbols-outlined text-4xl text-green-500 mb-2">hub</span><h3 class="text-3xl font-black text-primary">156</h3><p class="text-sm text-slate-500 font-semibold">Nodos Activos</p></div>
<div class="glass-morphism p-6 rounded-xl shadow-lg text-center"><span class="material-symbols-outlined text-4xl text-amber-500 mb-2">volunteer_activism</span><h3 class="text-3xl font-black text-primary">2,340</h3><p class="text-sm text-slate-500 font-semibold">Compromisos</p></div>
</div>
<div class="glass-morphism rounded-xl p-12 text-center shadow-lg"><span class="material-symbols-outlined text-6xl text-accent-blue/30 mb-4">handshake</span><h3 class="text-xl font-bold text-primary mb-2">Red de Amigos</h3><p class="text-slate-500 max-w-md mx-auto">Gestion de la red de contactos y aliados estrategicos en territorio.</p></div>
"@
$amigosHtml = Get-PageHtml "Amigos" "Amigos" "Gestion de la red de amigos y aliados estrategicos." $amigosBody
[System.IO.File]::WriteAllText("$baseDir\amigos.html", $amigosHtml, [System.Text.Encoding]::UTF8)

# --- CEDULA ---
$cedulaBody = @"
<div class="glass-morphism rounded-xl p-8 shadow-lg mb-8">
<h3 class="text-lg font-bold text-primary mb-6">Formulario de Cedula</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div><label class="block text-sm font-semibold text-slate-600 mb-2">Nombre Completo</label><input type="text" class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all outline-none" placeholder="Nombre del ciudadano"/></div>
<div><label class="block text-sm font-semibold text-slate-600 mb-2">Seccion Electoral</label><input type="text" class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all outline-none" placeholder="No. de seccion"/></div>
<div><label class="block text-sm font-semibold text-slate-600 mb-2">Zona</label><select class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all outline-none"><option>Seleccionar zona...</option><option>Zona Norte</option><option>Zona Centro</option><option>Zona Sur</option></select></div>
<div><label class="block text-sm font-semibold text-slate-600 mb-2">Telefono</label><input type="tel" class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all outline-none" placeholder="10 digitos"/></div>
</div>
<div class="mt-6"><label class="block text-sm font-semibold text-slate-600 mb-2">Observaciones</label><textarea class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all outline-none h-24 resize-none" placeholder="Notas adicionales..."></textarea></div>
<button class="mt-6 bg-gradient-to-r from-primary to-accent-blue text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all">Guardar Cedula</button>
</div>
<div class="glass-morphism rounded-xl p-12 text-center shadow-lg"><span class="material-symbols-outlined text-6xl text-accent-blue/30 mb-4">badge</span><h3 class="text-xl font-bold text-primary mb-2">Cedulas Registradas</h3><p class="text-slate-500 max-w-md mx-auto">Sistema de registro y consulta de cedulas ciudadanas con informacion electoral georreferenciada.</p></div>
"@
$cedulaHtml = Get-PageHtml "Cedula" "Cédula" "Registro y consulta de cedulas ciudadanas electorales." $cedulaBody
[System.IO.File]::WriteAllText("$baseDir\cedula.html", $cedulaHtml, [System.Text.Encoding]::UTF8)

# --- METODOLOGIA ---
$metodologiaBody = @"
<div class="glass-morphism rounded-xl p-8 shadow-lg mb-8">
<h3 class="text-2xl font-bold text-primary mb-6">Nuestro Enfoque Metodologico</h3>
<div class="space-y-6">
<div class="flex gap-4"><div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-accent-blue rounded-full flex items-center justify-center text-white font-bold text-sm">1</div><div><h4 class="font-bold text-primary text-lg">Recoleccion de Datos</h4><p class="text-slate-600 mt-1">Captura sistematica de informacion territorial mediante brigadas de campo, encuestas estructuradas y fuentes oficiales del INE.</p></div></div>
<div class="flex gap-4"><div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-accent-blue rounded-full flex items-center justify-center text-white font-bold text-sm">2</div><div><h4 class="font-bold text-primary text-lg">Procesamiento Geoespacial</h4><p class="text-slate-600 mt-1">Integracion de datos en capas SIG para analisis territorial con precision a nivel de seccion electoral y manzana.</p></div></div>
<div class="flex gap-4"><div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-accent-blue rounded-full flex items-center justify-center text-white font-bold text-sm">3</div><div><h4 class="font-bold text-primary text-lg">Modelado Predictivo</h4><p class="text-slate-600 mt-1">Aplicacion de algoritmos de machine learning para proyeccion de escenarios y deteccion de patrones electorales.</p></div></div>
<div class="flex gap-4"><div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-accent-blue rounded-full flex items-center justify-center text-white font-bold text-sm">4</div><div><h4 class="font-bold text-primary text-lg">Reportes Estrategicos</h4><p class="text-slate-600 mt-1">Generacion de informes ejecutivos con recomendaciones accionables para la toma de decisiones en campo.</p></div></div>
</div>
</div>
"@
$metodologiaHtml = Get-PageHtml "Metodologia" "Metodología" "Enfoque metodologico del analisis geoestadistico electoral." $metodologiaBody
[System.IO.File]::WriteAllText("$baseDir\metodologia.html", $metodologiaHtml, [System.Text.Encoding]::UTF8)

# --- CONTEXTO ---
$contextoBody = @"
<div class="glass-morphism rounded-xl p-8 shadow-lg mb-8">
<h3 class="text-2xl font-bold text-primary mb-6">Contexto Electoral 2027</h3>
<div class="prose max-w-none">
<p class="text-slate-600 leading-relaxed mb-4">El proceso electoral de 2027 representa un momento clave para la democracia mexicana. Con mas de 98 millones de ciudadanos registrados en el padron electoral, la competencia politica demanda herramientas de analisis sofisticadas que permitan comprender las dinamicas territoriales.</p>
<p class="text-slate-600 leading-relaxed mb-4">Nuestro estudio de analisis geoestadistico surge como respuesta a la necesidad de contar con inteligencia territorial precisa, oportuna y accionable. A traves del procesamiento de datos a nivel de seccion electoral, colonia y manzana, generamos insumos estrategicos de alto valor.</p>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="glass-morphism rounded-xl p-8 shadow-lg"><div class="w-12 h-12 bg-gradient-to-br from-primary to-accent-blue rounded-lg flex items-center justify-center text-white mb-4"><span class="material-symbols-outlined">public</span></div><h4 class="text-lg font-bold text-primary mb-2">Marco Geografico</h4><p class="text-slate-600 text-sm">Cobertura completa de distritos electorales federales y locales con segmentacion a nivel seccional.</p></div>
<div class="glass-morphism rounded-xl p-8 shadow-lg"><div class="w-12 h-12 bg-gradient-to-br from-primary to-accent-blue rounded-lg flex items-center justify-center text-white mb-4"><span class="material-symbols-outlined">analytics</span></div><h4 class="text-lg font-bold text-primary mb-2">Marco Analitico</h4><p class="text-slate-600 text-sm">Modelos estadisticos avanzados para la comprension de fenomenos electorales y tendencias demograficas.</p></div>
</div>
"@
$contextoHtml = Get-PageHtml "Contexto" "Contexto" "Contexto electoral y marco de referencia para el analisis 2027." $contextoBody
[System.IO.File]::WriteAllText("$baseDir\contexto.html", $contextoHtml, [System.Text.Encoding]::UTF8)

Write-Host "Se generaron exitosamente 9 archivos HTML:" -ForegroundColor Green
Write-Host "  - callcenter.html" 
Write-Host "  - regiones.html"
Write-Host "  - zonas.html"
Write-Host "  - historico.html"
Write-Host "  - beneficiarios.html"
Write-Host "  - amigos.html"
Write-Host "  - cedula.html"
Write-Host "  - metodologia.html"
Write-Host "  - contexto.html"
