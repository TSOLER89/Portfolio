import { renderHome } from "./pages/home.js";
import { renderAbout } from "./pages/about.js";
import { renderProjects } from "./pages/projects.js";
import { renderContact } from "./pages/contact.js";

export function initRouter() {

    const loadPage = (page) => {
        switch (page) {
            case "home":
                renderHome();
                break;

            case "about":
                renderAbout();
                break;

            case "projects":
                renderProjects();
                break;

            case "contact":
                renderContact();
                break;

            default:
                renderHome();
        }
    };

    document.addEventListener("click", (event) => {
        const link = event.target.closest("[data-page]");

        if (!link) {
            return;
        }

        event.preventDefault();

        const page = link.dataset.page;

        loadPage(page);
    });

    loadPage("home");
}