import { initRouter } from "./router.js";
import { initMobileMenu } from "./ui/mobileMenu.js";

document.addEventListener("DOMContentLoaded", () => {
    initRouter();
    initMobileMenu();
});
