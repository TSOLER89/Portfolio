import { jobSearch, startLabel, endLabel, periodLabel } from "../Data/job-search.js";

﻿export function renderHome() {
    document.getElementById("app").innerHTML = `
        <section class="hero"><div class="hero-container">
            <div class="hero-content">
                <p class="hero-eyebrow">Systemutvecklare .NET · Linköping</p>
                <h1 class="hero-title">Tsoler Hayitian<span>
                Från verksamhetens behov till fungerande kod.
                </span>
                </h1>
                <p class="hero-description">
                Jag utvecklar webbapplikationer med C#, .NET, React och TypeScript med fokus på samspelet mellan gränssnitt, API och databas.
                </p>
                <p class="hero-subtext">
                Studerar systemutveckling på TUC och har praktisk fullstackerfarenhet från Consid, med målet att fortsätta som junior systemutvecklare.</p>
                <aside class="lia-summary" aria-label="Söker LIA 2 och examensarbete">
                    <p class="lia-summary-title">Söker LIA 2 och examensarbete</p>
                    <p class="lia-summary-dates"><time datetime="${jobSearch.startDate}">${startLabel}</time>–<time datetime="${jobSearch.endDate}">${endLabel}</time></p>
                    <p class="lia-summary-location">${jobSearch.locationPreference}.</p>
                </aside>
                <div class="hero-actions"><a href="#projects" class="btn btn-primary" data-page="projects">Utforska mina projekt →
                </a>
                <a href="Assets/PDF/Tsoler-Hayitian-utvecklare.pdf" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                Läs mitt CV (PDF)
                </a>
                </div>
                <div class="hero-tech" aria-label="Centrala tekniker">
                <span>
                C# / .NET</span><span>React / TypeScript</span><span>SQL
                </span>
                <span>Umbraco</span>
                </div>
            </div>

            <div class="hero-image-wrapper"><img src="Assets/Photos/CvBild.jpg" alt="Porträtt av Tsoler Hayitian" class="hero-image" width="360" height="440">
            <p class="portrait-caption">Fullstack · Webb · Integrationer
            </p>
            </div>
        </div>
        </section>

        <section class="home-evidence" aria-labelledby="evidence-title">
            <div class="section-header"><p class="section-kicker">Erfarenhet i praktiken</p><h2 id="evidence-title">Teknik med ett tydligt sammanhang.</h2></div>
            <div class="evidence-grid">
                <article><span class="evidence-number">01 / Kundprojekt</span><h3>Fullstack på Consid</h3><p>React, TypeScript och .NET 8 i STB Driftportal. API-integrationer, PDF-automatisering och dokumenthantering i SharePoint.</p><a href="#about" data-page="about">Min erfarenhet →</a></article>
                <article><span class="evidence-number">02 / Applikationer</span><h3>Hela flödet i .NET</h3><p>Från marknadsplatsen NorGyank till JobTrack och TUC Booking System: gränssnitt, affärslogik, API:er och databaser.</p><a href="#projects" data-page="projects">Se projekten →</a></article>
                <article><span class="evidence-number">03 / CMS & webb</span><h3>Innehåll som går att förvalta</h3><p>Umbraco, Razor och Sass i Förening Pixel. Mitt ansvar var sidan Matcher & träningar, med innehållsmodeller och responsiva vyer.</p><a href="#projects" data-page="projects">Se CMS-projektet →</a></article>
            </div>
        </section>
        <section class="home-contact">
        <div>
        <p class="section-kicker">
        Nästa steg
        </p>
        <h2>En plats att bidra och utvecklas.</h2>
        <p>Jag söker LIA 2 och examensarbete ${periodLabel}. ${jobSearch.locationPreference}.</p>
        </div>
        <a href="#contact" data-page="contact" class="btn btn-primary">
        Ta kontakt →
        </a>
        </section>
    `;
}
