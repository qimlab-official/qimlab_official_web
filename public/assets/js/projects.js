/**
 * Projects Data
 * easy to add or remove any project here
 */
const projects = [
    {
        id: "corporate-client-portal",
        title: "Corporate Client Portal",
        category: "Web",
        description: "A secure, high-performance portal for managing client assets and real-time data visualization.",
        longDescription: "This Corporate Client Portal is designed to streamline asset management for large enterprises. It features a robust security framework, real-time data visualization using D3.js, and a comprehensive dashboard for tracking performance metrics. The system handles thousands of concurrent users and provides granular access control.",
        tags: ["React", "Node.js", "PostgreSQL", "D3.js"],
        icon: "monitor",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        link: "#",
        repo: "#"
    },
    {
        id: "hotel-network-upgrade",
        title: "Hotel Network Upgrade",
        category: "Infrastructure",
        description: "Complete network overhaul for a 200-room luxury hotel, ensuring 100% coverage and high-speed guest access.",
        longDescription: "We executed a complete network infrastructure overhaul for a luxury hotel. This involved replacing legacy hardware with modern Ubiquiti Unifi gear, installing fiber optic backbones between distribution frames, and conducting rigorous heat mapping to ensure 100% Wi-Fi coverage in all guest rooms and public areas. The result was a seamless, high-speed internet experience for guests and improved operational efficiency for staff.",
        tags: ["Ubiquiti", "Fiber Optic", "Network Design", "VLANs"],
        icon: "wifi",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2670&auto=format&fit=crop",
        link: "#",
        repo: null // Infrastructure projects might not have a public repo
    },
    {
        id: "artisan-marketplace",
        title: "Artisan Marketplace",
        category: "Web",
        description: "A custom e-commerce platform connecting local artisans with global buyers, featuring seamless payments.",
        longDescription: "The Artisan Marketplace is a bespoke e-commerce solution built with Next.js and integrated with Stripe Connect. It empowers local artisans to create their own storefronts, manage inventory, and receive payments directly. The platform features a responsive design, advanced search capabilities with Algolia, and a user-friendly CMS for content management.",
        tags: ["Next.js", "Stripe", "Tailwind CSS", "Algolia"],
        icon: "shopping-cart",
        image: "https://images.unsplash.com/photo-1472851294608-415522f96385?q=80&w=2670&auto=format&fit=crop",
        link: "#",
        repo: "#"
    },
    {
        id: "logistics-analytics-engine",
        title: "Logistics Analytics Engine",
        category: "App/Web App",
        description: "Processing millions of data points daily to optimize delivery routes and inventory for a logistics firm.",
        longDescription: "Only accessible via authorized enterprise networks, this Logistics Analytics Engine leverages big data technologies to process and analyze delivery routes. Using Python and AWS utilities, it optimizes fleet fuel consumption and delivery times, resulting in a 15% reduction in operational costs. The system includes predictive modeling for inventory management.",
        tags: ["Python", "AWS", "Machine Learning", "Docker"],
        icon: "database",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop",
        link: "#",
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
