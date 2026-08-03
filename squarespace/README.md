# Squarespace Guide

Denne pakken er laget for `Squarespace 7.1` med:

- `Code Block` for HTML-innholdet
- `Custom CSS Editor` for designet

Offisielle Squarespace-kilder:

- Code blocks: https://support.squarespace.com/hc/en-us/articles/206543167-Code-blocks
- Using code injection: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection
- Adding custom code to your site: https://support.squarespace.com/hc/en-us/articles/205815928-Adding-custom-code-to-your-site

## Filer

- `page-snippet.html`
- `custom.css`

## Viktig om bilder

Filen `page-snippet.html` inneholder plassholdere som:

- `REPLACE_WITH_LOGO_URL`
- `REPLACE_WITH_IMG_2568_URL`
- `REPLACE_WITH_2T7A5331_URL`

Før publisering må disse erstattes med ekte, offentlige bilde-URL-er.

Squarespace gir ikke en enkel lokal filsti som `/filename.jpg` inni en kodeblokk. Derfor må bildene:

1. lastes opp et sted med offentlig URL
2. eller bygges inn med Squarespace sine egne bildeblokker i stedet for `img`-tagger

Den raskeste veien er å hoste bildene med offentlige URL-er og lime dem inn i `page-snippet.html`.

## Slik publiserer du

1. Opprett en vanlig side i Squarespace.
2. Legg inn en `Code Block`.
3. Åpne `page-snippet.html` og lim inn hele innholdet i code blocken.
4. Gå til `Design -> Custom CSS`.
5. Åpne `custom.css` og lim inn hele innholdet der.
6. Erstatt alle `REPLACE_WITH_..._URL`-plassholderne med faktiske bilde-URL-er.
7. Lagre og test på desktop og mobil.

## Anbefalt rekkefølge for bilder

- Logo: `KRAFT_Logo.png`
- Hero / showcase: `IMG_2568.jpg`
- Restaurant: `2T7A5331.jpeg`
- Takeaway: `2T7A5487.jpeg`
- Galleri: `IMG_2556.jpg`, `IMG_2661.jpg`, `IMG_2574.jpg`
- Atmosfaere: `2T7A5464.jpeg`, `2T7A5286.jpeg`, `2T7A5350.jpeg`

## Hva jeg anbefaler i Squarespace

- Bruk `Code Block` til selve HTML-strukturen.
- Bruk `Custom CSS` til styling.
- Ikke bruk `Code Injection` for innhold eller CSS hvis du kan unnga det. Squarespace anbefaler `Code Block` for innhold og `Custom CSS Editor` for stil.

## Begrensninger

- Denne pakken er laget for en enkelt landingsside.
- Hvis du vil ha all tekst redigerbar direkte i Squarespace uten kode, bor vi etter dette bygge den opp med native Squarespace-seksjoner i stedet for custom HTML.
- Hvis du vil ha eksakt samme utseende som den lokale versjonen, er riktig bildehosting viktig.
