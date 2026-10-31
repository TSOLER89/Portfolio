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
                    Vill du prata om LIA, examensarbete,
                    utveckling eller framtida möjligheter?
                    Jag söker LIA 2 och examensarbete inom systemutveckling.
                </p>
            </div>


            <p class="contact-cv"><a class="btn btn-secondary" href="Assets/PDF/Tsoler-Hayitian-utvecklare.pdf" target="_blank" rel="noopener noreferrer">Läs mitt CV (PDF) →</a></p>
            <div class="contact-grid">

                <!-- E-post -->

                <a
                    href="mailto:tsoler.hayitian.syne25lin@edu.tucsweden.se"
                    class="contact-card"
                >
                    <div class="contact-icon">
                        ✉
                    </div>

                    <div>
                        <h3>E-post</h3>

                        <p>
                            Skicka ett meddelande direkt till mig.
                        </p>

                        <span>
                            Skriv e-post →
                        </span>
                    </div>
                </a>


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
                        <h3>LinkedIn</h3>

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
                        <h3>GitHub</h3>

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
}
