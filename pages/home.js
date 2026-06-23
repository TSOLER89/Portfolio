import { createFloatingLogos } from "../ui/FloatingLogos.js";

export function renderHome() {
    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="hero">
            <div class="home-content">
                <img src="Assets/Photos/CvBild.jpg" alt="Porträtt av Tsoler Hayitian" class="profile-image">
                <h2>Hej! Välkommen till min portfolio.</h2>
                <p>Jag är systemutvecklarstudent med intresse för webbutveckling, .NET och moderna digitala lösningar.</p>
                <p>Här kan du läsa mer om mig, se projekt jag har byggt och kontakta mig.</p>
            </div>
        </section>
        <div class="floating-logos" id="floatingLogos"></div>
    `;

    createFloatingLogos();
}
