import { removeFloatingLogos } from "../ui/FloatingLogos.js";

export function renderAbout() {
    const app = document.getElementById("app");

    // Ta bort flytande logotyper när vi lämnar startsidan
    removeFloatingLogos();

    app.innerHTML = `

        <!-- ========================================
             OM MIG
        ======================================== -->

        <section class="about-intro">

            <div class="about-text">

                <p class="section-kicker">
                    Om mig
                </p>

                <h2>
                    Systemutvecklare .NET med fokus på fullstack
                </h2>

                <p class="about-lead">
                    Jag studerar Systemutvecklare .NET på
                    TUC Yrkeshögskola i Linköping och tycker om
                    att bygga lösningar där frontend, backend
                    och API:er fungerar tillsammans.
                </p>

                <p>
                    Under utbildningen har jag arbetat med bland annat
                    C#, .NET, React, Blazor och React Native.
                    Jag gillar att förstå hela flödet i en applikation –
                    från användargränssnitt och affärslogik till API,
                    databas och integrationer.
                </p>

                <p>
                    Jag utvecklas bäst när jag får kombinera
                    problemlösning, struktur och kreativitet och arbetar
                    gärna i team där man lär av varandra och bygger
                    lösningar steg för steg.
                </p>

                <div class="about-meta">
                    <span>Systemutvecklare .NET</span>
                    <span>Fullstack</span>
                    <span>LIA 1: Consid AB</span>
                </div>

            </div>

        </section>


        <!-- ========================================
             ERFARENHET - CONSID
        ======================================== -->

        <section class="experience-section">

            <div class="section-header experience-header">
                <p class="section-kicker">
                    Erfarenhet
                </p>

                <h3>
                    Praktisk systemutveckling
                </h3>
            </div>


            <article class="experience-card">

                <div class="experience-card-header">

                    <div>
                        <p class="experience-company">
                            Consid AB · Linköping
                        </p>

                        <h4>
                            Systemutvecklare – LIA 1
                        </h4>

                        <p class="experience-project">
                            STB Driftportalen
                        </p>
                    </div>


                    <div class="experience-meta">

                        <span class="experience-status completed">
                            Genomförd
                        </span>

                        <span class="experience-date">
                            Mars – juni 2026
                        </span>

                    </div>

                </div>


                <!-- Progress / tidslinje -->

                <div class="experience-timeline">

                    <span class="timeline-date">
                        30 mars 2026
                    </span>

                    <div class="timeline-track">
                        <div class="timeline-fill completed"></div>
                    </div>

                    <span class="timeline-date">
                        5 juni 2026
                    </span>

                </div>


                <p class="experience-description">
                    Under min LIA arbetade jag i ett skarpt kundprojekt
                    med vidareutveckling av STB Driftportalen – ett
                    webbaserat system för dokumentation, projektflöden
                    och arbetsberedning.
                </p>


                <div class="experience-grid">

                    <!-- Mitt arbete -->

                    <div class="experience-column">

                        <h5>
                            Mitt arbete
                        </h5>

                        <ul>
                            <li>
                                Utveckling i både frontend och backend.
                            </li>

                            <li>
                                Funktionalitet för arbetsberedningar,
                                signering och validering.
                            </li>

                            <li>
                                PDF-generering och dokumentflöden.
                            </li>

                            <li>
                                Fil- och bilduppladdning till SharePoint.
                            </li>

                            <li>
                                Integrationer med Microsoft Graph API.
                            </li>

                            <li>
                                E-postflöden och verifiering.
                            </li>
                        </ul>

                    </div>


                    <!-- Teknik -->

                    <div class="experience-column">

                        <h5>
                            Teknik
                        </h5>

                        <div class="experience-tech">
                            <span>React</span>
                            <span>TypeScript</span>
                            <span>JavaScript</span>
                            <span>.NET 8</span>
                            <span>REST API</span>
                            <span>SQL Server</span>
                            <span>SharePoint</span>
                            <span>Microsoft Graph API</span>
                            <span>Node.js</span>
                            <span>Puppeteer</span>
                            <span>Postman</span>
                            <span>DevOps</span>
                            <span>Git</span>
                            <span>GitHub</span>
                        </div>

                    </div>

                </div>

            </article>

        </section>


        <!-- ========================================
             LIA 2 / NÄSTA STEG
        ======================================== -->

        <section class="next-step-section">

            <div class="next-step-card">

                <div class="next-step-content">

                    <p class="section-kicker">
                        Nästa steg
                    </p>

                    <h4>
                        LIA 2 & examensarbete
                    </h4>

                    <p>
                        Nästa LIA-period är planerad till
                        14 december 2026 – 28 maj 2027.
                    </p>


                    <!-- Progress / tidslinje -->

                    <div class="experience-timeline next-step-timeline">

                        <span class="timeline-date">
                            14 dec 2026
                        </span>

                        <div class="timeline-track">
                            <div class="timeline-fill upcoming"></div>
                        </div>

                        <span class="timeline-date">
                            28 maj 2027
                        </span>

                    </div>

                </div>


                <span class="experience-status upcoming">
                    Kommande
                </span>

            </div>

        </section>


        <!-- ========================================
             KOMPETENSER
        ======================================== -->

        <section id="skills" class="skills-section">

            <div class="section-header skills-header">

                <p class="section-kicker">
                    Teknik & arbetssätt
                </p>

                <h3>
                    Mina kompetenser
                </h3>

                <p class="skills-intro">
                    Tekniker och arbetssätt som jag har använt
                    i utbildning, projekt och praktik.
                </p>

            </div>


            <div class="skills-grid">

                <!-- Backend -->

                <article class="skill-category">

                    <h4>
                        Backend & .NET
                    </h4>

                    <div class="skill-tags">
                        <span>C#</span>
                        <span>.NET</span>
                        <span>ASP.NET Core</span>
                        <span>Web API</span>
                        <span>Entity Framework Core</span>
                        <span>Blazor</span>
                    </div>

                </article>


                <!-- Frontend -->

                <article class="skill-category">

                    <h4>
                        Frontend
                    </h4>

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


                <!-- Mobile -->

                <article class="skill-category">

                    <h4>
                        Mobile
                    </h4>

                    <div class="skill-tags">
                        <span>React Native</span>
                        <span>Expo</span>
                        <span>Expo Router</span>
                        <span>Cross-platform</span>
                        <span>expo-image-picker</span>
                    </div>

                </article>


                <!-- API & Data -->

                <article class="skill-category">

                    <h4>
                        API & Data
                    </h4>

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


                <!-- Tools -->

                <article class="skill-category">

                    <h4>
                        Tools & Workflow
                    </h4>

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


        <!-- ========================================
             FRITID
        ======================================== -->

        <section class="about-hobbies">

            <div class="section-header">

                <p class="section-kicker">
                    Fritid &amp; intressen
                </p>

                <h3>
                    Det som ger mig energi utanför studierna
                </h3>

            </div>


            <div class="hobbies-grid">

                <!-- Musik -->

                <div class="hobby-card">

                    <span
                        class="hobby-icon"
                        aria-hidden="true"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            focusable="false"
                        >
                            <path
                                d="M16 3v11.2a3.2 3.2 0 1 0 2 2.97V7h4V3h-6Z">
                            </path>
                        </svg>
                    </span>

                    <div>
                        <h4>Musik</h4>

                        <p>
                            Musik hjälper mig att behålla
                            fokus och kreativitet.
                        </p>
                    </div>

                </div>


                <!-- Dans -->

                <div class="hobby-card">

                    <span
                        class="hobby-icon"
                        aria-hidden="true"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            focusable="false"
                        >
                            <path
                                d="M14.5 4.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.2 5.1 2.4-1.4 1.6 2.3 2.8 1.4-.9 1.8-3.3-1.6-.9-1.3-.8 3 2.1 2.1V21H10v-4.1l-2.5-2.5a2 2 0 0 1-.5-1.9l1-4.8 1.3 1.9Z">
                            </path>
                        </svg>
                    </span>

                    <div>
                        <h4>Dans</h4>

                        <p>
                            Dans ger mig energi och balans
                            vid sidan av studierna.
                        </p>
                    </div>

                </div>


                <!-- Träning -->

                <div class="hobby-card">

                    <span
                        class="hobby-icon"
                        aria-hidden="true"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            focusable="false"
                        >
                            <path
                                d="M2 10h3v4H2v-4Zm17 0h3v4h-3v-4ZM6 8h2v8H6V8Zm10 0h2v8h-2V8ZM9 11h6v2H9v-2Z">
                            </path>
                        </svg>
                    </span>

                    <div>
                        <h4>Träning</h4>

                        <p>
                            Träning är en viktig del av min
                            vardag och bidrar till balans och energi.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    `;
}