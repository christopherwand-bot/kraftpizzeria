# Framer CMS-modell

Dette er den konkrete modellen jeg ville brukt i Framer for Kraft.

## 1. Site Settings

Brukes som en singleton-lignende collection med `ett` publisert element, for eksempel `kraft-honefoss`.

### Felter

| Felt | Type | Eksempel |
| --- | --- | --- |
| `name` | Plain Text | `Kraft Hønefoss` |
| `seoTitle` | Plain Text | `Kraft Pizzeria | Ekte italiensk pizza` |
| `seoDescription` | Long Text | `Kraft Pizzeria serverer ekte italiensk pizza i Hønefoss...` |
| `shortAddress` | Plain Text | `Arnemannsveien 3` |
| `fullAddress` | Plain Text | `Arnemannsveien 3, 3510 Hønefoss` |
| `hours` | Long Text | `Mandag til torsdag 16:00-21:00...` |
| `phoneLabel` | Plain Text | `Ring 919 09 570` |
| `phoneHref` | Link | `tel:+4791909570` |
| `emailLabel` | Plain Text | `Kontakt oss` |
| `emailHref` | Link | `mailto:booking@kraftpizzeria.no` |
| `orderLabel` | Plain Text | `Bestill mat` |
| `orderShortLabel` | Plain Text | `Bestill` |
| `orderHref` | Link | `https://order.gastroplanner.no/s/W297E` |
| `bookingLabel` | Plain Text | `Book bord` |
| `bookingHeroLabel` | Plain Text | `Reserver bord` |
| `bookingHref` | Link | `https://booking.gastroplanner.no/` |
| `reviewsLabel` | Plain Text | `Se Google-anmeldelser` |
| `reviewsOpenLabel` | Plain Text | `Åpne Google-anmeldelser` |
| `reviewsHref` | Link | `https://www.google.com/maps/search/?api=1&query=Kraft+Pizzeria...` |
| `ratingScore` | Plain Text | `4.5` |
| `ratingCount` | Plain Text | `Basert på rundt 350 anmeldelser` |
| `logo` | Image | `KRAFT_Logo.png` |
| `heroImage` | Image | `IMG_2568.jpg` |
| `finalCtaImage` | Image | `2T7A5501.jpeg` |

### Bruk på siden

- toppnavigasjon
- kontaktseksjon
- CTA-knapper
- reviews-blokk
- SEO
- mobil sticky bar

## 2. Menu Highlights

Brukes til rettene på forsiden.

### Felter

| Felt | Type | Eksempel |
| --- | --- | --- |
| `name` | Plain Text | `Margherita` |
| `slug` | Slug | `margherita` |
| `category` | Plain Text | `Pizza` |
| `tag` | Plain Text | `Klassiker · 199 kr` |
| `title` | Plain Text | `Margherita` |
| `description` | Long Text | `San Marzano-tomatsaus, basilikum...` |
| `priceFrom` | Number eller Plain Text | `199` |
| `sortOrder` | Number | `1` |
| `featured` | Boolean | `true` |
| `image` | Image | `IMG_2556.jpg` |

### Start med disse elementene

1. `Margherita`
2. `Quattro Kraft`
3. `Il Fuoco Dolce`
4. `Pasta Carbonara`
5. `Caprese con Burrata`
6. `Parma`

### Bruk på siden

- menyseksjonen
- highlights-seksjonen
- eventuelt en enkel slider eller grid lenger ned

## 3. FAQ

Brukes til praktisk info og spørsmål før besøk.

### Felter

| Felt | Type | Eksempel |
| --- | --- | --- |
| `question` | Plain Text | `Kan jeg både booke bord og bestille takeaway?` |
| `answer` | Long Text | `Ja. Du kan reservere bord...` |
| `sortOrder` | Number | `1` |
| `isActive` | Boolean | `true` |

### Start med disse elementene

1. `Kan jeg både booke bord og bestille takeaway?`
2. `Hvor finner jeg dere i Hønefoss?`
3. `Har dere mer enn bare pizza?`
4. `Hvor finner jeg åpningstidene?`

### Bruk på siden

- FAQ-accordion nederst på forsiden

## 4. Gallery Items

Brukes til alle bildebaserte kort som ikke er rene menyretter.

### Felter

| Felt | Type | Eksempel |
| --- | --- | --- |
| `name` | Plain Text | `Steinovn` |
| `slug` | Slug | `steinovn` |
| `section` | Enum / Plain Text | `atmosphere` |
| `tag` | Plain Text | `Steinovn` |
| `title` | Plain Text | `Ovnen er en del av signaturen` |
| `description` | Long Text | `Det er her mye av uttrykket sitter...` |
| `image` | Image | `2T7A5464.jpeg` |
| `sortOrder` | Number | `1` |
| `isActive` | Boolean | `true` |

### Forslag til `section`-verdier

- `gallery`
- `atmosphere`
- `experience`
- `service`

### Start med disse elementene

- `Mer smak, mer topping, mer trøkk`
- `Tagliatelle Ragu`
- `Nærmere på råvarene`
- `Ovnen er en del av signaturen`
- `Tiden og håndverket må få synes`
- `Lav terskel er også en del av opplevelsen`
- `Rolig, varmt og uten stivhet`
- `Når middagen blir med hjem`

## Hva jeg ville holdt utenfor CMS i første runde

Disse feltene bør helst ligge direkte i designet i Framer først:

- hero-overskrift
- hero-introtekst
- historien om Kraft
- hovedoverskrifter i de viktigste seksjonene

Grunnen er enkel: dette er merkevaretekst som du sannsynligvis vil justere visuelt like mye som språklig.

## Hvis du vil gjøre mer redigerbart senere

Da kan vi legge til:

## 5. Page Copy

En collection for mer redaksjonell tekst, med felter som:

| Felt | Type | Eksempel |
| --- | --- | --- |
| `key` | Plain Text | `hero_title` |
| `value` | Long Text | `Ekte italiensk pizza, laget for kvelder du husker.` |
| `group` | Plain Text | `hero` |

Jeg ville `ikke` startet der. Det blir fort mer teknisk enn nyttig.
