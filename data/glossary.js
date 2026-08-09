/*
 * Glosario de trading — terminos en ingles (como se usan en la practica)
 * con definicion en los 5 idiomas de la web.
 * cat: categoria relacionada de CATS (data/i18n.js) para enlazar con libros.
 */
const GLOSSARY = [
  { term: "Lot", cat: "riesgo", def: {
    es: "Unidad estándar para medir el tamaño de una operación. Un lote estándar en Forex equivale a 100.000 unidades de la divisa base.",
    en: "The standard unit used to measure the size of a trade. A standard lot in Forex equals 100,000 units of the base currency.",
    fr: "Unité standard utilisée pour mesurer la taille d'une position. Un lot standard en Forex équivaut à 100 000 unités de la devise de base.",
    de: "Die Standardeinheit zur Messung der Positionsgröße. Ein Standardlot im Forex-Handel entspricht 100.000 Einheiten der Basiswährung.",
    it: "L'unità standard per misurare la dimensione di un'operazione. Un lotto standard nel Forex equivale a 100.000 unità della valuta base."
  }},
  { term: "Pip", cat: "forex", def: {
    es: "El movimiento de precio más pequeño que puede hacer un par de divisas, normalmente el cuarto decimal (el segundo en pares con el yen).",
    en: "The smallest price move a currency pair can make, usually the fourth decimal place (the second for yen pairs).",
    fr: "Le plus petit mouvement de prix qu'une paire de devises puisse faire, généralement la quatrième décimale (la deuxième pour les paires avec le yen).",
    de: "Die kleinste Preisbewegung, die ein Währungspaar machen kann, meist die vierte Dezimalstelle (bei Yen-Paaren die zweite).",
    it: "Il più piccolo movimento di prezzo che una coppia di valute può compiere, di solito il quarto decimale (il secondo per le coppie con lo yen)."
  }},
  { term: "Spread", cat: "forex", def: {
    es: "La diferencia entre el precio de compra (ask) y el precio de venta (bid) de un activo; es el coste implícito de operar.",
    en: "The difference between the buy price (ask) and the sell price (bid) of an asset; it's the implicit cost of trading.",
    fr: "La différence entre le prix d'achat (ask) et le prix de vente (bid) d'un actif ; c'est le coût implicite du trading.",
    de: "Die Differenz zwischen Kaufpreis (Ask) und Verkaufspreis (Bid) eines Vermögenswerts; sie stellt die impliziten Handelskosten dar.",
    it: "La differenza tra il prezzo di acquisto (ask) e il prezzo di vendita (bid) di un asset; è il costo implicito dell'operazione."
  }},
  { term: "Leverage", cat: "riesgo", def: {
    es: "La capacidad de controlar una posición grande con un capital pequeño, expresada como una proporción (por ejemplo, 1:100).",
    en: "The ability to control a large position with a small amount of capital, expressed as a ratio (for example, 1:100).",
    fr: "La capacité de contrôler une position importante avec un petit capital, exprimée sous forme de ratio (par exemple, 1:100).",
    de: "Die Fähigkeit, mit geringem Kapitaleinsatz eine große Position zu kontrollieren, ausgedrückt als Verhältnis (z. B. 1:100).",
    it: "La capacità di controllare una posizione ampia con un capitale ridotto, espressa come rapporto (ad esempio, 1:100)."
  }},
  { term: "Margin", cat: "riesgo", def: {
    es: "El capital que el bróker exige como garantía para abrir y mantener una posición apalancada.",
    en: "The capital a broker requires as collateral to open and maintain a leveraged position.",
    fr: "Le capital exigé par le courtier comme garantie pour ouvrir et maintenir une position avec effet de levier.",
    de: "Das Kapital, das der Broker als Sicherheit für die Eröffnung und Aufrechterhaltung einer gehebelten Position verlangt.",
    it: "Il capitale che il broker richiede come garanzia per aprire e mantenere una posizione con leva finanziaria."
  }},
  { term: "Margin Call", cat: "riesgo", def: {
    es: "Aviso del bróker que exige depositar más fondos porque el capital de la cuenta ha caído por debajo del margen mínimo requerido.",
    en: "A broker's warning demanding additional funds because the account's equity has fallen below the required margin level.",
    fr: "Un avertissement du courtier exigeant des fonds supplémentaires car le capital du compte est tombé sous le niveau de marge requis.",
    de: "Eine Aufforderung des Brokers, zusätzliches Kapital einzuzahlen, weil das Eigenkapital des Kontos unter das erforderliche Margin-Niveau gefallen ist.",
    it: "Un avviso del broker che richiede fondi aggiuntivi perché il capitale del conto è sceso sotto il livello di margine richiesto."
  }},
  { term: "Drawdown", cat: "riesgo", def: {
    es: "La caída del capital de una cuenta desde su punto más alto hasta su punto más bajo, normalmente expresada en porcentaje.",
    en: "The decline of an account's equity from its highest point to its lowest point, usually expressed as a percentage.",
    fr: "La baisse du capital d'un compte depuis son point le plus haut jusqu'à son point le plus bas, généralement exprimée en pourcentage.",
    de: "Der Rückgang des Kontokapitals vom höchsten bis zum niedrigsten Stand, meist in Prozent ausgedrückt.",
    it: "Il calo del capitale di un conto dal suo punto più alto al suo punto più basso, di solito espresso in percentuale."
  }},
  { term: "Take Profit", cat: "riesgo", def: {
    es: "Un nivel de precio predefinido que cierra automáticamente una operación en beneficio cuando el precio lo alcanza.",
    en: "A predefined price level that automatically closes a trade in profit once the price reaches it.",
    fr: "Un niveau de prix prédéfini qui clôture automatiquement une position en profit lorsque le prix l'atteint.",
    de: "Ein vorher festgelegtes Kursniveau, das eine Position automatisch mit Gewinn schließt, sobald der Kurs es erreicht.",
    it: "Un livello di prezzo predefinito che chiude automaticamente un'operazione in profitto quando il prezzo lo raggiunge."
  }},
  { term: "Stop Loss", cat: "riesgo", def: {
    es: "Un nivel de precio predefinido que cierra automáticamente una operación en pérdida para limitar el riesgo.",
    en: "A predefined price level that automatically closes a trade at a loss to limit risk.",
    fr: "Un niveau de prix prédéfini qui clôture automatiquement une position en perte afin de limiter le risque.",
    de: "Ein vorher festgelegtes Kursniveau, das eine Position automatisch mit Verlust schließt, um das Risiko zu begrenzen.",
    it: "Un livello di prezzo predefinito che chiude automaticamente un'operazione in perdita per limitare il rischio."
  }},
  { term: "Breakeven", cat: "riesgo", def: {
    es: "Mover el stop loss al precio de entrada para que la operación ya no pueda cerrarse en pérdida.",
    en: "Moving the stop loss to the entry price so the trade can no longer close at a loss.",
    fr: "Déplacer le stop loss au prix d'entrée pour que la position ne puisse plus se clôturer en perte.",
    de: "Verschieben des Stop-Loss auf den Einstiegspreis, sodass die Position nicht mehr mit Verlust geschlossen werden kann.",
    it: "Spostare lo stop loss al prezzo di entrata affinché l'operazione non possa più chiudersi in perdita."
  }},
  { term: "Slippage", cat: "forex", def: {
    es: "La diferencia entre el precio esperado de una operación y el precio al que realmente se ejecuta.",
    en: "The difference between a trade's expected execution price and the price at which it actually fills.",
    fr: "La différence entre le prix d'exécution attendu d'une position et le prix auquel elle est réellement exécutée.",
    de: "Die Differenz zwischen dem erwarteten Ausführungspreis einer Order und dem tatsächlich erzielten Preis.",
    it: "La differenza tra il prezzo di esecuzione atteso di un'operazione e il prezzo al quale viene effettivamente eseguita."
  }},
  { term: "Long", cat: "forex", def: {
    es: "Abrir una operación de compra esperando que el precio del activo suba.",
    en: "Opening a buy position expecting the asset's price to rise.",
    fr: "Ouvrir une position d'achat en s'attendant à ce que le prix de l'actif augmente.",
    de: "Eine Kaufposition eröffnen in der Erwartung, dass der Kurs des Vermögenswerts steigt.",
    it: "Aprire una posizione di acquisto aspettandosi che il prezzo dell'asset salga."
  }},
  { term: "Short", cat: "forex", def: {
    es: "Abrir una operación de venta (a menudo con activos prestados) esperando que el precio del activo baje.",
    en: "Opening a sell position (often on borrowed assets) expecting the asset's price to fall.",
    fr: "Ouvrir une position de vente (souvent sur des actifs empruntés) en s'attendant à ce que le prix de l'actif baisse.",
    de: "Eine Verkaufsposition eröffnen (oft mit geliehenen Vermögenswerten) in der Erwartung, dass der Kurs fällt.",
    it: "Aprire una posizione di vendita (spesso su asset presi in prestito) aspettandosi che il prezzo dell'asset scenda."
  }},
  { term: "Bullish", cat: "priceaction", def: {
    es: "Expectativa o tendencia de que el precio de un activo va a subir.",
    en: "The expectation or trend that an asset's price is going to rise.",
    fr: "L'anticipation ou la tendance selon laquelle le prix d'un actif va augmenter.",
    de: "Die Erwartung oder der Trend, dass der Kurs eines Vermögenswerts steigen wird.",
    it: "L'aspettativa o la tendenza secondo cui il prezzo di un asset salirà."
  }},
  { term: "Bearish", cat: "priceaction", def: {
    es: "Expectativa o tendencia de que el precio de un activo va a bajar.",
    en: "The expectation or trend that an asset's price is going to fall.",
    fr: "L'anticipation ou la tendance selon laquelle le prix d'un actif va baisser.",
    de: "Die Erwartung oder der Trend, dass der Kurs eines Vermögenswerts fallen wird.",
    it: "L'aspettativa o la tendenza secondo cui il prezzo di un asset scenderà."
  }},
  { term: "Volatility", cat: "forex", def: {
    es: "El grado de variación del precio de un activo en un periodo de tiempo determinado.",
    en: "The degree of price variation of an asset over a given period of time.",
    fr: "Le degré de variation du prix d'un actif sur une période donnée.",
    de: "Das Ausmaß der Kursschwankungen eines Vermögenswerts über einen bestimmten Zeitraum.",
    it: "Il grado di variazione del prezzo di un asset in un determinato periodo di tempo."
  }},
  { term: "Liquidity", cat: "smc", def: {
    es: "En Smart Money, las zonas del gráfico donde se acumulan órdenes stop de otros traders, y que las instituciones buscan capturar antes de mover el precio.",
    en: "In Smart Money trading, chart zones where other traders' stop orders accumulate, which institutions target before moving price.",
    fr: "En Smart Money, les zones du graphique où s'accumulent les ordres stop d'autres traders, que les institutions cherchent à capturer avant de déplacer le prix.",
    de: "Im Smart-Money-Trading Chartzonen, in denen sich Stop-Orders anderer Trader ansammeln und die von Institutionen gezielt angesteuert werden, bevor sich der Kurs bewegt.",
    it: "Nel trading Smart Money, le zone del grafico dove si accumulano gli ordini stop di altri trader, che le istituzioni cercano di catturare prima di muovere il prezzo."
  }},
  { term: "Broker", cat: "forex", def: {
    es: "La empresa o plataforma que da acceso a los mercados financieros para ejecutar operaciones de compra y venta.",
    en: "The firm or platform that provides access to financial markets to execute buy and sell orders.",
    fr: "L'entreprise ou la plateforme qui donne accès aux marchés financiers pour exécuter des ordres d'achat et de vente.",
    de: "Das Unternehmen oder die Plattform, die Zugang zu den Finanzmärkten bietet, um Kauf- und Verkaufsaufträge auszuführen.",
    it: "L'azienda o la piattaforma che fornisce accesso ai mercati finanziari per eseguire ordini di acquisto e vendita."
  }},
  { term: "Market Order", cat: "forex", def: {
    es: "Una orden que se ejecuta de forma inmediata al precio actual del mercado.",
    en: "An order that gets executed immediately at the current market price.",
    fr: "Un ordre exécuté immédiatement au prix actuel du marché.",
    de: "Ein Auftrag, der sofort zum aktuellen Marktpreis ausgeführt wird.",
    it: "Un ordine che viene eseguito immediatamente al prezzo di mercato attuale."
  }},
  { term: "Limit Order", cat: "forex", def: {
    es: "Una orden para comprar o vender a un precio específico o mejor, que se ejecuta solo si el mercado lo alcanza.",
    en: "An order to buy or sell at a specific price or better, which only executes if the market reaches it.",
    fr: "Un ordre d'achat ou de vente à un prix spécifique ou meilleur, qui ne s'exécute que si le marché l'atteint.",
    de: "Ein Auftrag zum Kauf oder Verkauf zu einem bestimmten Preis oder besser, der nur ausgeführt wird, wenn der Markt diesen Preis erreicht.",
    it: "Un ordine di acquisto o vendita a un prezzo specifico o migliore, che si esegue solo se il mercato lo raggiunge."
  }},
  { term: "Support", cat: "priceaction", def: {
    es: "Un nivel de precio donde la presión compradora ha frenado históricamente una caída del mercado.",
    en: "A price level where buying pressure has historically stopped a market decline.",
    fr: "Un niveau de prix où la pression acheteuse a historiquement freiné une baisse du marché.",
    de: "Ein Kursniveau, an dem der Kaufdruck einen Kursrückgang historisch aufgehalten hat.",
    it: "Un livello di prezzo in cui la pressione degli acquisti ha storicamente arrestato un calo del mercato."
  }},
  { term: "Resistance", cat: "priceaction", def: {
    es: "Un nivel de precio donde la presión vendedora ha frenado históricamente una subida del mercado.",
    en: "A price level where selling pressure has historically stopped a market rise.",
    fr: "Un niveau de prix où la pression vendeuse a historiquement freiné une hausse du marché.",
    de: "Ein Kursniveau, an dem der Verkaufsdruck einen Kursanstieg historisch aufgehalten hat.",
    it: "Un livello di prezzo in cui la pressione delle vendite ha storicamente arrestato un rialzo del mercato."
  }},
  { term: "Trend", cat: "priceaction", def: {
    es: "La dirección general en la que se mueve el precio de un activo: alcista, bajista o lateral.",
    en: "The overall direction an asset's price is moving in: bullish, bearish, or sideways.",
    fr: "La direction générale dans laquelle évolue le prix d'un actif : haussière, baissière ou latérale.",
    de: "Die allgemeine Richtung, in die sich der Kurs eines Vermögenswerts bewegt: aufwärts, abwärts oder seitwärts.",
    it: "La direzione generale in cui si muove il prezzo di un asset: rialzista, ribassista o laterale."
  }},
  { term: "Consolidation", cat: "priceaction", def: {
    es: "Un periodo en el que el precio se mueve lateralmente dentro de un rango, sin tendencia clara.",
    en: "A period where price moves sideways within a range, without a clear trend.",
    fr: "Une période durant laquelle le prix évolue latéralement dans une fourchette, sans tendance claire.",
    de: "Ein Zeitraum, in dem sich der Kurs seitwärts innerhalb einer Spanne bewegt, ohne klaren Trend.",
    it: "Un periodo in cui il prezzo si muove lateralmente all'interno di un range, senza una tendenza chiara."
  }},
  { term: "Breakout", cat: "priceaction", def: {
    es: "El movimiento del precio más allá de un nivel de soporte o resistencia, normalmente con fuerza y volumen.",
    en: "Price moving beyond a support or resistance level, usually with strength and volume.",
    fr: "Le mouvement du prix au-delà d'un niveau de support ou de résistance, généralement avec force et volume.",
    de: "Die Kursbewegung über ein Unterstützungs- oder Widerstandsniveau hinaus, meist mit Stärke und Volumen.",
    it: "Il movimento del prezzo oltre un livello di supporto o resistenza, di solito con forza e volume."
  }},
  { term: "Candlestick", cat: "velas", def: {
    es: "El elemento gráfico que muestra la apertura, el máximo, el mínimo y el cierre del precio en un periodo determinado.",
    en: "The chart element that shows the open, high, low, and close of price during a given period.",
    fr: "L'élément graphique qui affiche l'ouverture, le plus haut, le plus bas et la clôture du prix sur une période donnée.",
    de: "Das Chartelement, das Eröffnungs-, Höchst-, Tiefst- und Schlusskurs innerhalb eines bestimmten Zeitraums zeigt.",
    it: "L'elemento grafico che mostra apertura, massimo, minimo e chiusura del prezzo in un determinato periodo."
  }},
  { term: "Bullish Engulfing", cat: "velas", def: {
    es: "Patrón de dos velas en el que una vela alcista grande envuelve por completo a la vela bajista anterior, señalando un posible giro al alza.",
    en: "A two-candle pattern where a large bullish candle fully engulfs the prior bearish candle, signaling a possible reversal upward.",
    fr: "Un motif à deux bougies où une grande bougie haussière englobe entièrement la bougie baissière précédente, signalant un possible retournement à la hausse.",
    de: "Ein Zwei-Kerzen-Muster, bei dem eine große bullische Kerze die vorherige bärische Kerze vollständig umschließt und eine mögliche Aufwärtswende signalisiert.",
    it: "Un pattern a due candele in cui una grande candela rialzista avvolge completamente la candela ribassista precedente, segnalando una possibile inversione al rialzo."
  }},
  { term: "Bearish Engulfing", cat: "velas", def: {
    es: "Patrón de dos velas en el que una vela bajista grande envuelve por completo a la vela alcista anterior, señalando un posible giro a la baja.",
    en: "A two-candle pattern where a large bearish candle fully engulfs the prior bullish candle, signaling a possible reversal downward.",
    fr: "Un motif à deux bougies où une grande bougie baissière englobe entièrement la bougie haussière précédente, signalant un possible retournement à la baisse.",
    de: "Ein Zwei-Kerzen-Muster, bei dem eine große bärische Kerze die vorherige bullische Kerze vollständig umschließt und eine mögliche Abwärtswende signalisiert.",
    it: "Un pattern a due candele in cui una grande candela ribassista avvolge completamente la candela rialzista precedente, segnalando una possibile inversione al ribasso."
  }},
  { term: "Doji", cat: "velas", def: {
    es: "Una vela con cuerpo muy pequeño, donde la apertura y el cierre están casi al mismo nivel, indicando indecisión en el mercado.",
    en: "A candle with a very small body, where the open and close are almost at the same level, indicating market indecision.",
    fr: "Une bougie au corps très petit, où l'ouverture et la clôture sont presque au même niveau, indiquant une indécision du marché.",
    de: "Eine Kerze mit sehr kleinem Körper, bei der Eröffnungs- und Schlusskurs fast identisch sind — ein Zeichen für Unentschlossenheit am Markt.",
    it: "Una candela con un corpo molto piccolo, dove apertura e chiusura sono quasi allo stesso livello, indicando indecisione nel mercato."
  }},
  { term: "Pin Bar", cat: "velas", def: {
    es: "Una vela con cuerpo pequeño y una mecha larga que señala el rechazo del precio a un nivel determinado.",
    en: "A candle with a small body and a long wick that signals price rejection at a given level.",
    fr: "Une bougie au corps petit et à la longue mèche qui signale le rejet du prix à un niveau donné.",
    de: "Eine Kerze mit kleinem Körper und langem Docht, die eine Kursablehnung an einem bestimmten Niveau signalisiert.",
    it: "Una candela con corpo piccolo e uno stoppino lungo che segnala il rifiuto del prezzo a un determinato livello."
  }},
  { term: "Order Block", cat: "smc", def: {
    es: "La última vela opuesta antes de un movimiento institucional fuerte; se interpreta como el origen de las órdenes grandes que impulsaron ese movimiento.",
    en: "The last opposing candle before a strong institutional move; interpreted as the origin of the large orders that fuelled that move.",
    fr: "La dernière bougie opposée avant un mouvement institutionnel fort ; interprétée comme l'origine des grands ordres à l'origine de ce mouvement.",
    de: "Die letzte gegenläufige Kerze vor einer starken institutionellen Bewegung; sie gilt als Ursprung der großen Orders, die diese Bewegung ausgelöst haben.",
    it: "L'ultima candela opposta prima di un forte movimento istituzionale; interpretata come l'origine dei grandi ordini che hanno alimentato quel movimento."
  }},
  { term: "Fair Value Gap (FVG)", cat: "ict", def: {
    es: "Un desequilibrio de precio, un hueco dejado por un movimiento rápido del mercado, que suele volver a visitarse antes de continuar la tendencia.",
    en: "A price imbalance, a gap left by a fast market move, which price often revisits before continuing its trend.",
    fr: "Un déséquilibre de prix, un vide laissé par un mouvement rapide du marché, que le prix revisite souvent avant de poursuivre sa tendance.",
    de: "Ein Preisungleichgewicht, eine durch eine schnelle Marktbewegung entstandene Lücke, die der Kurs oft erneut ansteuert, bevor er den Trend fortsetzt.",
    it: "Uno squilibrio di prezzo, un vuoto lasciato da un movimento rapido del mercato, che il prezzo spesso rivisita prima di proseguire la tendenza."
  }},
  { term: "Liquidity Sweep", cat: "smc", def: {
    es: "Un movimiento rápido del precio que activa las órdenes stop acumuladas más allá de un máximo o mínimo, justo antes de que el precio gire.",
    en: "A quick price move that triggers stop orders resting beyond a recent high or low, right before price reverses.",
    fr: "Un mouvement rapide du prix qui déclenche les ordres stop accumulés au-delà d'un plus haut ou d'un plus bas, juste avant que le prix ne se retourne.",
    de: "Eine schnelle Kursbewegung, die die über einem jüngsten Hoch oder Tief liegenden Stop-Orders auslöst, kurz bevor der Kurs dreht.",
    it: "Un rapido movimento di prezzo che attiva gli ordini stop accumulati oltre un massimo o un minimo recente, poco prima che il prezzo inverta direzione."
  }},
  { term: "Break of Structure (BOS)", cat: "smc", def: {
    es: "Cuando el precio rompe un máximo o mínimo anterior relevante, confirmando la continuación de la tendencia vigente.",
    en: "When price breaks a previous relevant swing high or low, confirming the continuation of the current trend.",
    fr: "Lorsque le prix casse un plus haut ou un plus bas antérieur pertinent, confirmant la continuation de la tendance en cours.",
    de: "Wenn der Kurs ein relevantes vorheriges Swing-Hoch oder -Tief durchbricht und damit die Fortsetzung des aktuellen Trends bestätigt.",
    it: "Quando il prezzo rompe un massimo o minimo precedente rilevante, confermando la continuazione della tendenza in corso."
  }},
  { term: "Change of Character (CHOCH)", cat: "smc", def: {
    es: "La primera ruptura de estructura en dirección contraria a la tendencia vigente, que anticipa un posible cambio de tendencia.",
    en: "The first break of structure in the opposite direction to the current trend, hinting at a possible trend reversal.",
    fr: "La première cassure de structure dans la direction opposée à la tendance en cours, laissant présager un possible retournement de tendance.",
    de: "Der erste Strukturbruch in die entgegengesetzte Richtung des aktuellen Trends, der auf eine mögliche Trendwende hindeutet.",
    it: "La prima rottura di struttura in direzione opposta alla tendenza in corso, che anticipa una possibile inversione di tendenza."
  }},
  { term: "Market Structure Shift (MSS)", cat: "ict", def: {
    es: "Confirmación de que la estructura del precio ha cambiado de dirección, similar al CHOCH dentro de la metodología ICT.",
    en: "Confirmation that price structure has shifted direction, similar to CHOCH within ICT methodology.",
    fr: "Confirmation que la structure du prix a changé de direction, semblable au CHOCH dans la méthodologie ICT.",
    de: "Bestätigung, dass sich die Kursstruktur in ihrer Richtung geändert hat, ähnlich dem CHOCH innerhalb der ICT-Methodik.",
    it: "Conferma che la struttura del prezzo ha cambiato direzione, simile al CHOCH nell'ambito della metodologia ICT."
  }},
  { term: "Imbalance", cat: "ict", def: {
    es: "Un movimiento de precio ineficiente que deja un desequilibrio entre compradores y vendedores, similar al concepto de FVG.",
    en: "An inefficient price move that leaves an imbalance between buyers and sellers, similar to the FVG concept.",
    fr: "Un mouvement de prix inefficace qui laisse un déséquilibre entre acheteurs et vendeurs, semblable au concept de FVG.",
    de: "Eine ineffiziente Kursbewegung, die ein Ungleichgewicht zwischen Käufern und Verkäufern hinterlässt, ähnlich dem FVG-Konzept.",
    it: "Un movimento di prezzo inefficiente che lascia uno squilibrio tra acquirenti e venditori, simile al concetto di FVG."
  }},
  { term: "Kill Zone", cat: "ict", def: {
    es: "Franjas horarias de alta volatilidad (como la apertura de Londres o Nueva York) que la metodología ICT considera clave para operar.",
    en: "High-volatility time windows (such as the London or New York open) considered key trading periods in ICT methodology.",
    fr: "Des plages horaires de forte volatilité (comme l'ouverture de Londres ou de New York) considérées comme clés dans la méthodologie ICT.",
    de: "Zeitfenster hoher Volatilität (wie die Eröffnung von London oder New York), die in der ICT-Methodik als wichtige Handelsphasen gelten.",
    it: "Fasce orarie ad alta volatilità (come l'apertura di Londra o New York) considerate momenti chiave per operare nella metodologia ICT."
  }},
  { term: "Smart Money Concepts (SMC)", cat: "smc", def: {
    es: "Un enfoque de trading que estudia las huellas que deja el flujo de órdenes de los grandes participantes institucionales, el llamado \"dinero inteligente\".",
    en: "A trading approach that studies the footprints left by the order flow of large institutional participants, the so-called \"smart money\".",
    fr: "Une approche de trading qui étudie les traces laissées par le flux d'ordres des grands acteurs institutionnels, le fameux « argent intelligent ».",
    de: "Ein Trading-Ansatz, der die Spuren untersucht, die der Orderfluss großer institutioneller Marktteilnehmer — das sogenannte „Smart Money“ — hinterlässt.",
    it: "Un approccio di trading che studia le tracce lasciate dal flusso di ordini dei grandi partecipanti istituzionali, il cosiddetto \"denaro intelligente\"."
  }},
  { term: "Accumulation", cat: "wyckoff", def: {
    es: "Fase del método Wyckoff en la que los grandes participantes construyen posiciones compradoras de forma discreta antes de una subida.",
    en: "A Wyckoff method phase in which large participants quietly build long positions before a markup move.",
    fr: "Phase de la méthode Wyckoff durant laquelle les grands acteurs construisent discrètement des positions acheteuses avant une hausse.",
    de: "Eine Phase der Wyckoff-Methode, in der große Marktteilnehmer unauffällig Long-Positionen aufbauen, bevor der Kurs steigt.",
    it: "Fase del metodo Wyckoff in cui i grandi partecipanti costruiscono discretamente posizioni long prima di un rialzo."
  }},
  { term: "Distribution", cat: "wyckoff", def: {
    es: "Fase del método Wyckoff en la que los grandes participantes venden sus posiciones de forma discreta antes de una caída del precio.",
    en: "A Wyckoff method phase in which large participants quietly sell off their positions before a price decline.",
    fr: "Phase de la méthode Wyckoff durant laquelle les grands acteurs vendent discrètement leurs positions avant une baisse du prix.",
    de: "Eine Phase der Wyckoff-Methode, in der große Marktteilnehmer ihre Positionen unauffällig abbauen, bevor der Kurs fällt.",
    it: "Fase del metodo Wyckoff in cui i grandi partecipanti vendono discretamente le proprie posizioni prima di un calo del prezzo."
  }},
  { term: "Spring", cat: "wyckoff", def: {
    es: "Patrón del método Wyckoff: una falsa ruptura breve por debajo del soporte que atrapa a los vendedores antes de que el precio gire al alza.",
    en: "A Wyckoff pattern: a brief false breakdown below support that traps sellers before price reverses upward.",
    fr: "Un motif de la méthode Wyckoff : une brève fausse cassure sous le support qui piège les vendeurs avant que le prix ne se retourne à la hausse.",
    de: "Ein Wyckoff-Muster: ein kurzer Fehlausbruch unter die Unterstützung, der Verkäufer in die Falle lockt, bevor der Kurs nach oben dreht.",
    it: "Un pattern del metodo Wyckoff: una breve falsa rottura sotto il supporto che intrappola i venditori prima che il prezzo inverta al rialzo."
  }},
  { term: "Upthrust", cat: "wyckoff", def: {
    es: "Patrón del método Wyckoff: una falsa ruptura breve por encima de la resistencia que atrapa a los compradores antes de que el precio gire a la baja.",
    en: "A Wyckoff pattern: a brief false breakout above resistance that traps buyers before price reverses downward.",
    fr: "Un motif de la méthode Wyckoff : une brève fausse cassure au-dessus de la résistance qui piège les acheteurs avant que le prix ne se retourne à la baisse.",
    de: "Ein Wyckoff-Muster: ein kurzer Fehlausbruch über den Widerstand, der Käufer in die Falle lockt, bevor der Kurs nach unten dreht.",
    it: "Un pattern del metodo Wyckoff: una breve falsa rottura sopra la resistenza che intrappola gli acquirenti prima che il prezzo inverta al ribasso."
  }},
  { term: "Moving Average", cat: "indicadores", def: {
    es: "Indicador que suaviza el precio calculando su media a lo largo de un periodo determinado, facilitando ver la tendencia.",
    en: "An indicator that smooths price by calculating its average over a given period, making the trend easier to see.",
    fr: "Un indicateur qui lisse le prix en calculant sa moyenne sur une période donnée, facilitant la lecture de la tendance.",
    de: "Ein Indikator, der den Kurs glättet, indem er dessen Durchschnitt über einen bestimmten Zeitraum berechnet und so den Trend besser erkennbar macht.",
    it: "Un indicatore che appiattisce il prezzo calcolandone la media su un determinato periodo, rendendo più facile individuare la tendenza."
  }},
  { term: "RSI", cat: "indicadores", def: {
    es: "El Índice de Fuerza Relativa, un oscilador de momento que mide la velocidad y magnitud de los cambios de precio en una escala de 0 a 100.",
    en: "The Relative Strength Index, a momentum oscillator that measures the speed and magnitude of price changes on a 0–100 scale.",
    fr: "L'indice de force relative, un oscillateur de momentum qui mesure la vitesse et l'ampleur des variations de prix sur une échelle de 0 à 100.",
    de: "Der Relative-Stärke-Index, ein Momentum-Oszillator, der Geschwindigkeit und Ausmaß von Kursänderungen auf einer Skala von 0 bis 100 misst.",
    it: "L'Indice di Forza Relativa, un oscillatore di momentum che misura velocità e ampiezza delle variazioni di prezzo su una scala da 0 a 100."
  }},
  { term: "Bollinger Bands", cat: "indicadores", def: {
    es: "Indicador de volatilidad formado por bandas trazadas a una distancia de desviaciones estándar respecto a una media móvil.",
    en: "A volatility indicator made of bands plotted at a distance of standard deviations from a moving average.",
    fr: "Un indicateur de volatilité formé de bandes tracées à une distance d'écarts-types par rapport à une moyenne mobile.",
    de: "Ein Volatilitätsindikator, bestehend aus Bändern, die im Abstand von Standardabweichungen um einen gleitenden Durchschnitt gezeichnet werden.",
    it: "Un indicatore di volatilità formato da bande tracciate a una distanza di deviazioni standard rispetto a una media mobile."
  }},
  { term: "MACD", cat: "indicadores", def: {
    es: "Indicador de tendencia y momento basado en la relación entre dos medias móviles del precio.",
    en: "A trend-following momentum indicator based on the relationship between two moving averages of price.",
    fr: "Un indicateur de tendance et de momentum basé sur la relation entre deux moyennes mobiles du prix.",
    de: "Ein trendfolgender Momentum-Indikator, der auf der Beziehung zwischen zwei gleitenden Durchschnitten des Kurses basiert.",
    it: "Un indicatore di tendenza e momentum basato sulla relazione tra due medie mobili del prezzo."
  }},
  { term: "Fibonacci Retracement", cat: "indicadores", def: {
    es: "Herramienta que usa ratios de Fibonacci para identificar posibles zonas de soporte o resistencia tras un movimiento de precio.",
    en: "A tool that uses Fibonacci ratios to identify potential support or resistance zones after a price move.",
    fr: "Un outil qui utilise les ratios de Fibonacci pour identifier des zones potentielles de support ou de résistance après un mouvement de prix.",
    de: "Ein Werkzeug, das Fibonacci-Verhältnisse nutzt, um potenzielle Unterstützungs- oder Widerstandszonen nach einer Kursbewegung zu identifizieren.",
    it: "Uno strumento che utilizza i rapporti di Fibonacci per individuare potenziali zone di supporto o resistenza dopo un movimento di prezzo."
  }},
  { term: "Scalping", cat: "scalping", def: {
    es: "Estrategia que consiste en abrir muchas operaciones rápidas y pequeñas para aprovechar movimientos mínimos del precio.",
    en: "A strategy of taking many small, quick trades to profit from minimal price moves.",
    fr: "Une stratégie consistant à ouvrir de nombreuses positions rapides et de petite taille pour profiter de mouvements de prix minimes.",
    de: "Eine Strategie, bei der viele kleine, schnelle Trades eröffnet werden, um von minimalen Kursbewegungen zu profitieren.",
    it: "Una strategia che consiste nell'aprire molte operazioni rapide e di piccola entità per sfruttare movimenti minimi di prezzo."
  }},
  { term: "Swing Trading", cat: "otros", def: {
    es: "Estrategia que mantiene las operaciones abiertas durante días o semanas para capturar movimientos de medio plazo.",
    en: "A strategy of holding trades open for days or weeks to capture medium-term price moves.",
    fr: "Une stratégie qui maintient les positions ouvertes pendant des jours ou des semaines pour capturer des mouvements à moyen terme.",
    de: "Eine Strategie, bei der Positionen über Tage oder Wochen gehalten werden, um mittelfristige Kursbewegungen zu erfassen.",
    it: "Una strategia che mantiene le operazioni aperte per giorni o settimane per catturare movimenti di medio termine."
  }},
  { term: "Day Trading", cat: "otros", def: {
    es: "Estrategia que consiste en abrir y cerrar todas las operaciones dentro del mismo día, sin dejar posiciones abiertas de un día para otro.",
    en: "A strategy of opening and closing all trades within the same day, without leaving positions open overnight.",
    fr: "Une stratégie consistant à ouvrir et clôturer toutes les positions au cours de la même journée, sans laisser de position ouverte du jour au lendemain.",
    de: "Eine Strategie, bei der alle Positionen innerhalb desselben Tages eröffnet und geschlossen werden, ohne sie über Nacht zu halten.",
    it: "Una strategia che consiste nell'aprire e chiudere tutte le operazioni nello stesso giorno, senza lasciare posizioni aperte da un giorno all'altro."
  }},
  { term: "Risk-Reward Ratio", cat: "riesgo", def: {
    es: "La comparación entre la pérdida potencial y la ganancia potencial de una operación, clave para decidir si merece la pena entrar.",
    en: "The comparison between a trade's potential loss and potential gain, key to deciding whether it's worth entering.",
    fr: "La comparaison entre la perte potentielle et le gain potentiel d'une position, essentielle pour décider si elle vaut la peine d'être prise.",
    de: "Der Vergleich zwischen potenziellem Verlust und potenziellem Gewinn eines Trades — entscheidend für die Frage, ob sich der Einstieg lohnt.",
    it: "Il confronto tra la perdita potenziale e il guadagno potenziale di un'operazione, fondamentale per decidere se vale la pena entrare."
  }},
  { term: "FOMO", cat: "psicologia", def: {
    es: "El miedo a perderse un movimiento del mercado, que empuja a entrar en una operación de forma impulsiva y sin plan.",
    en: "The fear of missing out on a market move, which pushes traders to enter a trade impulsively and without a plan.",
    fr: "La peur de manquer un mouvement du marché, qui pousse à entrer en position de manière impulsive et sans plan.",
    de: "Die Angst, eine Marktbewegung zu verpassen, die dazu verleitet, impulsiv und ohne Plan in eine Position einzusteigen.",
    it: "La paura di perdere un movimento di mercato, che spinge a entrare in un'operazione in modo impulsivo e senza un piano."
  }},
  { term: "Overtrading", cat: "psicologia", def: {
    es: "Abrir demasiadas operaciones, normalmente impulsado por la emoción o la impaciencia más que por una estrategia clara.",
    en: "Opening too many trades, usually driven by emotion or impatience rather than a clear strategy.",
    fr: "Ouvrir trop de positions, généralement poussé par l'émotion ou l'impatience plutôt que par une stratégie claire.",
    de: "Zu viele Positionen eröffnen, meist getrieben von Emotionen oder Ungeduld statt einer klaren Strategie.",
    it: "Aprire troppe operazioni, di solito guidati dall'emozione o dall'impazienza più che da una strategia chiara."
  }},
  { term: "Trading Plan", cat: "psicologia", def: {
    es: "Un conjunto de reglas escritas que define la estrategia, la gestión del riesgo y los objetivos de un trader.",
    en: "A written set of rules that defines a trader's strategy, risk management, and objectives.",
    fr: "Un ensemble de règles écrites qui définit la stratégie, la gestion du risque et les objectifs d'un trader.",
    de: "Ein schriftliches Regelwerk, das Strategie, Risikomanagement und Ziele eines Traders festlegt.",
    it: "Un insieme di regole scritte che definisce la strategia, la gestione del rischio e gli obiettivi di un trader."
  }},
  { term: "Head and Shoulders", cat: "patrones", def: {
    es: "Patrón chartista de reversión formado por tres picos, el central más alto (cabeza) que los otros dos (hombros), que anticipa un giro bajista.",
    en: "A reversal chart pattern formed by three peaks, with the middle one (head) higher than the other two (shoulders), signaling a bearish turn.",
    fr: "Un motif chartiste de retournement formé de trois sommets, celui du milieu (tête) plus haut que les deux autres (épaules), annonçant un retournement baissier.",
    de: "Ein Umkehrchartmuster aus drei Hochs, wobei das mittlere (Kopf) höher ist als die beiden anderen (Schultern) — es signalisiert eine bärische Wende.",
    it: "Un pattern chartista di inversione formato da tre picchi, quello centrale (testa) più alto degli altri due (spalle), che anticipa un'inversione ribassista."
  }},
  { term: "Double Top", cat: "patrones", def: {
    es: "Patrón chartista de reversión bajista formado por dos máximos consecutivos a un nivel de precio muy similar.",
    en: "A bearish reversal chart pattern formed by two consecutive highs at a very similar price level.",
    fr: "Un motif chartiste de retournement baissier formé de deux sommets consécutifs à un niveau de prix très similaire.",
    de: "Ein bärisches Umkehrchartmuster aus zwei aufeinanderfolgenden Hochs auf einem sehr ähnlichen Kursniveau.",
    it: "Un pattern chartista di inversione ribassista formato da due massimi consecutivi a un livello di prezzo molto simile."
  }},
  { term: "Double Bottom", cat: "patrones", def: {
    es: "Patrón chartista de reversión alcista formado por dos mínimos consecutivos a un nivel de precio muy similar.",
    en: "A bullish reversal chart pattern formed by two consecutive lows at a very similar price level.",
    fr: "Un motif chartiste de retournement haussier formé de deux creux consécutifs à un niveau de prix très similaire.",
    de: "Ein bullisches Umkehrchartmuster aus zwei aufeinanderfolgenden Tiefs auf einem sehr ähnlichen Kursniveau.",
    it: "Un pattern chartista di inversione rialzista formato da due minimi consecutivi a un livello di prezzo molto simile."
  }},
  { term: "Flag Pattern", cat: "patrones", def: {
    es: "Patrón chartista de continuación: una breve consolidación en forma de canal tras un movimiento fuerte, antes de que el precio siga en la misma dirección.",
    en: "A continuation chart pattern: a brief channel-shaped consolidation after a strong move, before price continues in the same direction.",
    fr: "Un motif chartiste de continuation : une brève consolidation en forme de canal après un mouvement fort, avant que le prix ne poursuive dans la même direction.",
    de: "Ein Fortsetzungschartmuster: eine kurze kanalförmige Konsolidierung nach einer starken Bewegung, bevor sich der Kurs in dieselbe Richtung fortsetzt.",
    it: "Un pattern chartista di continuazione: una breve consolidazione a forma di canale dopo un movimento forte, prima che il prezzo prosegua nella stessa direzione."
  }}
];
