METODOLOGIA_CONTENT = """
            <div id="tab-metodo" class="hidden flex flex-col gap-8 animate-in slide-in-from-right-4 duration-500">
                
                <section class="mb-4">
                    <h1 class="text-4xl font-black text-primary mb-6 drop-shadow-sm">Metodología Geoestadística Electoral</h1>
                    <div class="glass-panel p-6 rounded-2xl shadow-lg border border-white/60">
                        <div class="text-text-main dark:text-gray-200 mb-4">
                            <pre class="preserve-whitespace font-sans text-sm md:text-base leading-relaxed text-text-main dark:text-gray-200 whitespace-pre-wrap">La metodología empleada para el análisis geoestadístico electoral es producto de explorar las distintas metodologías existentes y formar una propia que se ajuste a la realidad electoral del estado de Chihuahua, en sus diferentes elecciones.

<b>Para calcular rentabilidad:</b>
Combinamos principalmente la Formula - Herfindahl–Hirschman Index (HHI), y la de Nef (Laakso-Taagepera) Número Efectivo de Partidos (NEP). 

<b>Para calcular el orden de despliegue territorial:</b> 
Usamos principalmente el índice de Índice de Moran.</pre>
                        </div>
                    </div>
                </section>

                <section class="mb-4">
                    <h2 class="text-3xl font-bold text-primary mb-6 drop-shadow-sm">Indicadores Tradicionales</h2>
                    <div class="overflow-x-auto glass-panel rounded-2xl shadow-lg border border-white/60">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-white/10">
                            <thead class="bg-primary/10 backdrop-blur-sm">
                                <tr>
                                    <th class="px-6 py-4 text-left text-xs font-bold text-primary-dark uppercase tracking-wider">Indicador</th>
                                    <th class="px-6 py-4 text-left text-xs font-bold text-primary-dark uppercase tracking-wider">Qué mide</th>
                                    <th class="px-6 py-4 text-left text-xs font-bold text-primary-dark uppercase tracking-wider">Ideal para</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 dark:divide-white/10 bg-white/50 dark:bg-slate-800/50">
                                <tr class="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap font-bold text-primary-dark">HHI</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Concentración</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Identificar bastiones o hegemonías</td>
                                </tr>
                                <tr class="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap font-bold text-primary-dark">Nef (Laakso-Taagepera)</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Número de partidos efectivos</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Ver pluralismo real</td>
                                </tr>
                                <tr class="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap font-bold text-primary-dark">Competitividad (C)</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Qué tan cerrada fue la elección</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Mapas de riesgo electoral</td>
                                </tr>
                                <tr class="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap font-bold text-primary-dark">Volatilidad (Pedersen)</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Cambios entre elecciones</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Fidelidad o movilidad del voto</td>
                                </tr>
                                <tr class="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap font-bold text-primary-dark">Fragmentación (Rae)</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Dispersión del voto</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Análisis complementario al HHI</td>
                                </tr>
                                <tr class="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap font-bold text-primary-dark">Dominancia (D)</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Margen del ganador</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Clasificar secciones seguras o competidas</td>
                                </tr>
                                <tr class="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap font-bold text-primary-dark">Polarización (Dalton)</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Distancia ideológica</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Análisis de sistemas partidistas</td>
                                </tr>
                                <tr class="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap font-bold text-primary-dark">Gini territorial</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Concentración espacial del voto</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Identificar enclaves partidistas</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section class="mb-4">
                    <h2 class="text-3xl font-bold text-primary mb-6 drop-shadow-sm">Fórmulas Complementarias</h2>
                    <div class="overflow-x-auto glass-panel rounded-2xl shadow-lg border border-white/60">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-white/10">
                            <thead class="bg-purple-100/50 backdrop-blur-sm">
                                <tr>
                                    <th class="px-6 py-4 text-left text-xs font-bold text-purple-700 uppercase tracking-wider">Índice</th>
                                    <th class="px-6 py-4 text-left text-xs font-bold text-purple-700 uppercase tracking-wider">Origen</th>
                                    <th class="px-6 py-4 text-left text-xs font-bold text-purple-700 uppercase tracking-wider">Qué mide</th>
                                    <th class="px-6 py-4 text-left text-xs font-bold text-purple-700 uppercase tracking-wider">Aplicación electoral</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 dark:divide-white/10 bg-white/50 dark:bg-slate-800/50">
                                <tr class="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap font-bold text-purple-700">Shannon</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Ecología</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Diversidad del voto</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Fragmentación</td>
                                </tr>
                                <tr class="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap font-bold text-purple-700">Theil</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Economía</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Desigualdad del voto</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Concentración territorial</td>
                                </tr>
                                <tr class="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap font-bold text-purple-700">Gini</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Economía</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Desigualdad</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Desbalance de voto o cobertura</td>
                                </tr>
                                <tr class="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap font-bold text-purple-700">Moran</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Geografía</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Autocorrelación espacial</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Bastiones o clusters</td>
                                </tr>
                                <tr class="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap font-bold text-purple-700">Entropía territorial</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Geografía</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Dispersión espacial</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Cobertura partidista</td>
                                </tr>
                                <tr class="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap font-bold text-purple-700">Simpson</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Ecología</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Dominancia</td>
                                    <td class="px-6 py-4 text-text-sub dark:text-gray-300">Predominio partidista</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section class="mb-4">
                    <h2 class="text-3xl font-bold text-primary mb-6 drop-shadow-sm">Fórmulas Clave</h2>

                    <div class="grid md:grid-cols-3 gap-6">
                        <!-- HHI Card -->
                        <div class="glass-panel rounded-2xl overflow-hidden shadow-lg border border-white/60 hover:scale-[1.02] transition-transform duration-300">
                            <div class="bg-primary p-4 text-white">
                                <h3 class="text-xl font-bold">Herfindahl–Hirschman Index (HHI)</h3>
                            </div>
                            <div class="p-6">
                                <h4 class="font-semibold text-primary-dark mb-2">¿Qué es?</h4>
                                <p class="text-text-sub dark:text-gray-300 mb-4 text-sm">Índice de concentración: mide qué tan "concentrada" está una distribución de participaciones entre competidores.</p>

                                <h4 class="font-semibold text-primary-dark mb-2">Fórmula</h4>
                                <div class="bg-gray-100 dark:bg-white/20 p-3 rounded-lg mb-4 text-center border border-gray-200">
                                    <code>HHI = ∑s_i²</code>
                                </div>

                                <h4 class="font-semibold text-primary-dark mb-2">Interpretación</h4>
                                <div class="space-y-2 text-sm text-text-sub dark:text-gray-300">
                                    <div class="flex items-center">
                                        <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                                        <span>&lt; 1,500: Alta fragmentación</span>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                                        <span>1,500–2,500: Moderada concentración</span>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                                        <span>&gt; 2,500: Alta concentración</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- NEP Card -->
                        <div class="glass-panel rounded-2xl overflow-hidden shadow-lg border border-white/60 hover:scale-[1.02] transition-transform duration-300">
                            <div class="bg-purple-600 p-4 text-white">
                                <h3 class="text-xl font-bold">Número Efectivo de Partidos (NEP)</h3>
                            </div>
                            <div class="p-6">
                                <h4 class="font-semibold text-purple-700 mb-2">¿Qué mide?</h4>
                                <p class="text-text-sub dark:text-gray-300 mb-4 text-sm">Cuántos partidos realmente relevantes compiten, considerando su peso electoral.</p>

                                <h4 class="font-semibold text-purple-700 mb-2">Fórmula</h4>
                                <div class="bg-gray-100 dark:bg-white/20 p-3 rounded-lg mb-4 text-center border border-gray-200">
                                    <code>NEP = 1/(∑v_i²)</code>
                                </div>

                                <h4 class="font-semibold text-purple-700 mb-2">Interpretación</h4>
                                <div class="space-y-2 text-sm text-text-sub dark:text-gray-300">
                                    <div class="flex items-center">
                                        <div class="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                                        <span>≈ 2: Bipartidista</span>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                                        <span>3 – 5: Multipartidista moderado</span>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
                                        <span>&gt; 6: Fragmentación extrema</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Moran Card -->
                        <div class="glass-panel rounded-2xl overflow-hidden shadow-lg border border-white/60 hover:scale-[1.02] transition-transform duration-300">
                            <div class="bg-primary p-4 text-white">
                                <h3 class="text-xl font-bold">Índice de Moran (I)</h3>
                            </div>
                            <div class="p-6">
                                <h4 class="font-semibold text-primary-dark mb-2">¿Qué mide?</h4>
                                <p class="text-text-sub dark:text-gray-300 mb-4 text-sm">Detecta si el voto de un partido se agrupa geográficamente (clusters/bastiones) o si está disperso.</p>

                                <h4 class="font-semibold text-primary-dark mb-2">Fórmula</h4>
                                <div class="bg-gray-100 dark:bg-white/20 p-3 rounded-lg mb-4 text-center border border-gray-200 overflow-x-auto">
                                    <code>I = n/W (∑∑w_ij(x_i-x̄)(x_j-x̄))/(∑(x_i-x̄)²)</code>
                                </div>

                                <h4 class="font-semibold text-primary-dark mb-2">Interpretación</h4>
                                <div class="space-y-2 text-sm text-text-sub dark:text-gray-300">
                                    <div class="flex items-center">
                                        <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                                        <span>I > 0: Voto agrupado → bastiones</span>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="w-3 h-3 bg-gray-500 rounded-full mr-2"></div>
                                        <span>I = 0: Distribución aleatoria</span>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                                        <span>I < 0: Voto disperso</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                 <!-- Classification Section -->
                 <section class="mb-4">
                    <h1 class="text-4xl font-bold text-primary mb-6 drop-shadow-sm">Clasificación por Umbrales para PAN</h1>
                    <div class="glass-panel rounded-2xl p-6 mb-8 border border-white/60 shadow-lg">
                        <p class="text-text-main dark:text-gray-300 text-lg">
                            Sistema de clasificación desarrollado para evaluar el desempeño del PAN en diferentes niveles territoriales (casilla, sección, distrito, municipio, estado) según su resultado electoral.
                        </p>
                    </div>

                    <div class="grid md:grid-cols-2 gap-8">
                        <!-- PAN Gana -->
                        <div class="glass-panel rounded-2xl overflow-hidden border border-white/60 shadow-lg">
                            <div class="bg-blue-600 p-4 text-white">
                                <div class="flex items-center">
                                    <span class="material-symbols-outlined mr-2">check_circle</span>
                                    <h2 class="text-2xl font-bold">Cuando el PAN gana (w = PAN)</h2>
                                </div>
                            </div>
                            <div class="p-6">
                                <div class="overflow-x-auto">
                                    <table class="min-w-full">
                                        <thead class="bg-blue-50 dark:bg-blue-900/30">
                                            <tr>
                                                <th class="px-4 py-2 text-left text-blue-800 dark:text-blue-200 font-bold">Prioridad</th>
                                                <th class="px-4 py-2 text-left text-blue-800 dark:text-blue-200 font-bold">Condición lógica</th>
                                                <th class="px-4 py-2 text-left text-blue-800 dark:text-blue-200 font-bold">Escenario</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-blue-100/50 dark:divide-white/10">
                                            <tr class="hover:bg-blue-50 transition-colors"><td class="px-4 py-3 font-medium">1</td><td class="px-4 py-3">sPAN > 0.70</td><td class="px-4 py-3 font-semibold text-blue-600">Aprobación Óptima</td></tr>
                                            <tr class="hover:bg-blue-50 transition-colors"><td class="px-4 py-3 font-medium">2</td><td class="px-4 py-3">0.50 < sPAN ≤ 0.70</td><td class="px-4 py-3 font-semibold text-blue-500">Resultado Favorable</td></tr>
                                            <tr class="hover:bg-blue-50 transition-colors"><td class="px-4 py-3 font-medium">3</td><td class="px-4 py-3">s(2) > 0.35</td><td class="px-4 py-3 font-semibold text-yellow-600">Oposición >35%</td></tr>
                                            <tr class="hover:bg-blue-50 transition-colors"><td class="px-4 py-3 font-medium">4</td><td class="px-4 py-3">sResto > 0.25</td><td class="px-4 py-3 font-semibold text-purple-600">Opinión Plural</td></tr>
                                            <tr class="hover:bg-blue-50 transition-colors"><td class="px-4 py-3 font-medium">5</td><td class="px-4 py-3">Ninguna</td><td class="px-4 py-3 font-semibold text-gray-600">Resultado ordinario</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <!-- PAN No Gana -->
                        <div class="glass-panel rounded-2xl overflow-hidden border border-white/60 shadow-lg">
                            <div class="bg-violet-600 p-4 text-white">
                                <div class="flex items-center">
                                    <span class="material-symbols-outlined mr-2">cancel</span>
                                    <h2 class="text-2xl font-bold">Cuando el PAN no gana (w ≠ PAN)</h2>
                                </div>
                            </div>
                            <div class="p-6">
                                <div class="overflow-x-auto">
                                    <table class="min-w-full">
                                        <thead class="bg-violet-50 dark:bg-violet-900/30">
                                            <tr>
                                                <th class="px-4 py-2 text-left text-violet-800 dark:text-violet-200 font-bold">Prioridad</th>
                                                <th class="px-4 py-2 text-left text-violet-800 dark:text-violet-200 font-bold">Condición lógica</th>
                                                <th class="px-4 py-2 text-left text-violet-800 dark:text-violet-200 font-bold">Escenario</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-violet-100/50 dark:divide-white/10">
                                            <tr class="hover:bg-violet-50 transition-colors"><td class="px-4 py-3 font-medium">1</td><td class="px-4 py-3">s(1) > 0.70 o sPAN < 0.20</td><td class="px-4 py-3 font-semibold text-red-600">Desaprobación PAN</td></tr>
                                            <tr class="hover:bg-violet-50 transition-colors"><td class="px-4 py-3 font-medium">2</td><td class="px-4 py-3">PAN es 3°</td><td class="px-4 py-3 font-semibold text-orange-600">PAN 3er lugar</td></tr>
                                            <tr class="hover:bg-violet-50 transition-colors"><td class="px-4 py-3 font-medium">3</td><td class="px-4 py-3">sPAN > 0.35</td><td class="px-4 py-3 font-semibold text-blue-500">PAN >35%</td></tr>
                                            <tr class="hover:bg-violet-50 transition-colors"><td class="px-4 py-3 font-medium">4</td><td class="px-4 py-3">sResto > 0.25</td><td class="px-4 py-3 font-semibold text-purple-600">Opinión Plural Perdido</td></tr>
                                            <tr class="hover:bg-violet-50 transition-colors"><td class="px-4 py-3 font-medium">5</td><td class="px-4 py-3">s(1) > 0.50</td><td class="px-4 py-3 font-semibold text-yellow-600">Oposición Fuerte</td></tr>
                                            <tr class="hover:bg-violet-50 transition-colors"><td class="px-4 py-3 font-medium">6</td><td class="px-4 py-3">Ninguna</td><td class="px-4 py-3 font-semibold text-gray-600">Resultado ordinario Perdido</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                 </section>

                 <!-- Density Section -->
                 <section class="mb-4">
                    <h2 class="text-3xl font-bold text-primary mb-6 drop-shadow-sm">Densidad de Votación</h2>
                    <div class="glass-panel bg-white/95 dark:bg-slate-900/95 rounded-2xl shadow-lg border border-white/60 p-6 flex flex-col items-center">
                        <div class="w-full text-left mb-6">
                            <h3 class="text-xl font-bold text-text-main dark:text-white mb-2">Curva Normal de Densidad Electoral</h3>
                            <p class="text-text-sub dark:text-gray-300 text-sm md:text-base leading-relaxed">
                                Todas las casillas tienen distintos números de listado nominal y votos totales. No es lo mismo una sección poco densa territorialmente que junta 150 votos, que una sección muy densa que junta más de 350 votos.
                            </p>
                        </div>
                        <img src="https://i.imgur.com/cftJ4sW.png" onerror="this.src='https://i.imgur.com/cftJ4sW.jpg'" alt="Gráfica de Densidad" class="rounded-xl shadow-md max-w-full h-auto object-contain mb-8">
                    </div>
                 </section>

                 <section class="mb-4">
                    <h2 class="text-3xl font-bold text-primary mb-6 drop-shadow-sm">Modelo Simplificado</h2>
                    <div class="glass-panel bg-white/95 dark:bg-slate-900/95 rounded-2xl shadow-lg border border-white/60 p-6 flex flex-col items-center">
                        <div class="w-full text-left mb-6">
                            <p class="text-text-sub dark:text-gray-300 text-sm md:text-base leading-relaxed">
                                Simplificación del concepto para identificar rápidamente la población objetivo a intervenir.
                            </p>
                        </div>
                        <img src="https://i.imgur.com/uE5HjYd.png" onerror="this.src='https://i.imgur.com/uE5HjYd.jpg'" alt="Simplificación del Concepto" class="rounded-xl shadow-md max-w-full h-auto object-contain">
                    </div>
                </section>

            </div>
"""

import re

documento_path = r"c:\Users\SVCPP\OneDrive\Respaldo PC\Escritorio\Repositorios\F-CA2025-main\F-CA2025-main\documento.html"

with open(documento_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the existing placeholder tab-metodo div with the new content
# We use DOTALL to match across lines and non-greedy .*? to match just the div content
# Regex pattern matches <div id="tab-metodo" ... </div> 
content = re.sub(
    r'<div id="tab-metodo".*?Content Pending.*?</div>\s*</div>', 
    METODOLOGIA_CONTENT, 
    content, 
    flags=re.DOTALL
)

# If previous regex fails because text changed, try a broader replacement for the whole div
if "Metodología Geoestadística" not in content:
    content = re.sub(
        r'<div id="tab-metodo".*?Contenido Pendiente.*?</button>\s*</div>\s*</div>',
        METODOLOGIA_CONTENT,
        content,
        flags=re.DOTALL
    )

with open(documento_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated documento.html with methodology content.")
