import { removeFloatingLogos } from "../ui/FloatingLogos.js";

export function renderAbout() {
    const app = document.getElementById("app");

    // Se till att loggor tas bort när vi lämnar startsidan
    removeFloatingLogos();

    app.innerHTML = `
        <section class="about-intro">

        <div class="about-text">

            <p class="section-kicker">
                Om mig
            </p>

            <h2>
                Systemutvecklare .NET med fokus på fullstack
            </h2>

            <p class="about-lead">
                Jag studerar Systemutvecklare .NET på TUC Yrkeshögskola i Linköping
                och tycker om att bygga lösningar där frontend,
                backend och API:er fungerar tillsammans.
            </p>

            <p>
                Under utbildningen har jag arbetat med bland annat
                C#, .NET, React, Blazor och React Native.
                Jag gillar att förstå hela flödet i en applikation –
                från användargränssnitt och affärslogik till API,
                databas och integrationer.
            </p>

            <p>
                Jag utvecklas bäst när jag får kombinera problemlösning,
                struktur och kreativitet och arbetar gärna i team där
                man lär av varandra och bygger lösningar steg för steg.
            </p>


            <div class="about-meta">

                <span>
                    Systemutvecklare .NET
                </span>

                <span>
                    Fullstack
                </span>

                <span>
                    LIA 1: Consid AB
                </span>

            </div>

        </div>

        </section>

</section>

        <section class="lia-section">
            <div class="section-header">
                <p class="section-kicker">LIA-period</p>
            </div>

            <div class="lia-card">
                <div class="lia-card-top">
                    <span class="lia-badge completed">Genomförd</span>
                </div>

                <div class="lia-timeline">
                    <span class="lia-start">2026-03-30</span>
                    <div class="lia-bar">
                        <div class="lia-progress"></div>
                    </div>
                    <span class="lia-end">2026-06-05</span>
                </div>

                <div class="lia-experience">
                    <p>
                        Under min LIA 1 på <strong>Consid AB i Linköping</strong> arbetade jag i projektet
                        <strong>STB Driftportalen</strong>, ett webbaserat system för hantering av
                        säkerhetsdokumentation och projektflöden inom byggbranschen.
                    </p>

                    <div class="experience-item">
                        <h4>Arbetsområden och leveranser</h4>
                        <ul>
                            <li>Arbetade i tre delar av lösningen: frontend, backend och PDF-generator.</li>
                            <li>Utvecklade funktion för uppladdning av bilder och foton till SharePoint med stabil filhantering.</li>
                            <li>Arbetade med datainsamling, användarflöde, validering och systemintegration.</li>
                            <li>Implementerade mejlhantering och email-verifiering i arbetsflödet.</li>
                            <li>Utvecklade funktionalitet för PDF-autentisering och säkrare dokumenthantering.</li>
                        </ul>
                    </div>

                    <div class="experience-item">
                        <h4>Tekniker och arbetssätt</h4>
                        <p class="lia-tech">
                            React, TypeScript, JavaScript, .NET 8, REST API, SharePoint,
                            Microsoft Graph API, Node.js, SQL Server, Postman, Puppeteer, DevOps, Git och GitHub.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="lia-section">
            <div class="lia-card">
                <div class="lia-card-top">
                    <span class="lia-card-title">LIA 2 - Examensperiod</span>
                    <span class="lia-badge upcoming">Kommande</span>
                </div>

                <div class="lia-timeline">
                    <span class="lia-start">2026-12-14</span>
                    <div class="lia-bar">
                        <div class="lia-progress lia-progress-upcoming"></div>
                    </div>
                    <span class="lia-end">2027-05-28</span>
                </div>
            </div>
        </section>

        <section id="skills" class="skills-section">

    <div class="section-header skills-header">
        <p class="section-kicker">Teknik & arbetssätt</p>

        <h3>Mina kompetenser</h3>

        <p class="skills-intro">
            Tekniker och arbetssätt som jag har använt i utbildning,
            projekt och praktik.
        </p>
    </div>


    <div class="skills-grid">

        <article class="skill-category">
            <h4>Backend & .NET</h4>

            <div class="skill-tags">
                <span>C#</span>
                <span>.NET</span>
                <span>ASP.NET Core</span>
                <span>Web API</span>
                <span>Entity Framework Core</span>
                <span>Blazor</span>
            </div>
        </article>


        <article class="skill-category">
            <h4>Frontend</h4>

            <div class="skill-tags">
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>React</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Vite</span>
                <span>Responsiv design</span>
            </div>
        </article>


        <article class="skill-category">
            <h4>Mobile</h4>

            <div class="skill-tags">
                <span>React Native</span>
                <span>Expo</span>
                <span>Expo Router</span>
                <span>Cross-platform</span>
                <span>expo-image-picker</span>
            </div>
        </article>


        <article class="skill-category">
            <h4>API & Data</h4>

            <div class="skill-tags">
                <span>REST API</span>
                <span>SQL Server</span>
                <span>SQLite</span>
                <span>JSON</span>
                <span>Swagger</span>
                <span>Postman</span>
                <span>CORS</span>
            </div>
        </article>


        <article class="skill-category">
            <h4>Tools & Workflow</h4>

            <div class="skill-tags">
                <span>Git</span>
                <span>GitHub</span>
                <span>DevOps</span>
                <span>CI/CD</span>
                <span>Debugging</span>
                <span>Testning</span>
                <span>Agila arbetssätt</span>
            </div>
        </article>

    </div>

</section>

        <section class="about-hobbies">
            <div class="section-header">
                <p class="section-kicker">Fritid &amp; intressen</p>
                <h3>Det som ger mig energi utanför studierna</h3>
            </div>

            <div class="hobbies-grid">
                <div class="hobby-card">
                    <span class="hobby-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" focusable="false">
                            <path d="M16 3v11.2a3.2 3.2 0 1 0 2 2.97V7h4V3h-6Z"></path>
                        </svg>
                    </span>
                    <div>
                        <h4>Musik</h4>
                        <p>Musik hjälper mig att behålla fokus och kreativitet.</p>
                    </div>
                </div>
                <div class="hobby-card">
                    <span class="hobby-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" focusable="false">
                            <path d="M14.5 4.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.2 5.1 2.4-1.4 1.6 2.3 2.8 1.4-.9 1.8-3.3-1.6-.9-1.3-.8 3 2.1 2.1V21H10v-4.1l-2.5-2.5a2 2 0 0 1-.5-1.9l1-4.8 1.3 1.9Z"></path>
                        </svg>
                    </span>
                    <div>
                        <h4>Dans</h4>
                        <p>Dans ger mig energi och balans vid sidan av studierna.</p>
                    </div>
                </div>
                <div class="hobby-card">
                    <span class="hobby-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" focusable="false">
                            <path d="M2 10h3v4H2v-4Zm17 0h3v4h-3v-4ZM6 8h2v8H6V8Zm10 0h2v8h-2V8ZM9 11h6v2H9v-2Z"></path>
                        </svg>
                    </span>
                    <div>
                        <h4>Träning</h4>
                        <p>Träning är en viktig del av min vardag och bidrar till hälsa.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}
