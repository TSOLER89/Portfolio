export function renderProjects() {
    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="projects-section">
            <h2>Mina Projekt</h2>
            <p class="projects-intro">Ett urval av projekt som visar hur jag arbetar med logik, användarflöden, API:er och fullstackutveckling.</p>
            <div id="projectsContainer" class="projects-container"></div>
        </section>
    `;

    fetch("Data/db.json")
        .then(res => res.json())
        .then(projects => {
            const container = document.getElementById("projectsContainer");

            projects.forEach(project => {
                const card = document.createElement("article");
                card.classList.add("project-card");

                const techTags = project.tech
                    .map(item => `<span class="tag">${item}</span>`)
                    .join("");

                const highlights = project.highlights
                    .map(item => `<li>${item}</li>`)
                    .join("");

                const links = `
                    <div class="project-links">
                        <a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="btn">GitHub</a>
                        ${project.links.live ? `<a href="${project.links.live}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Live-demo</a>` : ""}
                    </div>
                `;

                card.innerHTML = `
                    <div class="project-card-top">
                        <span class="project-type">${project.type || "Projekt"}</span>
                    </div>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tags">${techTags}</div>
                    <div class="project-value">
                        <h4>Det här visar</h4>
                        <p>${project.value}</p>
                    </div>
                    <ul class="highlights">${highlights}</ul>
                    ${links}
                `;

                container.appendChild(card);
            });
        })
        .catch(() => {
            const container = document.getElementById("projectsContainer");
            container.innerHTML = `<p class="projects-error">Kunde inte läsa in projekten just nu.</p>`;
        });
}
