/* Catálogo de trading. Revisado con la biblioteca KDP el 7 de noviembre de 2026.
 * Una entrada por edición e idioma; ASIN del eBook cuando está disponible.
 * Las portadas enlazan con el CDN público de Amazon para reflejar las actualizaciones.
 */
const BOOKS = [
  {
    "id": "b0fx4dpt55",
    "asin": "B0FX4DPT55",
    "lang": "de",
    "titulo": "INSTITUTIONELLER HANDEL MIT FOREX UND AKTIEN: Wie die starken Hände von 1 Minute bis 1 Tag agieren",
    "descripcion": "Wie die großen Marktteilnehmer im Forex- und Aktienhandel agieren und wie Sie Ihren Handel mit institutionellem Geld in Einklang bringen.",
    "categorias": [
      "forex",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FX4DPT55.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0dvs235r8",
    "asin": "B0DVS235R8",
    "lang": "de",
    "titulo": "PREISAKTION 3.0: KLARE STRATEGIEN FÜR MODERNE HÄNDLER",
    "descripcion": "Lesen Sie den Markt ohne Indikatoren: Kerzen, Struktur, Unterstützung und Widerstand sowie der nötige Kontext für Entscheidungen auf einem sauberen Chart.",
    "categorias": [
      "forex",
      "priceaction"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0DVS235R8.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0fnk5rc58",
    "asin": "B0FNK5RC58",
    "lang": "de",
    "titulo": "Professionelles Scalping 3.0: Präzision und Disziplin: Machen Sie den Handel zu Ihrer Freiheit",
    "descripcion": "Scalping auf professionellem Niveau: Sitzungsvorbereitung, Paarauswahl, Risikomanagement und schnelle Ausführung mit klaren Regeln.",
    "categorias": [
      "forex",
      "scalping"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FNK5RC58.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0h1mts8k6",
    "asin": "B0H1MTS8K6",
    "lang": "de",
    "titulo": "SMART MONEY TRADING: Institutionelle Forex-Strategien",
    "descripcion": "Handeln wie die Institutionen: Liquidität, Order Blocks und Marktstruktur Schritt für Schritt mit echten Chartbeispielen.",
    "categorias": [
      "forex",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0H1MTS8K6.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0fqkph7jz",
    "asin": "B0FQKPH7JZ",
    "lang": "de",
    "titulo": "Smart Money Concept 4.0 PRO: Forex-Handel mit Orderblöcken und Price Action",
    "descripcion": "Die fortschrittlichste Ausgabe der Smart-Money-Reihe: institutionelle Konfluenzen, Order Blocks und vollständiges Trade-Management.",
    "categorias": [
      "forex",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FQKPH7JZ.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0h379nwsg",
    "asin": "B0H379NWSG",
    "lang": "de",
    "titulo": "WIE MAN ICT OHNE INDIKATOREN HANDELT: Vom leeren Chart zur professionellen Marktausführung",
    "descripcion": "Vom leeren Chart zur professionellen Ausführung: Liquidität, Imbalances und Order Blocks mit der ICT-Methode — ganz ohne Indikatoren.",
    "categorias": [
      "forex",
      "ict"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0H379NWSG.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0h2fkb1rs",
    "asin": "B0H2FKB1RS",
    "lang": "de",
    "titulo": "WYCKOFF & SMART MONEY: Wie Institutionen den Markt wirklich bewegen",
    "descripcion": "Die Wyckoff-Methode und institutioneller Handel in einem Rahmen: Liquidität, Marktmanipulation und die Psychologie hinter jeder Bewegung.",
    "categorias": [
      "forex",
      "smc",
      "wyckoff"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0H2FKB1RS.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0djpmsn9p",
    "asin": "B0DJPMSN9P",
    "lang": "en",
    "titulo": "INSTITUTIONAL TRADING IN FOREX AND STOCKS: How the Big Players Operate in 1m - 1D",
    "descripcion": "How the big players operate in Forex and stocks, and how to align your trading with institutional money in both markets.",
    "categorias": [
      "forex",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0DJPMSN9P.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0gyzzw54k",
    "asin": "B0GYZZW54K",
    "lang": "en",
    "titulo": "MASTERING ICT WITHOUT INDICATORS: From Clean Charts to Professional Execution",
    "descripcion": "From clean charts to professional execution: liquidity, imbalances and order blocks applying the ICT method without a single indicator.",
    "categorias": [
      "forex",
      "ict"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0GYZZW54K.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0fpbfl276",
    "asin": "B0FPBFL276",
    "lang": "en",
    "titulo": "Master the ICT Method: Liquidity, Structure, and Manipulation: Market Keys",
    "descripcion": "The three pillars of the ICT method — liquidity, structure and manipulation — broken down with a practical approach for daily trading.",
    "categorias": [
      "forex",
      "ict",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FPBFL276.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0ft6s91f9",
    "asin": "B0FT6S91F9",
    "lang": "en",
    "titulo": "PRICE ACTION 3.0: CLEAR STRATEGIES FOR MODERN TRADERS",
    "descripcion": "Read the market without indicators: candles, structure, support and resistance, and the context needed to decide on a clean chart.",
    "categorias": [
      "forex",
      "priceaction"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FT6S91F9.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0fnhcq86b",
    "asin": "B0FNHCQ86B",
    "lang": "en",
    "titulo": "Professional Scalping 3.0: Precision and Discipline: Turn trading into your freedom",
    "descripcion": "Scalping taken to a professional level: session prep, pair selection, risk management and fast execution with clear rules.",
    "categorias": [
      "forex",
      "scalping"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FNHCQ86B.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0gzh82b8y",
    "asin": "B0GZH82B8Y",
    "lang": "en",
    "titulo": "SMART MONEY CONCEPTS: Institutional Trading Strategy",
    "descripcion": "Trade like the institutions: liquidity, order blocks and market structure explained step by step with real chart examples.",
    "categorias": [
      "forex",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0GZH82B8Y.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0fmsc4ttq",
    "asin": "B0FMSC4TTQ",
    "lang": "en",
    "titulo": "Smart Money Concept, 4.0 Pro: Institutional Forex Trading with Order Blocks & Price Action",
    "descripcion": "The most advanced entry in the Smart Money series: institutional confluences, order blocks and full trade management from entry to exit.",
    "categorias": [
      "forex",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FMSC4TTQ.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0h273w52d",
    "asin": "B0H273W52D",
    "lang": "en",
    "titulo": "WYCKOFF & INSTITUTIONAL TRADING: Liquidity, Market Manipulation, and Trading Psychology",
    "descripcion": "The Wyckoff method and institutional trading in one framework: liquidity, market manipulation and the psychology behind every move.",
    "categorias": [
      "forex",
      "smc",
      "wyckoff"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0H273W52D.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0h2sp2lgn",
    "asin": "B0H2SP2LGN",
    "lang": "es",
    "titulo": "CÓMO OPERAR ICT SIN INDICADORES: Del gráfico vacío a la ejecución profesional",
    "descripcion": "Del gráfico vacío a la ejecución profesional: liquidez, desequilibrios y order blocks aplicando el método ICT sin un solo indicador.",
    "categorias": [
      "forex",
      "ict"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0H2SP2LGN.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0fp9wxv15",
    "asin": "B0FP9WXV15",
    "lang": "es",
    "titulo": "Domina el Método ICT: Liquidez, Estructura y Manipulación: Claves del Mercado",
    "descripcion": "Los tres pilares del método ICT — liquidez, estructura y manipulación — desglosados con un enfoque práctico para tu operativa diaria.",
    "categorias": [
      "forex",
      "ict",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FP9WXV15.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0dk3ds5v8",
    "asin": "B0DK3DS5V8",
    "lang": "es",
    "titulo": "LA ACCIÓN DEL PRECIO 3.0: ESTRATEGIAS CLARAS PARA TRADERS MODERNOS",
    "descripcion": "Lee el mercado sin indicadores: velas, estructura, soportes y resistencias, y el contexto necesario para decidir con un gráfico limpio.",
    "categorias": [
      "forex",
      "priceaction"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0DK3DS5V8.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0h1239kk5",
    "asin": "B0H1239KK5",
    "lang": "es",
    "titulo": "SMART MONEY CONCEPT: ESTRATEGIA INSTITUCIONAL PASO A PASO: Aprende a detectar liquidez, trampas del mercado y ejecutar entradas con Order Blocks, BOS y CHOCH en Forex",
    "descripcion": "Aprende a operar como las instituciones: liquidez, order blocks y estructura del mercado explicados paso a paso con ejemplos sobre gráficos reales.",
    "categorias": [
      "forex",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0H1239KK5.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0fndvlfql",
    "asin": "B0FNDVLFQL",
    "lang": "es",
    "titulo": "Scalping Profesional 3.0: Precisión y disciplina: Convierte el trading en tu libertad",
    "descripcion": "El scalping llevado a nivel profesional: preparación de la sesión, selección de pares, gestión del riesgo y ejecución rápida con reglas claras.",
    "categorias": [
      "forex",
      "scalping"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FNDVLFQL.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0fms17xx9",
    "asin": "B0FMS17XX9",
    "lang": "es",
    "titulo": "Smart Money Concept, 4.0 Pro: Operaciones institucionales en el mercado de divisas con bloques de órdenes y acción del precio",
    "descripcion": "La entrega más avanzada de la serie Smart Money: confluencias institucionales, order blocks y gestión de la operación de principio a fin.",
    "categorias": [
      "forex",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FMS17XX9.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0fx166z49",
    "asin": "B0FX166Z49",
    "lang": "es",
    "titulo": "TRADING INSTITUCIONAL EN FOREX Y ACCIONES: Cómo Operan las Manos Fuertes en 1m - 1D",
    "descripcion": "Cómo operan los grandes participantes en Forex y acciones, y cómo alinear tu operativa con el dinero institucional en ambos mercados.",
    "categorias": [
      "forex",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FX166Z49.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0h2493qfj",
    "asin": "B0H2493QFJ",
    "lang": "es",
    "titulo": "WYCKOFF TRADING INSTITUCIONAL: Liquidez, manipulación y psicología del mercado",
    "descripcion": "El método Wyckoff y el trading institucional en un mismo marco: liquidez, manipulación del mercado y la psicología detrás de cada movimiento.",
    "categorias": [
      "forex",
      "smc",
      "wyckoff"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0H2493QFJ.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0h2z8r2gx",
    "asin": "B0H2Z8R2GX",
    "lang": "fr",
    "titulo": "COMMENT TRADER ICT SANS INDICATEURS: Du graphique épuré à l'exécution professionnelle",
    "descripcion": "Du graphique épuré à l'exécution professionnelle : liquidité, déséquilibres et order blocks avec la méthode ICT, sans aucun indicateur.",
    "categorias": [
      "forex",
      "ict"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0H2Z8R2GX.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0fpcqcdnh",
    "asin": "B0FPCQCDNH",
    "lang": "fr",
    "titulo": "Maîtrisez la méthode ICT: Liquidité, structure et manipulation : les clés du marché",
    "descripcion": "Les trois piliers de la méthode ICT — liquidité, structure et manipulation — expliqués avec une approche pratique pour votre trading quotidien.",
    "categorias": [
      "forex",
      "ict",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FPCQCDNH.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0ft558d6j",
    "asin": "B0FT558D6J",
    "lang": "fr",
    "titulo": "PRICE ACTION 3.0: DES STRATÉGIES CLAIRES POUR LES TRADERS MODERNES",
    "descripcion": "Lisez le marché sans indicateurs : bougies, structure, supports et résistances, et le contexte nécessaire pour décider sur un graphique épuré.",
    "categorias": [
      "forex",
      "priceaction"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FT558D6J.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0h1668znh",
    "asin": "B0H1668ZNH",
    "lang": "fr",
    "titulo": "SMART MONEY CONCEPTS: La stratégie institutionnelle en Forex",
    "descripcion": "Tradez comme les institutions : liquidité, order blocks et structure du marché expliqués pas à pas avec des exemples réels.",
    "categorias": [
      "forex",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0H1668ZNH.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0fnkqky34",
    "asin": "B0FNKQKY34",
    "lang": "fr",
    "titulo": "Scalping Professionnel 3.0 : Précision et discipline: Faites du trading votre liberté",
    "descripcion": "Le scalping porté à un niveau professionnel : préparation de la session, sélection des paires, gestion du risque et exécution rapide.",
    "categorias": [
      "forex",
      "scalping"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FNKQKY34.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0fmznfyhj",
    "asin": "B0FMZNFYHJ",
    "lang": "fr",
    "titulo": "Smart Money Concept, 4.0 Pro: Trading Forex institutionnel avec blocs d'ordres et action sur les prix",
    "descripcion": "L'entrée la plus avancée de la série Smart Money : confluences institutionnelles, order blocks et gestion complète de la position.",
    "categorias": [
      "forex",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FMZNFYHJ.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0fx54phzz",
    "asin": "B0FX54PHZZ",
    "lang": "fr",
    "titulo": "TRADING INSTITUTIONNEL SUR LE FOREX ET LES ACTIONS: Comment opèrent les mains fortes en 1 m - 1 J",
    "descripcion": "Comment opèrent les grands acteurs sur le Forex et les actions, et comment aligner votre trading sur l'argent institutionnel.",
    "categorias": [
      "forex",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FX54PHZZ.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0h27yx9mh",
    "asin": "B0H27YX9MH",
    "lang": "fr",
    "titulo": "WYCKOFF & TRADING INSTITUTIONNEL: Liquidité, manipulation institutionnelle et psychologie des marchés",
    "descripcion": "La méthode Wyckoff et le trading institutionnel dans un même cadre : liquidité, manipulation du marché et psychologie derrière chaque mouvement.",
    "categorias": [
      "forex",
      "smc",
      "wyckoff"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0H27YX9MH.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0gx2xvqyd",
    "asin": "B0GX2XVQYD",
    "lang": "it",
    "titulo": "COME FARE TRADING CON ICT SENZA INDICATORI: Dal grafico pulito all'esecuzione professionale",
    "descripcion": "Dal grafico pulito all'esecuzione professionale: liquidità, imbalance e order block applicando il metodo ICT senza alcun indicatore.",
    "categorias": [
      "forex",
      "ict"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0GX2XVQYD.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0ft56jlv1",
    "asin": "B0FT56JLV1",
    "lang": "it",
    "titulo": "PRICE ACTION 3.0: STRATEGIE CHIARE PER I TRADER MODERNI",
    "descripcion": "Leggi il mercato senza indicatori: candele, struttura, supporti e resistenze, e il contesto necessario per decidere su un grafico pulito.",
    "categorias": [
      "forex",
      "priceaction"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FT56JLV1.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0fpdd3npv",
    "asin": "B0FPDD3NPV",
    "lang": "it",
    "titulo": "Padroneggia il metodo ICT: Liquidità, struttura e manipolazione: le chiavi del mercato",
    "descripcion": "I tre pilastri del metodo ICT — liquidità, struttura e manipolazione — spiegati con un approccio pratico per l'operatività quotidiana.",
    "categorias": [
      "forex",
      "ict",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FPDD3NPV.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0h1j4x9cg",
    "asin": "B0H1J4X9CG",
    "lang": "it",
    "titulo": "SMART MONEY NEL FOREX: Order Block, BOS e CHOCH per leggere liquidità e trappole di mercato",
    "descripcion": "Opera come le istituzioni: liquidità, order block e struttura del mercato spiegati passo dopo passo con esempi reali.",
    "categorias": [
      "forex",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0H1J4X9CG.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0fnkv16vv",
    "asin": "B0FNKV16VV",
    "lang": "it",
    "titulo": "Scalping professionale 3.0: precisione e disciplina: Trasforma il trading nella tua libertà",
    "descripcion": "Lo scalping portato a livello professionale: preparazione della sessione, selezione delle coppie, gestione del rischio ed esecuzione rapida.",
    "categorias": [
      "forex",
      "scalping"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FNKV16VV.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0fn3zrd1j",
    "asin": "B0FN3ZRD1J",
    "lang": "it",
    "titulo": "Smart Money Concept, 4.0 Pro: Trading Forex istituzionale con blocchi di ordini e azione dei prezzi",
    "descripcion": "L'edizione più avanzata della serie Smart Money: confluenze istituzionali, order block e gestione completa dell'operazione.",
    "categorias": [
      "forex",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FN3ZRD1J.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0fxb7s3tp",
    "asin": "B0FXB7S3TP",
    "lang": "it",
    "titulo": "TRADING ISTITUZIONALE SU FOREX E AZIONI: Come operano i grandi investitori in 1m - 1D",
    "descripcion": "Come operano i grandi investitori nel Forex e nelle azioni, e come allineare la propria operatività al denaro istituzionale in entrambi i mercati.",
    "categorias": [
      "forex",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FXB7S3TP.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0h2bgzctb",
    "asin": "B0H2BGZCTB",
    "lang": "it",
    "titulo": "WYCKOFF TRADING ISTITUZIONALE: Liquidità, manipolazione e psicologia dei mercati",
    "descripcion": "Il metodo Wyckoff e il trading istituzionale in un unico quadro: liquidità, manipolazione del mercato e la psicologia dietro ogni movimento.",
    "categorias": [
      "forex",
      "smc",
      "wyckoff"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0H2BGZCTB.01.LZZZZZZZ.jpg",
    "destacado": true
  },
  {
    "id": "b0gg4yx9sd",
    "asin": "B0GG4YX9SD",
    "lang": "de",
    "titulo": "95 % der Händler verlieren Geld: DIE UNBEQUEME WAHRHEIT ÜBER DEN HANDEL",
    "descripcion": "Warum die Mehrheit verliert und was die profitable Minderheit anders macht: Psychologie, Risikomanagement und entscheidende Gewohnheiten.",
    "categorias": [
      "forex",
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0GG4YX9SD.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0fpx16s23",
    "asin": "B0FPX16S23",
    "lang": "de",
    "titulo": "Bollinger Bands 2.0 Volatilität bei Aktien, Kryptowährungen und Devisen meistern: Risikomanagement",
    "descripcion": "Ein moderner Blick auf Bollinger-Bänder bei Aktien, Kryptowährungen und Devisen, mit starkem Fokus auf Volatilität und Risikomanagement.",
    "categorias": [
      "indicadores"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FPX16S23.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0cn6x6y2d",
    "asin": "B0CN6X6Y2D",
    "lang": "de",
    "titulo": "Bollinger-Bander: Erfolgsstrategien: Dynamische Analyse",
    "descripcion": "Bollinger-Bänder im Detail: Volatilität, Kompressionen und praktische Strategien mit einem der meistgenutzten Indikatoren.",
    "categorias": [
      "indicadores"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CN6X6Y2D.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0fy3g3cg3",
    "asin": "B0FY3G3CG3",
    "lang": "de",
    "titulo": "DIE TASCHE FÜR ANFÄNGER 2.0: Praktischer Leitfaden zum Verständnis und zur Investition in globale Märkte",
    "descripcion": "Ein praktischer Leitfaden, um die Börse zu verstehen und Schritt für Schritt Ihr erstes Portfolio aufzubauen, in einfacher Sprache.",
    "categorias": [
      "otros"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FY3G3CG3.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0cn9qw3md",
    "asin": "B0CN9QW3MD",
    "lang": "de",
    "titulo": "Die Kunst des Scalping: So maximieren Sie Ihren Gewinn in wenigen Minuten 2.0: Ich suche finanzielle Freiheit",
    "descripcion": "Schnelles Trading mit Methode: kurzfristige Lesart, präzise Einstiege und die nötige Disziplin, um in kleinen Zeitrahmen zu bestehen.",
    "categorias": [
      "forex",
      "scalping"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CN9QW3MD.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0frdzgjnq",
    "asin": "B0FRDZGJNQ",
    "lang": "de",
    "titulo": "Die Struktur und Harmonie des Preises: Trading mit Liquidität",
    "descripcion": "Wie und warum sich der Kurs bewegt: Struktur, Liquidität und Korrekturen, um Wendepunkte ohne Indikatoren vorherzusehen.",
    "categorias": [
      "forex",
      "priceaction"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FRDZGJNQ.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0cnq2c31x",
    "asin": "B0CNQ2C31X",
    "lang": "de",
    "titulo": "Die Struktur und Harmonie des Preises: Handelsstrategien",
    "descripcion": "Der Ausgangspunkt der Reihe: die Kursstruktur und den Marktrhythmus verstehen, bevor man nach einem Einstieg sucht.",
    "categorias": [
      "forex",
      "priceaction"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CNQ2C31X.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0cwkzymt4",
    "asin": "B0CWKZYMT4",
    "lang": "de",
    "titulo": "Einführung in den Handel: Technische Analyse und praktische Übungen",
    "descripcion": "Eine klare Einführung in die Welt des Tradings: Märkte, Teilnehmer, Risiko und alles, was Sie vor dem ersten Trade wissen sollten.",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CWKZYMT4.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0gx3b5wfy",
    "asin": "B0GX3B5WFY",
    "lang": "de",
    "titulo": "Forex-Scalping: Strategien für das Trading im 5-Minuten-Chart",
    "descripcion": "Konkrete Strategien für den 5-Minuten-Chart: Einstiege, Risikomanagement und die komplette Routine eines Scalpers, klar erklärt.",
    "categorias": [
      "forex",
      "scalping"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0GX3B5WFY.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0gl8kfvyr",
    "asin": "B0GL8KFVYR",
    "lang": "de",
    "titulo": "HANDEL: DEN MARKT LESEN: Eine Intraday-Studie zum Preisverhalten",
    "descripcion": "Lernen Sie, den Markt selbst zu lesen: Struktur, Momentum und Kontext, damit jeder Trade auf dem tatsächlichen Kursverhalten basiert.",
    "categorias": [
      "forex",
      "priceaction"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0GL8KFVYR.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0gp7bfwws",
    "asin": "B0GP7BFWWS",
    "lang": "de",
    "titulo": "HANDELN VS. POKER: Statistischer Vorteil und Entscheidungsfindung unter Unsicherheit",
    "descripcion": "Statistischer Vorteil und Entscheidungsfindung unter Unsicherheit: Was Trading und Poker gemeinsam haben und was sie voneinander lernen können.",
    "categorias": [
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0GP7BFWWS.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0cn4tgwmr",
    "asin": "B0CN4TGWMR",
    "lang": "de",
    "titulo": "Japanische Kerzenmuster: Erfolgstaktiken: Stille Sprache",
    "descripcion": "Vollständiger Leitfaden zu japanischen Kerzen: Was jedes Muster über den Kampf zwischen Käufern und Verkäufern verrät — immer im Kontext.",
    "categorias": [
      "velas"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CN4TGWMR.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0frrd8n4k",
    "asin": "B0FRRD8N4K",
    "lang": "de",
    "titulo": "KI, DeFi und Psychologie im neuen Zeitalter des Handels: Der moderne Trader 2.0",
    "descripcion": "Künstliche Intelligenz, dezentrale Finanzen und Psychologie: wie das neue technologische Zeitalter den Handel verändert und wie man sich anpasst.",
    "categorias": [
      "otros",
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FRRD8N4K.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0d9vx2d8v",
    "asin": "B0D9VX2D8V",
    "lang": "de",
    "titulo": "Praktische Handelsübungen: Echtzeitanalyse 1.0: Strategien und Muster",
    "descripcion": "Ein Arbeitsbuch: geführte Analysen und Übungen an echten Charts, um Theorie in eigenes Urteilsvermögen zu verwandeln.",
    "categorias": [
      "forex",
      "ejercicios"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0D9VX2D8V.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0hd1hsv26",
    "asin": "B0HD1HSV26",
    "lang": "de",
    "titulo": "SMALL CAPS: Ein praxisorientierter Leitfaden für den Handel mit US-amerikanischen Small-Cap-Aktien",
    "descripcion": "Wie man US-amerikanische Small-Cap-Aktien identifiziert und handelt: Wachstumspotenzial, Volatilität und Risikomanagement.",
    "categorias": [
      "forex",
      "otros"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HD1HSV26.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0fttftxnh",
    "asin": "B0FTTFTXNH",
    "lang": "de",
    "titulo": "SMART MONEY VS MODELLI GRAFICI: Liquidità, manipolazione e strategia",
    "descripcion": "Zwei Schulen im Vergleich: Was jeder Ansatz leistet, wann sie sich ergänzen und wie man beide in einer Strategie vereint.",
    "categorias": [
      "forex",
      "patrones",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FTTFTXNH.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0cymm8d26",
    "asin": "B0CYMM8D26",
    "lang": "de",
    "titulo": "TECHNISCHE INDIKATOREN, STATISTIKEN: TRADING, FOREX",
    "descripcion": "Technische Indikatoren mit statistischer Grundlage: was sie wirklich messen, wann sie einen Vorteil bringen und wie man sie nicht blind einsetzt.",
    "categorias": [
      "indicadores"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CYMM8D26.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0cll1dt8b",
    "asin": "B0CLL1DT8B",
    "lang": "de",
    "titulo": "Verwandeln Sie Ihr Trading mit Chart-Mustern: Handelsgeheimnisse",
    "descripcion": "Die Chartmuster, die wirklich funktionieren: Identifikation, Kontext und ein Handelsplan für jede Formation, mit echten Chartbeispielen.",
    "categorias": [
      "forex",
      "patrones"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CLL1DT8B.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0h59kqbds",
    "asin": "B0H5942R7V",
    "lang": "de",
    "titulo": "WAS IHNEN NIEMAND ÜBER DEN HANDEL ERZÄHLT: Praktische Erkenntnisse aus Tausenden von Stunden vor den Charts",
    "descripcion": "Die Seite des Tradings, die in Kursen fehlt: realistische Erwartungen, teure Fehler und was profitable Trader wirklich anders machen.",
    "categorias": [
      "forex",
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0H5942R7V.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0gngcf9j4",
    "asin": "B0GNGCF9J4",
    "lang": "de",
    "titulo": "WIR SCHLIESSEN NIE PÜNKTLICH: Die Psychologie des Festhaltens an Entscheidungen, die nicht mehr funktionieren",
    "descripcion": "Warum es so schwerfällt, eine Position zu schließen oder eine nicht mehr funktionierende Entscheidung aufzugeben, erklärt durch die Trading-Psychologie.",
    "categorias": [
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0GNGCF9J4.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "wyckoff_4_moderne",
    "asin": "B0FQCG2FWN",
    "lang": "de",
    "titulo": "Wyckoff 4.0: Moderne Strategien und Marktanalyse",
    "descripcion": "Die Wyckoff-Methode für heutige Märkte: Akkumulation, Distribution und die Schlüsselereignisse des Schemas in der Praxis.",
    "categorias": [
      "forex",
      "wyckoff"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FQCG2FWN.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0gfb87vlj",
    "asin": "B0GFB87VLJ",
    "lang": "en",
    "titulo": "95% OF TRADERS LOSE MONEY: THE INCONVENIENT TRUTH ABOUT TRADING",
    "descripcion": "Why most traders lose and what the profitable minority does differently: psychology, risk management and habits that make the difference.",
    "categorias": [
      "forex",
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0GFB87VLJ.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0fprhyhlz",
    "asin": "B0FPRHYHLZ",
    "lang": "en",
    "titulo": "Bollinger Bands 2.0 Mastering Volatility Across Stocks, Crypto & Forex: Risk management",
    "descripcion": "A modern take on Bollinger Bands across stocks, crypto and forex, with a strong focus on volatility and risk management.",
    "categorias": [
      "indicadores"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FPRHYHLZ.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0h3l3b441",
    "asin": "B0H3L3B441",
    "lang": "en",
    "titulo": "SCALPING FOREX: Estrategias para Operar en 5 Minutos",
    "descripcion": "Concrete strategies for the 5-minute chart: entries, management and a scalper's full routine, ready to apply from day one.",
    "categorias": [
      "forex",
      "scalping"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0H3L3B441.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0dl711d8w",
    "asin": "B0DL711D8W",
    "lang": "en",
    "titulo": "Introduction to Trading: Technical analysis and practical exercises",
    "descripcion": "A clear introduction to the world of trading: markets, participants, risk and what you need to know before you trade.",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0DL711D8W.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0frymz7nx",
    "asin": "B0FRYMZ7NX",
    "lang": "en",
    "titulo": "RISK MANAGEMENT IN MODERN TRADING 2.0: Advanced Strategies",
    "descripcion": "The pillar that holds everything else up: position sizing, ratios, losing streaks and capital protection explained with clear numbers.",
    "categorias": [
      "forex",
      "riesgo"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FRYMZ7NX.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0hcvv7s37",
    "asin": "B0HCVV7S37",
    "lang": "en",
    "titulo": "SMALL CAPS: A Practical Guide to Trading U.S. Small-Cap Stocks",
    "descripcion": "How to identify and trade U.S. small-cap stocks: growth potential, volatility and risk management for small caps.",
    "categorias": [
      "forex",
      "otros"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HCVV7S37.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0ftr183s9",
    "asin": "B0FTR183S9",
    "lang": "en",
    "titulo": "SMART MONEY VS CHART PATTERNS: Liquidity, Manipulation and Strategy",
    "descripcion": "Two schools face to face: what each approach brings, when they complement each other, and how to combine them in one strategy.",
    "categorias": [
      "forex",
      "patrones",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FTR183S9.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0cqp8jx8h",
    "asin": "B0CQP8JX8H",
    "lang": "en",
    "titulo": "Smart Money Concept 3.0 PRO: Market Manipulations",
    "descripcion": "Order blocks, liquidity and institutional manipulation: the foundation of the Smart Money series with step-by-step examples.",
    "categorias": [
      "forex",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CQP8JX8H.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0cw1h33l1",
    "asin": "B0CW1H33L1",
    "lang": "en",
    "titulo": "TECHNICAL INDICATORS, STATISTICS: FOREX, FOREX TRADING",
    "descripcion": "Technical indicators with a statistical foundation: what they really measure, when they give you an edge, and how to avoid using them blindly.",
    "categorias": [
      "indicadores"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CW1H33L1.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0dwjzb78h",
    "asin": "B0DWJZB78H",
    "lang": "en",
    "titulo": "THE BAG FOR BEGINNERS 2.0: A practical guide to understanding and investing in global markets",
    "descripcion": "A practical guide to understanding the stock market and building your first portfolio, step by step, in plain language.",
    "categorias": [
      "otros"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0DWJZB78H.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0gp35ntqp",
    "asin": "B0GP35NTQP",
    "lang": "en",
    "titulo": "TRADING VS POKER: Statistical advantage and decision-making under uncertainty",
    "descripcion": "Statistical advantage and decision-making under uncertainty: what trading and poker have in common, and the lessons each can teach the other.",
    "categorias": [
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0GP35NTQP.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0gl34vyf3",
    "asin": "B0GL34VYF3",
    "lang": "en",
    "titulo": "TRADING: READ THE MARKET: An intraday study of price behavior",
    "descripcion": "Learn to read the market itself: structure, momentum and context, so every trade is backed by what price is actually doing.",
    "categorias": [
      "forex",
      "priceaction"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0GL34VYF3.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0frgj1zt2",
    "asin": "B0FRGJ1ZT2",
    "lang": "en",
    "titulo": "The Structure and Harmony of Price 2.0: Trading with Liquidity",
    "descripcion": "How and why price moves: structure, liquidity and corrections to anticipate turning points without relying on indicators.",
    "categorias": [
      "forex",
      "priceaction"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FRGJ1ZT2.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0cnnkfhwc",
    "asin": "B0CNNKFHWC",
    "lang": "en",
    "titulo": "The Structure and Harmony of Price: Trading Strategies",
    "descripcion": "The starting point of the series: understanding price structure and market rhythm before looking for any entry.",
    "categorias": [
      "forex",
      "priceaction"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CNNKFHWC.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0dbmn9pr9",
    "asin": "B0DBMN9PR9",
    "lang": "en",
    "titulo": "Trading Practice and Analysis: Real-Time Exercises: Strategies and Patterns",
    "descripcion": "A workbook: guided analysis and exercises on real charts to turn theory into your own trading judgement.",
    "categorias": [
      "forex",
      "ejercicios"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0DBMN9PR9.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0dllmrqfh",
    "asin": "B0DLLMRQFH",
    "lang": "en",
    "titulo": "Trading for Newbies: Technical Analysis",
    "descripcion": "Start from zero on the right foot: concepts, platforms, order types and first steps without unnecessary jargon.",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0DLLMRQFH.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0clkc5trz",
    "asin": "B0CLKC5TRZ",
    "lang": "en",
    "titulo": "Transform your Trading with Chartist Patterns: Trading Secrets",
    "descripcion": "The chart patterns that actually work: identification, context and a trading plan for each formation, with real chart examples.",
    "categorias": [
      "forex",
      "patrones"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CLKC5TRZ.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0gnhxd4nd",
    "asin": "B0GNHXD4ND",
    "lang": "en",
    "titulo": "WE NEVER CLOSE ON TIME: The psychology of sticking to decisions that no longer work",
    "descripcion": "Why it's so hard to close a trade or abandon a decision that no longer works, and how trading psychology explains that block.",
    "categorias": [
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0GNHXD4ND.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0h4lv3kyx",
    "asin": "B0H4HXDPBH",
    "lang": "en",
    "titulo": "WHAT NO ONE TELLS YOU ABOUT TRADING: Real lessons learned from thousands of hours in the markets",
    "descripcion": "The side of trading courses never show: realistic expectations, account-killing mistakes and what truly separates profitable traders.",
    "categorias": [
      "forex",
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0H4HXDPBH.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0gf4qgftw",
    "asin": "B0GF4QGFTW",
    "lang": "es",
    "titulo": "EL 95 % DE LOS TRADERS PIERDE DINERO: LA VERDAD INCÓMODA DEL TRADING",
    "descripcion": "Por qué pierde la mayoría y qué hace distinto la minoría rentable: psicología, gestión del riesgo y hábitos que marcan la diferencia.",
    "categorias": [
      "forex",
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0GF4QGFTW.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0d9ttm3y6",
    "asin": "B0D9TTM3Y6",
    "lang": "es",
    "titulo": "Ejercicios Prácticos de Trading: Análisis en Tiempo Real 1.0: Estrategias y Patrones",
    "descripcion": "Cuaderno de trabajo: análisis guiados y ejercicios sobre gráficos reales para convertir la teoría en criterio propio.",
    "categorias": [
      "forex",
      "ejercicios"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0D9TTM3Y6.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0cljwnm8n",
    "asin": "B0CLJWNM8N",
    "lang": "es",
    "titulo": "El arte del scalping: cómo maximizar tus ganancias en minutos 2.0: Buscando la libertad financiera",
    "descripcion": "Operativa rápida con método: lectura de corto plazo, entradas precisas y la disciplina necesaria para sobrevivir en marcos pequeños.",
    "categorias": [
      "forex",
      "scalping"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CLJWNM8N.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0frnnnj5q",
    "asin": "B0FRNNNJ5Q",
    "lang": "es",
    "titulo": "IA, DeFi y Psicología en la nueva era del trading: El Trader Moderno 2.0",
    "descripcion": "Inteligencia artificial, finanzas descentralizadas y psicología: cómo la nueva era tecnológica está cambiando el trading y cómo adaptarse.",
    "categorias": [
      "otros",
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FRNNNJ5Q.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0cylpfwzk",
    "asin": "B0CYLPFWZK",
    "lang": "es",
    "titulo": "INDICADORES TECNICOS, ESTADISTICA: TRADING, FOREX",
    "descripcion": "Indicadores técnicos con base estadística: qué miden realmente, cuándo aportan ventaja y cómo evitar usarlos a ciegas.",
    "categorias": [
      "indicadores"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CYLPFWZK.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0dl6k9h2m",
    "asin": "B0DL6K9H2M",
    "lang": "es",
    "titulo": "Introducción al Trading: Análisis Técnico y ejercicios prácticos",
    "descripcion": "Una introducción clara al mundo del trading: mercados, participantes, riesgo y lo que necesitas saber antes de operar.",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0DL6K9H2M.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0h3fbq8fz",
    "asin": "B0H3FBQ8FZ",
    "lang": "es",
    "titulo": "LO QUE NADIE TE CUENTA SOBRE EL TRADING: Aprendizajes reales tras miles de horas delante de los gráficos",
    "descripcion": "La cara del trading que no aparece en los cursos: expectativas reales, errores que arruinan cuentas y lo que de verdad separa al trader rentable del resto.",
    "categorias": [
      "forex",
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0H3FBQ8FZ.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0frb47d5l",
    "asin": "B0FRB47D5L",
    "lang": "es",
    "titulo": "La Estructura y Armonía del Precio 2.0: Trading con Liquidez",
    "descripcion": "Cómo se mueve el precio y por qué: estructura, liquidez y correcciones para anticipar zonas de giro sin depender de indicadores.",
    "categorias": [
      "forex",
      "priceaction"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FRB47D5L.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0cnm9h6q8",
    "asin": "B0CNM9H6Q8",
    "lang": "es",
    "titulo": "La Estructura y Armonía del Precio: Estrategias de Trading",
    "descripcion": "El punto de partida de la serie: comprender la estructura del precio y el ritmo del mercado antes de buscar cualquier entrada.",
    "categorias": [
      "forex",
      "priceaction"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CNM9H6Q8.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0cn52tzrv",
    "asin": "B0CN52TZRV",
    "lang": "es",
    "titulo": "Las Bandas de Bollinger: Estrategias de Éxito: Análisis Dinámico",
    "descripcion": "Las Bandas de Bollinger a fondo: volatilidad, compresiones y estrategias prácticas con uno de los indicadores más utilizados.",
    "categorias": [
      "indicadores"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CN52TZRV.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0gnhzrw8v",
    "asin": "B0GNHZRW8V",
    "lang": "es",
    "titulo": "NUNCA CERRAMOS A TIEMPO: La psicología de mantener decisiones que ya no funcionan",
    "descripcion": "Por qué cuesta tanto cerrar una operación o abandonar una decisión que ya no funciona, y cómo la psicología del trading explica ese bloqueo.",
    "categorias": [
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0GNHZRW8V.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0cmj9s92t",
    "asin": "B0CMJ9S92T",
    "lang": "es",
    "titulo": "Patrones de Velas Japonesas: Tácticas de Éxito: Lenguaje Silencioso",
    "descripcion": "Guía completa de velas japonesas: qué cuenta cada patrón sobre la lucha entre compradores y vendedores y cómo usarlos siempre con contexto.",
    "categorias": [
      "velas"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CMJ9S92T.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0hcm44mrj",
    "asin": "B0HCM44MRJ",
    "lang": "es",
    "titulo": "SMALL CAPS: Guía práctica para operar acciones de baja capitalización en Estados Unidos",
    "descripcion": "Cómo identificar y operar acciones de baja capitalización en EE. UU.: potencial de crecimiento, volatilidad y gestión del riesgo en small caps.",
    "categorias": [
      "forex",
      "otros"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HCM44MRJ.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0ftmb8m6k",
    "asin": "B0FTMB8M6K",
    "lang": "es",
    "titulo": "SMART MONEY VS PATRONES CHARTISTAS: Liquidez, Manipulación y Estrategia",
    "descripcion": "Dos escuelas frente a frente: qué aporta cada enfoque, cuándo se complementan y cómo combinarlos en una sola operativa.",
    "categorias": [
      "forex",
      "patrones",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FTMB8M6K.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0gp35r8yh",
    "asin": "B0GP35R8YH",
    "lang": "es",
    "titulo": "TRADING VS POKER: Ventaja estadística y toma de decisiones bajo incertidumbre",
    "descripcion": "Probabilidades, gestión y control emocional: lo que el trading y el póker comparten, y las lecciones que se prestan mutuamente.",
    "categorias": [
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0GP35R8YH.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0gjsw3z2g",
    "asin": "B0GJSW3Z2G",
    "lang": "es",
    "titulo": "TRADING: LEER EL MERCADO: Un estudio intradía del comportamiento del precio",
    "descripcion": "Aprende a leer el mercado en sí mismo: estructura, momentum y contexto, para que cada operación se apoye en lo que el precio realmente hace.",
    "categorias": [
      "forex",
      "priceaction"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0GJSW3Z2G.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0dllj7v2d",
    "asin": "B0DLLJ7V2D",
    "lang": "es",
    "titulo": "Trading para Novatos: Análisis Técnico",
    "descripcion": "Empieza desde cero con buen pie: conceptos, plataformas, tipos de órdenes y primeros pasos sin tecnicismos innecesarios.",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0DLLJ7V2D.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0cm9rm559",
    "asin": "B0CM9RM559",
    "lang": "es",
    "titulo": "Transforma tu Trading con Patrones Chartistas: Secretos del Trading",
    "descripcion": "Los patrones chartistas que funcionan: identificación, contexto y plan de trading para cada figura, con ejemplos sobre gráficos reales.",
    "categorias": [
      "forex",
      "patrones"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CM9RM559.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "wyckoff_3_analisis",
    "asin": "B0CLKW996K",
    "lang": "es",
    "titulo": "Wyckoff 3.0: Estrategias y Análisis Técnico: Los Ciclos del Mercado",
    "descripcion": "El método Wyckoff actualizado: acumulación, distribución y los eventos clave del esquema aplicados al mercado actual.",
    "categorias": [
      "forex",
      "wyckoff"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CLKW996K.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0gfp1r3f4",
    "asin": "B0GFP1R3F4",
    "lang": "fr",
    "titulo": "95 % DES TRADERS PERDENT DE L'ARGENT: LA VÉRITÉ DÉRANGEANTE SUR LE TRADING",
    "descripcion": "Pourquoi la majorité perd et ce que fait différemment la minorité rentable : psychologie, gestion du risque et discipline.",
    "categorias": [
      "forex",
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0GFP1R3F4.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0ftt15qgc",
    "asin": "B0FTT15QGC",
    "lang": "fr",
    "titulo": "ARGENT INTELLIGENT VS MODÈLES GRAPHIQUES: Liquidité, manipulation et stratégie",
    "descripcion": "Deux écoles face à face : ce qu'apporte chaque approche, quand elles se complètent et comment les combiner dans une seule stratégie.",
    "categorias": [
      "forex",
      "patrones",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FTT15QGC.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0cn5qvyh7",
    "asin": "B0CN5QVYH7",
    "lang": "fr",
    "titulo": "Bandes de Bollinger : Stratégies de réussite: Analyse dynamique",
    "descripcion": "Les Bandes de Bollinger en profondeur : volatilité, compressions et stratégies pratiques avec l'un des indicateurs les plus utilisés.",
    "categorias": [
      "indicadores"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CN5QVYH7.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0gl92mdkq",
    "asin": "B0GL92MDKQ",
    "lang": "fr",
    "titulo": "COMMERCE: LIRE LE MARCHÉ: Une étude intraday du comportement des prix",
    "descripcion": "Apprenez à lire le marché lui-même : structure, momentum et contexte, pour que chaque position s'appuie sur ce que fait réellement le prix.",
    "categorias": [
      "forex",
      "priceaction"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0GL92MDKQ.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0h14htv7b",
    "asin": "B0H14HTV7B",
    "lang": "fr",
    "titulo": "Ce que personne ne vous dit sur le trading: Les vraies leçons tirées de milliers d'heures passées devant les graphiques",
    "descripcion": "La face cachée du trading : attentes réalistes, erreurs qui ruinent les comptes et ce qui distingue vraiment les traders rentables.",
    "categorias": [
      "forex",
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0H14HTV7B.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0d9wslrpn",
    "asin": "B0D9WSLRPN",
    "lang": "fr",
    "titulo": "Exercices pratiques de trading : analyse en temps réel 1.0: Stratégies et modèles",
    "descripcion": "Un cahier d'exercices : analyses guidées et exercices sur des graphiques réels pour transformer la théorie en jugement personnel.",
    "categorias": [
      "forex",
      "ejercicios"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0D9WSLRPN.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0fryg1ms9",
    "asin": "B0FRYG1MS9",
    "lang": "fr",
    "titulo": "GESTION DES RISQUES DANS LE TRADING MODERNE 2.0: Stratégies avancées",
    "descripcion": "Le pilier qui soutient tout le reste : taille de position, ratios, séries de pertes et protection du capital expliqués avec des chiffres clairs.",
    "categorias": [
      "forex",
      "riesgo"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FRYG1MS9.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0dmmhl8c2",
    "asin": "B0DMMHL8C2",
    "lang": "fr",
    "titulo": "AI, DeFi, and Psychology in the New Era of Trading: The Modern Trader 2.0",
    "descripcion": "Intelligence artificielle, finance décentralisée et psychologie : comment la nouvelle ère technologique transforme le trading et comment s'y adapter.",
    "categorias": [
      "otros",
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0DMMHL8C2.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0cy3kszvd",
    "asin": "B0CY3KSZVD",
    "lang": "fr",
    "titulo": "INDICATEURS TECHNIQUES, STATISTIQUES: TRADING, FOREX",
    "descripcion": "Des indicateurs techniques à base statistique : ce qu'ils mesurent vraiment, quand ils apportent un avantage et comment éviter de les utiliser aveuglément.",
    "categorias": [
      "indicadores"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CY3KSZVD.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0dlbcxd99",
    "asin": "B0DLBCXD99",
    "lang": "fr",
    "titulo": "Introduction au trading: Analyse technique et exercices pratiques",
    "descripcion": "Une introduction claire au monde du trading : marchés, acteurs, risque et tout ce qu'il faut savoir avant de trader.",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0DLBCXD99.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0fy6hlk39",
    "asin": "B0FY6HLK39",
    "lang": "fr",
    "titulo": "LE SAC POUR DÉBUTANTS 2.0: Guide pratique pour comprendre et investir sur les marchés mondiaux",
    "descripcion": "Un guide pratique pour comprendre la bourse et construire votre premier portefeuille, étape par étape, en langage simple.",
    "categorias": [
      "otros"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FY6HLK39.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0frmlvkvv",
    "asin": "B0FRMLVKVV",
    "lang": "fr",
    "titulo": "La struttura e l'armonia del prezzo 2.0: Trading con liquidità",
    "descripcion": "Comment et pourquoi le prix évolue : structure, liquidité et corrections pour anticiper les zones de retournement sans indicateurs.",
    "categorias": [
      "forex",
      "priceaction"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FRMLVKVV.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0cn42yty8",
    "asin": "B0CN42YTY8",
    "lang": "fr",
    "titulo": "Modèles de bougies japonaises : tactiques de réussite: Langage silencieux",
    "descripcion": "Guide complet des chandeliers japonais : ce que chaque figure révèle de la lutte entre acheteurs et vendeurs, toujours avec du contexte.",
    "categorias": [
      "velas"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CN42YTY8.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0gns67sn5",
    "asin": "B0GNNN9FBM",
    "lang": "fr",
    "titulo": "NOUS NE FERMONS JAMAIS À L'HEURE: La psychologie du maintien de décisions qui ne fonctionnent plus",
    "descripcion": "Pourquoi il est si difficile de clôturer une position ou d'abandonner une décision qui ne fonctionne plus, et ce que dit la psychologie du trading.",
    "categorias": [
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0GNNN9FBM.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0h3ww6r5m",
    "asin": "B0H3WW6R5M",
    "lang": "fr",
    "titulo": "SCALPING FOREX: Stratégies de trading sur 5 minutes",
    "descripcion": "Des stratégies concrètes pour le graphique 5 minutes : entrées, gestion et la routine complète d'un scalpeur, prêtes à appliquer dès le premier jour.",
    "categorias": [
      "forex",
      "scalping"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0H3WW6R5M.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0hd2qgkxp",
    "asin": "B0HD2QGKXP",
    "lang": "fr",
    "titulo": "SMALL CAPS: Guide pratique du trading des actions américaines à petite capitalisation",
    "descripcion": "Comment identifier et trader les actions américaines à petite capitalisation : potentiel de croissance, volatilité et gestion du risque.",
    "categorias": [
      "forex",
      "otros"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HD2QGKXP.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0gp9pv8ql",
    "asin": "B0GP9PV8QL",
    "lang": "fr",
    "titulo": "TRADING VS POKER: Avantage statistique et prise de décision en situation d'incertitude",
    "descripcion": "Avantage statistique et prise de décision dans l'incertitude : ce que le trading et le poker ont en commun, et les leçons qu'ils s'échangent.",
    "categorias": [
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0GP9PV8QL.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0cll246bf",
    "asin": "B0CLL246BF",
    "lang": "fr",
    "titulo": "Transformez votre trading avec des modèles chartistes: Secrets commerciaux",
    "descripcion": "Les figures chartistes qui fonctionnent vraiment : identification, contexte et plan de trading pour chaque figure, avec des exemples réels.",
    "categorias": [
      "forex",
      "patrones"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CLL246BF.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0cn5xsngn",
    "asin": "B0CN5XSNGN",
    "lang": "it",
    "titulo": "Bande di Bollinger: Strategie di successo: Analisi dinamica",
    "descripcion": "Le Bande di Bollinger in profondità: volatilità, compressioni e strategie pratiche con uno degli indicatori più usati.",
    "categorias": [
      "indicadores"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CN5XSNGN.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0gl9llrxb",
    "asin": "B0GL9LLRXB",
    "lang": "it",
    "titulo": "COMMERCIO: LEGGI IL MERCATO: Uno studio intraday del comportamento dei prezzi",
    "descripcion": "Impara a leggere il mercato stesso: struttura, momentum e contesto, così ogni operazione si basa su ciò che il prezzo sta davvero facendo.",
    "categorias": [
      "forex",
      "priceaction"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0GL9LLRXB.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0h4rx13tt",
    "asin": "B0H4RX13TT",
    "lang": "it",
    "titulo": "COSE CHE NESSUNO TI DICE SUL TRADING: Vere lezioni apprese dopo migliaia di ore passate davanti ai grafici.",
    "descripcion": "Il lato del trading che i corsi non mostrano: aspettative realistiche, errori che bruciano i conti e cosa distingue davvero i trader profittevoli.",
    "categorias": [
      "forex",
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0H4RX13TT.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0d9ygsmry",
    "asin": "B0D9YGSMRY",
    "lang": "it",
    "titulo": "Esercizi pratici di trading: analisi in tempo reale 1.0: Strategie e modelli",
    "descripcion": "Un quaderno di lavoro: analisi guidate ed esercizi su grafici reali per trasformare la teoria in giudizio personale.",
    "categorias": [
      "forex",
      "ejercicios"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0D9YGSMRY.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0frzkjwyq",
    "asin": "B0FRZKJWYQ",
    "lang": "it",
    "titulo": "GESTIONE DEL RISCHIO NEL TRADING MODERNO 2.0: Strategie avanzate",
    "descripcion": "Il pilastro che sostiene tutto il resto: dimensionamento delle posizioni, rapporti, serie negative e protezione del capitale spiegati con numeri chiari.",
    "categorias": [
      "forex",
      "riesgo"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FRZKJWYQ.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0frxkbqsn",
    "asin": "B0FRXKBQSN",
    "lang": "it",
    "titulo": "IA, DeFi e psicologia nella nuova era del trading: Il trader moderno 2.0",
    "descripcion": "Intelligenza artificiale, finanza decentralizzata e psicologia: come la nuova era tecnologica sta cambiando il trading e come adattarsi.",
    "categorias": [
      "otros",
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FRXKBQSN.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0gfxx61rh",
    "asin": "B0GFXX61RH",
    "lang": "it",
    "titulo": "IL 95% DEI TRADER PERDE SOLDI: LA SCOMODA VERITÀ SUL TRADING",
    "descripcion": "Perché la maggioranza perde e cosa fa di diverso la minoranza redditizia: psicologia, gestione del rischio e abitudini che fanno la differenza.",
    "categorias": [
      "forex",
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0GFXX61RH.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0cyq8dgtx",
    "asin": "B0CYQ8DGTX",
    "lang": "it",
    "titulo": "INDICATORI TECNICI, STATISTICHE: TRADING, FOREX",
    "descripcion": "Indicatori tecnici con base statistica: cosa misurano davvero, quando danno un vantaggio e come evitare di usarli alla cieca.",
    "categorias": [
      "indicadores"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CYQ8DGTX.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0dl7wl561",
    "asin": "B0DL7WL561",
    "lang": "it",
    "titulo": "Introduzione al trading: Analisi tecnica ed esercitazioni pratiche",
    "descripcion": "Un'introduzione chiara al mondo del trading: mercati, partecipanti, rischio e tutto ciò che serve sapere prima di operare.",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0DL7WL561.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0fy4kn46d",
    "asin": "B0FY4KN46D",
    "lang": "it",
    "titulo": "LA BORSA PER PRINCIPIANTI 2.0: Guida pratica per comprendere e investire nei mercati globali",
    "descripcion": "Una guida pratica per capire la borsa e costruire il tuo primo portafoglio, passo dopo passo, con un linguaggio semplice.",
    "categorias": [
      "otros"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FY4KN46D.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0frhzjpfz",
    "asin": "B0FRHZJPFZ",
    "lang": "it",
    "titulo": "La structure et l'harmonie du prix: Trading avec liquidité",
    "descripcion": "Come e perché si muove il prezzo: struttura, liquidità e correzioni per anticipare le zone di inversione senza indicatori.",
    "categorias": [
      "forex",
      "priceaction"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FRHZJPFZ.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0cnnpb4xj",
    "asin": "B0CNNPB4XJ",
    "lang": "it",
    "titulo": "La struttura e l'armonia del prezzo: Strategie di trading",
    "descripcion": "Il punto di partenza della serie: comprendere la struttura del prezzo e il ritmo del mercato prima di cercare qualsiasi ingresso.",
    "categorias": [
      "forex",
      "priceaction"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CNNPB4XJ.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0cn4qndrp",
    "asin": "B0CN4QNDRP",
    "lang": "it",
    "titulo": "Modelli di candele giapponesi: tattiche di successo: Linguaggio silenzioso",
    "descripcion": "Guida completa alle candele giapponesi: cosa racconta ogni pattern sulla lotta tra compratori e venditori, sempre con contesto.",
    "categorias": [
      "velas"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CN4QNDRP.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0gnnyxvmf",
    "asin": "B0GNNYXVMF",
    "lang": "it",
    "titulo": "NON CHIUDIAMO MAI IN ORARIO: La psicologia dell'attaccamento a decisioni che non funzionano più",
    "descripcion": "Perché è così difficile chiudere un'operazione o abbandonare una decisione che non funziona più, spiegato dalla psicologia del trading.",
    "categorias": [
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0GNNYXVMF.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0hd9n628l",
    "asin": "B0HD9N628L",
    "lang": "it",
    "titulo": "SMALL CAPS: Guida pratica al trading delle small cap americane",
    "descripcion": "Come identificare e operare sulle small cap americane: potenziale di crescita, volatilità e gestione del rischio.",
    "categorias": [
      "forex",
      "otros"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HD9N628L.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0h41wqrfs",
    "asin": "B0H41WQRFS",
    "lang": "it",
    "titulo": "Scalping nel Forex: Strategie di trading a 5 minuti",
    "descripcion": "Strategie concrete per il grafico a 5 minuti: ingressi, gestione e la routine completa di uno scalper, pronte da applicare fin dal primo giorno.",
    "categorias": [
      "forex",
      "scalping"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0H41WQRFS.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0gp9t7xnt",
    "asin": "B0GP9T7XNT",
    "lang": "it",
    "titulo": "TRADING VS POKER: Vantaggio statistico e processo decisionale in condizioni di incertezza",
    "descripcion": "Vantaggio statistico e processo decisionale in condizioni di incertezza: cosa hanno in comune trading e poker.",
    "categorias": [
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0GP9T7XNT.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0dlq3b1sl",
    "asin": "B0DLQ3B1SL",
    "lang": "it",
    "titulo": "Trading per principianti: Analisi tecnica",
    "descripcion": "Inizia da zero con il piede giusto: concetti, piattaforme, tipi di ordini e primi passi senza tecnicismi inutili.",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0DLQ3B1SL.01.LZZZZZZZ.jpg",
    "destacado": false
  },
  {
    "id": "b0dbnyhd94",
    "asin": "B0DBNYHD94",
    "lang": "it",
    "titulo": "Pratica e analisi del trading: esercizi in tempo reale: Strategie e modelli",
    "descripcion": "esercizi in tempo reale: Strategie e modelli",
    "categorias": [
      "forex",
      "ejercicios"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0DBNYHD94.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0fsshhcfp",
    "asin": "B0FSSHHCFP",
    "lang": "de",
    "titulo": "Praktisches Trading & Analyse 2.0: Übungen in Echtzeit",
    "descripcion": "Übungen in Echtzeit",
    "categorias": [
      "forex",
      "ejercicios"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FSSHHCFP.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0dbrlp6w6",
    "asin": "B0DBRLP6W6",
    "lang": "fr",
    "titulo": "Pratique et analyse du trading : exercices en temps réel: Stratégies et modèles",
    "descripcion": "exercices en temps réel: Stratégies et modèles",
    "categorias": [
      "forex",
      "ejercicios"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0DBRLP6W6.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0dblk5yds",
    "asin": "B0DBLK5YDS",
    "lang": "es",
    "titulo": "Práctica y Análisis de Trading: Ejercicios en Tiempo Real: Estrategias y Patrones",
    "descripcion": "Ejercicios en Tiempo Real: Estrategias y Patrones",
    "categorias": [
      "forex",
      "ejercicios"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0DBLK5YDS.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0hq58zssl",
    "asin": "B0HQ58ZSSL",
    "lang": "de",
    "titulo": "TRADING ZUM LONDON- UND NEW-YORK-OPEN: Die Asien-Range lesen und EUR/USD sowie GBP/USD handeln",
    "descripcion": "Die Asien-Range lesen und EUR/USD sowie GBP/USD handeln",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HQ58ZSSL.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0hq52lkt4",
    "asin": "B0HQ52LKT4",
    "lang": "fr",
    "titulo": "TRADER LES OUVERTURES DE LONDRES ET DE NEW YORK: Analyser le range asiatique et trader l'EUR/USD et le GBP/USD",
    "descripcion": "Analyser le range asiatique et trader l'EUR/USD et le GBP/USD",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HQ52LKT4.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0hpr2mp7s",
    "asin": "B0HPR2MP7S",
    "lang": "en",
    "titulo": "TRADING THE LONDON AND NEW YORK OPENS: Asian Range Breakouts and Forex Strategies for EUR/USD and GBP/USD",
    "descripcion": "Asian Range Breakouts and Forex Strategies for EUR/USD and GBP/USD",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HPR2MP7S.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0hpp4ns8s",
    "asin": "B0HPP4NS8S",
    "lang": "es",
    "titulo": "TRADING EN LAS APERTURAS DE LONDRES Y NUEVA YORK: Lectura del rango asiático y operativa en EURUSD y GBPUSD",
    "descripcion": "Lectura del rango asiático y operativa en EURUSD y GBPUSD",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HPP4NS8S.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0hp6c861d",
    "asin": "B0HP6C861D",
    "lang": "de",
    "titulo": "KAPITALSCHUTZ IM MODERNEN TRADING: Risikomanagement, Disziplin und robuste Strategien für volatile Märkte",
    "descripcion": "Risikomanagement, Disziplin und robuste Strategien für volatile Märkte",
    "categorias": [
      "forex",
      "riesgo"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HP6C861D.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0frxy2wkj",
    "asin": "B0FRXY2WKJ",
    "lang": "es",
    "titulo": "GESTIÓN DEL RIESGO EN EL TRADING MODERNO 2.0: Estrategias Avanzadas",
    "descripcion": "Estrategias Avanzadas",
    "categorias": [
      "forex",
      "riesgo"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FRXY2WKJ.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0hnkplh6j",
    "asin": "B0HNKPLH6J",
    "lang": "it",
    "titulo": "DAY TRADING CON METODO: Guida pratica per leggere il mercato, gestire il rischio e fare trading intraday con disciplina",
    "descripcion": "Guida pratica per leggere il mercato, gestire il rischio e fare trading intraday con disciplina",
    "categorias": [
      "forex",
      "ejercicios"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HNKPLH6J.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0hc7w1kyq",
    "asin": "B0HC7W1KYQ",
    "lang": "fr",
    "titulo": "DAY TRADING AVEC MÉTHODE: Guide pratique pour lire le marché, gérer le risque et trader en intraday avec discipline",
    "descripcion": "Guide pratique pour lire le marché, gérer le risque et trader en intraday avec discipline",
    "categorias": [
      "forex",
      "ejercicios"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HC7W1KYQ.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0hms1c3yn",
    "asin": "B0HMS1C3YN",
    "lang": "de",
    "titulo": "DAYTRADING MIT METHODE: Praxisleitfaden für Marktanalyse, Risikomanagement und diszipliniertes Intraday-Trading",
    "descripcion": "Praxisleitfaden für Marktanalyse, Risikomanagement und diszipliniertes Intraday-Trading",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HMS1C3YN.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0hm25pplq",
    "asin": "B0HM25PPLQ",
    "lang": "en",
    "titulo": "DAY TRADING WITH A METHOD: A Practical Guide to Reading the Market, Managing Risk, and Trading with Discipline",
    "descripcion": "A Practical Guide to Reading the Market, Managing Risk, and Trading with Discipline",
    "categorias": [
      "forex",
      "ejercicios"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HM25PPLQ.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0hm15j4dy",
    "asin": "B0HM15J4DY",
    "lang": "es",
    "titulo": "DAY TRADING CON MÉTODO: Guía práctica para leer el mercado, gestionar el riesgo y operar intradía con disciplina",
    "descripcion": "Guía práctica para leer el mercado, gestionar el riesgo y operar intradía con disciplina",
    "categorias": [
      "forex",
      "ejercicios"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HM15J4DY.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0hl9qb745",
    "asin": "B0HL9QB745",
    "lang": "fr",
    "titulo": "TRADER INTELLIGEMMENT AVEC L'IA: Psychologie DeFi et gestion du risque pour l'investisseur moderne",
    "descripcion": "Psychologie DeFi et gestion du risque pour l'investisseur moderne",
    "categorias": [
      "otros",
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HL9QB745.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0hlbg3kk9",
    "asin": "B0HLBG3KK9",
    "lang": "it",
    "titulo": "IL TRADING INTELLIGENTE NELL'ERA DELL'INTELLIGENZA ARTIFICIALE: Psicologia DeFi e gestione del rischio per l'investitore moderno",
    "descripcion": "Psicologia DeFi e gestione del rischio per l'investitore moderno",
    "categorias": [
      "otros",
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HLBG3KK9.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0hkjydsz4",
    "asin": "B0HKJYDSZ4",
    "lang": "de",
    "titulo": "INTELLIGENTES TRADING MIT KI: DeFi Psychologie und Risikomanagement für moderne Anleger",
    "descripcion": "DeFi Psychologie und Risikomanagement für moderne Anleger",
    "categorias": [
      "otros",
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HKJYDSZ4.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0hkg5qg9k",
    "asin": "B0HKG5QG9K",
    "lang": "en",
    "titulo": "AI Powered Trading: DeFi Psychology and Risk Management for Modern Investors",
    "descripcion": "DeFi Psychology and Risk Management for Modern Investors",
    "categorias": [
      "forex",
      "riesgo"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HKG5QG9K.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0hk1j2c7b",
    "asin": "B0HK1J2C7B",
    "lang": "es",
    "titulo": "Trading inteligente en la era de la IA: DeFi psicología y gestión del riesgo para el inversor moderno",
    "descripcion": "DeFi psicología y gestión del riesgo para el inversor moderno",
    "categorias": [
      "forex",
      "riesgo"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HK1J2C7B.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0hjx4yf7r",
    "asin": "B0HJX4YF7R",
    "lang": "it",
    "titulo": "FARE TRADING CON L'INTELLIGENZA ARTIFICIALE: Come usare ChatGPT, Claude, Gemini e l'IA generativa per analizzare i mercati e prendere decisioni di trading più consapevoli.",
    "descripcion": "Come usare ChatGPT, Claude, Gemini e l'IA generativa per analizzare i mercati e prendere decisioni di trading più consapevoli.",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HJX4YF7R.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0h22xstb3",
    "asin": "B0H22XSTB3",
    "lang": "fr",
    "titulo": "TRADER AVEC L'INTELLIGENCE ARTIFICIELLE: Comment utiliser ChatGPT, Claude, Gemini et l'IA générative pour analyser les marchés et prendre de meilleures décisions de trading",
    "descripcion": "Comment utiliser ChatGPT, Claude, Gemini et l'IA générative pour analyser les marchés et prendre de meilleures décisions de trading",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0H22XSTB3.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0hjsnbfvm",
    "asin": "B0HJSNBFVM",
    "lang": "de",
    "titulo": "TRADING MIT KÜNSTLICHER INTELLIGENZ: Wie Sie ChatGPT, Claude, Gemini und generative KI für Marktanalysen und fundiertere Trading-Entscheidungen nutzen",
    "descripcion": "Wie Sie ChatGPT, Claude, Gemini und generative KI für Marktanalysen und fundiertere Trading-Entscheidungen nutzen",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HJSNBFVM.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0hjq8pkt8",
    "asin": "B0HJQ8PKT8",
    "lang": "en",
    "titulo": "TRADING WITH ARTIFICIAL INTELLIGENCE: How to use ChatGPT, Claude, Gemini, and generative AI to analyze markets and trade more wisely",
    "descripcion": "How to use ChatGPT, Claude, Gemini, and generative AI to analyze markets and trade more wisely",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HJQ8PKT8.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0hjnr6l52",
    "asin": "B0HJNR6L52",
    "lang": "es",
    "titulo": "TRADING CON INTELIGENCIA ARTIFICIAL: Cómo usar ChatGPT, Claude, Gemini y la IA generativa para analizar los mercados y operar con más criterio",
    "descripcion": "Cómo usar ChatGPT, Claude, Gemini y la IA generativa para analizar los mercados y operar con más criterio",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HJNR6L52.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0hj6lgrrj",
    "asin": "B0HJ6LGRRJ",
    "lang": "it",
    "titulo": "DAL BACKTEST AL TRADING REALE: Trasformare una strategia promettente in un sistema di trading robusto",
    "descripcion": "Trasformare una strategia promettente in un sistema di trading robusto",
    "categorias": [
      "forex",
      "riesgo"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HJ6LGRRJ.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0hj393z3v",
    "asin": "B0HJ393Z3V",
    "lang": "fr",
    "titulo": "DU BACKTEST AU TRADING RÉEL: Transformer une stratégie prometteuse en un système de trading robuste",
    "descripcion": "Transformer une stratégie prometteuse en un système de trading robuste",
    "categorias": [
      "forex",
      "riesgo"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HJ393Z3V.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0hj2923pp",
    "asin": "B0HJ2923PP",
    "lang": "de",
    "titulo": "VOM BACKTEST ZUM LIVE-HANDEL: Wie aus einer vielversprechenden Strategie ein robustes Handelssystem wird",
    "descripcion": "Wie aus einer vielversprechenden Strategie ein robustes Handelssystem wird",
    "categorias": [
      "forex",
      "riesgo"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HJ2923PP.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0hhzq1ff2",
    "asin": "B0HHZQ1FF2",
    "lang": "en",
    "titulo": "FROM BACKTESTING TO LIVE TRADING: Turning a Promising Strategy into a Robust Trading System",
    "descripcion": "Turning a Promising Strategy into a Robust Trading System",
    "categorias": [
      "forex",
      "riesgo"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HHZQ1FF2.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0hhymr7mk",
    "asin": "B0HHYMR7MK",
    "lang": "es",
    "titulo": "DEL BACKTESTING A LA CUENTA REAL: Cómo convertir una estrategia prometedora en un sistema operable",
    "descripcion": "Cómo convertir una estrategia prometedora en un sistema operable",
    "categorias": [
      "forex",
      "riesgo"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0HHYMR7MK.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0h3qx3bgj",
    "asin": "B0H3QX3BGJ",
    "lang": "en",
    "titulo": "FOREX SCALPING: Profitable 5-Minute Trading Strategies",
    "descripcion": "Profitable 5-Minute Trading Strategies",
    "categorias": [
      "forex",
      "scalping"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0H3QX3BGJ.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0ftnh5b1p",
    "asin": "B0FTNH5B1P",
    "lang": "de",
    "titulo": "SMART MONEY VS. CHARTMUSTER: Liquidität, Manipulation und Strategie",
    "descripcion": "Liquidität, Manipulation und Strategie",
    "categorias": [
      "forex",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FTNH5B1P.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0cn3hh4lz",
    "asin": "B0CN3HH4LZ",
    "lang": "en",
    "titulo": "Japanese Candle Patterns: Success Tactics: Silent Language",
    "descripcion": "Success Tactics: Silent Language",
    "categorias": [
      "velas"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CN3HH4LZ.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0fnrslcqd",
    "asin": "B0FNRSLCQD",
    "lang": "it",
    "titulo": "Trading con l'intelligenza artificiale: Come utilizzare l'IA per guadagnare sui mercati",
    "descripcion": "Come utilizzare l'IA per guadagnare sui mercati",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FNRSLCQD.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0fnj32jws",
    "asin": "B0FNJ32JWS",
    "lang": "fr",
    "titulo": "Trading avec l'intelligence artificielle: Comment utiliser l'IA pour gagner sur les marchés",
    "descripcion": "Comment utiliser l'IA pour gagner sur les marchés",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FNJ32JWS.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0fnnlsvkk",
    "asin": "B0FNNLSVKK",
    "lang": "de",
    "titulo": "Trading mit künstlicher Intelligenz: Wie man KI nutzt, um an den Märkten zu gewinnen",
    "descripcion": "Wie man KI nutzt, um an den Märkten zu gewinnen",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FNNLSVKK.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0fnptc52x",
    "asin": "B0FNPTC52X",
    "lang": "en",
    "titulo": "Trading with Artificial Intelligence: How to use AI to win in the markets",
    "descripcion": "How to use AI to win in the markets",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FNPTC52X.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0gr6zcpyc",
    "asin": "B0GR6ZCPYC",
    "lang": "es",
    "titulo": "Trading con Inteligencia Artificial: Sistema de trading híbrido",
    "descripcion": "Sistema de trading híbrido",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0GR6ZCPYC.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0fxydx6f4",
    "asin": "B0FXYDX6F4",
    "lang": "es",
    "titulo": "LA BOLSA PARA PRINCIPIANTES 2.0: Guía práctica para comprender e invertir en los mercados globales",
    "descripcion": "Guía práctica para comprender e invertir en los mercados globales",
    "categorias": [
      "forex",
      "ejercicios"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FXYDX6F4.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0frt1xp14",
    "asin": "B0FRT1XP14",
    "lang": "fr",
    "titulo": "IA, DeFi et psychologie dans la nouvelle ère du trading: Le trader moderne 2.0",
    "descripcion": "Le trader moderne 2.0",
    "categorias": [
      "otros",
      "psicologia"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0FRT1XP14.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0clkzq8s1",
    "asin": "B0CLKZQ8S1",
    "lang": "it",
    "titulo": "Trasforma il tuo trading con i pattern grafici: Segreti commerciali",
    "descripcion": "Segreti commerciali",
    "categorias": [
      "patrones"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CLKZQ8S1.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0dlp1y77g",
    "asin": "B0DLP1Y77G",
    "lang": "de",
    "titulo": "Handel für Neulinge: Technische Analyse",
    "descripcion": "Technische Analyse",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0DLP1Y77G.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0d3cr655f",
    "asin": "B0D3CR655F",
    "lang": "de",
    "titulo": "Smart Money Concept: Handel, Technische Analyse",
    "descripcion": "Handel, Technische Analyse",
    "categorias": [
      "forex",
      "smc"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0D3CR655F.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0cpc94wn1",
    "asin": "B0CPC94WN1",
    "lang": "fr",
    "titulo": "Stratégies de trading Forex : guide complet: Outils et ressources",
    "descripcion": "guide complet: Outils et ressources",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CPC94WN1.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0cpc37qk8",
    "asin": "B0CPC37QK8",
    "lang": "en",
    "titulo": "Forex Trading Strategies: Complete Guide: Tools and Resources",
    "descripcion": "Complete Guide: Tools and Resources",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CPC37QK8.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0cpcz6fys",
    "asin": "B0CPCZ6FYS",
    "lang": "de",
    "titulo": "Forex-Handelsstrategien: Vollständiger Leitfaden: Tools und Ressourcen",
    "descripcion": "Vollständiger Leitfaden: Tools und Ressourcen",
    "categorias": [
      "forex"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CPCZ6FYS.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0cwqg31bj",
    "asin": "B0CWQG31BJ",
    "lang": "en",
    "titulo": "Practical Trading Exercises: Real-Time Analysis 1.0: Strategies and Patterns",
    "descripcion": "Real-Time Analysis 1.0: Strategies and Patterns",
    "categorias": [
      "patrones"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CWQG31BJ.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0cpnvks41",
    "asin": "B0CPNVKS41",
    "lang": "fr",
    "titulo": "Le sac du débutant: Stratégies pour constituer votre portefeuille",
    "descripcion": "Stratégies pour constituer votre portefeuille",
    "categorias": [
      "otros"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CPNVKS41.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0cpq4zqk6",
    "asin": "B0CPQ4ZQK6",
    "lang": "de",
    "titulo": "Die Einsteigertasche: Strategien zum Aufbau Ihres Portfolios",
    "descripcion": "Strategien zum Aufbau Ihres Portfolios",
    "categorias": [
      "otros"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CPQ4ZQK6.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0cpq1f6lb",
    "asin": "B0CPQ1F6LB",
    "lang": "it",
    "titulo": "La borsa del principiante: Strategie per costruire il tuo portafoglio",
    "descripcion": "Strategie per costruire il tuo portafoglio",
    "categorias": [
      "otros"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CPQ1F6LB.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0cpnplm7s",
    "asin": "B0CPNPLM7S",
    "lang": "en",
    "titulo": "The beginner's bag: Strategies to Build your Portfolio",
    "descripcion": "Strategies to Build your Portfolio",
    "categorias": [
      "otros"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0CPNPLM7S.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0c5w4ph71",
    "asin": "B0C5W4PH71",
    "lang": "en",
    "titulo": "The art of scalping: how to maximise your profits in a matter of minutes: Your financial independence",
    "descripcion": "how to maximise your profits in a matter of minutes: Your financial independence",
    "categorias": [
      "forex",
      "scalping"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0C5W4PH71.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  },
  {
    "id": "b0c8kfwbz3",
    "asin": "B0C8KFWBZ3",
    "lang": "it",
    "titulo": "L'arte dello scalping: come massimizzare i profitti in pochi minuti",
    "descripcion": "come massimizzare i profitti in pochi minuti",
    "categorias": [
      "forex",
      "scalping"
    ],
    "portada": "https://images-na.ssl-images-amazon.com/images/P/B0C8KFWBZ3.01.LZZZZZZZ.jpg",
    "destacado": false,
    "ficha": true
  }
];
