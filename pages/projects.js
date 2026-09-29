export function renderProjects() {
    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="projects-section">

            <!-- Sidans rubrik -->
            <div class="section-header projects-header">
                <p class="section-kicker">Portfolio</p>

                <h2>Mina projekt</h2>

                <p class="projects-intro">
                    Ett urval av projekt som visar hur jag arbetar med
                    frontend, backend, API:er, databaser och mobilutveckling.
                </p>
            </div>


            <!-- Utvalda projekt -->
            <section
                id="featuredProjectsSection"
                class="project-group"
            >
                <div class="project-group-heading">

                    <span class="project-group-icon">
                        ★
                    </span>

                    <div>
                        <p class="section-kicker">
                            Featured
                        </p>

                        <h3>
                            Utvalda projekt
                        </h3>
                    </div>

                </div>

                <div
                    id="featuredProjects"
                    class="projects-container"
                >
                </div>
            </section>


            <!-- Tidigare projekt -->
            <section
                id="earlierProjectsSection"
                class="project-group earlier-projects"
            >
                <div class="project-group-heading">

                    <div>
                        <p class="section-kicker">
                            Arkiv
                        </p>

                        <h3>
                            Tidigare projekt
                        </h3>
                    </div>

                </div>

                <div
                    id="earlierProjects"
                    class="projects-container"
                >
                </div>
            </section>

        </section>
    `;


    fetch("Data/db.json")
        .then(response => {

            if (!response.ok) {
                throw new Error(
                    "Kunde inte läsa projektdata."
                );
            }

            return response.json();
        })

        .then(projects => {

            const featuredContainer =
                document.getElementById(
                    "featuredProjects"
                );

            const earlierContainer =
                document.getElementById(
                    "earlierProjects"
                );

            const featuredSection =
                document.getElementById(
                    "featuredProjectsSection"
                );

            const earlierSection =
                document.getElementById(
                    "earlierProjectsSection"
                );


            /*
                Projekt med:
                "featured": true

                hamnar under Utvalda projekt.
            */

            const featuredProjects =
                projects.filter(
                    project =>
                        project.featured === true
                );


            /*
                Alla andra projekt hamnar
                under Tidigare projekt.
            */

            const earlierProjects =
                projects.filter(
                    project =>
                        project.featured !== true
                );


            /*
                Rendera utvalda projekt
            */

            featuredProjects.forEach(project => {

                const card =
                    createProjectCard(
                        project,
                        true
                    );

                featuredContainer.appendChild(card);
            });


            /*
                Rendera tidigare projekt
            */

            earlierProjects.forEach(project => {

                const card =
                    createProjectCard(
                        project,
                        false
                    );

                earlierContainer.appendChild(card);
            });


            /*
                Dölj en sektion om den är tom.
            */

            if (featuredProjects.length === 0) {
                featuredSection.style.display = "none";
            }

            if (earlierProjects.length === 0) {
                earlierSection.style.display = "none";
            }

        })

        .catch(error => {

            console.error(
                "Fel vid hämtning av projekt:",
                error
            );

            const featuredContainer =
                document.getElementById(
                    "featuredProjects"
                );

            featuredContainer.innerHTML = `
                <p class="projects-error">
                    Kunde inte läsa in projekten just nu.
                </p>
            `;
        });
}


/* ========================================
   CREATE PROJECT CARD
======================================== */

function createProjectCard(
    project,
    isFeatured
) {

    const card =
        document.createElement("article");


    card.classList.add(
        "project-card"
    );


    /*
        Utvalda projekt får
        en extra CSS-klass.
    */

    if (isFeatured) {
        card.classList.add(
            "featured-project"
        );
    }


    /*
        Skapa teknik-tags
    */

    const techTags =
        project.tech
            .map(item => `
                <span class="tag">
                    ${item}
                </span>
            `)
            .join("");


    /*
        Skapa listan med highlights
    */

    const highlights =
        project.highlights
            .map(item => `
                <li>
                    ${item}
                </li>
            `)
            .join("");


    /*
        Skapa GitHub / Live-länkar
    */

    const links =
        createProjectLinks(project);


    /*
        Bygg själva projektkortet
    */

    card.innerHTML = `

        <div class="project-card-top">

            ${
                isFeatured
                    ? `
                        <span class="featured-badge">
                            Utvalt projekt
                        </span>
                    `
                    : ""
            }

            <span class="project-type">
                ${project.type || "Projekt"}
            </span>

        </div>


        <h3>
            ${project.title}
        </h3>


        <p class="project-description">
            ${project.description}
        </p>


        <div class="tags">
            ${techTags}
        </div>


        <div class="project-value">

            <h4>
                Det här visar
            </h4>

            <p>
                ${project.value}
            </p>

        </div>


        ${
            project.contribution
                ? `
                    <div class="project-contribution">

                        <h4>
                            Mitt bidrag
                        </h4>

                        <p>
                            ${project.contribution}
                        </p>

                    </div>
                `
                : ""
        }


        <ul class="highlights">
            ${highlights}
        </ul>


        ${links}

    `;


    return card;
}


/* ========================================
   CREATE PROJECT LINKS
======================================== */

function createProjectLinks(project) {

    const projectLinks = [];

    const links =
        project.links || {};


    /*
        Vanlig GitHub-länk.

        Om projektet även har backend
        eller mobile kallar vi den
        Web GitHub.
    */

    if (links.github) {

        const githubLabel =
            links.backend ||
            links.mobile

                ? "Web GitHub"
                : "GitHub";


        projectLinks.push(`
            <a
                href="${links.github}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn"
            >
                ${githubLabel}
            </a>
        `);
    }


    /*
        Backend / API
    */

    if (links.backend) {

        projectLinks.push(`
            <a
                href="${links.backend}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-secondary"
            >
                API GitHub
            </a>
        `);
    }


    /*
        Mobilapp
    */

    if (links.mobile) {

        projectLinks.push(`
            <a
                href="${links.mobile}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-secondary"
            >
                Mobile GitHub
            </a>
        `);
    }


    /*
        Live-demo
    */

    if (links.live) {

        projectLinks.push(`
            <a
                href="${links.live}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-secondary"
            >
                Live-demo
            </a>
        `);
    }


    /*
        Om projektet inte har någon länk
        behöver vi inte skapa en tom div.
    */

    if (projectLinks.length === 0) {
        return "";
    }


    return `
        <div class="project-links">
            ${projectLinks.join("")}
        </div>
    `;
}