document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('data/projects.json');
    const projects = await response.json();
    const projectsGrid = document.getElementById('projects-grid');

    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <img src="assets/images/${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </div>
    `).join('');
});