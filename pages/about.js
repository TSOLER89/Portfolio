export function renderAbout() {
    const skills = [
        ["Backend & data", "C#", ".NET / ASP.NET Core", "REST API", "SQL / datamodellering", "Entity Framework Core"],
        ["Frontend & mobil", "React", "TypeScript / JavaScript", "HTML / CSS", "React Native / Expo", "Blazor"],
        ["CMS & webbutveckling", "Umbraco CMS 17/18", "Razor", "Sass", "Innehållsmodellering", "Responsiv design"],
        ["Verktyg & arbetssätt", "Git / GitHub", "Azure DevOps / CI/CD", "Scrum / Kanban", "Testplanering", "Användbarhetstester / felsökning"]
    ];
    document.getElementById("app").innerHTML = `
        <section class="about-intro"><div class="about-text">
            <p class="section-kicker">Om mig</p><h1>Systemutveckling med förståelse för verksamheten.</h1>
            <p class="about-lead">Jag är Tsoler Hayitian och studerar till systemutvecklare .NET på TUC Yrkeshögskola i Linköping, augusti 2025–juni 2027.</p>
            <p>Jag gillar att lösa problem, utveckla användbara funktioner och förstå hela flödet från användargränssnitt till API och databas. Under min LIA på Consid fick jag omsätta det i ett kundprojekt för byggbranschen.</p>
            <div class="hero-actions"><a class="btn btn-primary" href="Assets/PDF/Tsoler-Hayitian-utvecklare.pdf" target="_blank" rel="noopener noreferrer">Läs mitt CV (PDF)</a><a class="btn btn-secondary" href="#contact" data-page="contact">Kontakta mig</a></div>
        </div></section>
        <section class="experience-section"><div class="section-header"><p class="section-kicker">Erfarenhet</p><h2>Från behov till funktion.</h2></div>
            <article class="experience-card"><div class="experience-card-header"><div><p class="experience-company">Consid · Linköping</p><h3>Fullstackutvecklare / Systemutvecklare · LIA 1</h3><p class="experience-project">STB Driftportal</p></div><span class="experience-date">April–maj 2026</span></div>
                <p class="experience-description">Utveckling i ett verksamhetssystem för projektstyrning och dokumenthantering inom byggbranschen.</p>
                <div class="experience-grid"><div class="experience-column"><h4>Mitt arbete</h4><ul><li>Utvecklade och anpassade funktioner i frontend och backend.</li><li>Arbetade med API-integrationer och automatiserad PDF-generering.</li><li>Hanterade dokumentflöden i SharePoint.</li><li>Deltog i kundmöten och tog fram lösningar utifrån verksamhetens behov.</li></ul></div><div class="experience-column"><h4>Teknik i projektet</h4><div class="experience-tech">${["React", "TypeScript", "C#", ".NET 8", "SharePoint", "API-integrationer", "PDF-generering"].map(s => `<span>${s}</span>`).join("")}</div></div></div>
            </article>
        </section>
        <section class="skills-section" id="skills"><div class="section-header"><p class="section-kicker">Teknik & arbetssätt</p><h2>Min tekniska verktygslåda.</h2><p>Tekniker jag har använt i utbildning, egna projekt och praktik.</p></div><div class="skills-grid">${skills.map(([title, ...tags]) => `<article class="skill-category"><h3>${title}</h3><div class="skill-tags">${tags.map(s => `<span>${s}</span>`).join("")}</div></article>`).join("")}</div></section>
        <section class="experience-section"><div class="section-header"><p class="section-kicker">Bakgrund</p><h2>Erfarenheter jag tar med mig.</h2></div><div class="background-grid"><article><h3>Administration & kundkontakt</h3><p>Administrativ assistent på CJUVEL by Christian (2022–2025) och allmän assistent på ARCA (2013–2017). Erfarenhet av kundkontakt, dokumenthantering och administrativ struktur.</p></article><article><h3>Samarbete & kommunikation</h3><p>Volontär och danslärare på Sensus (2022–2023). Planerade och ledde lektioner för barn och förberedde scenframträdanden.</p></article></div><p class="language-summary"><strong>Språk:</strong> Armeniska (modersmål), svenska (flytande), engelska, turkiska och arabiska (medelnivå).</p></section>
        <section class="about-hobbies" aria-labelledby="hobbies-title">
            <div class="section-header">
                <p class="section-kicker">Fritid & intressen</p>
                <h2 id="hobbies-title">Det som ger mig energi.</h2>
                <p>Utanför studierna hittar jag balans och inspiration i musik, dans och träning.</p>
            </div>
            <div class="hobbies-grid">
                <article class="hobby-card">
                    <span class="hobby-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M16 3v11.2a3.2 3.2 0 1 0 2 2.97V7h4V3h-6Z"/></svg></span>
                    <div><h3>Musik</h3><p>Musik hjälper mig att behålla fokus och kreativitet.</p></div>
                </article>
                <article class="hobby-card">
                    <span class="hobby-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M14.5 4.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.2 5.1 2.4-1.4 1.6 2.3 2.8 1.4-.9 1.8-3.3-1.6-.9-1.3-.8 3 2.1 2.1V21H10v-4.1l-2.5-2.5a2 2 0 0 1-.5-1.9l1-4.8 1.3 1.9Z"/></svg></span>
                    <div><h3>Dans</h3><p>Dans ger mig energi och balans vid sidan av studierna.</p></div>
                </article>
                <article class="hobby-card">
                    <span class="hobby-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M2 10h3v4H2v-4Zm17 0h3v4h-3v-4ZM6 8h2v8H6V8Zm10 0h2v8h-2V8ZM9 11h6v2H9v-2Z"/></svg></span>
                    <div><h3>Träning</h3><p>Träning är en viktig del av min vardag och bidrar till balans och energi.</p></div>
                </article>
            </div>
        </section>
    `;
}
