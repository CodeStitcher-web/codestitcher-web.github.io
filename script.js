// --- 1. INITIALIZE ANIMATIONS (AOS) ---
window.addEventListener('load', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: true, offset: 50, easing: 'ease-out-cubic' });
    }
    // Force curtain up on load
    revealPage();
});

// --- 2. PAGE TRANSITION ENGINE ---
function revealPage() {
    const curtain = document.querySelector('.page-transition');
    if (curtain) {
        curtain.style.transform = 'scaleY(0)';
    }
}

// FIX: Handle "Back" button on mobile/Safari (BFCache)
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        revealPage();
    }
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = this.getAttribute('href');
        
        // LOGIC: Do NOT transition if:
        // 1. It's a hash link (#)
        // 2. It opens in new tab (_blank)
        // 3. It is a download link
        // 4. It has the class 'no-transition'
        if (!target || 
            target.startsWith('#') || 
            this.target === '_blank' || 
            this.hasAttribute('download') ||
            this.classList.contains('no-transition')) {
            return; // Let the browser handle it normally
        }

        e.preventDefault();
        const curtain = document.querySelector('.page-transition');
        
        if (curtain) {
            curtain.style.transformOrigin = 'bottom';
            curtain.style.transform = 'scaleY(1)';
            
            // Wait for animation then go
            setTimeout(() => {
                window.location.href = target;
            }, 600); // 600ms matches CSS transition
        } else {
            window.location.href = target;
        }
    });
});

// --- 3. GLOBAL TYPING EFFECT ---
if (document.getElementById('typewriter') || document.getElementById('fg-typewriter') || document.getElementById('main-typewriter')) {
    // Typewriter logic handled in individual HTML files for specific text
}

// --- 4. CUSTOM CURSOR (Premium Feel) ---
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("mousemove", (e) => {
        const posX = e.clientX; 
        const posY = e.clientY;
        
        // Use transform instead of top/left for higher FPS performance (Apple-like smoothness)
        if(dot) { 
            dot.style.transform = `translate(${posX}px, ${posY}px)`; 
        }
        if(outline) { 
            outline.animate({ 
                transform: `translate(${posX}px, ${posY}px)` 
            }, { duration: 500, fill: "forwards" }); 
        }
    });
} else {
    // Hide on mobile to prevent "ghost touches"
    if(dot) dot.style.display = "none";
    if(outline) outline.style.display = "none";
}

// --- 5. NEURAL BACKGROUND ---
const canvas = document.getElementById('neural-canvas');
if(canvas) {
    const ctx = canvas.getContext('2d');
    let width, height, particles;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2;
            this.color = Math.random() > 0.5 ? "#5D5FEF" : "#00F0FF";
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    function init() {
        resize();
        particles = [];
        // Keep density low for "Clean/Premium" look
        const count = window.innerWidth < 900 ? 40 : 90; 
        for (let i = 0; i < count; i++) particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];
            p.update();
            p.draw();
            for (let j = i; j < particles.length; j++) {
                let p2 = particles[j];
                let d = Math.hypot(p.x - p2.x, p.y - p2.y);
                if (d < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(93, 95, 239, ${0.15 * (1 - d/100)})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', init);
    init();
    animate();
}

// HOLOGRAPHIC CARD EFFECT
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".glass-card");
    document.addEventListener("mousemove", e => {
        for(const card of cards) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        }
    });
});
