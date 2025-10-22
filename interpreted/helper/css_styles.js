/**
 * @constant {string} rothkoLight
 * @description
 * Contiene uno stile CSS ispirato ai campi di colore di Mark Rothko, con
 * una combinazione di colori caldi e sfumature che richiamano l'arte astratta.
 * 
 * Lo stile definisce:
 * 
 * - Il corpo della pagina con uno sfondo neutro e testo scuro morbido.
 * - Un contenitore principale (div#container) con un colore borgogna scuro,
 *   ombre sfumate e una leggera rotazione per un effetto artistico.
 * - Paragrafi stilizzati con testo leggero e spaziatura ben calibrata.
 * - Un blocco separatore (`p.splitter`) di colore giallo-arancio caldo, con
 *   effetto sfumato e posizionamento asimmetrico.
 * - Elementi in grassetto (`b`) con un colore chiaro e peso leggermente
 *   aumentato per risaltare senza essere invasivi.
 * - Un messaggio finale (`p#message`) stilizzato come didascalia in corsivo
 *   con una linea tratteggiata superiore.
 */
const rothkoLight = `
/* Stile ispirato ai campi di colore di Mark Rothko */

body {
  /* Sfondo come tela esterna neutra */
  background-color: #f0f0f0; /* Grigio chiaro neutro */
  color: #333333; /* Testo scuro per un contrasto morbido */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden; /* Nasconde ogni potenziale scroll bar */
  line-height: 1.6;
}

div#container {
  /* Primo campo di colore: il contenitore principale */
  background-color: #7b241c; /* Un Borgogna/Rosso scuro profondo (il colore dominante) */
  color: #f0f0f0; /* Testo chiaro che "fluttua" sul campo scuro */
  
  padding: 50px;
  width: 80%;
  max-width: 600px;
  height: auto;
  
  /* L'effetto Rothko: bordi sfumati per far "fluttuare" il blocco */
  box-shadow: 
    0 0 150px rgba(123, 36, 28, 0.7), /* Ombra interna morbida del colore principale */
    0 0 100px rgba(123, 36, 28, 0.5); /* Ombra interna più ampia */
  
  border: 1px solid rgba(255, 255, 255, 0.1); /* Bordo sottile e quasi invisibile per definizione */
  box-sizing: border-box;
  
  /* Posizionamento leggermente asimmetrico per un tocco artistico */
  transform: rotate(-0.5deg); 
}

p {
  /* Testo minimalista */
  margin: 15px 0;
  font-size: 1.2em;
  letter-spacing: 0.5px;
  font-weight: 300; /* Leggero per non interrompere la serenità del campo */
}

p.splitter {
  /* Blocco separatore: il secondo campo di colore a contrasto */
  margin: 25px 0;
  height: 10px; 
  background-color: #f39c12; /* Giallo-Arancio caldo e vibrante (il colore contrastante) */
  width: 70%; 
  margin-left: auto; /* Posizionamento asimmetrico a destra */
  margin-right: 0;
  
  /* Anche questo campo deve sembrare sfumato/fluttuante */
  box-shadow: 0 0 15px rgba(243, 156, 18, 0.9);
  border: none;
}

b {
  /* I dati in grassetto hanno un colore leggermente diverso per farli emergere */
  color: #e6e6e6; 
  font-weight: 400;
  display: inline; /* Mantienili sulla stessa linea per una lettura più fluida */
  font-size: 1em;
  margin-left: 5px;
}

p#message {
    /* Messaggio finale come didascalia o pensiero */
    margin-top: 30px;
    font-style: italic;
    font-size: 1.1em;
    padding-top: 10px;
    border-top: 1px dashed rgba(255, 255, 255, 0.3); /* Linea sottile come un segno su tela */
}
`;

/**
 * @constant {string} rothkoDark
 * @description
 * Contiene uno stile CSS ispirato ai campi di colore di Mark Rothko, nella
 * versione a tema scuro.
 * 
 * Lo stile definisce:
 * 
 * - Il corpo della pagina con uno sfondo scuro profondo e testo chiaro morbido.
 * - Un contenitore principale (div#container) con un colore blu-viola intenso,
 *   ombre sfumate e una leggera rotazione per un effetto artistico.
 * - Paragrafi con testo leggero e spaziatura ben calibrata.
 * - Un blocco separatore (`p.splitter`) arancione bruciato saturo, posizionato
 *   asimmetricamente a sinistra, con effetto sfumato.
 * - Elementi in grassetto (`b`) con un colore arancio/crema chiaro per
 *   risaltare delicatamente.
 * - Un messaggio finale (`p#message`) stilizzato come didascalia in corsivo
 *   con una linea tratteggiata superiore più evidente.
 */
