# Tsoler Hayitian – Developer Portfolio

Min personliga utvecklarportfolio där jag samlar projekt, erfarenhet och tekniker jag arbetar med inom systemutveckling.

🌐 Portfolio:  
https://tsoler89.github.io/Portfolio/

---

## Om mig

Jag studerar till **Systemutvecklare .NET** på TUC Yrkeshögskola i Linköping.

Jag arbetar med både frontend och backend och har erfarenhet av bland annat:

- C#
- .NET / ASP.NET Core
- Web API
- React
- JavaScript / TypeScript
- Blazor
- React Native
- SQL Server / SQLite
- REST API
- Git & GitHub
- Azure / DevOps
- CI/CD

---

## Utvalda projekt

### TUC Booking System

Ett fullstack-bokningssystem för grupprum och resurser utvecklat som gruppprojekt på TUC.

Funktioner inkluderar bland annat:

- autentisering
- rumsbokning
- konflikthantering
- rollbaserad behörighet
- adminfunktioner
- databashantering
- tester

Teknik:

- C#
- .NET 10
- ASP.NET Core Web API
- Blazor Server
- Entity Framework Core
- SQLite
- JWT
- Swagger
- xUnit

Jag arbetade som **Project Lead och Backend Developer** i projektet.

---

## Pågående projekt

### JobTrack – Job Application Tracker

En fullstacklösning för att hantera jobbansökningar via webb och mobil.

Teknik:

- React
- React Native
- Expo
- TypeScript
- C#
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server
- REST API

Projektet består av webbapp, backend/API och mobilapp. Webb och mobil delar användarkonton, ansökningar och bilder via samma API.

Funktioner:

- Registrering, inloggning och användarspecifika data.
- Ansökningshantering med sökning, statusfilter, bilder, statistik och uppföljningsdatum.
- Gmail-koppling via OAuth 2.0 med krypterade Google-token på servern.
- Regelbaserade importförslag som granskas och godkänns eller avvisas av användaren.
- Dubblettskydd, importhistorik och möjliga kontakter om jobb eller examensarbete som kan sparas som Intresserad.
- Automatiserade tester för API, kontoisolering, datum och mejlimport.

Projektet är under utveckling och visas som lokal demo. Sökningen omfattar högst 50 matchande mejl från de senaste 90 dagarna. Automatiskt sparande, Outlook och offentlig live-demo återstår.

Projektkortet visar [webbens välkomstsida](Assets/Projects/jobtrack-web-start.webp) och [översikten efter inloggning](Assets/Projects/jobtrack-oversikt.png). Skärmbilderna visas sida vid sida i ett kompakt galleri utan klicklänkar. Projektkortet följer samma kolumnbredd och bildproportioner som övriga projekt.

Kod: [Webb](https://github.com/TSOLER89/job-application-tracker), [API](https://github.com/TSOLER89/job-application-tracker-api), [Mobil](https://github.com/TSOLER89/job-application-tracker-mobile).

---

### DevPilot

En AI-driven utvecklarassistent byggd med React, ASP.NET Core och OpenAI.

Teknik:

- React
- JavaScript
- C#
- .NET 10
- ASP.NET Core Web API
- OpenAI API
- REST API
- Swagger

Projektet är fortfarande under utveckling.

---

## Erfarenhet

### Consid AB – LIA 1

Under min första LIA arbetade jag i ett kundprojekt med STB Driftportalen.

Jag arbetade bland annat med:

- frontend och backend
- arbetsberedningar
- signering och validering
- PDF-generering
- SharePoint
- Microsoft Graph API
- e-postflöden
- dokumenthantering

Teknik som användes inkluderade React, TypeScript, .NET 8, SQL Server, SharePoint, Microsoft Graph API och Node.js.

---

## Portfolio-teknik

Själva portfolion är byggd med:

- HTML
- CSS
- JavaScript
- ES Modules
- JSON
- GitHub Pages

Portfolion använder en enkel client-side router och projektdata hämtas dynamiskt från `Data/db.json`.

---

## Projektstruktur

```text
Portfoljo/
│
├── Assets/
│   ├── Photos/
│   ├── Projects/
│   └── PDF/
│
├── Css/
│   └── style.css
│
├── Data/
│   └── db.json
│
├── pages/
│   ├── home.js
│   ├── about.js
│   ├── projects.js
│   └── contact.js
│
├── ui/
│   └── mobileMenu.js
│
├── index.html
├── main.js
└── router.js
```


## CSS och underhåll

`Css/style.css` samlar designvariabler, komponentstilar, responsiva regler och tillgänglighet. Delade färger definieras i `:root`. Mobilregler och stöd för reducerad rörelse finns kvar i sin kaskadordning.

Musikfunktionen och de oanvända flytande logotyperna är borttagna. Inga externa JavaScript-bibliotek behövs för portfolions navigation eller gränssnitt.

Vid ändring av CSS uppdateras versionsparametern i stilmallens länk i `index.html`, så att en äldre cachad stilmall inte används. Kontrollera Hem, Om mig, Projekt och Kontakt på både dator och mobil, inklusive mobilmenyn, tangentbordsfokus och länken ”Hoppa till innehållet”.


## LIA och kontaktuppgifter

Jag söker LIA 2 och examensarbete **14 december 2026–28 maj 2027**, främst på plats i **Linköping eller Norrköping**. Period, ortsönskemål och mejladress finns i `pages/job-search.js` och återanvänds på startsidan och kontaktsidan. Kontaktsidan visar mejladressen och har separata funktioner för att öppna ett mejl eller kopiera adressen. Om webbläsaren blockerar kopiering visas instruktioner för manuell kopiering.

Projektgrupperna visas i ordningen pågående, utvalda och tidigare projekt. Projektbilderna använder komprimerade WebP-versioner där det minskar filstorleken. Oanvända äldre bilder är borttagna. JobTracks översiktsbild använder fortsatt PNG eftersom den är mindre än den konverterade versionen.
