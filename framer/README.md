# Framer-plan for Kraft

Denne pakken er laget for at `kraftpizzeria.no` skal kunne flyttes fra prototype til en faktisk publiserbar Framer-side uten at vi mister tonen, bildene eller strukturen vi allerede har landet.

## Filer

- `cms-model.md`
- `page-plan.md`

## Min anbefaling

Bygg dette i Framer som:

1. `1 statisk hovedside`
2. `3 små CMS collections`
3. `1 Settings collection` for praktisk info som endres av og til

Det er den enkleste balansen mellom fleksibilitet og enkel drift.

## Collections jeg anbefaler

1. `Site Settings`
Her legger du ting som adresse, telefon, bookinglenke, takeawaylenke, rating og SEO-felter.

2. `Menu Highlights`
Her legger du utvalgte retter som skal vises på forsiden.

3. `FAQ`
Her legger du spørsmål og svar.

4. `Gallery Items`
Her legger du bilder og korte tekster for seksjoner som galleri, atmosfære og opplevelse.

## Hvorfor ikke gjøre alt til CMS

Noe av copyen på denne siden er ganske redaksjonell og tett knyttet til merkevaren:

- hero
- historien om Kraft
- nøkkelsetninger om råvarer og identitet

Det ville jeg beholdt som vanlige Framer-tekstlag på siden i første omgang. Da blir designarbeidet enklere, og du slipper å gjøre CMS-et unødvendig komplisert.

## Praktisk byggerekkefølge i Framer

1. Lag stylesystem:
   - farger
   - typografi
   - spacing
   - knapper
2. Bygg forsiden seksjon for seksjon som statiske blocks.
3. Koble inn `Site Settings`.
4. Koble inn `Menu Highlights`, `FAQ` og `Gallery Items`.
5. Test mobil først, så desktop.
6. Koble domene og publiser.

## Hva dette gir deg

- En side som ser custom ut
- Enklere redigering enn HTML-filer
- Mindre vedlikehold enn Squarespace med custom kode
- Mulighet for å oppdatere menyer, FAQ og bilder uten å rote i layouten