const rothkoDark = `
/* Stile ispirato ai campi di colore di Mark Rothko - Tema Scuro */

body {
  /* Sfondo scuro che funge da tela esterna e oscura */
  background-color: #1a1a1a; /* Nero/Antracite profondo */
  color: #e0e0e0; /* Testo chiaro e morbido */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
  line-height: 1.6;
}

div#container {
  /* Primo campo di colore: il contenitore principale, molto scuro */
  background-color: #311b92; /* Blu-Viola intenso e profondo */
  color: #f5f5f5; /* Testo quasi bianco per forte contrasto di luce */
  
  padding: 50px;
  width: 80%;
  max-width: 600px;
  height: auto;
  
  /* L'effetto Rothko: bordi sfumati che si fondono nello sfondo scuro */
  box-shadow: 
    0 0 180px rgba(49, 27, 146, 0.8), /* Ombra interna morbida del colore principale */
    0 0 120px rgba(49, 27, 146, 0.6); 
  
  border: 1px solid rgba(255, 255, 255, 0.2); /* Bordo di definizione sottile */
  box-sizing: border-box;
  
  /* Tocco artistico */
  transform: rotate(0.5deg); 
}

p {
  /* Testo minimalista */
  margin: 15px 0;
  font-size: 1.2em;
  letter-spacing: 0.5px;
  font-weight: 300;
}

p.splitter {
  /* Blocco separatore: il secondo campo di colore caldo e contrastante */
  margin: 25px 0;
  height: 10px; 
  background-color: #ff5722; /* Arancio bruciato saturo (complementare al blu-viola) */
  width: 70%; 
  margin-left: 0; /* Posizionamento asimmetrico a sinistra */
  margin-right: auto;
  
  /* Sfumatura del campo contrastante */
  box-shadow: 0 0 20px rgba(255, 87, 34, 1);
  border: none;
}

b {
  /* I dati in grassetto emergono con un colore chiaro */
  color: #ffe0b2; /* Tonalità Arancio/Crema molto chiara */
  font-weight: 400;
  display: inline;
  font-size: 1em;
  margin-left: 5px;
}

p#message {
    /* Messaggio finale */
    margin-top: 30px;
    font-style: italic;
    font-size: 1.1em;
    padding-top: 10px;
    border-top: 1px dashed rgba(255, 255, 255, 0.5); 
}
`;

/**
 * @constant {string} rothkoDarkSimple
 * @description
 * Contiene uno stile CSS ispirato a un tema scuro semplice con sfumature
 * morbide e gradienti, mantenendo un'atmosfera elegante e minimale ispirata
 * a Mark Rothko.
 * 
 * Lo stile definisce:
 * 
 * - Resetta margini, padding e box-sizing per tutti gli elementi.
 * - Il corpo della pagina con un gradiente verticale scuro, centrando il
 *   contenuto con flexbox.
 * - Un contenitore principale (div#container) con un gradiente diagonale
 *   scuro, padding generoso, bordi arrotondati e ombre delicate, per un
 *   effetto tridimensionale.
 * - Paragrafi con testo chiaro, dimensione e spaziatura ben bilanciate.
 * - Un messaggio finale (`p#message`) separato con una linea sottile, colore
 *   più tenue e font leggermente più piccolo.
 * - Elementi in grassetto (`b`) con colore chiaro, peso medio-alto, dimensione
 *   maggiore e un'ombra testo per farli risaltare delicatamente.
 */
const rothkoDarkSimple = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(180deg, 
    #1a0f1f 0%, 
    #2d1b3d 30%, 
    #3d2347 50%, 
    #2d1b3d 70%, 
    #1a0f1f 100%);
  padding: 20px;
}

div#container {
  background: linear-gradient(135deg,
    rgba(45, 27, 61, 0.9) 0%,
    rgba(61, 35, 71, 0.85) 50%,
    rgba(45, 27, 61, 0.9) 100%);
  padding: 60px 80px;
  border-radius: 4px;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  max-width: 600px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

p {
  color: #e8e0ef;
  font-size: 18px;
  line-height: 2;
  letter-spacing: 0.3px;
  margin-bottom: 16px;
}

p#message {
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  color: #d4c5e0;
  font-size: 16px;
  line-height: 1.6;
}

