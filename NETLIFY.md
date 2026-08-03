# Netlify-publisering

Denne siden er allerede satt opp som en enkel statisk nettside og passer rett inn i Netlify.

## Filene som publiseres

- [index.html](/Users/christopherawand/Documents/Codex/2026-04-23-jeg-nsker-forbedre-min-nettsiden-kraftpizzeria/index.html)
- [styles.css](/Users/christopherawand/Documents/Codex/2026-04-23-jeg-nsker-forbedre-min-nettsiden-kraftpizzeria/styles.css)
- [script.js](/Users/christopherawand/Documents/Codex/2026-04-23-jeg-nsker-forbedre-min-nettsiden-kraftpizzeria/script.js)
- [content.js](/Users/christopherawand/Documents/Codex/2026-04-23-jeg-nsker-forbedre-min-nettsiden-kraftpizzeria/content.js)
- alle bilde- og logofiler i prosjektmappen

## Filer jeg har lagt til for Netlify

- [netlify.toml](/Users/christopherawand/Documents/Codex/2026-04-23-jeg-nsker-forbedre-min-nettsiden-kraftpizzeria/netlify.toml)
- [_redirects](/Users/christopherawand/Documents/Codex/2026-04-23-jeg-nsker-forbedre-min-nettsiden-kraftpizzeria/_redirects)

Disse gjør at Netlify forstår at prosjektroten skal publiseres, og legger på noen enkle standard-headere.

## Enkleste måte å publisere

### Alternativ 1: Drag and drop

1. Gå til [Netlify](https://app.netlify.com/)
2. Logg inn
3. Velg `Add new site`
4. Velg `Deploy manually`
5. Dra inn hele prosjektmappen:
   - `/Users/christopherawand/Documents/Codex/2026-04-23-jeg-nsker-forbedre-min-nettsiden-kraftpizzeria`

Hvis Netlify ikke lar deg dra inn hele mappen, lag en zip av prosjektmappen og last opp den.

### Alternativ 2: Git

1. Legg prosjektet i GitHub
2. Gå til [Netlify](https://app.netlify.com/)
3. Velg `Add new site`
4. Velg `Import an existing project`
5. Koble GitHub-repoet
6. La `publish directory` være prosjektroten

For denne siden er `drag and drop` den raskeste veien.

## Etter publisering

Gjør disse tingene:

1. Sjekk at logo og bilder lastes riktig
2. Sjekk at takeaway-lenken åpner riktig side
3. Sjekk at booking-lenken fungerer
4. Sjekk Google-anmeldelseslenken
5. Test siden på mobil

## Koble domenet

Når testversjonen ser bra ut:

1. Åpne siten i Netlify
2. Gå til `Domain management`
3. Velg `Add custom domain`
4. Koble `kraftpizzeria.no`
5. Oppdater DNS der domenet ditt ligger

Netlify setter vanligvis opp HTTPS automatisk når domenet er koblet riktig.

## Min anbefaling

Publiser først til en midlertidig Netlify-URL og test alt der.

Når alt ser riktig ut:

1. koble domenet
2. test én gang til
3. sett siden live
