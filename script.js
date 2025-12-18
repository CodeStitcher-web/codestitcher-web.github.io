// script.js - HIGH ENERGY INTERACTIVE VERSION

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. SAFE ANIMATION INIT (AOS) ---
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true, offset: 50 });
    }

    // --- 2. TYPING EFFECT ---
    const typeElement = document.getElementById('typewriter');
    if (typeElement && typeof Typed !== 'undefined') {
        let pageText = ['System Status: ONLINE', 'Physics Engine: VERLET-X', 'Welcome to GravitonX.'];
        if (window.location.href.includes("products")) {
            pageText = ['Accessing Database...', 'Loading Modules...', 'Deploying Ecosystem.'];
        }
        new Typed('#typewriter', { 
            strings: pageText, typeSpeed: 40, backSpeed: 20, startDelay: 500, backDelay: 2000, loop: true, showCursor: false 
        });
    }

    // --- 3. CUSTOM CURSOR (Desktop Only) ---
    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');

    if (window.matchMedia("(pointer: fine)").matches && dot && outline) {
        window.addEventListener("mousemove", (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            
            // Instant transform for dot
            dot.style.transform = `translate(${posX}px, ${posY}px)`;
            
            // Smooth trail for outline
            outline.animate({
                transform: `translate(${posX}px, ${posY}px)`
            }, { duration: 500, fill: "forwards" });
        });
    } else {
        if(dot) dot.style.display = "none";
        if(outline) outline.style.display = "none";
    }

    // --- 4. NEURAL BACKGROUND (HIGH ENERGY PHYSICS) ---
    const canvas = document.getElementById('neural-canvas');
    if(canvas) {
        const ctx = canvas.getContext('2d');
        let width, height, particles;

        // Interaction Zone Radius
        let mouse = { x: null, y: null, radius: 250 }; // Increased radius

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        window.addEventListener('touchmove', (e) => {
            if(e.touches.length > 0) {
                mouse.x = e.touches[0].clientX;
                mouse.y = e.touches[0].clientY;
            }
        });

        window.addEventListener('touchend', () => { mouse.x = null; mouse.y = null; });
        window.addEventListener('mouseout', () => { mouse.x = null; mouse.y = null; });

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                // Base Speed (Slow & Calm)
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                // Base Size
                this.size = Math.random() * 2 + 1;
                this.baseSize = this.size;
                // Colors
                this.baseColor = Math.random() > 0.5 ? "#5D5FEF" : "#bd00ff"; // Primary/Secondary
                this.color = this.baseColor;
                // Density determines how heavy the particle is (reaction speed)
                this.density = (Math.random() * 30) + 1;
            }

            update() {
                // 1. Move Particle
                this.x += this.vx;
                this.y += this.vy;

                // 2. Interaction Physics
                if(mouse.x != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx*dx + dy*dy);
                    
                    if (distance < mouse.radius) {
                        // Calculate Force
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouse.radius - distance) / mouse.radius;
                        
                        // EXPLOSIVE FORCE: Multiplied by 5 for noticeable reaction
                        const directionX = forceDirectionX * force * this.density * 0.6;
                        const directionY = forceDirectionY * force * this.density * 0.6;
                        
                        // Push away from mouse
                        this.x -= directionX;
                        this.y -= directionY;

                        // ENERGY CHARGE: Turn Bright Cyan/White and Grow
                        this.color = "#00F0FF"; // Neon Cyan
                        this.size = this.baseSize * 2.5; // Grow 2.5x
                    } else {
                        // Return to normal
                        this.color = this.baseColor;
                        if(this.size > this.baseSize) {
                            this.size -= 0.1; // Shrink back slowly
                        }
                    }
                } else {
                    this.color = this.baseColor;
                    this.size = this.baseSize;
                }

                // 3. Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                
                // Add glow if energized
                if(this.color === "#00F0FF") {
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = "#00F0FF";
                } else {
                    ctx.shadowBlur = 0;
                }
                
                ctx.fill();
                ctx.shadowBlur = 0; // Reset for lines
            }
        }

        const initParticles = () => {
            resize();
            particles = [];
            const count = window.innerWidth < 900 ? 50 : 110; 
            for (let i = 0; i < count; i++) particles.push(new Particle());
        };

        const animateParticles = () => {
            ctx.clearRect(0, 0, width, height);
            
            for (let i = 0; i < particles.length; i++) {
                let p = particles[i];
                p.update();
                p.draw();

                // 1. STRONG MOUSE CONNECTIONS
                if (mouse.x != null) {
                    let dx = p.x - mouse.x;
                    let dy = p.y - mouse.y;
                    let distance = Math.sqrt(dx*dx + dy*dy);

                    if (distance < 200) {
                        ctx.beginPath();
                        // Bright White/Cyan connection
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.8 * (1 - distance/200)})`;
                        ctx.lineWidth = 2,0; // Thicker line
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }

                // 2. AMBIENT PARTICLE CONNECTIONS
                for (let j = i; j < particles.length; j++) {
                    let p2 = particles[j];
                    let dx = p.x - p2.x;
                    let dy = p.y - p2.y;
                    let distance = Math.sqrt(dx*dx + dy*dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        // Subtle Indigo connection
                        ctx.strokeStyle = `rgba(93, 95, 239, ${0.2 * (1 - distance/100)})`;
                        ctx.lineWidth = 0.5; // Thin line
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animateParticles);
        };

        window.addEventListener('resize', initParticles);
        initParticles();
        animateParticles();
    }

    // --- 5. PAGE TRANSITION ENGINE ---
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            const target = this.getAttribute('href');
            if (!target || target.startsWith('#') || this.target === '_blank' || 
                this.hasAttribute('download') || this.classList.contains('no-transition')) {
                return;
            }
            e.preventDefault();
            const curtain = document.querySelector('.page-transition');
            if (curtain) {
                curtain.style.transformOrigin = 'bottom';
                curtain.style.transform = 'scaleY(1)';
                setTimeout(() => { window.location.href = target; }, 600);
            } else {
                window.location.href = target;
            }
        });
    });

    window.addEventListener('pageshow', (event) => {
        const curtain = document.querySelector('.page-transition');
        if (curtain) {
            setTimeout(() => {
                curtain.style.transformOrigin = 'top';
                curtain.style.transform = 'scaleY(0)';
            }, 50);
        }
    });

    // HOLOGRAPHIC CARD EFFECT
    const cards = document.querySelectorAll(".glass-card, .holo-card");
    if(cards.length > 0) {
        document.addEventListener("mousemove", e => {
            for(const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        });
    }

});

