/**
 * Projects Data
 * easy to add or remove any project here
 */
const projects = [
    {
        id: "equipment-status-log",
        title: "Equipment Status Log Application",
        category: "App/Web App",
        description: "The Equipment Status Log Application is a tool for managing equipment status for the Kibing Group (M) Sdn Bhd.",
        longDescription: "This Equipment Status Log Application is designed to streamline asset management for Kibing Group (M) Sdn Bhd. It features a robust security framework, real-time data visualization using D3.js, and a comprehensive dashboard for tracking performance metrics. The system handles thousands of concurrent users and provides granular access control.",
        tags: ["Flutter", "Node.js", "Google Cloud", "reCAPTCHA"],
        icon: "list-todo",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        link: "https://equipment-status-log.web.app/",
        repo: "#"
    },
    {
        id: "campus-hub",
        title: "Campus Hub",
        category: "App/Web App",
        description: "Campus Hub is a secure network infrastructure for a university campus.",
        longDescription: "Campus Hub is designed to streamline asset management for large enterprises. It features a robust security framework, real-time data visualization using D3.js, and a comprehensive dashboard for tracking performance metrics. The system handles thousands of concurrent users and provides granular access control.",
        tags: ["Flutter", "Node.js", "Firebase", "Cloudflare", "Google Cloud"],
        icon: "blocks",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        link: "https://campushub.my",
        repo: "#"
    },
    {
        id: "mymet",
        title: "MyMET",
        category: "App/Web App",
        description: "MyMET is a comprehensive environmental dashboard with estimated installed across more than 10 countries.",
        longDescription: "MyMET is designed to streamline asset management for large enterprises. It features a robust security framework, real-time data visualization using D3.js, and a comprehensive dashboard for tracking performance metrics. The system handles thousands of concurrent users and provides granular access control.",
        tags: ["Flutter", "Node.js", "Firebase", "Cloudflare", "APIs"],
        icon: "layout-panel-left",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        link: "https://dev.qimlab.my/mymet",
        repo: "#"
    },
    {
        id: "selia-plus",
        title: "SELIA+",
        category: "Web",
        description: "SELIA+ is a ",
        longDescription: "Pengembara Nomad is designed to streamline asset management for large enterprises. It features a robust security framework, real-time data visualization using D3.js, and a comprehensive dashboard for tracking performance metrics. The system handles thousands of concurrent users and provides granular access control.",
        tags: ["Flutter", "TensorFlow", "Node.js", "Firebase", "Google Cloud", "APIs"],
        icon: "panels-top-left",
        image: "assets/img/pengembara-nomad.png",
        link: "https://www.pengembaranomad.com.my",
        repo: "#"
    },
    {
        id: "pengembara-nomad",
        title: "Pengembara Nomad",
        category: "Web",
        description: "Pengembara Nomad is a website for the Malaysian Ministry of Youth and Sports.",
        longDescription: "Pengembara Nomad is designed to streamline asset management for large enterprises. It features a robust security framework, real-time data visualization using D3.js, and a comprehensive dashboard for tracking performance metrics. The system handles thousands of concurrent users and provides granular access control.",
        tags: ["Exabyte", "Wix"],
        icon: "panels-top-left",
        image: "assets/img/pengembara-nomad.png",
        link: "https://www.pengembaranomad.com.my",
        repo: "#"
    },

];

/**
 * Filter Configuration
 */
const filters = [
    { label: "All", value: "all" },
    { label: "Web", value: "Web" },
    { label: "App/Web App", value: "App/Web App" },
    { label: "Infrastructure", value: "Infrastructure" },
    { label: "Workshop", value: "Workshop" }
];

function renderFilters() {
    const filterContainer = document.getElementById('project-filters');
    if (!filterContainer) return;

    filterContainer.innerHTML = filters.map(filter => `
        <button 
            onclick="filterProjects('${filter.value}')"
            class="filter-btn px-6 py-2 rounded-full border border-white/10 hover:border-brand-accent transition-all duration-300 text-sm font-mono uppercase tracking-wider ${filter.value === 'all' ? 'bg-brand-accent text-black border-brand-accent' : 'text-gray-400 hover:text-white'}"
            data-value="${filter.value}"
        >
            ${filter.label}
        </button>
    `).join('');
}

function renderProjects(filterValue = 'all') {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    // Filter projects
    const filteredProjects = filterValue === 'all'
        ? projects
        : projects.filter(p => p.category === filterValue);

    // Clear grid directly
    grid.innerHTML = '';

    if (filteredProjects.length === 0) {
        grid.innerHTML = `
            <div class="col-span-1 md:col-span-2 lg:col-span-3 text-center py-20">
                <p class="text-gray-400 text-lg">No projects found in this category.</p>
            </div>
        `;
        return;
    }

    // Generate HTML
    const projectsHTML = filteredProjects.map((project, index) => `
        <a href="project-detail.html?id=${project.id}" class="group block relative overflow-hidden rounded-xl border border-white/10 bg-brand-subtle hover:border-brand-accent transition-all duration-300 opacity-0 translate-y-4 project-card" style="animation: fadeUp 0.5s ease forwards ${index * 0.1}s">
            <div class="aspect-video bg-gray-900 relative overflow-hidden">
                <!-- Image Background -->
                <img src="${project.image}" alt="${project.title}" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                
                <!-- Icon Overlay -->
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <div class="bg-brand-accent/20 p-4 rounded-full backdrop-blur-sm border border-brand-accent/50">
                        <span class="text-brand-accent font-mono font-bold">VIEW PROJECT</span>
                     </div>
                </div>
            </div>
            
            <div class="p-8 relative z-10">
                <div class="text-xs font-mono text-brand-accent mb-2 uppercase">${project.category}</div>
                <h3 class="text-2xl font-bold mb-3 group-hover:text-brand-accent transition-colors">${project.title}</h3>
                <p class="text-gray-400 text-sm mb-6 line-clamp-2">${project.description}</p>
                <div class="flex flex-wrap gap-2">
                    ${project.tags.slice(0, 3).map(tag => `
                        <span class="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-gray-400 border border-white/5">${tag}</span>
                    `).join('')}
                    ${project.tags.length > 3 ? `<span class="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-gray-400 border border-white/5">+${project.tags.length - 3}</span>` : ''}
                </div>
            </div>
        </a>
    `).join('');

    grid.innerHTML = projectsHTML;

    // Re-initialize icons if we were using them directly (removed icons from card face for cleaner look with images, but kept lucide dependency if needed elsewhere)
    if (window.lucide) {
        lucide.createIcons();
    }
}

function filterProjects(category) {
    // Update active state of buttons
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        if (btn.dataset.value === category) {
            btn.classList.add('bg-brand-accent', 'text-black', 'border-brand-accent');
            btn.classList.remove('text-gray-400', 'hover:text-white');
        } else {
            btn.classList.remove('bg-brand-accent', 'text-black', 'border-brand-accent');
            btn.classList.add('text-gray-400', 'hover:text-white');
        }
    });

    renderProjects(category);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on the projects listing page (by checking for the grid)
    if (document.getElementById('projects-grid')) {
        renderFilters();
        renderProjects();

        // Add keyframes for fadeUp animation if not present
        if (!document.getElementById('project-animations')) {
            const style = document.createElement('style');
            style.id = 'project-animations';
            style.textContent = `
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `;
            document.head.appendChild(style);
        }
    }
});
