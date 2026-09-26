import { initRouter } from "./router.js";
import { initMusic } from "./ui/music.js";
import { initMobileMenu } from "./ui/mobileMenu.js";

document.addEventListener("DOMContentLoaded", () => {
    initMusic();
    initRouter();
    initMobileMenu();
});
