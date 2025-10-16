const rothkoLightStyle = `
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

    div {
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

    p:nth-child(4) {
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

    p:last-child {
        /* Messaggio finale come didascalia o pensiero */
        margin-top: 30px;
        font-style: italic;
        font-size: 1.1em;
        padding-top: 10px;
        border-top: 1px dashed rgba(255, 255, 255, 0.3); /* Linea sottile come un segno su tela */
    }
`

const rothkoDarkStyle = `
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

    div {
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

    p:nth-child(4) {
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

    p:last-child {
        /* Messaggio finale */
        margin-top: 30px;
        font-style: italic;
        font-size: 1.1em;
        padding-top: 10px;
        border-top: 1px dashed rgba(255, 255, 255, 0.5); 
    }
`
const bauhausStyle = `
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

    div {
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

    p:nth-child(4) {
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

    p:last-child {
        /* Messaggio finale */
        margin-top: 20px;
        font-style: italic;
        text-transform: none;
        letter-spacing: normal;
        font-size: 1em;
        border-left: 5px solid #00ff00; /* Bordo laterale come accento */
        padding-left: 10px;
    }
`

module.exports = {
  rothkoLightStyle,
  rothkoDarkStyle,
  bauhausStyle
}