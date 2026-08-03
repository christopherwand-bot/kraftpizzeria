# Framer import-guide

Dette er den raskeste måten å få innholdet inn i Framer på.

## Filer å bruke

- `menu-highlights.csv`
- `faq.csv`
- `gallery-items.csv`
- `site-settings.md`

## Rekkefølge

1. Opprett collection `Site Settings`
2. Opprett collection `Menu Highlights`
3. Opprett collection `FAQ`
4. Opprett collection `Gallery Items`
5. Last opp alle bilder til Framer Assets
6. Importer CSV-filene
7. Koble bildefeltene manuelt hvis Framer ikke matcher filnavn automatisk

## Collections

### 1. Site Settings

Denne lager du manuelt fra [site-settings.md](/Users/christopherawand/Documents/Codex/2026-04-23-jeg-nsker-forbedre-min-nettsiden-kraftpizzeria/framer/site-settings.md).

Jeg anbefaler bare `ett` publisert element her.

### 2. Menu Highlights

Importer:

- [menu-highlights.csv](/Users/christopherawand/Documents/Codex/2026-04-23-jeg-nsker-forbedre-min-nettsiden-kraftpizzeria/framer/menu-highlights.csv)

### 3. FAQ

Importer:

- [faq.csv](/Users/christopherawand/Documents/Codex/2026-04-23-jeg-nsker-forbedre-min-nettsiden-kraftpizzeria/framer/faq.csv)

### 4. Gallery Items

Importer:

- [gallery-items.csv](/Users/christopherawand/Documents/Codex/2026-04-23-jeg-nsker-forbedre-min-nettsiden-kraftpizzeria/framer/gallery-items.csv)

## Viktig om bilder

Bildefeltene i CSV-ene er satt opp med filnavn fra prosjektmappen. Det gjør importen mye lettere, men du må fortsatt kontrollere at Framer kobler riktig bilde til riktig element.

Hvis ikke:

1. åpne CMS-elementet
2. finn `image`
3. velg riktig opplastet fil manuelt

## Min anbefalte minimumsversjon i Framer

Hvis du vil få siden raskt live:

1. bygg layouten
2. koble `Site Settings`
3. koble `Menu Highlights`
4. koble `FAQ`
5. koble `Gallery Items`

Da får du en redigerbar side uten at Framer-prosjektet blir for komplisert.
