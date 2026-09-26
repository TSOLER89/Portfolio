export function initMusic() {
    const music = document.getElementById("bgMusic");
    const musicToggle = document.getElementById("musicToggle");

    if (!music || !musicToggle) {
        return;
    }

    musicToggle.addEventListener("click", async () => {
        if (music.paused) {
            try {
                await music.play();

                musicToggle.classList.add("playing");
                musicToggle.setAttribute("aria-pressed", "true");
                musicToggle.setAttribute(
                    "aria-label",
                    "Pausa bakgrundsmusik"
                );
            } catch (error) {
                console.error("Musiken kunde inte startas:", error);
            }

            return;
        }

        music.pause();

        musicToggle.classList.remove("playing");
        musicToggle.setAttribute("aria-pressed", "false");
        musicToggle.setAttribute(
            "aria-label",
            "Spela bakgrundsmusik"
        );
    });
}