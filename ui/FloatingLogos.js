let animations = [];

export function createFloatingLogos() {
    const container = document.getElementById("floatingLogos");

    if (!container) {
        return;
    }

    removeFloatingLogos();

    const logos = [
        "Assets/Photos/dotnet.svg",
        "Assets/Photos/javascript.svg",
        "Assets/Photos/html.svg",
        "Assets/Photos/react.svg",
        "Assets/Photos/github.svg"
    ];

    const isMobile = window.innerWidth < 768;

    const visibleLogos = isMobile
        ? logos.slice(0, 3)
        : logos;

    visibleLogos.forEach((src, index) => {
        const img = document.createElement("img");

        img.src = src;
        img.alt = "";
        img.setAttribute("aria-hidden", "true");

        img.classList.add("floating-logo");

        const position = getStartPosition(index, isMobile);

        img.style.left = `${position.x}%`;
        img.style.top = `${position.y}%`;

        container.appendChild(img);

        animateLogo(img);
    });
}


function getStartPosition(index, isMobile) {

    const desktopPositions = [
        { x: 62, y: 78 }, //.Net
        { x: 90, y: 20 }, // JavaScript
        { x: 61, y: 48 }, // HTML
        { x: 88, y: 72 }, // React
        { x: 52, y: 12 } // GitHub
    ];

    const mobilePositions = [
        { x: 6, y: 75 },
        { x: 82, y: 12 },
        { x: 78, y: 65 }
    ];

    const positions = isMobile
        ? mobilePositions
        : desktopPositions;

    return positions[index];
}


function animateLogo(img) {

    let x = 0;
    let y = 0;

    let directionX = Math.random() > 0.5 ? 1 : -1;
    let directionY = Math.random() > 0.5 ? 1 : -1;

    const speedX = 0.12 + Math.random() * 0.12;
    const speedY = 0.08 + Math.random() * 0.1;

    function animate() {

        x += speedX * directionX;
        y += speedY * directionY;

        if (x > 18 || x < -18) {
            directionX *= -1;
        }

        if (y > 16 || y < -16) {
            directionY *= -1;
        }

        img.style.transform =
            `translate(${x}px, ${y}px) rotate(${x * 0.5}deg)`;

        const frame = requestAnimationFrame(animate);

        animations.push(frame);
    }

    animate();
}


export function removeFloatingLogos() {

    animations.forEach(frame => {
        cancelAnimationFrame(frame);
    });

    animations = [];

    const container =
        document.getElementById("floatingLogos");

    if (container) {
        container.innerHTML = "";
    }
}