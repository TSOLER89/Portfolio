import { jobSearch, startLabel, endLabel } from "../Data/job-search.js";

export function renderContact() {
    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="contact-section">

            <div class="contact-header">
                <p class="section-kicker">
                    Kontakt
                </p>

                <h1>
                    Hör gärna av dig
                </h1>

                <p>
                    Jag söker en plats för LIA 2 och examensarbete inom .NET och fullstackutveckling.
                    Hör gärna av dig om ni har en möjlighet eller vill veta mer om mina projekt.
                </p>
            </div>


            <section class="contact-availability" aria-labelledby="lia-availability-heading">
                <h2 id="lia-availability-heading">LIA 2 och examensarbete</h2>
                <dl>
                    <div><dt>Period</dt><dd><time datetime="${jobSearch.startDate}">${startLabel}</time>–<time datetime="${jobSearch.endDate}">${endLabel}</time></dd></div>
                    <div><dt>Ort och arbetsform</dt><dd>${jobSearch.locationPreference}.</dd></div>
                </dl>
            </section>

            <p class="contact-cv"><a class="btn btn-secondary" href="Assets/PDF/Tsoler-Hayitian-utvecklare.pdf" target="_blank" rel="noopener noreferrer">Läs mitt CV (PDF) →</a></p>
            <div class="contact-grid">

                <!-- E-post -->

                <article class="contact-card contact-email-card">
                    <div class="contact-icon" aria-hidden="true">✉</div>
                    <div class="contact-email-content">
                        <h2>E-post</h2>
                        <p>Kontakta mig om LIA, examensarbete eller andra utvecklingsmöjligheter.</p>
                        <a class="contact-email-address" href="mailto:${jobSearch.email}">${jobSearch.email}</a>
                        <div class="contact-email-actions">
                            <a class="btn btn-secondary" href="mailto:${jobSearch.email}">Skriv e-post</a>
                            <button type="button" class="btn btn-secondary" data-copy-email>Kopiera mejladress</button>
                        </div>
                        <p class="contact-copy-status" data-copy-status role="status" aria-live="polite" aria-atomic="true"></p>
                    </div>
                </article>


                <!-- LinkedIn -->

                <a
                    href="https://www.linkedin.com/in/tsoler-hayitian-351ba7331/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="contact-card"
                >
                    <div class="contact-icon">
                        in
                    </div>

                    <div>
                        <h2>LinkedIn</h2>

                        <p>
                            Kontakta mig eller se min professionella profil.
                        </p>

                        <span>
                            Öppna LinkedIn →
                        </span>
                    </div>
                </a>


                <!-- GitHub -->

                <a
                    href="https://github.com/TSOLER89"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="contact-card"
                >
                    <div class="contact-icon">
                        &lt;/&gt;
                    </div>

                    <div>
                        <h2>GitHub</h2>

                        <p>
                            Se mina projekt, repositories och kod.
                        </p>

                        <span>
                            Öppna GitHub →
                        </span>
                    </div>
                </a>

            </div>

        </section>
    `;

    const pageRoot = app.firstElementChild;
    const copyButton = pageRoot.querySelector("[data-copy-email]");
    const copyStatus = pageRoot.querySelector("[data-copy-status]");
    copyButton.addEventListener("click", async () => {
        copyButton.disabled = true;
        copyButton.setAttribute("aria-busy", "true");
        copyStatus.textContent = "";
        try {
            if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
            await navigator.clipboard.writeText(jobSearch.email);
            if (pageRoot.isConnected) copyStatus.textContent = "Mejladressen är kopierad.";
        } catch {
            if (pageRoot.isConnected) copyStatus.textContent = "Kunde inte kopiera automatiskt. Markera mejladressen och kopiera den manuellt.";
        } finally {
            copyButton.disabled = false;
            copyButton.removeAttribute("aria-busy");
        }
    });
}
