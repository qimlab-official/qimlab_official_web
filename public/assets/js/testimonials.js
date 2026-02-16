/*
  Testimonials Data
  Add, remove, or modify testimonials here.
  The carousel will automatically update.
*/

const testimonialsData = [
    {
        name: "Sarah Jenkins",
        role: "CTO, FinTech Solutions",
        content: "Qim Lab transformed our legacy infrastructure into a modern, scalable cloud solution. Their attention to detail and technical expertise is unmatched."
    },
    {
        name: "David Chen",
        role: "Founder, StartUp Inc.",
        content: "The mobile app they built for us exceeded all expectations. Smooth, responsive, and the design is absolutely stunning. Highly recommended!"
    },
    {
        name: "Michael Ross",
        role: "Director of Operations, LogisticCo",
        content: "Their network infrastructure setup has been running without a hitch for over a year. True professionals who know their craft."
    },
    {
        name: "Emily White",
        role: "Marketing Head, Creative Agency",
        content: "We partnered with Qim Lab for a complex web platform. They delivered on time and the code quality was exceptional. A pleasure to work with."
    },
    {
        name: "James Wilson",
        role: "Product Manager, TechCorp",
        content: "The workshop they conducted for our team was insightful and practical. Our developers leveled up their skills significantly."
    }
];

function initTestimonials() {
    const track = document.getElementById('testimonial-track');
    const wrapper = document.getElementById('testimonial-wrapper');

    if (!track || !wrapper) return;

    // specific card width + margin (350px width + 32px horizontal margin)
    // defined in createCard styles w-[350px] mx-4
    const cardWidth = 382;

    // Create card HTML generator
    const createCard = (data) => `
        <div class="flex-shrink-0 w-[350px] p-8 mx-4 bg-brand-subtle/50 backdrop-blur-sm border border-white/5 rounded-2xl relative group hover:border-brand-accent/30 transition-colors cursor-pointer">
            <div class="absolute -top-3 -left-3 text-6xl text-brand-accent/20 font-serif leading-none select-none">"</div>
            <p class="text-gray-300 text-sm leading-relaxed mb-6 relative z-10 font-light italic">
                "${data.content}"
            </p>
            <div class="flex items-center gap-4 mt-auto">
                <div class="w-10 h-10 rounded-full bg-gradient-to-br from-brand-accent/80 to-blue-600/80 flex items-center justify-center text-black font-bold text-lg shadow-lg shadow-brand-accent/10">
                    ${data.name.charAt(0)}
                </div>
                <div>
                    <h4 class="text-white font-bold text-sm tracking-wide group-hover:text-brand-accent transition-colors">${data.name}</h4>
                    <span class="text-xs text-gray-500 font-mono">${data.role}</span>
                </div>
            </div>
        </div>
    `;

    // We need 3 sets to ensure smooth infinite loop for most screen sizes
    // (5 items * 382px * 3 sets = ~5730px total width)
    const originalContent = testimonialsData.map(t => createCard(t)).join('');
    track.innerHTML = originalContent + originalContent + originalContent;

    // Animation configuration
    if (window.gsap) {
        const singleSetWidth = cardWidth * testimonialsData.length;

        // Use GSAP to animate from 0 to -singleSetWidth
        // When it reaches -singleSetWidth, it seamlessly effectively wraps because the content is identical
        const animation = gsap.to(track, {
            x: -singleSetWidth,
            duration: 40, // Adjust for speed (higher is slower)
            ease: "none",
            repeat: -1,
            overwrite: true
        });

        // Pause on hover
        wrapper.addEventListener('mouseenter', () => animation.pause());
        wrapper.addEventListener('mouseleave', () => animation.play());
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTestimonials);
} else {
    initTestimonials();
}
