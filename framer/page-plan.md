# Framer sideplan

Dette er hvordan jeg ville bygget forsiden i Framer.

## Sideoppsett

1. `Hero`
Statisk seksjon med:
- logo
- hovedoverskrift
- introtekst
- CTA til takeaway
- CTA til bordbooking
- hero-bilde fra `Site Settings`

2. `Stats`
Tre små highlights:
- Hønefoss
- Steinovn
- Familievennlig

Disse kan være statiske i første runde.

3. `Showcase`
Statisk seksjon om spisestua og filosofien.

4. `Location`
Koble til `Site Settings`:
- adresse
- åpningstider
- telefon
- booking

5. `Services`
To eller tre statiske cards som forklarer:
- restaurant
- takeaway
- trattoria-bredde

6. `Menu Highlights`
Koble til `Menu Highlights` collection.
Vis 3-6 kort sortert på `sortOrder`.

7. `Story`
Statisk seksjon med teksten om Kraft, Lloyd-bygget og råvarene.

8. `Gallery`
Koble til `Gallery Items` der `section = gallery`.

9. `Atmosphere`
Koble til `Gallery Items` der `section = atmosphere`.

10. `Reviews`
Koble til `Site Settings`:
- ratingScore
- ratingCount
- reviewsHref

11. `FAQ`
Koble til `FAQ` collection sortert på `sortOrder`.

12. `Final CTA`
Koble bilde til `finalCtaImage` fra `Site Settings`.
Tekst kan være statisk i første runde.

13. `Contact`
Koble til `Site Settings`:
- adresse
- telefon
- e-post
- takeaway
- booking

14. `Mobile CTA bar`
To knapper:
- `Bestill`
- `Book bord`

Disse kobles også til `Site Settings`.

## Komponenter jeg ville laget i Framer

- `Primary Button`
- `Secondary Button`
- `Section Header`
- `Info Card`
- `Menu Card`
- `Image Story Card`
- `FAQ Item`

## Designgrep jeg ville bevart

- varm bakgrunn
- tydelig krem/rød/grønn-palett
- stor typografi i hero
- avrundede kort med litt dybde
- tydelig mobil CTA nederst

## Det viktigste å teste før publisering

1. at takeaway-lenken er riktig
2. at booking-lenken er riktig
3. at telefon/e-post klikker riktig på mobil
4. at bilder croppes pent i både desktop og mobil
5. at rating-blokken ikke ser “fake” ut dersom den fortsatt er manuell
