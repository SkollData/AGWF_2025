import re
import os

# Updated Header with Home/Exit Button
UPDATED_HEADER = """<header class="sticky top-4 z-50 mx-4 md:mx-8 glass-panel rounded-2xl mt-4">
        <div class="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
            <div class="flex items-center gap-3 transition-transform hover:scale-[1.02] duration-300 cursor-default">
                <div class="p-2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-md shadow-blue-500/20 text-white">
                    <span class="material-symbols-outlined text-xl">shield_person</span>
                </div>
                <div class="flex flex-col">
                    <h1 class="text-sm font-black text-slate-800 dark:text-white leading-none tracking-tight">EJECUTIVO</h1>
                    <span class="text-[10px] font-bold text-blue-600 dark:text-blue-400 tracking-[0.15em] uppercase">Chalecos Azules 2025</span>
                </div>
            </div>
            
            <div class="relative z-50">
                <button onclick="toggleNavDropdown()" id="nav-dropdown-btn" class="flex items-center gap-2 px-6 py-2 bg-white/50 hover:bg-white rounded-full shadow-sm border border-white/20 text-sm font-bold text-text-main transition-all backdrop-blur-sm">
                    <span class="material-symbols-outlined text-primary">menu</span>
                    <span>Menú Principal</span>
                    <span id="nav-arrow" class="material-symbols-outlined text-gray-400 text-xs transition-transform duration-300">expand_more</span>
                </button>
                
                <div id="nav-dropdown" class="hidden absolute right-0 mt-2 w-72 glass-panel rounded-2xl shadow-2xl border border-white/60 p-2 flex flex-col gap-1 animate-in zoom-in-95 duration-200 origin-top-right z-50 max-h-[85vh] overflow-y-auto">
                    <div class="px-4 py-3 border-b border-gray-100 mb-1">
                        <span class="text-xs font-bold text-text-sub uppercase tracking-wider">Navegación</span>
                    </div>
                    <a href="metas.html" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/5 text-sm font-medium text-text-sub hover:text-primary transition-colors group">
                        <div class="flex flex-col">
                            <span class="font-bold text-text-main group-hover:text-primary">Metas</span>
                            <span class="text-[10px] text-gray-400">Objetivos y avances</span>
                        </div>
                    </a>
                    <a href="calendario.html" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/5 text-sm font-medium text-text-sub hover:text-primary transition-colors group">
                        <div class="flex flex-col">
                            <span class="font-bold text-text-main group-hover:text-primary">Calendario</span>
                            <span class="text-[10px] text-gray-400">Cronograma de actividades</span>
                        </div>
                    </a>
                    <a href="acciones.html" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/5 text-sm font-medium text-text-sub hover:text-primary transition-colors group">
                        <div class="flex flex-col">
                            <span class="font-bold text-text-main group-hover:text-primary">Acciones</span>
                            <span class="text-[10px] text-gray-400">Registro de actividades</span>
                        </div>
                    </a>
                    <a href="callcenter.html" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/5 text-sm font-medium text-text-sub hover:text-primary transition-colors group">
                        <div class="flex flex-col">
                            <span class="font-bold text-text-main group-hover:text-primary">Call Center</span>
                            <span class="text-[10px] text-gray-400">Gestión de llamadas</span>
                        </div>
                    </a>
                    <a href="regional.html" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/5 text-sm font-medium text-text-sub hover:text-primary transition-colors group">
                        <div class="flex flex-col">
                            <span class="font-bold text-text-main group-hover:text-primary">Regiones</span>
                            <span class="text-[10px] text-gray-400">Análisis regional</span>
                        </div>
                    </a>
                    <a href="dashboard.html" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/5 text-sm font-medium text-text-sub hover:text-primary transition-colors group">
                        <div class="flex flex-col">
                            <span class="font-bold text-text-main group-hover:text-primary">Zonas</span>
                            <span class="text-[10px] text-gray-400">Tablero de control</span>
                        </div>
                    </a>
                    <a href="cedula.html" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/5 text-sm font-medium text-text-sub hover:text-primary transition-colors group">
                        <div class="flex flex-col">
                            <span class="font-bold text-text-main group-hover:text-primary">Cédula</span>
                            <span class="text-[10px] text-gray-400">Identificación</span>
                        </div>
                    </a>
                    <a href="documento.html" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/5 text-sm font-medium text-text-sub hover:text-primary transition-colors group">
                        <div class="flex flex-col">
                            <span class="font-bold text-text-main group-hover:text-primary">Metodología</span>
                            <span class="text-[10px] text-gray-400">Documentación y Mapas</span>
                        </div>
                    </a>
                    <div class="h-px bg-gray-100 my-1"></div>
                    <a href="contexto.html" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/5 text-sm font-medium text-text-sub hover:text-primary transition-colors group">
                        <span class="font-bold text-text-main group-hover:text-primary">Contexto</span>
                    </a>
                    <a href="index.html" class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-sm font-medium text-text-sub hover:text-red-600 transition-colors group">
                        <span class="font-bold text-text-main group-hover:text-red-600">Salir</span>
                    </a>
                </div>
            </div>
        </div>
    </header>"""

# HTML Files to Update
files = [
    'metas.html', 'calendario.html', 'acciones.html', 'callcenter.html', 
    'regional.html', 'dashboard.html', 'cedula.html', 'documento.html', 'contexto.html'
]

base_path = r"c:\Users\SVCPP\OneDrive\Respaldo PC\Escritorio\Repositorios\F-CA2025-main\F-CA2025-main"

for filename in files:
    full_path = os.path.join(base_path, filename)
    try:
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Replace HEADER using Regex - Targeting specifically the sticky navigation header
        # Matches content starting with <header class="sticky and ending with </header>
        content = re.sub(r'<header class="sticky.*?>.*?</header>', UPDATED_HEADER, content, flags=re.DOTALL)
        
        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated header in {filename}")
        
    except FileNotFoundError:
        print(f"Skipping {filename}, not found.")
    except Exception as e:
        print(f"Error on {filename}: {e}")

print("All navigation headers updated.")
