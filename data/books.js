/*
 * FUENTE DE VERDAD DE LA WEB
 * ----------------------------
 * ASIN verificados de Amazon.es (busqueda "luis risueño gomez", 25-jul-2026).
 * Portadas descargadas de m.media-amazon.com a /img/<ASIN>.jpg
 *
 * Cada libro es UNA edicion en UN idioma:
 *   lang        -> idioma real de la edicion (es/en/fr/de/it), detectado del titulo
 *   titulo      -> titulo tal cual aparece en Amazon
 *   descripcion -> descripcion breve escrita en el idioma de la edicion
 *   categorias  -> claves de CATS (data/i18n.js)
 *   destacado   -> aparece en la portada
 *
 * Para anyadir un libro, copia un bloque y cambia los datos.
 */
const BOOKS = [
  {
    id: "b0h14r23sh",
    asin: "B0H14R23SH",
    lang: "es",
    titulo: "SMART MONEY CONCEPT: ESTRATEGIA INSTITUCIONAL PASO A PASO",
    descripcion: "Aprende a operar como las instituciones: liquidez, order blocks y estructura del mercado explicados paso a paso con ejemplos sobre gráficos reales.",
    categorias: ["forex", "smc"],
    portada: "img/B0H14R23SH.jpg",
    destacado: true
  },
  {
    id: "b0fpc4b53r",
    asin: "B0FPC4B53R",
    lang: "es",
    titulo: "Domina el Método ICT: Liquidez, Estructura y Manipulación",
    descripcion: "Los tres pilares del método ICT — liquidez, estructura y manipulación — desglosados con un enfoque práctico para aplicarlos en tu operativa diaria.",
    categorias: ["forex", "ict", "smc"],
    portada: "img/B0FPC4B53R.jpg",
    destacado: true
  },
  {
    id: "b0h4fsxfgj",
    asin: "B0H4FSXFGJ",
    lang: "es",
    titulo: "LO QUE NADIE TE ENSEÑA: Aprendizajes reales tras miles de horas delante de los gráficos",
    descripcion: "La cara del trading que no aparece en los cursos: expectativas reales, errores que arruinan cuentas y lo que de verdad separa al trader rentable del resto.",
    categorias: ["forex", "psicologia"],
    portada: "img/B0H4FSXFGJ.jpg",
    destacado: true
  },
  {
    id: "b0ft8j3hf3",
    asin: "B0FT8J3HF3",
    lang: "es",
    titulo: "LA ACCIÓN DEL PRECIO 3.0",
    descripcion: "Lee el mercado sin indicadores: velas, estructura, soportes y resistencias, y el contexto necesario para decidir con un gráfico limpio.",
    categorias: ["forex", "priceaction"],
    portada: "img/B0FT8J3HF3.jpg",
    destacado: true
  },
  {
    id: "b0h3nnzydp",
    asin: "B0H3NNZYDP",
    lang: "es",
    titulo: "SCALPING FOREX: Estrategias para Operar en 5 Minutos",
    descripcion: "Estrategias concretas para el gráfico de 5 minutos: entradas, gestión y la rutina completa de un scalper, explicadas para aplicar desde el primer día.",
    categorias: ["forex", "scalping"],
    portada: "img/B0H3NNZYDP.jpg",
    destacado: true
  },
  {
    id: "b0fndvlfql",
    asin: "B0FNDVLFQL",
    lang: "es",
    titulo: "Scalping Profesional 3.0",
    descripcion: "El scalping llevado a nivel profesional: preparación de la sesión, selección de pares, gestión del riesgo y ejecución rápida con reglas claras.",
    categorias: ["forex", "scalping"],
    portada: "img/B0FNDVLFQL.jpg",
    destacado: true
  },
  {
    id: "b0h6t7pls3",
    asin: "B0H6T7PLS3",
    lang: "en",
    titulo: "SMART MONEY CONCEPTS: Institutional Trading Strategy",
    descripcion: "Trade like the institutions: liquidity, order blocks and market structure explained step by step with real chart examples.",
    categorias: ["forex", "smc"],
    portada: "img/B0H6T7PLS3.jpg",
    destacado: true
  },
  {
    id: "b0frf6jy8b",
    asin: "B0FRF6JY8B",
    lang: "es",
    titulo: "La Estructura y Armonía del Precio 2.0",
    descripcion: "Cómo se mueve el precio y por qué: estructura, impulsos y correcciones para anticipar zonas de giro con lógica y sin depender de indicadores.",
    categorias: ["forex", "priceaction"],
    portada: "img/B0FRF6JY8B.jpg",
    destacado: true
  },
  {
    id: "b0h45h3b5k",
    asin: "B0H45H3B5K",
    lang: "de",
    titulo: "Forex-Scalping: Strategien für das Trading im 5-Minuten-Chart",
    descripcion: "Konkrete Strategien für den 5-Minuten-Chart: Einstiege, Risikomanagement und die komplette Routine eines Scalpers, klar erklärt.",
    categorias: ["forex", "scalping"],
    portada: "img/B0H45H3B5K.jpg",
    destacado: true
  },
  {
    id: "b0fms17xx9",
    asin: "B0FMS17XX9",
    lang: "es",
    titulo: "Smart Money Concept, 4.0 Pro",
    descripcion: "La entrega más avanzada de la serie Smart Money: confluencias institucionales, refinamiento de entradas y gestión de la operación de principio a fin.",
    categorias: ["forex", "smc"],
    portada: "img/B0FMS17XX9.jpg",
    destacado: true
  },
  {
    id: "b0dblk5yds",
    asin: "B0DBLK5YDS",
    lang: "es",
    titulo: "Práctica y Análisis de Trading",
    descripcion: "Cuaderno de trabajo: análisis guiados y ejercicios sobre gráficos reales para convertir la teoría en criterio propio.",
    categorias: ["forex", "ejercicios"],
    portada: "img/B0DBLK5YDS.jpg",
    destacado: true
  },
  {
    id: "b0h2vrmskp",
    asin: "B0H2VRMSKP",
    lang: "es",
    titulo: "CÓMO OPERAR ICT SIN INDICADORES",
    descripcion: "Aplica los conceptos ICT con el gráfico limpio: liquidez, desequilibrios y order blocks sin depender de ningún indicador.",
    categorias: ["forex", "ict"],
    portada: "img/B0H2VRMSKP.jpg",
    destacado: true
  },
  {
    id: "b0cmm2r3pb",
    asin: "B0CMM2R3PB",
    lang: "es",
    titulo: "Transforma tu Trading con Patrones Chartistas",
    descripcion: "Los patrones chartistas que funcionan: identificación, contexto y plan de trading para cada figura, con ejemplos sobre gráficos reales.",
    categorias: ["forex", "patrones"],
    portada: "img/B0CMM2R3PB.jpg",
    destacado: true
  },
  {
    id: "b0cmj9s92t",
    asin: "B0CMJ9S92T",
    lang: "es",
    titulo: "Patrones de Velas Japonesas",
    descripcion: "Guía completa de velas japonesas: qué cuenta cada patrón sobre la lucha entre compradores y vendedores y cómo usarlos siempre con contexto.",
    categorias: ["forex", "velas"],
    portada: "img/B0CMJ9S92T.jpg",
    destacado: true
  },
  {
    id: "b0h39gzpmd",
    asin: "B0H39GZPMD",
    lang: "de",
    titulo: "ICT TRADING OHNE INDIKATOREN",
    descripcion: "ICT-Konzepte auf dem nackten Chart anwenden: Liquidität, Imbalances und Order Blocks — ganz ohne Indikatoren.",
    categorias: ["forex", "ict"],
    portada: "img/B0H39GZPMD.jpg",
    destacado: true
  },
  {
    id: "b0gfftpwp5",
    asin: "B0GFFTPWP5",
    lang: "es",
    titulo: "EL 95 % DE LOS TRADERS PIERDE DINERO",
    descripcion: "Por qué pierde la mayoría y qué hace distinto la minoría rentable: psicología, gestión del riesgo y hábitos que marcan la diferencia.",
    categorias: ["forex", "psicologia"],
    portada: "img/B0GFFTPWP5.jpg",
    destacado: false
  },
  {
    id: "b0h4ns573c",
    asin: "B0H4NS573C",
    lang: "fr",
    titulo: "Ce que personne ne vous dit sur le trading",
    descripcion: "La face cachée du trading : attentes réalistes, erreurs qui ruinent les comptes et ce qui distingue vraiment les traders rentables.",
    categorias: ["forex", "psicologia"],
    portada: "img/B0H4NS573C.jpg",
    destacado: false
  },
  {
    id: "b0h2d5rxk7",
    asin: "B0H2D5RXK7",
    lang: "it",
    titulo: "WYCKOFF TRADING ISTITUZIONALE",
    descripcion: "Il metodo Wyckoff incontra il trading istituzionale: accumulazione, distribuzione e le impronte dello smart money sul grafico.",
    categorias: ["forex", "wyckoff"],
    portada: "img/B0H2D5RXK7.jpg",
    destacado: false
  },
  {
    id: "b0ftmb8m6k",
    asin: "B0FTMB8M6K",
    lang: "es",
    titulo: "SMART MONEY VS PATRONES CHARTISTAS",
    descripcion: "Dos escuelas frente a frente: qué aporta cada enfoque, cuándo se complementan y cómo combinarlos en una sola operativa.",
    categorias: ["forex", "patrones", "smc"],
    portada: "img/B0FTMB8M6K.jpg",
    destacado: false
  },
  {
    id: "b0clkw996k",
    asin: "B0CLKW996K",
    lang: "es",
    titulo: "Wyckoff 3.0: Estrategias y Análisis Técnico",
    descripcion: "El método Wyckoff actualizado: acumulación, distribución y los eventos clave del esquema aplicados al mercado actual.",
    categorias: ["forex", "wyckoff"],
    portada: "img/B0CLKW996K.jpg",
    destacado: false
  },
  {
    id: "b0h2hhp4kk",
    asin: "B0H2HHP4KK",
    lang: "de",
    titulo: "WYCKOFF & SMART MONEY",
    descripcion: "Wie Institutionen den Markt wirklich bewegen: die klassische Wyckoff-Methode und die moderne Smart-Money-Analyse in einem Rahmen vereint.",
    categorias: ["forex", "smc", "wyckoff"],
    portada: "img/B0H2HHP4KK.jpg",
    destacado: false
  },
  {
    id: "b0h362yy83",
    asin: "B0H362YY83",
    lang: "it",
    titulo: "COME FARE TRADING CON ICT SENZA INDICATORI",
    descripcion: "Applica i concetti ICT su un grafico pulito: liquidità, imbalance e order block, senza alcun indicatore.",
    categorias: ["forex", "ict"],
    portada: "img/B0H362YY83.jpg",
    destacado: false
  },
  {
    id: "b0h18b6bqc",
    asin: "B0H18B6BQC",
    lang: "fr",
    titulo: "SMART MONEY CONCEPTS: La stratégie institutionnelle en Forex",
    descripcion: "Tradez comme les institutions : liquidité, order blocks et structure du marché expliqués pas à pas avec des exemples réels.",
    categorias: ["forex", "smc"],
    portada: "img/B0H18B6BQC.jpg",
    destacado: false
  },
  {
    id: "b0fx166z49",
    asin: "B0FX166Z49",
    lang: "es",
    titulo: "TRADING INSTITUCIONAL EN FOREX Y ACCIONES",
    descripcion: "Cómo operan los grandes participantes en Forex y acciones, y cómo alinear tu operativa con el dinero institucional en ambos mercados.",
    categorias: ["forex", "smc"],
    portada: "img/B0FX166Z49.jpg",
    destacado: false
  },
  {
    id: "b0h1qm75y1",
    asin: "B0H1QM75Y1",
    lang: "de",
    titulo: "SMART MONEY TRADING: Institutionelle Forex-Strategien",
    descripcion: "Handeln wie die Institutionen: Liquidität, Order Blocks und Marktstruktur Schritt für Schritt mit echten Chartbeispielen.",
    categorias: ["forex", "smc"],
    portada: "img/B0H1QM75Y1.jpg",
    destacado: false
  },
  {
    id: "b0h32cdhyh",
    asin: "B0H32CDHYH",
    lang: "fr",
    titulo: "COMMENT TRADER ICT SANS INDICATEURS",
    descripcion: "Appliquez la méthode ICT sur un graphique épuré : liquidité, déséquilibres et order blocks, sans aucun indicateur.",
    categorias: ["forex", "ict"],
    portada: "img/B0H32CDHYH.jpg",
    destacado: false
  },
  {
    id: "b0h59kqbds",
    asin: "B0H59KQBDS",
    lang: "de",
    titulo: "WAS IHNEN NIEMAND ÜBER DEN HANDEL ERZÄHLT",
    descripcion: "Die Seite des Tradings, die in Kursen fehlt: realistische Erwartungen, teure Fehler und was profitable Trader wirklich anders machen.",
    categorias: ["forex", "psicologia"],
    portada: "img/B0H59KQBDS.jpg",
    destacado: false
  },
  {
    id: "b0h2ywfdnb",
    asin: "B0H2YWFDNB",
    lang: "en",
    titulo: "MASTERING ICT WITHOUT INDICATORS",
    descripcion: "Apply ICT concepts on a clean chart: liquidity, imbalances and order blocks — no indicators required.",
    categorias: ["forex", "ict"],
    portada: "img/B0H2YWFDNB.jpg",
    destacado: false
  },
  {
    id: "b0h1lq9zxx",
    asin: "B0H1LQ9ZXX",
    lang: "it",
    titulo: "SMART MONEY NEL FOREX",
    descripcion: "Opera come le istituzioni: liquidità, order block e struttura del mercato spiegati passo dopo passo con esempi reali.",
    categorias: ["forex", "smc"],
    portada: "img/B0H1LQ9ZXX.jpg",
    destacado: false
  },
  {
    id: "b0h29f3tcf",
    asin: "B0H29F3TCF",
    lang: "en",
    titulo: "WYCKOFF & INSTITUTIONAL TRADING",
    descripcion: "The Wyckoff method meets modern institutional trading: accumulation, distribution and how smart money leaves its footprint on the chart.",
    categorias: ["forex", "smc", "wyckoff"],
    portada: "img/B0H29F3TCF.jpg",
    destacado: false
  },
  {
    id: "b0fqcg2fwn",
    asin: "B0FQCG2FWN",
    lang: "de",
    titulo: "Wyckoff 4.0: Moderne Strategien und Marktanalyse",
    descripcion: "Die Wyckoff-Methode für heutige Märkte: Akkumulation, Distribution und die Schlüsselereignisse des Schemas in der Praxis.",
    categorias: ["forex", "wyckoff"],
    portada: "img/B0FQCG2FWN.jpg",
    destacado: false
  },
  {
    id: "b0cn52tzrv",
    asin: "B0CN52TZRV",
    lang: "es",
    titulo: "Las Bandas de Bollinger",
    descripcion: "Las Bandas de Bollinger a fondo: volatilidad, compresiones y estrategias prácticas con uno de los indicadores más utilizados.",
    categorias: ["forex", "indicadores"],
    portada: "img/B0CN52TZRV.jpg",
    destacado: false
  },
  {
    id: "b0h4lv3kyx",
    asin: "B0H4LV3KYX",
    lang: "en",
    titulo: "WHAT NO ONE TELLS YOU ABOUT TRADING",
    descripcion: "The side of trading courses never show: realistic expectations, account-killing mistakes and what truly separates profitable traders.",
    categorias: ["forex", "psicologia"],
    portada: "img/B0H4LV3KYX.jpg",
    destacado: false
  },
  {
    id: "b0h4rx13tt",
    asin: "B0H4RX13TT",
    lang: "it",
    titulo: "COSE CHE NESSUNO TI DICE SUL TRADING",
    descripcion: "Il lato del trading che i corsi non mostrano: aspettative realistiche, errori che bruciano i conti e cosa distingue davvero i trader profittevoli.",
    categorias: ["forex", "psicologia"],
    portada: "img/B0H4RX13TT.jpg",
    destacado: false
  },
  {
    id: "b0gl33q4j5",
    asin: "B0GL33Q4J5",
    lang: "en",
    titulo: "TRADING: READ THE MARKET",
    descripcion: "Learn to read the market itself: structure, momentum and context, so every trade is backed by what price is actually doing.",
    categorias: ["forex", "priceaction"],
    portada: "img/B0GL33Q4J5.jpg",
    destacado: false
  },
  {
    id: "b0gfw2872n",
    asin: "B0GFW2872N",
    lang: "fr",
    titulo: "95 % DES TRADERS PERDENT DE L'ARGENT",
    descripcion: "Pourquoi la majorité perd et ce que fait différemment la minorité rentable : psychologie, gestion du risque et discipline.",
    categorias: ["forex", "psicologia"],
    portada: "img/B0GFW2872N.jpg",
    destacado: false
  },
  {
    id: "b0frxy2wkj",
    asin: "B0FRXY2WKJ",
    lang: "es",
    titulo: "GESTIÓN DEL RIESGO EN EL TRADING MODERNO 2.0",
    descripcion: "El pilar que sostiene todo lo demás: tamaño de posición, ratios, rachas y protección del capital explicados con números claros.",
    categorias: ["forex", "riesgo"],
    portada: "img/B0FRXY2WKJ.jpg",
    destacado: false
  },
  {
    id: "b0gp6b9lfw",
    asin: "B0GP6B9LFW",
    lang: "en",
    titulo: "TRADING VS POKER",
    descripcion: "Statistical advantage and decision-making under uncertainty: what trading and poker have in common, and the lessons each can teach the other.",
    categorias: ["forex", "psicologia"],
    portada: "img/B0GP6B9LFW.jpg",
    destacado: false
  },
  {
    id: "b0dlgvckl6",
    asin: "B0DLGVCKL6",
    lang: "de",
    titulo: "Einführung in den Handel",
    descripcion: "Ein klarer Einstieg in die Welt des Tradings: Märkte, Teilnehmer, Risiko und alles, was Sie vor dem ersten Trade wissen sollten.",
    categorias: ["forex"],
    portada: "img/B0DLGVCKL6.jpg",
    destacado: false
  },
  {
    id: "b0cljwnm8n",
    asin: "B0CLJWNM8N",
    lang: "es",
    titulo: "El arte del scalping 2.0",
    descripcion: "Operativa rápida con método: lectura de corto plazo, entradas precisas y la disciplina necesaria para sobrevivir en marcos pequeños.",
    categorias: ["forex", "scalping"],
    portada: "img/B0CLJWNM8N.jpg",
    destacado: false
  },
  {
    id: "b0cnm9h6q8",
    asin: "B0CNM9H6Q8",
    lang: "es",
    titulo: "La Estructura y Armonía del Precio",
    descripcion: "El punto de partida de la serie: comprender la estructura del precio y el ritmo del mercado antes de buscar cualquier entrada.",
    categorias: ["forex", "priceaction"],
    portada: "img/B0CNM9H6Q8.jpg",
    destacado: false
  },
  {
    id: "b0cqqybxcq",
    asin: "B0CQQYBXCQ",
    lang: "es",
    titulo: "Smart Money Concept 3.0 PRO",
    descripcion: "Order blocks, liquidez y manipulación institucional: la base de la serie Smart Money con ejemplos explicados paso a paso.",
    categorias: ["forex", "smc"],
    portada: "img/B0CQQYBXCQ.jpg",
    destacado: false
  },
  {
    id: "b0dllj7v2d",
    asin: "B0DLLJ7V2D",
    lang: "es",
    titulo: "Trading para Novatos",
    descripcion: "Empieza desde cero con buen pie: conceptos, plataformas, tipos de órdenes y primeros pasos sin tecnicismos innecesarios.",
    categorias: ["forex"],
    portada: "img/B0DLLJ7V2D.jpg",
    destacado: false
  },
  {
    id: "b0dl6k9h2m",
    asin: "B0DL6K9H2M",
    lang: "es",
    titulo: "Introducción al Trading",
    descripcion: "Una introducción clara al mundo del trading: mercados, participantes, riesgo y lo que necesitas saber antes de operar.",
    categorias: ["forex"],
    portada: "img/B0DL6K9H2M.jpg",
    destacado: false
  },
  {
    id: "b0frnnnj5q",
    asin: "B0FRNNNJ5Q",
    lang: "es",
    titulo: "IA, DeFi y Psicología en la nueva era del trading",
    descripcion: "Inteligencia artificial, finanzas descentralizadas y psicología: cómo la nueva era tecnológica está cambiando el trading y cómo adaptarse.",
    categorias: ["otros", "psicologia"],
    portada: "img/B0FRNNNJ5Q.jpg",
    destacado: false
  },
  {
    id: "b0ftx8qmdz",
    asin: "B0FTX8QMDZ",
    lang: "es",
    titulo: "IMPERIOS Y CAÍDAS: De Roma a la Globalización",
    descripcion: "De Roma a la globalización: qué enseñan los ciclos de auge y caída de los imperios sobre la economía y los mercados de hoy.",
    categorias: ["otros"],
    portada: "img/B0FTX8QMDZ.jpg",
    destacado: false
  },
  {
    id: "b0cylpfwzk",
    asin: "B0CYLPFWZK",
    lang: "es",
    titulo: "INDICADORES TECNICOS, ESTADISTICA",
    descripcion: "Indicadores técnicos con base estadística: qué miden realmente, cuándo aportan ventaja y cómo evitar usarlos a ciegas.",
    categorias: ["forex", "indicadores"],
    portada: "img/B0CYLPFWZK.jpg",
    destacado: false
  },
  {
    id: "b0ftnh5b1p",
    asin: "B0FTNH5B1P",
    lang: "de",
    titulo: "SMART MONEY VS. CHARTMUSTER",
    descripcion: "Zwei Schulen im Vergleich: Was jeder Ansatz leistet, wann sie sich ergänzen und wie man beide in einer Strategie vereint.",
    categorias: ["forex", "patrones", "smc"],
    portada: "img/B0FTNH5B1P.jpg",
    destacado: false
  }
];
