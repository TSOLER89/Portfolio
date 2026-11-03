import { renderHome } from "./pages/home.js";
import { renderAbout } from "./pages/about.js";
import { renderProjects } from "./pages/projects.js";
import { renderContact } from "./pages/contact.js";

export function initRouter() {
    const pages = { home: renderHome, about: renderAbout, projects: renderProjects, contact: renderContact };
    const titles = { home: "Systemutvecklare .NET", about: "Om mig", projects: "Projekt", contact: "Kontakt" };
    function loadPage(moveFocus = true) {
        const requested = location.hash.slice(1) || "home";
        const page = Object.hasOwn(pages, requested) ? requested : "home";
        pages[page]();
        document.title = `Tsoler Hayitian | ${titles[page]}`;
        document.querySelectorAll(".nav-links [data-page]").forEach(link => {
            if (link.dataset.page === page) link.setAttribute("aria-current", "page");
            else link.removeAttribute("aria-current");
        });
        if (moveFocus) {
            document.getElementById("app").focus({ preventScroll: true });
            window.scrollTo(0, 0);
        }
    }
    // Keep the current route and rendered content when skipping the shared navigation.
    document.querySelector(".skip-link")?.addEventListener("click", event => {
        if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        const main = document.getElementById("app");
        main.focus({ preventScroll: true });
        main.scrollIntoView({ block: "start", behavior: "instant" });
    });
    window.addEventListener("hashchange", () => loadPage());
    loadPage(false);
}
