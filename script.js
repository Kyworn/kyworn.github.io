document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');

    // Formatting utilities
    const capitalize = (str) => str 
        ? str.charAt(0).toUpperCase() + str.slice(1) 
        : str;

    const formatProjectName = (name) => name
        ? name.split(/[-_]/).map(capitalize).join(' ')
        : name;

    async function fetchProjects() {
        try {
            const response = await fetch('projects.json');
            
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            
            const projects = await response.json();

            // Display projects
            projectsContainer.innerHTML = projects.map(project => `
                <div class="project-card">
                    <h2>${formatProjectName(project.name)}</h2>
                    <p>${capitalize(project.readmeTitle)}</p>
                    <div class="project-links">
                        <a href="${project.html_url}" target="_blank">🔗 Repository</a>
                        ${project.homepage ? `
                            <a href="${project.homepage}" target="_blank">🌐 Live Site</a>
                        ` : ''}
                    </div>
                </div>
            `).join('');

            console.log(`${projects.length} projects displayed`);

        } catch (error) {
            console.error('Error loading projects:', error);
            projectsContainer.innerHTML = `
                <div class="project-card">
                    <h2>Loading Error</h2>
                    <p>Unable to retrieve projects. ${error.message}</p>
                </div>
            `;
        }
    }

    fetchProjects();
});
