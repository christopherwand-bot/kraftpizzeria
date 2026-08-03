# Framer byggeguide

Dette er den mest praktiske måten å bygge Kraft-siden i Framer på uten å miste uttrykket vi allerede har landet.

## Før du begynner

Ha klart:

- logo
- alle utvalgte matbilder
- alle stemningsbilder
- lenker til takeaway, booking og Google-anmeldelser
- åpningstider og kontaktinfo

Bruk innholdet fra:

- `content.js`
- `framer/cms-model.md`
- `framer/page-plan.md`

## Byggerekkefølge

### 1. Sett opp design foundations

Lag disse som styles først i Framer:

- `Display / Hero`
- `Heading / Section`
- `Body / Large`
- `Body / Regular`
- `Label / Eyebrow`
- `Button / Primary`
- `Button / Secondary`

Lag også et enkelt fargesystem:

- krem som bakgrunn
- dyp grønn til tekst og mørke flater
- Kraft-rød til CTA og små aksenter
- varm beige / sand til kortflater

Målet er å få hele siden til å føles som restaurant, ikke som generisk SaaS-layout.

### 2. Lag komponentbiblioteket

Bygg disse komponentene før du setter sammen siden:

1. `Navbar`
Inneholder logo, ankerlenker og primærknapp.

2. `Hero CTA group`
To hovedknapper og en sekundær lenke til anmeldelser.

3. `Stat Pill`
Liten blokk med `label` og `value`.

4. `Section Header`
Eyebrow, overskrift og eventuelt ingress.

5. `Info Card`
Kort for praktisk info og tekstlige høydepunkter.

6. `Menu Card`
Bilde, tag, rettnavn og kort beskrivelse.

7. `Image Story Card`
Brukes i galleri og atmosfæreseksjoner.

8. `FAQ Item`
Åpne/lukke-rad med spørsmål og svar.

9. `Mobile CTA Bar`
Fast bunnlinje med `Bestill` og `Book bord`.

### 3. Bygg siden seksjon for seksjon

#### Seksjon 1: Hero

Bruk:

- logo fra `Site Settings.logo`
- hero-bilde fra `Site Settings.heroImage`
- statisk hero-tekst
- CTA-er fra `Site Settings`

Hold denne seksjonen ganske ren:

- tekst til venstre
- stort bilde til høyre på desktop
- stablet på mobil

#### Seksjon 2: Stats

Lag tre `Stat Pill`-komponenter:

- `Hønefoss / Arnemannsveien 3`
- `Steinovn / ekte napolitansk pizza`
- `Familievennlig / lav terskel, høy kvalitet`

Disse kan være statiske i første runde.

#### Seksjon 3: Showcase

Denne bør være statisk og redaksjonell. Her ville jeg brukt:

- tekst fra `showcase`
- 3 små informasjonskort

Ikke gjør denne til CMS med en gang.

#### Seksjon 4: Location

Koble disse feltene fra `Site Settings`:

- `fullAddress`
- `hours`
- `phoneLabel`
- `phoneHref`
- `bookingLabel`
- `bookingHref`

Dette er en god seksjon å bygge tidlig, fordi den er enkel og gir mye praktisk verdi.

#### Seksjon 5: Services

Lag tre statiske cards:

- i restauranten
- takeaway
- mer enn pizza

Denne seksjonen kan være statisk i første versjon, fordi copyen her er ganske nøye formulert.

#### Seksjon 6: Menu Highlights

Koble til `Menu Highlights`.

Vis først de tre viktigste rettene:

1. `Margherita`
2. `Quattro Kraft`
3. `Il Fuoco Dolce`

Sorter på `sortOrder`.

Om du vil gjøre den litt mer levende i Framer, kan denne seksjonen være en horisontal stack på mobil og tre kolonner på desktop.

#### Seksjon 7: Story

Bygg denne statisk.

Bruk:

- story-overskrift
- sitat
- tre innholdskort

Dette er merkevaretekst, så det er bedre å justere den direkte i designet enn å over-abstrahere den inn i CMS.

#### Seksjon 8: Gallery

Koble til `Gallery Items` filtrert på `section = gallery`.

Vis tre kort.

#### Seksjon 9: Atmosphere

Koble til `Gallery Items` filtrert på `section = atmosphere`.

Vis tre kort:

- steinovn
- deigen
- mottaket

Denne seksjonen er viktig for å få siden til å føles som et sted, ikke bare en meny.

#### Seksjon 10: Reviews

Koble til `Site Settings`:

- `ratingScore`
- `ratingCount`
- `reviewsOpenLabel`
- `reviewsHref`

Hold den enkel og troverdig. Ikke overdesign denne.

#### Seksjon 11: FAQ

Koble til `FAQ` collection sortert på `sortOrder`.

Vis 4 spørsmål.

#### Seksjon 12: Final CTA

Bruk:

- `finalCtaImage`
- statisk avslutningstekst
- CTA-er fra `Site Settings`

Denne bør føles litt roligere og varmere enn heroen.

#### Seksjon 13: Contact

Koble til `Site Settings`.

Vis:

- adresse
- åpningstider
- telefon
- e-post
- bestill
- book bord

#### Seksjon 14: Mobile CTA Bar

Koble disse til `Site Settings`:

- `orderShortLabel`
- `orderHref`
- `bookingLabel`
- `bookingHref`

Denne bør være synlig bare på mobil.

## Ting jeg ville bygget som statisk først

- hero
- showcase
- story
- experience-tekst
- avsluttende tekstblokker

## Ting jeg ville bygget som CMS fra start

- kontaktinfo
- CTA-lenker
- rating
- menykort
- FAQ
- bildegalleri

## Når siden er ferdig bygget

Gjør denne sjekken:

1. alle knapper går riktig sted
2. telefon fungerer på mobil
3. alle bilder cropper fint i 390 px bredde
4. menykortene er lette å skumme
5. siden føles varm og tydelig, ikke over-designet
