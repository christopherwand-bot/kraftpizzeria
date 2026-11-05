# Kraft Pizzeria

Nettsiden for kraftpizzeria.no.

GitHub: https://github.com/christopherwand-bot/kraftpizzeria

## Sider og innhold

- `/`: lokasjonsvelger.
- `/honefoss/`: Hønefoss. Tekst og lenker redigeres i `content.js`.
- `/kongsberg/`: Kongsberg. Tekst og lenker redigeres i `kongsberg-content.js`.
- Kongsberg-bildene ligger i `assets/kongsberg/`.
- `styles.css` er felles stil. `locations.css` brukes av lokasjonsvelgeren og Kongsberg.

## Lokal forhåndsvisning

Kjør fra prosjektmappen:

```bash
python3 -m http.server 8043
```

Åpne http://localhost:8043/.

## Publisering på Railway

Koble en egen tjeneste til dette repoet og branchen `main`.
Railway bruker `Dockerfile` i roten. Ingen separat build- eller startkommando trengs.
Standardport er `8080`; serveren bruker `PORT` hvis Railway setter den.
Healthcheck-stien er `/healthz`.

Test Railway-adressen på alle tre sidene før domenet flyttes.
Legg så til `kraftpizzeria.no` og `www.kraftpizzeria.no` i tjenestens domeneoppsett
og bruk DNS-verdiene Railway viser for akkurat denne tjenesten.
Behold eksisterende e-postposter hos domeneleverandøren.

Etter kobling til GitHub publiseres nye commits automatisk hvis autodeploy er aktivert.
Docker-imaget inneholder nettsidefilene og bildene, ikke de gamle Framer-/Squarespace-pakkene.
