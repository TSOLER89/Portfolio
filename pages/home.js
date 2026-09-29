import { createFloatingLogos } from "../ui/FloatingLogos.js";

export function renderHome() {
    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="hero">
            <div class="hero-container">

                <div class="hero-content">
                    <p class="hero-eyebrow">
                        Systemutvecklare .NET • Fullstack Developer
                    </p>

                    <h1 class="hero-title">
                        Hej, jag är
                        <span>Tsoler Hayitian</span>
                    </h1>

                    <p class="hero-description">
                        Jag bygger moderna webb- och mobilapplikationer med
                        C#, .NET, React, Blazor och React Native.
                    </p>

                    <p class="hero-subtext">
                        Jag studerar Systemutvecklare .NET i Linköping
                        och utvecklar fullstacklösningar där frontend,
                        backend, API:er och användarupplevelse möts.
                    </p>

                    <div class="hero-actions">
                        <a href="#projects"
                           class="btn btn-primary"
                           data-page="projects">
                            Se mina projekt
                        </a>

                    </div>

                    <div class="hero-tech">
                        <span>C#</span>
                        <span>.NET</span>
                        <span>React</span>
                        <span>Blazor</span>
                        <span>React Native</span>
                    </div>
                </div>

                <div class="hero-image-wrapper">
                    <img
                        src="Assets/Photos/CvBild.jpg"
                        alt="Tsoler Hayitian"
                        class="hero-image"
                    >
                </div>

            </div>
        </section>

        <div class="floating-logos" id="floatingLogos"></div>
    `;

    createFloatingLogos();
}