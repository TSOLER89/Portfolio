export function renderProjects() {
    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="projects-section">

            <!-- SIDHUVUD -->

            <div class="section-header projects-header">
                <p class="section-kicker">Portfolio</p>

                <h2>Mina projekt</h2>

                <p class="projects-intro">
                    Ett urval av projekt som visar hur jag arbetar med
                    frontend, backend, API:er, databaser och mobilutveckling.
                </p>
            </div>


            <!-- ========================================
                 UTVALDA PROJEKT
            ======================================== -->

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
                ></div>

            </section>


            <!-- ========================================
                 PÅGÅENDE PROJEKT
            ======================================== -->

            <section
                id="ongoingProjectsSection"
                class="project-group ongoing-projects"
            >

                <div class="project-group-heading">

                    <span class="project-group-icon ongoing-icon">
                        ◉
                    </span>

                    <div>
                        <p class="section-kicker">
                            Under utveckling
                        </p>

                        <h3>
                            Pågående projekt
                        </h3>
                    </div>

                </div>


                <div
                    id="ongoingProjects"
                    class="projects-container"
                ></div>

            </section>


            <!-- ========================================
                 TIDIGARE PROJEKT
            ======================================== -->

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
                ></div>

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

            const ongoingContainer =
                document.getElementById(
                    "ongoingProjects"
                );

            const earlierContainer =
                document.getElementById(
                    "earlierProjects"
                );


            const featuredSection =
                document.getElementById(
                    "featuredProjectsSection"
                );

            const ongoingSection =
                document.getElementById(
                    "ongoingProjectsSection"
                );

            const earlierSection =
                document.getElementById(
                    "earlierProjectsSection"
                );


            /* ========================================
               SORTERA PROJEKT
            ======================================== */

            const featuredProjects =
                projects.filter(
                    project =>
                        project.featured === true
                );


            const ongoingProjects =
                projects.filter(
                    project =>
                        project.status === "Pågående" &&
                        project.featured !== true
                );


            const earlierProjects =
                projects.filter(
                    project =>
                        project.featured !== true &&
                        project.status !== "Pågående"
                );


            /* ========================================
               UTVALDA
            ======================================== */

            featuredProjects.forEach(project => {

                featuredContainer.appendChild(
                    createProjectCard(
                        project,
                        "featured"
                    )
                );

            });


            /* ========================================
               PÅGÅENDE
            ======================================== */

            ongoingProjects.forEach(project => {

                ongoingContainer.appendChild(
                    createProjectCard(
                        project,
                        "ongoing"
                    )
                );

            });


            /* ========================================
               TIDIGARE
            ======================================== */

            earlierProjects.forEach(project => {

                earlierContainer.appendChild(
                    createProjectCard(
                        project,
                        "compact"
                    )
                );

            });


            /* Dölj tomma grupper */

            if (featuredProjects.length === 0) {
                featuredSection.style.display =
                    "none";
            }

            if (ongoingProjects.length === 0) {
                ongoingSection.style.display =
                    "none";
            }

            if (earlierProjects.length === 0) {
                earlierSection.style.display =
                    "none";
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
    variant
) {

    const card =
        document.createElement("article");


    card.classList.add(
        "project-card"
    );


    if (variant === "featured") {
        card.classList.add(
            "featured-project"
        );
    }


    if (variant === "ongoing") {
        card.classList.add(
            "ongoing-project-card"
        );
    }


    if (variant === "compact") {
        card.classList.add(
            "compact-project-card"
        );
    }


    /* ========================================
       IMAGE
    ======================================== */

    const image =
        project.image
            ? `
                <div class="project-image-wrapper">

                    <img
                        src="${project.image}"
                        alt="Projektbild för ${project.title}"
                        class="project-image"
                        loading="lazy"
                    >

                </div>
            `
            : "";


    /* ========================================
       TECH TAGS
    ======================================== */

    const techTags =
        (project.tech || [])
            .map(item => `
                <span class="tag">
                    ${item}
                </span>
            `)
            .join("");


    /* ========================================
       TIDIGARE PROJEKT
       Mindre information
    ======================================== */

    if (variant === "compact") {

        return createCompactProjectCard(
            card,
            project,
            image,
            techTags
        );

    }


    /* ========================================
       FEATURED / ONGOING
    ======================================== */

    const highlights =
        (project.highlights || [])
            .map(item => `
                <li>
                    ${item}
                </li>
            `)
            .join("");


    const links =
        createProjectLinks(project);


    card.innerHTML = `

        ${image}


        <div class="project-card-content">


            <div class="project-card-top">

                <div class="project-badges">

                    ${
                        variant === "featured"
                            ? `
                                <span class="featured-badge">
                                    Utvalt projekt
                                </span>
                            `
                            : ""
                    }


                    ${
                        variant === "ongoing"
                            ? `
                                <span class="project-status-badge">
                                    Pågående
                                </span>
                            `
                            : ""
                    }

                </div>


                <span class="project-type">
                    ${project.type || "Projekt"}
                </span>

            </div>


            <h3>
                ${project.title}
            </h3>


            <p class="project-description">
                ${project.description || ""}
            </p>


            <div class="tags">
                ${techTags}
            </div>


            ${
                variant === "featured" &&
                project.value

                    ? `
                        <div class="project-value">

                            <h4>
                                Det här visar
                            </h4>

                            <p>
                                ${project.value}
                            </p>

                        </div>
                    `

                    : ""
            }


            ${
                variant === "featured" &&
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


            ${
                variant === "featured" &&
                highlights

                    ? `
                        <ul class="highlights">
                            ${highlights}
                        </ul>
                    `

                    : ""
            }


            ${links}


        </div>
    `;


    return card;
}


/* ========================================
   COMPACT PROJECT CARD
======================================== */

function createCompactProjectCard(
    card,
    project,
    image,
    techTags
) {

    const githubLink =
        project.links?.github

            ? `
                <a
                    href="${project.links.github}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="compact-project-link"
                >
                    GitHub →
                </a>
            `

            : "";


    card.innerHTML = `

        ${image}


        <div class="project-card-content">


            <div class="compact-project-header">

                <span class="project-type">
                    ${project.type || "Projekt"}
                </span>


                <h3>
                    ${project.title}
                </h3>

            </div>


            <div class="tags compact-tags">
                ${techTags}
            </div>


            ${githubLink}


        </div>
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


    /* Web / GitHub */

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


    /* API */

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


    /* Mobile */

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


    /* Live */

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


    if (projectLinks.length === 0) {
        return "";
    }


    return `
        <div class="project-links">
            ${projectLinks.join("")}
        </div>
    `;
}