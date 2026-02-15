
(function () {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Config
    const color = '#00f0ff'; // Brand accent
    const gridSize = 80; // Size of grid cells (pixels)
    const speed = 1; // Movement speed (pixels per frame) - must be a divisor of gridSize
    const trailLength = 80; // Length of the trail
    const maxParticles = 15; // Number of active particles

    // State
    let particles = [];
    let w, h;
    let cols, rows;

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        cols = Math.ceil(w / gridSize);
        rows = Math.ceil(h / gridSize);
    }

    // Initialize Canvas
    canvas.id = 'nexus-bg';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1'; // Behind everything
    canvas.style.pointerEvents = 'none';
    canvas.style.background = '#050505'; // Dark background matches body

    // Insert canvas as the first child of body to be the background
    document.body.prepend(canvas);

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.reset(true);
        }

        reset(randomStart = false) {
            // Spawn at a random grid intersection
            // If randomStart is true, spawn anywhere on grid, else spawn at edge?
            // For now just random grid intersection visible or slightly offscreen

            this.x = Math.floor(Math.random() * cols) * gridSize;
            this.y = Math.floor(Math.random() * rows) * gridSize;

            // Random direction: 0: right, 1: down, 2: left, 3: up
            this.dir = Math.floor(Math.random() * 4);

            this.history = [];
            // Randomize life so they don't all die at once
            this.life = Math.random() * 500 + 400;
            // Randomize speed slightly (multiples of base speed to keep alignment)
            // Actually, keep constant speed for Nexus feel, maybe occasional pause?
            this.speed = speed;
        }

        update() {
            this.life--;
            if (this.life <= 0) {
                this.reset();
                return;
            }

            // Move
            if (this.dir === 0) this.x += this.speed;
            else if (this.dir === 1) this.y += this.speed;
            else if (this.dir === 2) this.x -= this.speed;
            else if (this.dir === 3) this.y -= this.speed;

            // Check if at intersection
            // Floating point safety not needed if we use integer increments, but robust check:
            if (this.x % gridSize === 0 && this.y % gridSize === 0) {
                // Chance to turn
                if (Math.random() < 0.3) {
                    // Pick a new valid direction (not backwards preferably, but random is okay for chaos)
                    const newDir = Math.floor(Math.random() * 4);
                    // Prevent immediate 180 flip? (0<->2, 1<->3)
                    if (Math.abs(this.dir - newDir) !== 2) {
                        this.dir = newDir;
                    }
                }
            }

            // Bounds check - wrap around or reset?
            // Wrapping is better for continuous flow
            if (this.x > w + gridSize) this.x = -gridSize;
            else if (this.x < -gridSize) this.x = w + gridSize;

            if (this.y > h + gridSize) this.y = -gridSize;
            else if (this.y < -gridSize) this.y = h + gridSize;

            // Add to history
            this.history.push({ x: this.x, y: this.y });
            if (this.history.length > trailLength) {
                this.history.shift();
            }
        }

        draw() {
            if (this.history.length < 2) return;

            // Draw Head
            ctx.fillStyle = color;
            ctx.shadowBlur = 15;
            ctx.shadowColor = color;
            // Draw a square head properly centered
            ctx.fillRect(this.x - 2, this.y - 2, 4, 4);
            ctx.shadowBlur = 0;

            // Draw Trail
            ctx.lineWidth = 2;

            // Draw trail segments with fading opacity
            for (let i = 0; i < this.history.length - 1; i++) {
                const p1 = this.history[i];
                const p2 = this.history[i + 1];

                // Alpha increases towards the head (end of array)
                const alpha = (i / this.history.length) * 0.8;

                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
                ctx.stroke();
            }
        }
    }

    // Grid Drawing
    function drawGrid() {
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.05)'; // Brand accent with low opacity
        ctx.lineWidth = 1;

        // Use path caching if performance is an issue, but immediate mode is fine for simple grid
        ctx.beginPath();
        for (let x = 0; x <= w; x += gridSize) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
        }
        for (let y = 0; y <= h; y += gridSize) {
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
        }
        ctx.stroke();
    }

    // Init Particles
    function initParticles() {
        particles = [];
        for (let i = 0; i < maxParticles; i++) {
            particles.push(new Particle());
        }
    }

    initParticles();

    // Handle manual re-init on huge resize makes sense but update loop handles it

    function animate() {
        ctx.clearRect(0, 0, w, h);

        drawGrid();

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();

})();
