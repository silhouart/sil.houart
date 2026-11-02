# SA · sil.houart — Sito completo (v1.2)

Apri `index.html` nel browser. Pagine: home, opere (con filtri Disponibili / Non in vendita / Studi / Tutte), scheda opera, collezionisti (+FAQ), commissioni, chi sono, contatti, privacy, 404.

## Aggiungere un quadro
Apri `js/site.js` e copia un blocco in `OPERE`. Cambia `stato` ('disponibile', 'non-in-vendita', 'venduta') e `tipo` ('originale' o 'studio'). Metti la foto in `img/`. Una riga di dati aggiorna griglia, filtri, home e scheda opera.
Nota per lo sviluppatore: la scheda opera è generata via JavaScript; per il SEO si può pre-renderizzare una pagina per opera.

## Cose da completare (cerca TODO nei file)
Bio e statement, misure e titoli, prezzi, politica di reso e spedizione, modalità di pagamento, video del processo, testimonianza, mostre, form (Formspree o simili), newsletter (Brevo, Mailchimp...), privacy e cookie (GDPR).

## Strategie di marketing già impostate
- Tre stati per ogni opera (disponibile, non in vendita, in collezione privata): le vendute restano online come prova sociale.
- "Studi": piccoli originali come primo acquisto, in stile degli studi ad occhio venduti online da altri pittori figurativi.
- Pagina Collezionisti con condizioni chiare: pagamento, spedizione, certificato, cura.
- Pagina per interior designer e architetti, il canale più forte a Milano.
- Lista privata: anteprime 48 ore prima e listino. Newsletter in ogni pagina.
- Opere in ambiente, video del processo, testimonianze e mostre.

## Versione 1.3: in più rispetto ai siti dei concorrenti
- Confronto dimensioni nella scheda opera (compila `w` e `h` in cm), passaporto dell'opera, viewing room privata (pagina noindex: proteggila con link riservato o password), anteprima sulla parete del cliente, press kit e CV scaricabili, pagina stampe, lista privata con anteprime 48 ore prima.

## Lingue
Il sito è in italiano. Le altre lingue (inglese, poi francese, tedesco, spagnolo) si fanno in cartelle /en/, /fr/... duplicando le pagine con i testi tradotti, dopo che i TODO sono completati. Ogni pagina avrà il selettore lingua e i tag hreflang.