b {
  color: #f5f0fa;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
`;

/**
 * @constant {string} bauhaus
 * @description
 * Contiene uno stile CSS ispirato al design Bauhaus in modalità dark.
 * 
 * Lo stile definisce:
 * 
 * - Il corpo della pagina con sfondo scuro e testo chiaro, centrando il
 *   contenuto con flexbox.
 * - Un contenitore principale (div#container) con sfondo grigio scuro, bordo
 *   bianco spesso e ombra netta spostata, che richiama la geometria e la
 *   pulizia Bauhaus.
 * - Paragrafi con testo maiuscolo, spaziatura tra le lettere e dimensione
 *   leggermente maggiore per un aspetto tecnico.
 * - Un separatore (`p.splitter`) come linea sottile rossa, metà larghezza, a
 *   richiamare i colori primari Bauhaus.
 * - Testo in grassetto (`b`) ciano brillante, visualizzato su blocco e con
 *   dimensioni maggiorate per enfatizzare i dati.
 * - Un messaggio finale (`p#message`) in corsivo, con bordo verde laterale
 *   come accento e padding interno.
 */
const bauhaus = `
/* Stili Bauhaus Dark Mode */
body {
  /* Sfondo scuro per il tema dark */
  background-color: #1e1e1e; /* Grigio scuro quasi nero */
  color: #f0f0f0; /* Testo chiaro */
  /* Font di sistema sans-serif pulito, conforme allo spirito Bauhaus di funzionalità */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Centra il contenuto verticalmente */
}

div#container {
  /* Contenitore principale */
  background-color: #2c2c2c; /* Tonalità di grigio leggermente più chiara per il pannello */
  padding: 40px;
  width: 80%;
  max-width: 500px;
  box-shadow: 10px 10px 0px #000000; /* Ombra netta e spostata, un tocco di 'separazione' e geometricità */
  border: 3px solid #f0f0f0; /* Bordo sottile e contrastante */
  box-sizing: border-box;
  line-height: 1.4;
  /* Linee e angoli puliti */
}

p {
  /* Stile paragrafo base */
  margin: 10px 0;
  font-size: 1.1em;
  text-transform: uppercase; /* Spesso usato per dare un aspetto "tecnico" */
  letter-spacing: 1px;
}

p.splitter {
  /* Rimuove il margine dal paragrafo vuoto (se usato come separatore) */
  margin: 0;
  height: 2px; /* Aggiunge una linea sottile come separatore geometrico */
  background-color: #ff0000; /* Un tocco di colore primario (rosso) per enfasi Bauhaus */
  width: 50%; /* Linea non a tutta larghezza */
}

b {
  /* Testo in grassetto (i placeholder di dati) */
  color: #00ffff; /* Colore ciano brillante, un altro colore "primario/tecnico" a contrasto */
  font-weight: 700;
  display: block; /* Sposta i valori su una nuova linea per maggiore pulizia */
  font-size: 1.2em;
  margin-top: 2px;
}

p#message {
    /* Messaggio finale */
    margin-top: 20px;
    font-style: italic;
    text-transform: none;
    letter-spacing: normal;
    font-size: 1em;
    border-left: 5px solid #00ff00; /* Bordo laterale come accento */
    padding-left: 10px;
}
`;

/**
 * @constant {string} vedovaDark
 * @description
 * Stile CSS ispirato all'artista Emilio Vedova, tema dark.
 * 
 * Caratteristiche principali:
 * 
 * - Corpo della pagina con sfondo scuro e texture a strisce diagonali sottili
 *   in rosso e bianco, che richiamano l’espressionismo astratto di Vedova.
 * - Effetto decorativo con pseudo-elemento ::before sul body, con gradienti
 *   rossi e bianchi inclinati.
 * - Contenitore principale (div#container) con sfondo sfumato scuro, bordi
 *   rossi e bianchi sottili, ombre e una leggera rotazione per dinamismo.
 * - Pseudo-elementi ::before e ::after sul contenitore per aggiungere forme
 *   geometriche trasparenti e linee inclinate, richiamando la complessità
 *   compositiva di Vedova.
 * - Paragrafi con testo chiaro, spaziatura e leggero movimento orizzontale
 *   alternato per un effetto vibrante.
 * - Messaggio finale (p#message) con bordo superiore rosso scuro, stile
 *   corsivo e colori più tenui.
 * - Elementi in grassetto (b) con testo bianco, maiuscolo, con ombre di testo
 *   rosse e nere per profondità e impatto visivo.
 */
const vedovaDark = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: 
    linear-gradient(45deg, transparent 30%, rgba(255, 0, 0, 0.03) 30%, rgba(255, 0, 0, 0.03) 35%, transparent 35%),
    linear-gradient(-45deg, transparent 60%, rgba(255, 255, 255, 0.02) 60%, rgba(255, 255, 255, 0.02) 65%, transparent 65%),
    linear-gradient(120deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
  background-size: 200px 200px, 150px 150px, 100% 100%;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

body::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: 
    linear-gradient(60deg, transparent 40%, rgba(200, 0, 0, 0.08) 40%, rgba(200, 0, 0, 0.08) 42%, transparent 42%),
    linear-gradient(-30deg, transparent 70%, rgba(255, 255, 255, 0.03) 70%, rgba(255, 255, 255, 0.03) 72%, transparent 72%);
  transform: rotate(15deg);
  pointer-events: none;
}

div#container {
  background: linear-gradient(135deg,
    rgba(20, 20, 20, 0.95) 0%,
    rgba(30, 25, 25, 0.92) 100%);
  padding: 50px 70px;
  border-radius: 2px;
  box-shadow: 
    -8px -8px 0 rgba(180, 0, 0, 0.15),
    8px 8px 0 rgba(0, 0, 0, 0.3),
    0 0 60px rgba(0, 0, 0, 0.7);
  max-width: 600px;
  width: 100%;
  border-left: 4px solid rgba(200, 0, 0, 0.3);
  border-top: 2px solid rgba(255, 255, 255, 0.08);
  position: relative;
  transform: rotate(-0.5deg);
}

