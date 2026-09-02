const projectList = document.querySelector("#project-list");

window.PORTFOLIO_PROJECTS.forEach((project, index) => {
  const article = document.createElement("article");
  article.className = "project-card";
  article.innerHTML = `
    <span class="project-count">0${index + 1}</span>
    <div>
      <h3>${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="highlight-list">${project.highlights.map((item) => `<span>${item}</span>`).join("")}</div>
      <div class="tech-list">${project.technologies.map((item) => `<span>${item}</span>`).join("")}</div>
    </div>
    <a class="project-link" href="${project.github}" target="_blank" rel="noreferrer" aria-label="Abrir ${project.title} no GitHub">↗</a>`;
  projectList.appendChild(article);
});

document.querySelector("#year").textContent = new Date().getFullYear();
