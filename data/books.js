/*
 * FUENTE DE VERDAD DE LA WEB
 * ----------------------------
 * ASIN verificados directamente en el Bookshelf de KDP de Luis (9-ago-2026).
 * Portadas descargadas por ASIN desde el CDN publico de Amazon a /img/<ASIN>.jpg
 *
 * Cada libro es UNA edicion en UN idioma:
 *   lang        -> idioma real de la edicion (es/en/fr/de/it), confirmado en KDP
 *   titulo      -> titulo tal cual aparece en Amazon
 *   descripcion -> descripcion breve escrita en el idioma de la edicion
 *   categorias  -> claves de CATS (data/i18n.js)
 *   destacado   -> aparece en la portada
 *
 * Para anyadir un libro, copia un bloque y cambia los datos.
 */
const BOOKS = [
  {
    id: "b0fx4dpt55",
    asin: "B0FX4DPT55",
    lang: "de",
    titulo: "INSTITUTIONELLER HANDEL MIT FOREX UND AKTIEN: Wie die starken Hände von 1 Minute bis 1 Tag handeln",
    descripcion: "Wie die großen Marktteilnehmer im Forex- und Aktienhandel agieren und wie Sie Ihren Handel mit institutionellem Geld in Einklang bringen.",
    categorias: ["forex", "smc"],
    portada: "img/B0FX4DPT55.jpg",
    destacado: true
  },
  {
    id: "b0dvs235r8",
    asin: "B0DVS235R8",
    lang: "de",
    titulo: "PREISAKTION 3.0: KLARE STRATEGIEN FÜR MODERNE HÄNDLER",
    descripcion: "Lesen Sie den Markt ohne Indikatoren: Kerzen, Struktur, Unterstützung und Widerstand sowie der nötige Kontext für Entscheidungen auf einem sauberen Chart.",
    categorias: ["forex", "priceaction"],
    portada: "img/B0DVS235R8.jpg",
    destacado: true
  },
  {
    id: "b0fnk5rc58",
    asin: "B0FNK5RC58",
    lang: "de",
    titulo: "Professionelles Scalping 3.0: Präzision und Disziplin: Machen Sie den Handel zu Ihrer Freiheit",
    descripcion: "Scalping auf professionellem Niveau: Sitzungsvorbereitung, Paarauswahl, Risikomanagement und schnelle Ausführung mit klaren Regeln.",
    categorias: ["forex", "scalping"],
    portada: "img/B0FNK5RC58.jpg",
    destacado: true
  },
  {
    id: "b0h1mts8k6",
    asin: "B0H1MTS8K6",
    lang: "de",
    titulo: "SMART MONEY TRADING: Institutionelle Forex-Strategien",
    descripcion: "Handeln wie die Institutionen: Liquidität, Order Blocks und Marktstruktur Schritt für Schritt mit echten Chartbeispielen.",
    categorias: ["forex", "smc"],
    portada: "img/B0H1MTS8K6.jpg",
    destacado: true
  },
  {
    id: "b0fqkph7jz",
    asin: "B0FQKPH7JZ",
    lang: "de",
    titulo: "Smart Money Concept 4.0 PRO: Forex-Handel mit Orderblöcken und Price Action",
    descripcion: "Die fortschrittlichste Ausgabe der Smart-Money-Reihe: institutionelle Konfluenzen, Order Blocks und vollständiges Trade-Management.",
    categorias: ["forex", "smc"],
    portada: "img/B0FQKPH7JZ.jpg",
    destacado: true
  },
  {
    id: "b0h379nwsg",
    asin: "B0H379NWSG",
    lang: "de",
    titulo: "WIE MAN ICT OHNE INDIKATOREN HANDELT: Vom leeren Chart zur professionellen Marktausführung",
    descripcion: "Vom leeren Chart zur professionellen Ausführung: Liquidität, Imbalances und Order Blocks mit der ICT-Methode — ganz ohne Indikatoren.",
    categorias: ["forex", "ict"],
    portada: "img/B0H379NWSG.jpg",
    destacado: true
  },
  {
    id: "b0h2fkb1rs",
    asin: "B0H2FKB1RS",
    lang: "de",
    titulo: "WYCKOFF & SMART MONEY: Wie Institutionen den Markt wirklich bewegen",
    descripcion: "Die Wyckoff-Methode und institutioneller Handel in einem Rahmen: Liquidität, Marktmanipulation und die Psychologie hinter jeder Bewegung.",
    categorias: ["forex", "smc", "wyckoff"],
    portada: "img/B0H2FKB1RS.jpg",
    destacado: true
  },
  {
    id: "b0djpmsn9p",
    asin: "B0DJPMSN9P",
    lang: "en",
    titulo: "INSTITUTIONAL TRADING IN FOREX AND STOCKS: How the Big Players Operate in 1m - 1D",
    descripcion: "How the big players operate in Forex and stocks, and how to align your trading with institutional money in both markets.",
    categorias: ["forex", "smc"],
    portada: "img/B0DJPMSN9P.jpg",
    destacado: true
  },
  {
    id: "b0gyzzw54k",
    asin: "B0GYZZW54K",
    lang: "en",
    titulo: "MASTERING ICT WITHOUT INDICATORS: From Clean Charts to Professional Execution",
    descripcion: "From clean charts to professional execution: liquidity, imbalances and order blocks applying the ICT method without a single indicator.",
    categorias: ["forex", "ict"],
    portada: "img/B0GYZZW54K.jpg",
    destacado: true
  },
  {
    id: "b0fpbfl276",
    asin: "B0FPBFL276",
    lang: "en",
    titulo: "Master the ICT Method: Liquidity, Structure, and Manipulation: Market Keys",
    descripcion: "The three pillars of the ICT method — liquidity, structure and manipulation — broken down with a practical approach for daily trading.",
    categorias: ["forex", "ict", "smc"],
    portada: "img/B0FPBFL276.jpg",
    destacado: true
  },
  {
    id: "b0ft6s91f9",
    asin: "B0FT6S91F9",
    lang: "en",
    titulo: "PRICE ACTION 3.0: CLEAR STRATEGIES FOR MODERN TRADERS",
    descripcion: "Read the market without indicators: candles, structure, support and resistance, and the context needed to decide on a clean chart.",
    categorias: ["forex", "priceaction"],
    portada: "img/B0FT6S91F9.jpg",
    destacado: true
  },
  {
    id: "b0fnhcq86b",
    asin: "B0FNHCQ86B",
    lang: "en",
    titulo: "Professional Scalping 3.0: Precision and Discipline: Turn trading into your freedom",
    descripcion: "Scalping taken to a professional level: session prep, pair selection, risk management and fast execution with clear rules.",
    categorias: ["forex", "scalping"],
    portada: "img/B0FNHCQ86B.jpg",
    destacado: true
  },
  {
    id: "b0gzh82b8y",
    asin: "B0GZH82B8Y",
    lang: "en",
    titulo: "SMART MONEY CONCEPTS: Institutional Trading Strategy",
    descripcion: "Trade like the institutions: liquidity, order blocks and market structure explained step by step with real chart examples.",
    categorias: ["forex", "smc"],
    portada: "img/B0GZH82B8Y.jpg",
    destacado: true
  },
  {
    id: "b0fmsc4ttq",
    asin: "B0FMSC4TTQ",
    lang: "en",
    titulo: "Smart Money Concept, 4.0 Pro: Institutional Forex Trading with Order Blocks & Price Action",
    descripcion: "The most advanced entry in the Smart Money series: institutional confluences, order blocks and full trade management from entry to exit.",
    categorias: ["forex", "smc"],
    portada: "img/B0FMSC4TTQ.jpg",
    destacado: true
  },
  {
    id: "b0h273w52d",
    asin: "B0H273W52D",
    lang: "en",
    titulo: "WYCKOFF & INSTITUTIONAL TRADING: Liquidity, Market Manipulation, and Trading Psychology",
    descripcion: "The Wyckoff method and institutional trading in one framework: liquidity, market manipulation and the psychology behind every move.",
    categorias: ["forex", "smc", "wyckoff"],
    portada: "img/B0H273W52D.jpg",
    destacado: true
  },
  {
    id: "b0h2sp2lgn",
    asin: "B0H2SP2LGN",
    lang: "es",
    titulo: "CÓMO OPERAR ICT SIN INDICADORES: Del gráfico vacío a la ejecución profesional",
    descripcion: "Del gráfico vacío a la ejecución profesional: liquidez, desequilibrios y order blocks aplicando el método ICT sin un solo indicador.",
    categorias: ["forex", "ict"],
    portada: "img/B0H2SP2LGN.jpg",
    destacado: true
  },
  {
    id: "b0fp9wxv15",
    asin: "B0FP9WXV15",
    lang: "es",
    titulo: "Domina el Método ICT: Liquidez, Estructura y Manipulación: Claves del Mercado",
    descripcion: "Los tres pilares del método ICT — liquidez, estructura y manipulación — desglosados con un enfoque práctico para tu operativa diaria.",
    categorias: ["forex", "ict", "smc"],
    portada: "img/B0FP9WXV15.jpg",
    destacado: true
  },
  {
    id: "b0dk3ds5v8",
    asin: "B0DK3DS5V8",
    lang: "es",
    titulo: "LA ACCIÓN DEL PRECIO 3.0: ESTRATEGIAS CLARAS PARA TRADERS MODERNOS",
    descripcion: "Lee el mercado sin indicadores: velas, estructura, soportes y resistencias, y el contexto necesario para decidir con un gráfico limpio.",
    categorias: ["forex", "priceaction"],
    portada: "img/B0DK3DS5V8.jpg",
    destacado: true
  },
  {
    id: "b0h1239kk5",
    asin: "B0H1239KK5",
    lang: "es",
    titulo: "SMART MONEY CONCEPT: ESTRATEGIA INSTITUCIONAL PASO A PASO: Aprende a detectar liquidez, trampas del mercado y ejecutar entradas con Order Blocks, BOS y CHOCH en Forex",
    descripcion: "Aprende a operar como las instituciones: liquidez, order blocks y estructura del mercado explicados paso a paso con ejemplos sobre gráficos reales.",
    categorias: ["forex", "smc"],
    portada: "img/B0H1239KK5.jpg",
    destacado: true
  },
  {
    id: "b0fndvlfql",
    asin: "B0FNDVLFQL",
    lang: "es",
    titulo: "Scalping Profesional 3.0: Precisión y disciplina: Convierte el trading en tu libertad",
    descripcion: "El scalping llevado a nivel profesional: preparación de la sesión, selección de pares, gestión del riesgo y ejecución rápida con reglas claras.",
    categorias: ["forex", "scalping"],
    portada: "img/B0FNDVLFQL.jpg",
    destacado: true
  },
  {
    id: "b0fms17xx9",
    asin: "B0FMS17XX9",
    lang: "es",
    titulo: "Smart Money Concept, 4.0 Pro: Operaciones institucionales en el mercado de divisas con bloques de órdenes y acción del precio",
    descripcion: "La entrega más avanzada de la serie Smart Money: confluencias institucionales, order blocks y gestión de la operación de principio a fin.",
    categorias: ["forex", "smc"],
    portada: "img/B0FMS17XX9.jpg",
    destacado: true
  },
  {
    id: "b0fx166z49",
    asin: "B0FX166Z49",
    lang: "es",
    titulo: "TRADING INSTITUCIONAL EN FOREX Y ACCIONES: Cómo Operan las Manos Fuertes en 1m - 1D",
    descripcion: "Cómo operan los grandes participantes en Forex y acciones, y cómo alinear tu operativa con el dinero institucional en ambos mercados.",
    categorias: ["forex", "smc"],
    portada: "img/B0FX166Z49.jpg",
    destacado: true
  },
  {
    id: "b0h2493qfj",
    asin: "B0H2493QFJ",
    lang: "es",
    titulo: "WYCKOFF TRADING INSTITUCIONAL: Liquidez, manipulación y psicología del mercado",
    descripcion: "El método Wyckoff y el trading institucional en un mismo marco: liquidez, manipulación del mercado y la psicología detrás de cada movimiento.",
    categorias: ["forex", "smc", "wyckoff"],
    portada: "img/B0H2493QFJ.jpg",
    destacado: true
  },
  {
    id: "b0h2z8r2gx",
    asin: "B0H2Z8R2GX",
    lang: "fr",
    titulo: "COMMENT TRADER ICT SANS INDICATEURS: Du graphique épuré à l'exécution professionnelle",
    descripcion: "Du graphique épuré à l'exécution professionnelle : liquidité, déséquilibres et order blocks avec la méthode ICT, sans aucun indicateur.",
    categorias: ["forex", "ict"],
    portada: "img/B0H2Z8R2GX.jpg",
    destacado: true
  },
  {
    id: "b0fpcqcdnh",
    asin: "B0FPCQCDNH",
    lang: "fr",
    titulo: "Maîtrisez la méthode ICT: Liquidité, structure et manipulation: les clés du marché",
    descripcion: "Les trois piliers de la méthode ICT — liquidité, structure et manipulation — expliqués avec une approche pratique pour votre trading quotidien.",
    categorias: ["forex", "ict", "smc"],
    portada: "img/B0FPCQCDNH.jpg",
    destacado: true
  },
  {
    id: "b0ft558d6j",
    asin: "B0FT558D6J",
    lang: "fr",
    titulo: "PRICE ACTION 3.0: DES STRATÉGIES CLAIRES POUR LES TRADERS MODERNES",
    descripcion: "Lisez le marché sans indicateurs : bougies, structure, supports et résistances, et le contexte nécessaire pour décider sur un graphique épuré.",
    categorias: ["forex", "priceaction"],
    portada: "img/B0FT558D6J.jpg",
    destacado: true
  },
  {
    id: "b0h1668znh",
    asin: "B0H1668ZNH",
    lang: "fr",
    titulo: "SMART MONEY CONCEPTS: La stratégie institutionnelle en Forex",
    descripcion: "Tradez comme les institutions : liquidité, order blocks et structure du marché expliqués pas à pas avec des exemples réels.",
    categorias: ["forex", "smc"],
    portada: "img/B0H1668ZNH.jpg",
    destacado: true
  },
  {
    id: "b0fnkqky34",
    asin: "B0FNKQKY34",
    lang: "fr",
    titulo: "Scalping Professionnel 3.0: Précision et discipline: Faites du trading votre liberté",
    descripcion: "Le scalping porté à un niveau professionnel : préparation de la session, sélection des paires, gestion du risque et exécution rapide.",
    categorias: ["forex", "scalping"],
    portada: "img/B0FNKQKY34.jpg",
    destacado: true
  },
  {
    id: "b0fmznfyhj",
    asin: "B0FMZNFYHJ",
    lang: "fr",
    titulo: "Smart Money Concept, 4.0 Pro: Trading Forex institutionnel avec blocs d'ordres et action sur les prix",
    descripcion: "L'entrée la plus avancée de la série Smart Money : confluences institutionnelles, order blocks et gestion complète de la position.",
    categorias: ["forex", "smc"],
    portada: "img/B0FMZNFYHJ.jpg",
    destacado: true
  },
  {
    id: "b0fx54phzz",
    asin: "B0FX54PHZZ",
    lang: "fr",
    titulo: "TRADING INSTITUTIONNEL SUR LE FOREX ET LES ACTIONS: Comment opèrent les mains fortes en 1 min - 1 j",
    descripcion: "Comment opèrent les grands acteurs sur le Forex et les actions, et comment aligner votre trading sur l'argent institutionnel.",
    categorias: ["forex", "smc"],
    portada: "img/B0FX54PHZZ.jpg",
    destacado: true
  },
  {
    id: "b0h27yx9mh",
    asin: "B0H27YX9MH",
    lang: "fr",
    titulo: "WYCKOFF & TRADING INSTITUTIONNEL: Liquidité, manipulation institutionnelle et psychologie du marché",
    descripcion: "La méthode Wyckoff et le trading institutionnel dans un même cadre : liquidité, manipulation du marché et psychologie derrière chaque mouvement.",
    categorias: ["forex", "smc", "wyckoff"],
    portada: "img/B0H27YX9MH.jpg",
    destacado: true
  },
  {
    id: "b0gx2xvqyd",
    asin: "B0GX2XVQYD",
    lang: "it",
    titulo: "COME FARE TRADING CON ICT SENZA INDICATORI: Dal grafico pulito all'esecuzione professionale",
    descripcion: "Dal grafico pulito all'esecuzione professionale: liquidità, imbalance e order block applicando il metodo ICT senza alcun indicatore.",
    categorias: ["forex", "ict"],
    portada: "img/B0GX2XVQYD.jpg",
    destacado: true
  },
  {
    id: "b0ft56jlv1",
    asin: "B0FT56JLV1",
    lang: "it",
    titulo: "PRICE ACTION 3.0: STRATEGIE CHIARE PER I TRADER MODERNI",
    descripcion: "Leggi il mercato senza indicatori: candele, struttura, supporti e resistenze, e il contesto necessario per decidere su un grafico pulito.",
    categorias: ["forex", "priceaction"],
    portada: "img/B0FT56JLV1.jpg",
    destacado: true
  },
  {
    id: "b0fpdd3npv",
    asin: "B0FPDD3NPV",
    lang: "it",
    titulo: "Padroneggia il metodo ICT: Liquidità, struttura e manipolazione: le chiavi del mercato",
    descripcion: "I tre pilastri del metodo ICT — liquidità, struttura e manipolazione — spiegati con un approccio pratico per l'operatività quotidiana.",
    categorias: ["forex", "ict", "smc"],
    portada: "img/B0FPDD3NPV.jpg",
    destacado: true
  },
  {
    id: "b0h1j4x9cg",
    asin: "B0H1J4X9CG",
    lang: "it",
    titulo: "SMART MONEY NEL FOREX: Order Block, BOS e CHOCH per leggere liquidità e trappole di mercato",
    descripcion: "Opera come le istituzioni: liquidità, order block e struttura del mercato spiegati passo dopo passo con esempi reali.",
    categorias: ["forex", "smc"],
    portada: "img/B0H1J4X9CG.jpg",
    destacado: true
  },
  {
    id: "b0fnkv16vv",
    asin: "B0FNKV16VV",
    lang: "it",
    titulo: "Scalping professionale 3.0: precisione e disciplina: Trasforma il trading nella tua libertà",
    descripcion: "Lo scalping portato a livello professionale: preparazione della sessione, selezione delle coppie, gestione del rischio ed esecuzione rapida.",
    categorias: ["forex", "scalping"],
    portada: "img/B0FNKV16VV.jpg",
    destacado: true
  },
  {
    id: "b0fn3zrd1j",
    asin: "B0FN3ZRD1J",
    lang: "it",
    titulo: "Smart Money Concept, 4.0 Pro: Trading Forex istituzionale con blocchi di ordini e azione del prezzo",
    descripcion: "L'edizione più avanzata della serie Smart Money: confluenze istituzionali, order block e gestione completa dell'operazione.",
    categorias: ["forex", "smc"],
    portada: "img/B0FN3ZRD1J.jpg",
    destacado: true
  },
  {
    id: "b0fxb7s3tp",
    asin: "B0FXB7S3TP",
    lang: "it",
    titulo: "TRADING ISTITUZIONALE SU FOREX E AZIONI: Come operano i grandi investitori in 1m - 1D",
    descripcion: "Come operano i grandi investitori nel Forex e nelle azioni, e come allineare la propria operatività al denaro istituzionale in entrambi i mercati.",
    categorias: ["forex", "smc"],
    portada: "img/B0FXB7S3TP.jpg",
    destacado: true
  },
  {
    id: "b0h2bgzctb",
    asin: "B0H2BGZCTB",
    lang: "it",
    titulo: "WYCKOFF TRADING ISTITUZIONALE: Liquidità, manipolazione e psicologia dei mercati",
    descripcion: "Il metodo Wyckoff e il trading istituzionale in un unico quadro: liquidità, manipolazione del mercato e la psicologia dietro ogni movimento.",
    categorias: ["forex", "smc", "wyckoff"],
    portada: "img/B0H2BGZCTB.jpg",
    destacado: true
  },
  {
    id: "b0gg4yx9sd",
    asin: "B0GG4YX9SD",
    lang: "de",
    titulo: "95 % DER HÄNDLER VERLIEREN GELD: DIE UNBEQUEME WAHRHEIT ÜBER DEN HANDEL",
    descripcion: "Warum die Mehrheit verliert und was die profitable Minderheit anders macht: Psychologie, Risikomanagement und entscheidende Gewohnheiten.",
    categorias: ["forex", "psicologia"],
    portada: "img/B0GG4YX9SD.jpg",
    destacado: false
  },
  {
    id: "b0fpx16s23",
    asin: "B0FPX16S23",
    lang: "de",
    titulo: "Bollinger Bands 2.0: Volatilität bei Aktien, Kryptowährungen und Devisen meistern: Risikomanagement",
    descripcion: "Ein moderner Blick auf Bollinger-Bänder bei Aktien, Kryptowährungen und Devisen, mit starkem Fokus auf Volatilität und Risikomanagement.",
    categorias: ["indicadores"],
    portada: "img/B0FPX16S23.jpg",
    destacado: false
  },
  {
    id: "b0cn6x6y2d",
    asin: "B0CN6X6Y2D",
    lang: "de",
    titulo: "Bollinger-Bänder: Erfolgsstrategien: Dynamische Analyse",
    descripcion: "Bollinger-Bänder im Detail: Volatilität, Kompressionen und praktische Strategien mit einem der meistgenutzten Indikatoren.",
    categorias: ["indicadores"],
    portada: "img/B0CN6X6Y2D.jpg",
    destacado: false
  },
  {
    id: "b0fy3g3cg3",
    asin: "B0FY3G3CG3",
    lang: "de",
    titulo: "DIE TASCHE FÜR ANFÄNGER 2.0: Praktischer Leitfaden zum Verständnis und zur Investition in globale Märkte",
    descripcion: "Ein praktischer Leitfaden, um die Börse zu verstehen und Schritt für Schritt Ihr erstes Portfolio aufzubauen, in einfacher Sprache.",
    categorias: ["otros"],
    portada: "img/B0FY3G3CG3.jpg",
    destacado: false
  },
  {
    id: "b0cn9qw3md",
    asin: "B0CN9QW3MD",
    lang: "de",
    titulo: "Die Kunst des Scalping: So maximieren Sie Ihren Gewinn in wenigen Minuten 2.0: Ich suche finanzielle Freiheit",
    descripcion: "Schnelles Trading mit Methode: kurzfristige Lesart, präzise Einstiege und die nötige Disziplin, um in kleinen Zeitrahmen zu bestehen.",
    categorias: ["forex", "scalping"],
    portada: "img/B0CN9QW3MD.jpg",
    destacado: false
  },
  {
    id: "b0frdzgjnq",
    asin: "B0FRDZGJNQ",
    lang: "de",
    titulo: "Die Struktur und Harmonie des Preises 2.0: Trading mit Liquidität",
    descripcion: "Wie und warum sich der Kurs bewegt: Struktur, Liquidität und Korrekturen, um Wendepunkte ohne Indikatoren vorherzusehen.",
    categorias: ["forex", "priceaction"],
    portada: "img/B0FRDZGJNQ.jpg",
    destacado: false
  },
  {
    id: "b0cnq2c31x",
    asin: "B0CNQ2C31X",
    lang: "de",
    titulo: "Die Struktur und Harmonie des Preises: Handelsstrategien",
    descripcion: "Der Ausgangspunkt der Reihe: die Kursstruktur und den Marktrhythmus verstehen, bevor man nach einem Einstieg sucht.",
    categorias: ["forex", "priceaction"],
    portada: "img/B0CNQ2C31X.jpg",
    destacado: false
  },
  {
    id: "b0cwkzymt4",
    asin: "B0CWKZYMT4",
    lang: "de",
    titulo: "Einführung in den Handel: Technische Analyse und praktische Übungen",
    descripcion: "Eine klare Einführung in die Welt des Tradings: Märkte, Teilnehmer, Risiko und alles, was Sie vor dem ersten Trade wissen sollten.",
    categorias: ["forex"],
    portada: "img/B0CWKZYMT4.jpg",
    destacado: false
  },
  {
    id: "b0gx3b5wfy",
    asin: "B0GX3B5WFY",
    lang: "de",
    titulo: "Forex-Scalping: Strategien für das Trading im 5-Minuten-Chart",
    descripcion: "Konkrete Strategien für den 5-Minuten-Chart: Einstiege, Risikomanagement und die komplette Routine eines Scalpers, klar erklärt.",
    categorias: ["forex", "scalping"],
    portada: "img/B0GX3B5WFY.jpg",
    destacado: false
  },
  {
    id: "b0gl8kfvyr",
    asin: "B0GL8KFVYR",
    lang: "de",
    titulo: "HANDEL: DEN MARKT LESEN: Eine Intraday-Studie zum Preisverhalten",
    descripcion: "Lernen Sie, den Markt selbst zu lesen: Struktur, Momentum und Kontext, damit jeder Trade auf dem tatsächlichen Kursverhalten basiert.",
    categorias: ["forex", "priceaction"],
    portada: "img/B0GL8KFVYR.jpg",
    destacado: false
  },
  {
    id: "b0gp7bfwws",
    asin: "B0GP7BFWWS",
    lang: "de",
    titulo: "HANDELN VS. POKER: Statistischer Vorteil und Entscheidungsfindung unter Unsicherheit",
    descripcion: "Statistischer Vorteil und Entscheidungsfindung unter Unsicherheit: Was Trading und Poker gemeinsam haben und was sie voneinander lernen können.",
    categorias: ["psicologia"],
    portada: "img/B0GP7BFWWS.jpg",
    destacado: false
  },
  {
    id: "b0cn4tgwmr",
    asin: "B0CN4TGWMR",
    lang: "de",
    titulo: "Japanische Kerzenmuster: Erfolgstaktiken: Stille Sprache",
    descripcion: "Vollständiger Leitfaden zu japanischen Kerzen: Was jedes Muster über den Kampf zwischen Käufern und Verkäufern verrät — immer im Kontext.",
    categorias: ["velas"],
    portada: "img/B0CN4TGWMR.jpg",
    destacado: false
  },
  {
    id: "b0frrd8n4k",
    asin: "B0FRRD8N4K",
    lang: "de",
    titulo: "KI, DeFi und Psychologie im neuen Zeitalter des Handels: Der moderne Trader 2.0",
    descripcion: "Künstliche Intelligenz, dezentrale Finanzen und Psychologie: wie das neue technologische Zeitalter den Handel verändert und wie man sich anpasst.",
    categorias: ["otros", "psicologia"],
    portada: "img/B0FRRD8N4K.jpg",
    destacado: false
  },
  {
    id: "b0d9vx2d8v",
    asin: "B0D9VX2D8V",
    lang: "de",
    titulo: "Praktische Handelsübungen: Echtzeitanalyse 1.0: Strategien und Muster",
    descripcion: "Ein Arbeitsbuch: geführte Analysen und Übungen an echten Charts, um Theorie in eigenes Urteilsvermögen zu verwandeln.",
    categorias: ["forex", "ejercicios"],
    portada: "img/B0D9VX2D8V.jpg",
    destacado: false
  },
  {
    id: "b0hd1hsv26",
    asin: "B0HD1HSV26",
    lang: "de",
    titulo: "SMALL CAPS: Ein praxisorientierter Leitfaden für den Handel mit US-amerikanischen Small-Cap-Aktien",
    descripcion: "Wie man US-amerikanische Small-Cap-Aktien identifiziert und handelt: Wachstumspotenzial, Volatilität und Risikomanagement.",
    categorias: ["forex", "otros"],
    portada: "img/B0HD1HSV26.jpg",
    destacado: false
  },
  {
    id: "b0fttftxnh",
    asin: "B0FTTFTXNH",
    lang: "de",
    titulo: "SMART MONEY VS. CHARTMUSTER: Liquidität, Manipulation und Strategie",
    descripcion: "Zwei Schulen im Vergleich: Was jeder Ansatz leistet, wann sie sich ergänzen und wie man beide in einer Strategie vereint.",
    categorias: ["forex", "patrones", "smc"],
    portada: "img/B0FTTFTXNH.jpg",
    destacado: false
  },
  {
    id: "b0cymm8d26",
    asin: "B0CYMM8D26",
    lang: "de",
    titulo: "TECHNISCHE INDIKATOREN, STATISTIKEN: TRADING, FOREX",
    descripcion: "Technische Indikatoren mit statistischer Grundlage: was sie wirklich messen, wann sie einen Vorteil bringen und wie man sie nicht blind einsetzt.",
    categorias: ["indicadores"],
    portada: "img/B0CYMM8D26.jpg",
    destacado: false
  },
  {
    id: "b0cll1dt8b",
    asin: "B0CLL1DT8B",
    lang: "de",
    titulo: "Verwandeln Sie Ihr Trading mit Chart-Mustern: Handelsgeheimnisse",
    descripcion: "Die Chartmuster, die wirklich funktionieren: Identifikation, Kontext und ein Handelsplan für jede Formation, mit echten Chartbeispielen.",
    categorias: ["forex", "patrones"],
    portada: "img/B0CLL1DT8B.jpg",
    destacado: false
  },
  {
    id: "b0h59kqbds",
    asin: "B0H59KQBDS",
    lang: "de",
    titulo: "WAS IHNEN NIEMAND ÜBER DEN HANDEL ERZÄHLT: Praktische Erkenntnisse aus Tausenden von Stunden vor den Charts",
    descripcion: "Die Seite des Tradings, die in Kursen fehlt: realistische Erwartungen, teure Fehler und was profitable Trader wirklich anders machen.",
    categorias: ["forex", "psicologia"],
    portada: "img/B0H59KQBDS.jpg",
    destacado: false
  },
  {
    id: "b0gngcf9j4",
    asin: "B0GNGCF9J4",
    lang: "de",
    titulo: "WIR SCHLIESSEN NIE PÜNKTLICH: Die Psychologie des Festhaltens an Entscheidungen, die nicht mehr funktionieren",
    descripcion: "Warum es so schwerfällt, eine Position zu schließen oder eine nicht mehr funktionierende Entscheidung aufzugeben, erklärt durch die Trading-Psychologie.",
    categorias: ["psicologia"],
    portada: "img/B0GNGCF9J4.jpg",
    destacado: false
  },
  {
    id: "wyckoff_4_moderne",
    asin: "B0FQCG2FWN",
    lang: "de",
    titulo: "Wyckoff 4.0: Moderne Strategien und Marktanalyse",
    descripcion: "Die Wyckoff-Methode für heutige Märkte: Akkumulation, Distribution und die Schlüsselereignisse des Schemas in der Praxis.",
    categorias: ["forex", "wyckoff"],
    portada: "img/B0FQCG2FWN.jpg",
    destacado: false
  },
  {
    id: "b0gfb87vlj",
    asin: "B0GFB87VLJ",
    lang: "en",
    titulo: "95% OF TRADERS LOSE MONEY: THE INCONVENIENT TRUTH ABOUT TRADING",
    descripcion: "Why most traders lose and what the profitable minority does differently: psychology, risk management and habits that make the difference.",
    categorias: ["forex", "psicologia"],
    portada: "img/B0GFB87VLJ.jpg",
    destacado: false
  },
  {
    id: "b0fprhyhlz",
    asin: "B0FPRHYHLZ",
    lang: "en",
    titulo: "Bollinger Bands 2.0: Mastering Volatility Across Stocks, Crypto & Forex: Risk management",
    descripcion: "A modern take on Bollinger Bands across stocks, crypto and forex, with a strong focus on volatility and risk management.",
    categorias: ["indicadores"],
    portada: "img/B0FPRHYHLZ.jpg",
    destacado: false
  },
  {
    id: "b0h3l3b441",
    asin: "B0H3L3B441",
    lang: "en",
    titulo: "FOREX SCALPING: Profitable 5-Minute Trading Strategies",
    descripcion: "Concrete strategies for the 5-minute chart: entries, management and a scalper's full routine, ready to apply from day one.",
    categorias: ["forex", "scalping"],
    portada: "img/B0H3L3B441.jpg",
    destacado: false
  },
  {
    id: "b0dl711d8w",
    asin: "B0DL711D8W",
    lang: "en",
    titulo: "Introduction to Trading: Technical analysis and practical exercises",
    descripcion: "A clear introduction to the world of trading: markets, participants, risk and what you need to know before you trade.",
    categorias: ["forex"],
    portada: "img/B0DL711D8W.jpg",
    destacado: false
  },
  {
    id: "b0frymz7nx",
    asin: "B0FRYMZ7NX",
    lang: "en",
    titulo: "RISK MANAGEMENT IN MODERN TRADING 2.0: Advanced Strategies",
    descripcion: "The pillar that holds everything else up: position sizing, ratios, losing streaks and capital protection explained with clear numbers.",
    categorias: ["forex", "riesgo"],
    portada: "img/B0FRYMZ7NX.jpg",
    destacado: false
  },
  {
    id: "b0hcvv7s37",
    asin: "B0HCVV7S37",
    lang: "en",
    titulo: "SMALL CAPS: A Practical Guide to Trading U.S. Small-Cap Stocks",
    descripcion: "How to identify and trade U.S. small-cap stocks: growth potential, volatility and risk management for small caps.",
    categorias: ["forex", "otros"],
    portada: "img/B0HCVV7S37.jpg",
    destacado: false
  },
  {
    id: "b0ftr183s9",
    asin: "B0FTR183S9",
    lang: "en",
    titulo: "SMART MONEY VS CHART PATTERNS: Liquidity, Manipulation and Strategy",
    descripcion: "Two schools face to face: what each approach brings, when they complement each other, and how to combine them in one strategy.",
    categorias: ["forex", "patrones", "smc"],
    portada: "img/B0FTR183S9.jpg",
    destacado: false
  },
  {
    id: "b0cqp8jx8h",
    asin: "B0CQP8JX8H",
    lang: "en",
    titulo: "Smart Money Concept 3.0 PRO: Market Manipulations",
    descripcion: "Order blocks, liquidity and institutional manipulation: the foundation of the Smart Money series with step-by-step examples.",
    categorias: ["forex", "smc"],
    portada: "img/B0CQP8JX8H.jpg",
    destacado: false
  },
  {
    id: "b0cw1h33l1",
    asin: "B0CW1H33L1",
    lang: "en",
    titulo: "TECHNICAL INDICATORS, STATISTICS: FOREX, FOREX TRADING",
    descripcion: "Technical indicators with a statistical foundation: what they really measure, when they give you an edge, and how to avoid using them blindly.",
    categorias: ["indicadores"],
    portada: "img/B0CW1H33L1.jpg",
    destacado: false
  },
  {
    id: "b0dwjzb78h",
    asin: "B0DWJZB78H",
    lang: "en",
    titulo: "THE BAG FOR BEGINNERS 2.0: A practical guide to understanding and investing in global markets",
    descripcion: "A practical guide to understanding the stock market and building your first portfolio, step by step, in plain language.",
    categorias: ["otros"],
    portada: "img/B0DWJZB78H.jpg",
    destacado: false
  },
  {
    id: "b0gp35ntqp",
    asin: "B0GP35NTQP",
    lang: "en",
    titulo: "TRADING VS POKER: Statistical advantage and decision-making under uncertainty",
    descripcion: "Statistical advantage and decision-making under uncertainty: what trading and poker have in common, and the lessons each can teach the other.",
    categorias: ["psicologia"],
    portada: "img/B0GP35NTQP.jpg",
    destacado: false
  },
  {
    id: "b0gl34vyf3",
    asin: "B0GL34VYF3",
    lang: "en",
    titulo: "TRADING: READ THE MARKET: An intraday study of price behavior",
    descripcion: "Learn to read the market itself: structure, momentum and context, so every trade is backed by what price is actually doing.",
    categorias: ["forex", "priceaction"],
    portada: "img/B0GL34VYF3.jpg",
    destacado: false
  },
  {
    id: "b0frgj1zt2",
    asin: "B0FRGJ1ZT2",
    lang: "en",
    titulo: "The Structure and Harmony of Price 2.0: Trading with Liquidity",
    descripcion: "How and why price moves: structure, liquidity and corrections to anticipate turning points without relying on indicators.",
    categorias: ["forex", "priceaction"],
    portada: "img/B0FRGJ1ZT2.jpg",
    destacado: false
  },
  {
    id: "b0cnnkfhwc",
    asin: "B0CNNKFHWC",
    lang: "en",
    titulo: "The Structure and Harmony of Price: Trading Strategies",
    descripcion: "The starting point of the series: understanding price structure and market rhythm before looking for any entry.",
    categorias: ["forex", "priceaction"],
    portada: "img/B0CNNKFHWC.jpg",
    destacado: false
  },
  {
    id: "b0dbmn9pr9",
    asin: "B0DBMN9PR9",
    lang: "en",
    titulo: "Trading Practice and Analysis: Real-Time Exercises: Strategies and Patterns",
    descripcion: "A workbook: guided analysis and exercises on real charts to turn theory into your own trading judgement.",
    categorias: ["forex", "ejercicios"],
    portada: "img/B0DBMN9PR9.jpg",
    destacado: false
  },
  {
    id: "b0dllmrqfh",
    asin: "B0DLLMRQFH",
    lang: "en",
    titulo: "Trading for Newbies: Technical Analysis",
    descripcion: "Start from zero on the right foot: concepts, platforms, order types and first steps without unnecessary jargon.",
    categorias: ["forex"],
    portada: "img/B0DLLMRQFH.jpg",
    destacado: false
  },
  {
    id: "b0clkc5trz",
    asin: "B0CLKC5TRZ",
    lang: "en",
    titulo: "Transform your Trading with Chartist Patterns: Trading Secrets",
    descripcion: "The chart patterns that actually work: identification, context and a trading plan for each formation, with real chart examples.",
    categorias: ["forex", "patrones"],
    portada: "img/B0CLKC5TRZ.jpg",
    destacado: false
  },
  {
    id: "b0gnhxd4nd",
    asin: "B0GNHXD4ND",
    lang: "en",
    titulo: "WE NEVER CLOSE ON TIME: The psychology of sticking to decisions that no longer work",
    descripcion: "Why it's so hard to close a trade or abandon a decision that no longer works, and how trading psychology explains that block.",
    categorias: ["psicologia"],
    portada: "img/B0GNHXD4ND.jpg",
    destacado: false
  },
  {
    id: "b0h4lv3kyx",
    asin: "B0H4LV3KYX",
    lang: "en",
    titulo: "WHAT NO ONE TELLS YOU ABOUT TRADING: Real lessons learned from thousands of hours in the markets",
    descripcion: "The side of trading courses never show: realistic expectations, account-killing mistakes and what truly separates profitable traders.",
    categorias: ["forex", "psicologia"],
    portada: "img/B0H4LV3KYX.jpg",
    destacado: false
  },
  {
    id: "b0gf4qgftw",
    asin: "B0GF4QGFTW",
    lang: "es",
    titulo: "EL 95 % DE LOS TRADERS PIERDE DINERO: LA VERDAD INCÓMODA DEL TRADING",
    descripcion: "Por qué pierde la mayoría y qué hace distinto la minoría rentable: psicología, gestión del riesgo y hábitos que marcan la diferencia.",
    categorias: ["forex", "psicologia"],
    portada: "img/B0GF4QGFTW.jpg",
    destacado: false
  },
  {
    id: "b0d9ttm3y6",
    asin: "B0D9TTM3Y6",
    lang: "es",
    titulo: "Ejercicios Prácticos de Trading: Análisis en Tiempo Real 1.0: Estrategias y Patrones",
    descripcion: "Cuaderno de trabajo: análisis guiados y ejercicios sobre gráficos reales para convertir la teoría en criterio propio.",
    categorias: ["forex", "ejercicios"],
    portada: "img/B0D9TTM3Y6.jpg",
    destacado: false
  },
  {
    id: "b0cljwnm8n",
    asin: "B0CLJWNM8N",
    lang: "es",
    titulo: "El arte del scalping: cómo maximizar tus ganancias en minutos 2.0: Buscando la libertad financiera",
    descripcion: "Operativa rápida con método: lectura de corto plazo, entradas precisas y la disciplina necesaria para sobrevivir en marcos pequeños.",
    categorias: ["forex", "scalping"],
    portada: "img/B0CLJWNM8N.jpg",
    destacado: false
  },
  {
    id: "b0h5942r7v",
    asin: "B0H5942R7V",
    lang: "es",
    titulo: "GESTIÓN DEL RIESGO EN EL TRADING MODERNO 2.0: Estrategias Avanzadas",
    descripcion: "El pilar que sostiene todo lo demás: tamaño de posición, ratios, rachas y protección del capital explicados con números claros.",
    categorias: ["forex", "riesgo"],
    portada: "img/B0H5942R7V.jpg",
    destacado: false
  },
  {
    id: "b0frnnnj5q",
    asin: "B0FRNNNJ5Q",
    lang: "es",
    titulo: "IA, DeFi y Psicología en la nueva era del trading: El Trader Moderno 2.0",
    descripcion: "Inteligencia artificial, finanzas descentralizadas y psicología: cómo la nueva era tecnológica está cambiando el trading y cómo adaptarse.",
    categorias: ["otros", "psicologia"],
    portada: "img/B0FRNNNJ5Q.jpg",
    destacado: false
  },
  {
    id: "b0cylpfwzk",
    asin: "B0CYLPFWZK",
    lang: "es",
    titulo: "INDICADORES TECNICOS, ESTADISTICA: TRADING, FOREX",
    descripcion: "Indicadores técnicos con base estadística: qué miden realmente, cuándo aportan ventaja y cómo evitar usarlos a ciegas.",
    categorias: ["indicadores"],
    portada: "img/B0CYLPFWZK.jpg",
    destacado: false
  },
  {
    id: "b0dl6k9h2m",
    asin: "B0DL6K9H2M",
    lang: "es",
    titulo: "Introducción al Trading: Análisis Técnico y ejercicios prácticos",
    descripcion: "Una introducción clara al mundo del trading: mercados, participantes, riesgo y lo que necesitas saber antes de operar.",
    categorias: ["forex"],
    portada: "img/B0DL6K9H2M.jpg",
    destacado: false
  },
  {
    id: "b0h3fbq8fz",
    asin: "B0H3FBQ8FZ",
    lang: "es",
    titulo: "LO QUE NADIE TE CUENTA SOBRE EL TRADING: Aprendizajes reales tras miles de horas delante de los gráficos",
    descripcion: "La cara del trading que no aparece en los cursos: expectativas reales, errores que arruinan cuentas y lo que de verdad separa al trader rentable del resto.",
    categorias: ["forex", "psicologia"],
    portada: "img/B0H3FBQ8FZ.jpg",
    destacado: false
  },
  {
    id: "b0frb47d5l",
    asin: "B0FRB47D5L",
    lang: "es",
    titulo: "La Estructura y Armonía del Precio 2.0: Trading con Liquidez",
    descripcion: "Cómo se mueve el precio y por qué: estructura, liquidez y correcciones para anticipar zonas de giro sin depender de indicadores.",
    categorias: ["forex", "priceaction"],
    portada: "img/B0FRB47D5L.jpg",
    destacado: false
  },
  {
    id: "b0cnm9h6q8",
    asin: "B0CNM9H6Q8",
    lang: "es",
    titulo: "La Estructura y Armonía del Precio: Estrategias de Trading",
    descripcion: "El punto de partida de la serie: comprender la estructura del precio y el ritmo del mercado antes de buscar cualquier entrada.",
    categorias: ["forex", "priceaction"],
    portada: "img/B0CNM9H6Q8.jpg",
    destacado: false
  },
  {
    id: "b0cn52tzrv",
    asin: "B0CN52TZRV",
    lang: "es",
    titulo: "Las Bandas de Bollinger: Estrategias de Éxito: Análisis Dinámico",
    descripcion: "Las Bandas de Bollinger a fondo: volatilidad, compresiones y estrategias prácticas con uno de los indicadores más utilizados.",
    categorias: ["indicadores"],
    portada: "img/B0CN52TZRV.jpg",
    destacado: false
  },
  {
    id: "b0gnhzrw8v",
    asin: "B0GNHZRW8V",
    lang: "es",
    titulo: "NUNCA CERRAMOS A TIEMPO: La psicología de mantener decisiones que ya no funcionan",
    descripcion: "Por qué cuesta tanto cerrar una operación o abandonar una decisión que ya no funciona, y cómo la psicología del trading explica ese bloqueo.",
    categorias: ["psicologia"],
    portada: "img/B0GNHZRW8V.jpg",
    destacado: false
  },
  {
    id: "b0cmj9s92t",
    asin: "B0CMJ9S92T",
    lang: "es",
    titulo: "Patrones de Velas Japonesas: Tácticas de Éxito: Lenguaje Silencioso",
    descripcion: "Guía completa de velas japonesas: qué cuenta cada patrón sobre la lucha entre compradores y vendedores y cómo usarlos siempre con contexto.",
    categorias: ["velas"],
    portada: "img/B0CMJ9S92T.jpg",
    destacado: false
  },
  {
    id: "b0h3nnzydp",
    asin: "B0H3NNZYDP",
    lang: "es",
    titulo: "SCALPING FOREX: Estrategias para Operar en 5 Minutos",
    descripcion: "Estrategias concretas para el gráfico de 5 minutos: entradas, gestión y la rutina completa de un scalper, explicadas para aplicar desde el primer día.",
    categorias: ["forex", "scalping"],
    portada: "img/B0H3NNZYDP.jpg",
    destacado: false
  },
  {
    id: "b0hcm44mrj",
    asin: "B0HCM44MRJ",
    lang: "es",
    titulo: "SMALL CAPS: Guía práctica para operar acciones de baja capitalización en Estados Unidos",
    descripcion: "Cómo identificar y operar acciones de baja capitalización en EE. UU.: potencial de crecimiento, volatilidad y gestión del riesgo en small caps.",
    categorias: ["forex", "otros"],
    portada: "img/B0HCM44MRJ.jpg",
    destacado: false
  },
  {
    id: "b0ftmb8m6k",
    asin: "B0FTMB8M6K",
    lang: "es",
    titulo: "SMART MONEY VS PATRONES CHARTISTAS: Liquidez, Manipulación y Estrategia",
    descripcion: "Dos escuelas frente a frente: qué aporta cada enfoque, cuándo se complementan y cómo combinarlos en una sola operativa.",
    categorias: ["forex", "patrones", "smc"],
    portada: "img/B0FTMB8M6K.jpg",
    destacado: false
  },
  {
    id: "b0cqqybxcq",
    asin: "B0CQQYBXCQ",
    lang: "es",
    titulo: "Smart Money Concept 3.0 PRO: Market Manipulations",
    descripcion: "Order blocks, liquidez y manipulación institucional: la base de la serie Smart Money con ejemplos explicados paso a paso.",
    categorias: ["forex", "smc"],
    portada: "img/B0CQQYBXCQ.jpg",
    destacado: false
  },
  {
    id: "b0gp35r8yh",
    asin: "B0GP35R8YH",
    lang: "es",
    titulo: "TRADING VS POKER: Ventaja estadística y toma de decisiones bajo incertidumbre",
    descripcion: "Probabilidades, gestión y control emocional: lo que el trading y el póker comparten, y las lecciones que se prestan mutuamente.",
    categorias: ["psicologia"],
    portada: "img/B0GP35R8YH.jpg",
    destacado: false
  },
  {
    id: "b0gjsw3z2g",
    asin: "B0GJSW3Z2G",
    lang: "es",
    titulo: "TRADING: LEER EL MERCADO: Un estudio intradía del comportamiento del precio",
    descripcion: "Aprende a leer el mercado en sí mismo: estructura, momentum y contexto, para que cada operación se apoye en lo que el precio realmente hace.",
    categorias: ["forex", "priceaction"],
    portada: "img/B0GJSW3Z2G.jpg",
    destacado: false
  },
  {
    id: "b0dllj7v2d",
    asin: "B0DLLJ7V2D",
    lang: "es",
    titulo: "Trading para Novatos: Análisis Técnico",
    descripcion: "Empieza desde cero con buen pie: conceptos, plataformas, tipos de órdenes y primeros pasos sin tecnicismos innecesarios.",
    categorias: ["forex"],
    portada: "img/B0DLLJ7V2D.jpg",
    destacado: false
  },
  {
    id: "b0cm9rm559",
    asin: "B0CM9RM559",
    lang: "es",
    titulo: "Transforma tu Trading con Patrones Chartistas: Secretos del Trading",
    descripcion: "Los patrones chartistas que funcionan: identificación, contexto y plan de trading para cada figura, con ejemplos sobre gráficos reales.",
    categorias: ["forex", "patrones"],
    portada: "img/B0CM9RM559.jpg",
    destacado: false
  },
  {
    id: "wyckoff_3_analisis",
    asin: "B0CLKW996K",
    lang: "es",
    titulo: "Wyckoff 3.0: Estrategias y Análisis Técnico: Los Ciclos del Mercado",
    descripcion: "El método Wyckoff actualizado: acumulación, distribución y los eventos clave del esquema aplicados al mercado actual.",
    categorias: ["forex", "wyckoff"],
    portada: "img/B0CLKW996K.jpg",
    destacado: false
  },
  {
    id: "b0gfp1r3f4",
    asin: "B0GFP1R3F4",
    lang: "fr",
    titulo: "95 % DES TRADERS PERDENT DE L'ARGENT: LA VÉRITÉ DÉRANGEANTE SUR LE TRADING",
    descripcion: "Pourquoi la majorité perd et ce que fait différemment la minorité rentable : psychologie, gestion du risque et discipline.",
    categorias: ["forex", "psicologia"],
    portada: "img/B0GFP1R3F4.jpg",
    destacado: false
  },
  {
    id: "b0ftt15qgc",
    asin: "B0FTT15QGC",
    lang: "fr",
    titulo: "ARGENT INTELLIGENT VS MODÈLES GRAPHIQUES: Liquidité, manipulation et stratégie",
    descripcion: "Deux écoles face à face : ce qu'apporte chaque approche, quand elles se complètent et comment les combiner dans une seule stratégie.",
    categorias: ["forex", "patrones", "smc"],
    portada: "img/B0FTT15QGC.jpg",
    destacado: false
  },
  {
    id: "b0cn5qvyh7",
    asin: "B0CN5QVYH7",
    lang: "fr",
    titulo: "Bandes de Bollinger: Stratégies de réussite: Analyse dynamique",
    descripcion: "Les Bandes de Bollinger en profondeur : volatilité, compressions et stratégies pratiques avec l'un des indicateurs les plus utilisés.",
    categorias: ["indicadores"],
    portada: "img/B0CN5QVYH7.jpg",
    destacado: false
  },
  {
    id: "b0gl92mdkq",
    asin: "B0GL92MDKQ",
    lang: "fr",
    titulo: "COMMERCE: LIRE LE MARCHÉ: Une étude intraday du comportement des prix",
    descripcion: "Apprenez à lire le marché lui-même : structure, momentum et contexte, pour que chaque position s'appuie sur ce que fait réellement le prix.",
    categorias: ["forex", "priceaction"],
    portada: "img/B0GL92MDKQ.jpg",
    destacado: false
  },
  {
    id: "b0h14htv7b",
    asin: "B0H14HTV7B",
    lang: "fr",
    titulo: "Ce que personne ne vous dit sur le trading: Les vraies leçons tirées de milliers d'heures passées devant les graphiques",
    descripcion: "La face cachée du trading : attentes réalistes, erreurs qui ruinent les comptes et ce qui distingue vraiment les traders rentables.",
    categorias: ["forex", "psicologia"],
    portada: "img/B0H14HTV7B.jpg",
    destacado: false
  },
  {
    id: "b0d9wslrpn",
    asin: "B0D9WSLRPN",
    lang: "fr",
    titulo: "Exercices pratiques de trading: analyse en temps réel 1.0: Stratégies et modèles",
    descripcion: "Un cahier d'exercices : analyses guidées et exercices sur des graphiques réels pour transformer la théorie en jugement personnel.",
    categorias: ["forex", "ejercicios"],
    portada: "img/B0D9WSLRPN.jpg",
    destacado: false
  },
  {
    id: "b0fryg1ms9",
    asin: "B0FRYG1MS9",
    lang: "fr",
    titulo: "GESTION DES RISQUES DANS LE TRADING MODERNE 2.0: Stratégies avancées",
    descripcion: "Le pilier qui soutient tout le reste : taille de position, ratios, séries de pertes et protection du capital expliqués avec des chiffres clairs.",
    categorias: ["forex", "riesgo"],
    portada: "img/B0FRYG1MS9.jpg",
    destacado: false
  },
  {
    id: "b0dmmhl8c2",
    asin: "B0DMMHL8C2",
    lang: "fr",
    titulo: "IA, DeFi et psychologie dans la nouvelle ère du trading: Le trader moderne 2.0",
    descripcion: "Intelligence artificielle, finance décentralisée et psychologie : comment la nouvelle ère technologique transforme le trading et comment s'y adapter.",
    categorias: ["otros", "psicologia"],
    portada: "img/B0DMMHL8C2.jpg",
    destacado: false
  },
  {
    id: "b0cy3kszvd",
    asin: "B0CY3KSZVD",
    lang: "fr",
    titulo: "INDICATEURS TECHNIQUES, STATISTIQUES: TRADING, FOREX",
    descripcion: "Des indicateurs techniques à base statistique : ce qu'ils mesurent vraiment, quand ils apportent un avantage et comment éviter de les utiliser aveuglément.",
    categorias: ["indicadores"],
    portada: "img/B0CY3KSZVD.jpg",
    destacado: false
  },
  {
    id: "b0dlbcxd99",
    asin: "B0DLBCXD99",
    lang: "fr",
    titulo: "Introduction au trading: Analyse technique et exercices pratiques",
    descripcion: "Une introduction claire au monde du trading : marchés, acteurs, risque et tout ce qu'il faut savoir avant de trader.",
    categorias: ["forex"],
    portada: "img/B0DLBCXD99.jpg",
    destacado: false
  },
  {
    id: "b0fy6hlk39",
    asin: "B0FY6HLK39",
    lang: "fr",
    titulo: "LE SAC POUR DÉBUTANTS 2.0: Guide pratique pour comprendre et investir sur les marchés mondiaux",
    descripcion: "Un guide pratique pour comprendre la bourse et construire votre premier portefeuille, étape par étape, en langage simple.",
    categorias: ["otros"],
    portada: "img/B0FY6HLK39.jpg",
    destacado: false
  },
  {
    id: "b0frmlvkvv",
    asin: "B0FRMLVKVV",
    lang: "fr",
    titulo: "La structure et l'harmonie du prix 2.0: Trading avec liquidité",
    descripcion: "Comment et pourquoi le prix évolue : structure, liquidité et corrections pour anticiper les zones de retournement sans indicateurs.",
    categorias: ["forex", "priceaction"],
    portada: "img/B0FRMLVKVV.jpg",
    destacado: false
  },
  {
    id: "b0cn42yty8",
    asin: "B0CN42YTY8",
    lang: "fr",
    titulo: "Modèles de bougies japonaises: tactiques de réussite: Langage silencieux",
    descripcion: "Guide complet des chandeliers japonais : ce que chaque figure révèle de la lutte entre acheteurs et vendeurs, toujours avec du contexte.",
    categorias: ["velas"],
    portada: "img/B0CN42YTY8.jpg",
    destacado: false
  },
  {
    id: "b0gns67sn5",
    asin: "B0GNS67SN5",
    lang: "fr",
    titulo: "NOUS NE FERMONS JAMAIS À L'HEURE: La psychologie du maintien de décisions qui ne fonctionnent plus",
    descripcion: "Pourquoi il est si difficile de clôturer une position ou d'abandonner une décision qui ne fonctionne plus, et ce que dit la psychologie du trading.",
    categorias: ["psicologia"],
    portada: "img/B0GNS67SN5.jpg",
    destacado: false
  },
  {
    id: "b0h3ww6r5m",
    asin: "B0H3WW6R5M",
    lang: "fr",
    titulo: "SCALPING FOREX: Stratégies de trading sur 5 minutes",
    descripcion: "Des stratégies concrètes pour le graphique 5 minutes : entrées, gestion et la routine complète d'un scalpeur, prêtes à appliquer dès le premier jour.",
    categorias: ["forex", "scalping"],
    portada: "img/B0H3WW6R5M.jpg",
    destacado: false
  },
  {
    id: "b0hd2qgkxp",
    asin: "B0HD2QGKXP",
    lang: "fr",
    titulo: "SMALL CAPS: Guide pratique du trading des actions américaines à petite capitalisation",
    descripcion: "Comment identifier et trader les actions américaines à petite capitalisation : potentiel de croissance, volatilité et gestion du risque.",
    categorias: ["forex", "otros"],
    portada: "img/B0HD2QGKXP.jpg",
    destacado: false
  },
  {
    id: "b0gp9pv8ql",
    asin: "B0GP9PV8QL",
    lang: "fr",
    titulo: "TRADING VS POKER: Avantage statistique et prise de décision en situation d'incertitude",
    descripcion: "Avantage statistique et prise de décision dans l'incertitude : ce que le trading et le poker ont en commun, et les leçons qu'ils s'échangent.",
    categorias: ["psicologia"],
    portada: "img/B0GP9PV8QL.jpg",
    destacado: false
  },
  {
    id: "b0cll246bf",
    asin: "B0CLL246BF",
    lang: "fr",
    titulo: "Transformez votre trading avec des modèles chartistes: Secrets commerciaux",
    descripcion: "Les figures chartistes qui fonctionnent vraiment : identification, contexte et plan de trading pour chaque figure, avec des exemples réels.",
    categorias: ["forex", "patrones"],
    portada: "img/B0CLL246BF.jpg",
    destacado: false
  },
  {
    id: "b0cn5xsngn",
    asin: "B0CN5XSNGN",
    lang: "it",
    titulo: "Bande di Bollinger: Strategie di successo: Analisi dinamica",
    descripcion: "Le Bande di Bollinger in profondità: volatilità, compressioni e strategie pratiche con uno degli indicatori più usati.",
    categorias: ["indicadores"],
    portada: "img/B0CN5XSNGN.jpg",
    destacado: false
  },
  {
    id: "b0gl9llrxb",
    asin: "B0GL9LLRXB",
    lang: "it",
    titulo: "COMMERCIO: LEGGI IL MERCATO: Uno studio intraday del comportamento dei prezzi",
    descripcion: "Impara a leggere il mercato stesso: struttura, momentum e contesto, così ogni operazione si basa su ciò che il prezzo sta davvero facendo.",
    categorias: ["forex", "priceaction"],
    portada: "img/B0GL9LLRXB.jpg",
    destacado: false
  },
  {
    id: "b0h4rx13tt",
    asin: "B0H4RX13TT",
    lang: "it",
    titulo: "COSE CHE NESSUNO TI DICE SUL TRADING: Vere lezioni apprese dopo migliaia di ore passate davanti ai grafici",
    descripcion: "Il lato del trading che i corsi non mostrano: aspettative realistiche, errori che bruciano i conti e cosa distingue davvero i trader profittevoli.",
    categorias: ["forex", "psicologia"],
    portada: "img/B0H4RX13TT.jpg",
    destacado: false
  },
  {
    id: "b0d9ygsmry",
    asin: "B0D9YGSMRY",
    lang: "it",
    titulo: "Esercizi pratici di trading: analisi in tempo reale 1.0: Strategie e modelli",
    descripcion: "Un quaderno di lavoro: analisi guidate ed esercizi su grafici reali per trasformare la teoria in giudizio personale.",
    categorias: ["forex", "ejercicios"],
    portada: "img/B0D9YGSMRY.jpg",
    destacado: false
  },
  {
    id: "b0frzkjwyq",
    asin: "B0FRZKJWYQ",
    lang: "it",
    titulo: "GESTIONE DEL RISCHIO NEL TRADING MODERNO 2.0: Strategie avanzate",
    descripcion: "Il pilastro che sostiene tutto il resto: dimensionamento delle posizioni, rapporti, serie negative e protezione del capitale spiegati con numeri chiari.",
    categorias: ["forex", "riesgo"],
    portada: "img/B0FRZKJWYQ.jpg",
    destacado: false
  },
  {
    id: "b0frxkbqsn",
    asin: "B0FRXKBQSN",
    lang: "it",
    titulo: "IA, DeFi e psicologia nella nuova era del trading: Il trader moderno 2.0",
    descripcion: "Intelligenza artificiale, finanza decentralizzata e psicologia: come la nuova era tecnologica sta cambiando il trading e come adattarsi.",
    categorias: ["otros", "psicologia"],
    portada: "img/B0FRXKBQSN.jpg",
    destacado: false
  },
  {
    id: "b0gfxx61rh",
    asin: "B0GFXX61RH",
    lang: "it",
    titulo: "IL 95% DEI TRADER PERDE SOLDI: LA SCOMODA VERITÀ SUL TRADING",
    descripcion: "Perché la maggioranza perde e cosa fa di diverso la minoranza redditizia: psicologia, gestione del rischio e abitudini che fanno la differenza.",
    categorias: ["forex", "psicologia"],
    portada: "img/B0GFXX61RH.jpg",
    destacado: false
  },
  {
    id: "b0cyq8dgtx",
    asin: "B0CYQ8DGTX",
    lang: "it",
    titulo: "INDICATORI TECNICI, STATISTICHE: TRADING, FOREX",
    descripcion: "Indicatori tecnici con base statistica: cosa misurano davvero, quando danno un vantaggio e come evitare di usarli alla cieca.",
    categorias: ["indicadores"],
    portada: "img/B0CYQ8DGTX.jpg",
    destacado: false
  },
  {
    id: "b0dl7wl561",
    asin: "B0DL7WL561",
    lang: "it",
    titulo: "Introduzione al trading: Analisi tecnica ed esercitazioni pratiche",
    descripcion: "Un'introduzione chiara al mondo del trading: mercati, partecipanti, rischio e tutto ciò che serve sapere prima di operare.",
    categorias: ["forex"],
    portada: "img/B0DL7WL561.jpg",
    destacado: false
  },
  {
    id: "b0fy4kn46d",
    asin: "B0FY4KN46D",
    lang: "it",
    titulo: "LA BORSA PER PRINCIPIANTI 2.0: Guida pratica per comprendere e investire nei mercati globali",
    descripcion: "Una guida pratica per capire la borsa e costruire il tuo primo portafoglio, passo dopo passo, con un linguaggio semplice.",
    categorias: ["otros"],
    portada: "img/B0FY4KN46D.jpg",
    destacado: false
  },
  {
    id: "b0frhzjpfz",
    asin: "B0FRHZJPFZ",
    lang: "it",
    titulo: "La struttura e l'armonia del prezzo 2.0: Trading con liquidità",
    descripcion: "Come e perché si muove il prezzo: struttura, liquidità e correzioni per anticipare le zone di inversione senza indicatori.",
    categorias: ["forex", "priceaction"],
    portada: "img/B0FRHZJPFZ.jpg",
    destacado: false
  },
  {
    id: "b0cnnpb4xj",
    asin: "B0CNNPB4XJ",
    lang: "it",
    titulo: "La struttura e l'armonia del prezzo: Strategie di trading",
    descripcion: "Il punto di partenza della serie: comprendere la struttura del prezzo e il ritmo del mercato prima di cercare qualsiasi ingresso.",
    categorias: ["forex", "priceaction"],
    portada: "img/B0CNNPB4XJ.jpg",
    destacado: false
  },
  {
    id: "b0cn4qndrp",
    asin: "B0CN4QNDRP",
    lang: "it",
    titulo: "Modelli di candele giapponesi: tattiche di successo: Linguaggio silenzioso",
    descripcion: "Guida completa alle candele giapponesi: cosa racconta ogni pattern sulla lotta tra compratori e venditori, sempre con contesto.",
    categorias: ["velas"],
    portada: "img/B0CN4QNDRP.jpg",
    destacado: false
  },
  {
    id: "b0gnnyxvmf",
    asin: "B0GNNYXVMF",
    lang: "it",
    titulo: "NON CHIUDIAMO MAI IN ORARIO: La psicologia dell'attaccamento a decisioni che non funzionano più",
    descripcion: "Perché è così difficile chiudere un'operazione o abbandonare una decisione che non funziona più, spiegato dalla psicologia del trading.",
    categorias: ["psicologia"],
    portada: "img/B0GNNYXVMF.jpg",
    destacado: false
  },
  {
    id: "b0hd9n628l",
    asin: "B0HD9N628L",
    lang: "it",
    titulo: "SMALL CAPS: Guida pratica al trading delle small cap americane",
    descripcion: "Come identificare e operare sulle small cap americane: potenziale di crescita, volatilità e gestione del rischio.",
    categorias: ["forex", "otros"],
    portada: "img/B0HD9N628L.jpg",
    destacado: false
  },
  {
    id: "b0h41wqrfs",
    asin: "B0H41WQRFS",
    lang: "it",
    titulo: "Scalping nel Forex: Strategie di trading a 5 minuti",
    descripcion: "Strategie concrete per il grafico a 5 minuti: ingressi, gestione e la routine completa di uno scalper, pronte da applicare fin dal primo giorno.",
    categorias: ["forex", "scalping"],
    portada: "img/B0H41WQRFS.jpg",
    destacado: false
  },
  {
    id: "b0gp9t7xnt",
    asin: "B0GP9T7XNT",
    lang: "it",
    titulo: "TRADING VS POKER: Vantaggio statistico e processo decisionale in condizioni di incertezza",
    descripcion: "Vantaggio statistico e processo decisionale in condizioni di incertezza: cosa hanno in comune trading e poker.",
    categorias: ["psicologia"],
    portada: "img/B0GP9T7XNT.jpg",
    destacado: false
  },
  {
    id: "b0dlq3b1sl",
    asin: "B0DLQ3B1SL",
    lang: "it",
    titulo: "Trading per principianti: Analisi tecnica",
    descripcion: "Inizia da zero con il piede giusto: concetti, piattaforme, tipi di ordini e primi passi senza tecnicismi inutili.",
    categorias: ["forex"],
    portada: "img/B0DLQ3B1SL.jpg",
    destacado: false
  },
];