div::before {
  content: '';
  position: absolute;
  top: 10px;
  right: 10px;
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, transparent, rgba(200, 0, 0, 0.1));
  transform: rotate(45deg);
  pointer-events: none;
}

div::after {
  content: '';
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.2), transparent);
  transform: rotate(-15deg);
  pointer-events: none;
}

p {
  color: #e8e8e8;
  font-size: 18px;
  line-height: 2;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
  position: relative;
  transform: translateX(0);
  transition: transform 0.3s ease;
}

p:nth-child(odd) {
  transform: translateX(2px);
}

p:nth-child(even) {
  transform: translateX(-2px);
}

p#message {
  margin-top: 35px;
  padding-top: 35px;
  border-top: 2px solid rgba(200, 0, 0, 0.6);
  color: #d0d0d0;
  font-size: 16px;
  line-height: 1.6;
  font-style: italic;
}

b {
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 1px;
  text-shadow: 
    2px 2px 0 rgba(180, 0, 0, 0.3),
    -1px -1px 0 rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
}
`;

/**
 * @constant {string} fontana
 * @description
 * Stile CSS ispirato a Lucio Fontana, in particolare alla sua serie "Concetti
 * spaziali".
 * 
 * Il design evoca l’intervento materico e spaziale tipico delle opere tagliate
 * di Fontana, attraverso giochi di luce, profondità, gradienti e un “taglio
 * visivo” centrale.
 * 
 * Caratteristiche principali:
 * 
 * - **Body**: sfondo animato in gradienti profondi e oscuri con animazione
 *   `mysticalShift`, simula una superficie spaziale viva e dinamica.
 * - **Effetti di luce**: pseudo-elemento `body::before` con gradienti radiali
 *   in movimento (animazione `rotate`) richiama i riflessi e le luci filtrate
 *   attraverso lo spazio tagliato.
 * - **Contenitore principale (`#container`)**: pannello centrale con effetto
 *   vetro (blur), ombre colorate viola e bordo sottile ispirato alla luce che
 *   fuoriesce dal taglio.
 * - **Elemento decorativo centrale (`#container::before`)**: sottile linea
 *   verticale colorata e animata (`slashPulse`), simbolico "taglio" spaziale
 *   al centro del blocco, in riferimento diretto ai famosi squarci di Fontana.
 * - **Tipografia**: tag stilizzati con colori fluo, luci soffuse e testo
 *   evidenziato.
 * - **Divider (`.splitter`)**: riga luminosa centrale, decorativa e
 *   atmosferica.
 * - **Messaggio finale (`#message`)**: testo chiaro con ombre nere e
 *   leggerezza visiva, evocando il contrasto tra materia e vuoto.
 * 
 * Il risultato è un’interfaccia visiva astratta, tridimensionale e
 * contemplativa.
 */
const fontana = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif;
  background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 25%, #16213e 50%, #0f1419 75%, #050508 100%);
  background-size: 400% 400%;
  animation: mysticalShift 20s ease infinite;
  position: relative;
  overflow: hidden;
}

body::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: 
    radial-gradient(circle at 20% 50%, rgba(139, 0, 139, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(25, 25, 112, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 40% 20%, rgba(72, 61, 139, 0.1) 0%, transparent 40%);
  animation: rotate 40s linear infinite;
}

@keyframes mysticalShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

#container {
  background: rgba(10, 10, 20, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 2px;
  padding: 3rem 4rem;
  max-width: 600px;
  position: relative;
  box-shadow: 
    0 0 60px rgba(139, 92, 246, 0.2),
    0 0 100px rgba(88, 28, 135, 0.15),
    inset 0 0 80px rgba(0, 0, 0, 0.5);
  z-index: 1;
}

#container::before {
  content: '';
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 60%;
  background: linear-gradient(180deg, 
    transparent 0%, 
    rgba(199, 0, 57, 0.8) 20%, 
    rgba(139, 0, 139, 0.9) 50%, 
    rgba(75, 0, 130, 0.8) 80%, 
    transparent 100%);
  box-shadow: 
    0 0 20px rgba(199, 0, 57, 0.6),
    0 0 40px rgba(139, 0, 139, 0.4);
  animation: slashPulse 3s ease-in-out infinite;
}

@keyframes slashPulse {
  0%, 100% { opacity: 0.6; filter: blur(1px); }
  50% { opacity: 1; filter: blur(0px); }
}

.tag {
  color: #a78bfa;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
  text-shadow: 0 0 10px rgba(167, 139, 250, 0.5);
}

.tag b {
  color: #e9d5ff;
  font-weight: 600;
  text-shadow: 0 0 15px rgba(233, 213, 255, 0.6);
}

.splitter {
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(139, 92, 246, 0.5) 50%, 
    transparent 100%);
  margin: 2rem 0;
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.3);
}

#message {
  color: #f3e8ff;
  font-size: 1.1rem;
  line-height: 1.7;
  font-weight: 300;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  letter-spacing: 0.3px;
}
`;

/**
 * @constant {string} schieleLight
 * @description
 * Stile CSS ispirato all’estetica e ai colori drammatici di **Egon Schiele**,
 * in una versione "light".
 * 
 * Lo stile evoca i toni terrosi, i contrasti netti e il senso di inquietudine
 * delle opere di Schiele, trasportandoli in una composizione visiva per il web
 * dal forte impatto atmosferico e cromatico.
 * 
 * Caratteristiche principali:
 * 
 * - **Body**: sfondo animato con toni caldi e intensi (ocra, terra di Siena,
 *   rame), che ricreano il senso materico e vibrante delle tele di Schiele.
 *   Pattern diagonali semitrasparenti sovrapposti richiamano la pennellata
 *   grezza e stratificata.
 * 
 * - **Contenitore (`#container`)**:
 *   - Base scura a contrasto, con riflessi interni e ombre dorate.
 *   - Animazione "pulse" per un leggero respiro visivo, come una figura tesa
 *     pronta a muoversi.
 *   - Contorno multiplo dorato/bronzo, che riflette la raffinatezza decorativa
 *     di certi dettagli klimtiani (da cui Schiele ha tratto ispirazione, pur
 *     distanziandosene).
 * 
 * - **Decorazioni**:
 *   - `#container::before`: cornice sfumata e animata che ruota lentamente,
 *     suggerendo instabilità o tensione.
 *   - `.splitter`: linea divisoria con sfumature rosso oro, drammatica e
 *     teatrale.
 * 
 * - **Tipografia**:
 *   - `.tag`: maiuscole, ombreggiate, colori oro/arancio con accenti rosso
 *     sangue.
 *   - `#message`: testo chiaro con ombre forti, per evocare drammaticità e
 *     introspezione.
 * 
 * Esteticamente, il tema si posiziona tra eleganza decadente e tensione
 * emotiva, in linea con il linguaggio pittorico e psicologico tipico
 * dell'opera di Egon Schiele.
 */
const schieleLight = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, 
    #8B4513 0%, 
    #CD853F 15%, 
    #D2691E 30%, 
    #8B4513 45%,
    #A0522D 60%,
    #CD853F 75%,
    #8B4513 100%);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
  position: relative;
  overflow: hidden;
}

body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(139, 0, 0, 0.1) 35px, rgba(139, 0, 0, 0.1) 70px),
    repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(218, 165, 32, 0.08) 35px, rgba(218, 165, 32, 0.08) 70px);
  pointer-events: none;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

#container {
  background: linear-gradient(165deg, #2C1810 0%, #1a0f0a 50%, #3d2419 100%);
  padding: 40px 50px;
  border-radius: 3px;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 0 0 3px #8B4513,
    0 0 0 6px #DAA520;
  max-width: 600px;
  position: relative;
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}

.tag {
  color: #FFD700;
  font-size: 16px;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.tag b {
  color: #FFA500;
  font-weight: 700;
  text-shadow: 
    2px 2px 0 rgba(139, 0, 0, 0.5),
    -1px -1px 0 rgba(255, 215, 0, 0.3);
}

.splitter {
  height: 3px;
  background: linear-gradient(90deg, #8B0000, #DAA520, #8B0000);
  margin: 25px 0;
  box-shadow: 0 2px 8px rgba(218, 165, 32, 0.5);
}

#message {
  color: #FFDEAD;
  font-size: 20px;
  line-height: 1.6;
  font-weight: 500;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.9);
  letter-spacing: 0.5px;
}

#container::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #8B0000, #DAA520, #CD853F, #8B4513);
  border-radius: 3px;
  z-index: -1;
  opacity: 0.6;
  filter: blur(8px);
  animation: rotate 6s linear infinite;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

/**
 * @constant {string} schieleDark
 * @description
 * Tema CSS dark ispirato a **Egon Schiele**, dove l'espressività tormentata e
 * i contrasti cromatici diventano un’interfaccia digitale. La palette
 * notturna, le sfumature viola e le texture diagonali evocano le tensioni
 * psicologiche e le deformazioni espressive della pittura schieleana,
 * trasposte nel contesto visivo di una UI moderna e dinamica.
 * 
 * Caratteristiche principali:
 * 
 * - **Sfondo del body**:
 *   - Griglia diagonale animata in toni freddi e cupi (blu notte, viola, nero
 *     profondo).
 *   - Gradiente pulsante e texture incrociate richiamano i fondali spezzati e
 *     gli spazi instabili dei ritratti di Schiele.
 * 
 * - **Contenitore (`#container`)**:
 *   - Combinazione di gradienti verticali in blu profondo e nero.
 *   - Ombre intense con animazione "pulse" che simula il respiro emotivo delle
 *     figure schieleane.
 *   - Bordatura fluorescente ispirata ai contorni vibranti e taglienti dei
 *     corpi nelle sue opere.
 * 
 * - **Tipografia (`.tag`, `#message`)**:
 *   - Toni violetti luminosi su fondo scuro, con ombre accentuate.
 *   - Lettere maiuscole, spaziatura ampia e peso marcato: evocano urgenza,
 *     disagio e controllo formale.
 * 
 * - **Divider animato (`.splitter`)**:
 *   - Linea centrale con animazione "slide" che percorre la superficie come
 *     una fenditura luminosa.
 *   - Sottolinea la tensione e il dinamismo tipici della composizione
 *     schieleana.
 * 
 * - **Cornice (`#container::before`)**:
 *   - Bagliore viola fluttuante e sfocato, animato in rotazione lenta.
 *   - Ricorda l'alone emotivo e psicologico che avvolge le figure in molte
 *     opere dell’artista.
 * 
 * Questo tema comunica introspezione, tensione e presenza, interpretando la
 * poetica di Schiele con un’estetica dark digitalizzata e suggestiva.
 */
const schieleDark = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, 
    #0a0a0a 0%, 
    #1a1a2e 15%, 
    #16213e 30%, 
    #0f0f23 45%,
    #1a1a2e 60%,
    #0a0a0a 100%);
  background-size: 400% 400%;
  animation: gradientShift 10s ease infinite;
  position: relative;
  overflow: hidden;
}

body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(99, 102, 241, 0.03) 40px, rgba(99, 102, 241, 0.03) 80px),
    repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(139, 92, 246, 0.02) 40px, rgba(139, 92, 246, 0.02) 80px);
  pointer-events: none;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

#container {
  background: linear-gradient(165deg, #0f0f23 0%, #050505 50%, #1a1a2e 100%);
  padding: 40px 50px;
  border-radius: 12px;
  box-shadow: 
    0 25px 70px rgba(0, 0, 0, 0.8),
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 0 0 1px rgba(99, 102, 241, 0.3),
    0 0 40px rgba(99, 102, 241, 0.2);
  max-width: 600px;
  position: relative;
  animation: pulse 4s ease-in-out infinite;
  border: 1px solid rgba(139, 92, 246, 0.2);
}

@keyframes pulse {
  0%, 100% { transform: scale(1); box-shadow: 0 25px 70px rgba(0, 0, 0, 0.8), 0 0 40px rgba(99, 102, 241, 0.2); }
  50% { transform: scale(1.015); box-shadow: 0 30px 80px rgba(0, 0, 0, 0.9), 0 0 60px rgba(139, 92, 246, 0.4); }
}

.tag {
  color: #a78bfa;
  font-size: 16px;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-shadow: 0 0 20px rgba(167, 139, 250, 0.5);
}

.tag b {
  color: #c4b5fd;
  font-weight: 700;
  text-shadow: 
    0 0 10px rgba(196, 181, 253, 0.8),
    0 0 20px rgba(139, 92, 246, 0.4);
}

.splitter {
  height: 2px;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(139, 92, 246, 0.6) 20%, 
    rgba(99, 102, 241, 0.8) 50%, 
    rgba(139, 92, 246, 0.6) 80%, 
    transparent);
  margin: 25px 0;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
  position: relative;
}

.splitter::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(99, 102, 241, 0.8), 
    transparent);
  animation: slide 3s ease-in-out infinite;
}

@keyframes slide {
  0%, 100% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
}

#message {
  color: #e0e7ff;
  font-size: 20px;
  line-height: 1.6;
  font-weight: 500;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
  letter-spacing: 0.5px;
}

#container::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  background: linear-gradient(45deg, 
    #6366f1, 
    #8b5cf6, 
    #a855f7, 
    #6366f1);
  border-radius: 12px;
  z-index: -1;
  opacity: 0.3;
  filter: blur(15px);
  animation: rotate 8s linear infinite;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

/**
 * @constant {string} michel
 * @description
 * Tema CSS che evoca l'estetica del Rinascimento italiano, ispirato all'opera
 * e allo spirito di **Michelangelo Buonarroti**. I toni terrosi, dorati e
 * marmorei richiamano gli affreschi della Cappella Sistina e le sculture
 * monumentali del maestro, mentre le animazioni lente e solenni conferiscono
 * un senso di maestosità classica.
 *
 * Caratteristiche principali:
 *
 * - **Body**:
 *   - Gradiente caldo e brunito che richiama la patina delle antiche superfici
 *     pittoriche.
 *   - Texture radiali leggere e sfumate che ricordano il chiaroscuro del
 *     Buonarroti.
 *   - Animazione "mysticalGradient" lenta e cerimoniale.
 *
 * - **Contenitore (`#container`)**:
 *   - Combinazione di marroni profondi e ombre dorate, simili a legno antico o
 *     bronzo brunito.
 *   - Bordo dorato semitrasparente, incorniciato da un bagliore animato che
 *     trasmette un'aura di sacralità.
 *   - Effetto "glassato" con blur delicato, che richiama la perfezione liscia
 *     del marmo scolpito.
 *
 * - **Testo (`.tag`, `#message`)**:
 *   - Tipografia serif classica, in toni sabbia e oro pallido.
 *   - Text-shadow profondo per enfatizzare tridimensionalità e luce ambientale.
 *   - Il messaggio centrale è in *corsivo*, evocando l’eleganza della
 *     scrittura umanistica.
 *
 * - **Splitter**:
 *   - Linea orizzontale dorata sfumata, come incisione ornamentale su un
 *     monumento.
 *   - Glow dorato che rafforza la separazione visiva con grazia.
 *
 * - **Cornice (`#container::before`)**:
 *   - Glow rotante in trasparenza dorata che pulsa come una luce sacra attorno
 *     a un’opera divina.
 *
 * Questo stile riflette la grandezza monumentale e la tensione interiore
 * tipica di Michelangelo, fondendo classicismo, spiritualità e potenza formale
 * con sensibilità rinascimentale.
 */
const michel = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Georgia, 'Times New Roman', serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(135deg, 
    #2c1810 0%, 
    #4a2c1a 25%, 
    #6b4423 50%, 
    #3d2817 75%, 
    #1a0f08 100%);
  background-size: 400% 400%;
  animation: mysticalGradient 15s ease infinite;
  position: relative;
  overflow: hidden;
}

body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(184, 134, 11, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(139, 69, 19, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(205, 133, 63, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

@keyframes mysticalGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

#container {
  background: linear-gradient(165deg, 
    rgba(101, 67, 33, 0.95) 0%, 
    rgba(72, 45, 25, 0.97) 50%, 
    rgba(51, 34, 19, 0.95) 100%);
  border: 3px solid rgba(218, 165, 32, 0.6);
  border-radius: 15px;
  padding: 40px 50px;
  max-width: 600px;
  width: 100%;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.7),
    inset 0 1px 0 rgba(255, 215, 0, 0.2),
    0 0 80px rgba(184, 134, 11, 0.3);
  position: relative;
  backdrop-filter: blur(10px);
}

#container::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, 
    transparent, 
    rgba(218, 165, 32, 0.3), 
    transparent);
  border-radius: 15px;
  z-index: -1;
  animation: borderGlow 3s ease-in-out infinite;
}

@keyframes borderGlow {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

.tag {
  color: #f5deb3;
  font-size: 16px;
  margin-bottom: 12px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  letter-spacing: 0.5px;
}

.tag b {
  color: #ffd700;
  font-weight: bold;
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.9),
    0 0 10px rgba(255, 215, 0, 0.5);
}

.splitter {
  height: 2px;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(218, 165, 32, 0.8) 20%, 
    rgba(218, 165, 32, 0.8) 80%, 
    transparent);
  margin: 25px 0;
  box-shadow: 0 0 10px rgba(218, 165, 32, 0.5);
}

#message {
  color: #ffe4b5;
  font-size: 20px;
  line-height: 1.6;
  text-align: center;
  font-style: italic;
  text-shadow: 
    2px 2px 6px rgba(0, 0, 0, 0.9),
    0 0 15px rgba(255, 215, 0, 0.3);
  font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
}
`

/**
 * @constant {string} warholLight
 * @description
 * Tema ispirato a **Andy Warhol**, con una palette cromatica vivace e
 * contrastata che richiama la Pop Art americana. Lo sfondo dinamico e i colori
 * saturi omaggiano l’uso della serigrafia e del colore piatto e ripetuto. Il
 * layout è stato reso più leggibile, mantenendo una forte identità visiva.
 *
 * - Font principale: 'Impact', per evocare titoli audaci e pubblicitari.
 * - Colori fluo: rosa shocking, giallo evidenziatore, ciano e magenta per
 *   rievocare le tinte CMYK.
 * - Bordature nere e pattern ripetuti: stile fumetto e poster pop anni '60.
 * - Migliorata la leggibilità del testo (meno rotazioni, meno effetto 'mosso').
 * - Effetti visivi decisi ma leggibili, pensati per un impatto visivo forte ma
 *   accessibile.
 */
const warholLight = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Impact', 'Arial Black', 'Helvetica Neue', Arial, sans-serif;
  background: linear-gradient(135deg, #ff006e 0%, #ffbe0b 25%, #fb5607 50%, #8338ec 75%, #3a86ff 100%);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

#container {
  background: repeating-linear-gradient(
    45deg,
    #ffff00,
    #ffff00 10px,
    #ff1493 10px,
    #ff1493 20px,
    #00ffff 20px,
    #00ffff 30px,
    #ff00ff 30px,
    #ff00ff 40px
  );
  border: 8px solid #000;
  box-shadow: 
    0 0 0 4px #fff,
    0 0 0 8px #000,
    12px 12px 0 0 rgba(0, 0, 0, 0.4);
  padding: 40px;
  max-width: 600px;
  width: 100%;
  position: relative;
  border-radius: 2px;
}

#container::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background: rgba(255, 255, 255, 0.92);
  z-index: 1;
}

#container > * {
  position: relative;
  z-index: 2;
}

.tag {
  font-size: 22px;
  font-weight: 900;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-shadow: 
    2px 2px 0 #00ffff,
    -2px -2px 0 #ff00ff,
    1px -1px 0 #ffff00;
  color: #000;
}

#title b {
  color: #ff006e;
}

#artist b {
  color: #8338ec;
}

#album b {
  color: #fb5607;
}

.splitter {
  height: 6px;
  background: repeating-linear-gradient(
    90deg,
    #000 0px,
    #000 20px,
    #fff 20px,
    #fff 40px
  );
  margin: 25px 0;
  border: 3px solid #000;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

#message {
  font-family: 'Courier New', Courier, monospace;
  font-size: 18px;
  line-height: 1.7;
  color: #000;
  font-weight: bold;
  background: linear-gradient(90deg, 
    rgba(255,0,110,0.2) 0%, 
    rgba(251,86,7,0.2) 33%, 
    rgba(131,56,236,0.2) 66%, 
    rgba(58,134,255,0.2) 100%);
  padding: 20px;
  border: 4px dashed #000;
  text-shadow: 1px 1px 0 #fff;
  border-radius: 4px;
}

b {
  font-weight: 900;
}
`;

/**
 * @constant {string} warholDark
 * @description
 * Tema ispirato ad **Andy Warhol** nella versione dark, con una palette di
 * colori al neon su fondo scuro, richiamando l’estetica Pop Art con contrasti
 * forti e colori saturi.
 * 
 * Caratteristiche principali:
 * 
 * - Font 'Impact' e simili per titoli forti e decisi.
 * - Sfondo animato a gradienti viola/blu scuri.
 * - Contenitore con pattern a righe diagonali colorate neon.
 * - Testi con ombre colorate, ma attenuate per maggiore leggibilità.
 * - Rimosso l'effetto di rotazione per evitare distorsione e migliorare la
 *   fruibilità.
 */
const warholDark = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Impact', 'Arial Black', 'Helvetica Neue', Arial, sans-serif;
  background: linear-gradient(135deg, #1a0033 0%, #330066 25%, #660099 50%, #4d0080 75%, #1a0033 100%);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

#container {
  background: repeating-linear-gradient(
    45deg,
    #ff00ff,
    #ff00ff 10px,
    #00ffff 10px,
    #00ffff 20px,
    #ffff00 20px,
    #ffff00 30px,
    #ff0066 30px,
    #ff0066 40px
  );
  border: 8px solid #00ff00;
  box-shadow: 
    0 0 0 4px #000,
    0 0 0 8px #ff00ff,
    10px 10px 0 0 rgba(255, 0, 255, 0.4),
    0 0 25px rgba(0, 255, 255, 0.5);
  padding: 40px;
  max-width: 600px;
  width: 100%;
  position: relative;
  border-radius: 3px;
  /* transform: rotate(-1deg); */ /* rimosso per migliore leggibilità */
}

#container::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background: #0a0a0a;
  z-index: 1;
  border-radius: 2px;
}

#container > * {
  position: relative;
  z-index: 2;
}

.tag {
  font-size: 22px;
  font-weight: 900;
  margin-bottom: 14px;
  text-transform: uppercase;
  letter-spacing: 1.7px;
  text-shadow: 
    2px 2px 0 #00ffff,
    -1.5px -1.5px 0 #ff00ff,
    1.5px -1.5px 0 #ffff00,
    0 0 8px rgba(255, 0, 255, 0.7);
  color: #fff;
}

#title b {
  color: #ff0080;
  text-shadow: 0 0 15px #ff0080;
}

#artist b {
  color: #00ffff;
  text-shadow: 0 0 15px #00ffff;
}

#album b {
  color: #ffff00;
  text-shadow: 0 0 15px #ffff00;
}

.splitter {
  height: 6px;
  background: repeating-linear-gradient(
    90deg,
    #ff00ff 0px,
    #ff00ff 20px,
    #00ffff 20px,
    #00ffff 40px
  );
  margin: 25px 0;
  border: 3px solid #00ff00;
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.6);
  border-radius: 3px;
}

#message {
  font-family: 'Courier New', 'Courier', monospace;
  font-size: 18px;
  line-height: 1.7;
  color: #fff;
  font-weight: bold;
  background: linear-gradient(90deg, 
    rgba(255,0,128,0.25) 0%, 
    rgba(0,255,255,0.25) 33%, 
    rgba(255,255,0,0.25) 66%, 
    rgba(255,0,255,0.25) 100%);
  padding: 20px;
  border: 4px dashed #00ff00;
  text-shadow: 
    1px 1px 0 #000,
    0 0 8px rgba(0, 255, 255, 0.7);
  border-radius: 4px;
}

b {
  font-weight: 900;
}
`;

module.exports = {
  rothkoLight,
  rothkoDark,
  rothkoDarkSimple,
  bauhaus,
  vedovaDark,
  fontana,
  schieleLight,
  schieleDark,
  michel,
  warholLight,
  warholDark
}
