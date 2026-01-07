// ===== FUTURISTIC GAME STATION JAVASCRIPT =====

// Spotlight effect following mouse
const spotlight = document.getElementById('spotlight');

document.addEventListener('mousemove', (e) => {
    spotlight.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
});

// Game card navigation with enhanced effects
const gameCards = document.querySelectorAll('.game-card');

// Game links mapping
const gameLinks = {
    'tetris': 'games/tetris.html',
    'cosmic-quest': 'games/cosmic-quest.html',
    'color-match': 'games/color-match.html',
    'sky-runner': 'games/sky-runner.html',
    'mystery': 'games/mystery.html',
    'sniper-elite': 'games/sniper-elite.html',
    'fire-battle': 'games/fire-battle.html',
    'music-beat': 'games/music-beat.html',
    'piano-tiles': 'games/piano-tiles.html',
    'sweet-baker': 'games/sweet-baker.html'
};

gameCards.forEach(card => {
    // 3D tilt effect on hover
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        const cardInner = card.querySelector('.card-inner');
        cardInner.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        const cardInner = card.querySelector('.card-inner');
        cardInner.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });

    // Click navigation
    card.addEventListener('click', function () {
        const gameId = this.dataset.game;

        // Visual feedback
        const cardInner = this.querySelector('.card-inner');
        cardInner.style.transform = 'scale(0.95)';

        setTimeout(() => {
            cardInner.style.transform = '';

            // Navigate to game
            if (gameLinks[gameId]) {
                window.location.href = gameLinks[gameId];
            }
        }, 200);
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';

            setTimeout(() => {
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe game cards for entrance animation
gameCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Dynamic background grid speed based on scroll
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const scrollSpeed = Math.abs(scrollY - lastScrollY);

    const grid = document.querySelector('.cyber-grid');
    if (grid) {
        const currentDuration = Math.max(10, 20 - scrollSpeed / 10);
        grid.style.animationDuration = `${currentDuration}s`;
    }

    lastScrollY = scrollY;
});

// Parallax effect for hero elements
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const floatingCards = document.querySelectorAll('.floating-card');

    floatingCards.forEach((card, index) => {
        const speed = 0.5 + (index * 0.2);
        card.style.transform = `translateY(${scrollY * speed}px)`;
    });
});

// Add glitch effect to title on hover
const titleLines = document.querySelectorAll('.title-line');

titleLines.forEach(line => {
    line.addEventListener('mouseenter', function () {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = '';
        }, 10);

        // Temporary glitch effect
        const originalText = this.textContent;
        let glitchCount = 0;
        const glitchInterval = setInterval(() => {
            if (glitchCount < 3) {
                this.textContent = this.textContent.split('').map(char =>
                    Math.random() > 0.7 ? String.fromCharCode(33 + Math.floor(Math.random() * 94)) : char
                ).join('');
                glitchCount++;
            } else {
                this.textContent = originalText;
                clearInterval(glitchInterval);
            }
        }, 50);
    });
});

// Performance optimization: Reduce animations on low-end devices
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

if (mediaQuery.matches) {
    document.body.style.setProperty('--transition-base', '0ms');
    document.body.style.setProperty('--transition-slow', '0ms');
}

// Add keyboard navigation support
let currentCardIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        currentCardIndex = Math.min(currentCardIndex + 1, gameCards.length - 1);
        gameCards[currentCardIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        gameCards[currentCardIndex].focus();
    } else if (e.key === 'ArrowLeft') {
        currentCardIndex = Math.max(currentCardIndex - 1, 0);
        gameCards[currentCardIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        gameCards[currentCardIndex].focus();
    } else if (e.key === 'Enter' && document.activeElement.classList.contains('game-card')) {
        document.activeElement.click();
    }
});

// Console easter egg
console.log('%c GAME STATION ', 'background: linear-gradient(90deg, #00f0ff, #ff00aa); color: #fff; font-size: 24px; font-weight: bold; padding: 10px;');
console.log('%c Welcome, Developer! 🎮', 'color: #00f0ff; font-size: 16px;');
console.log('%c 10 games available. Have fun! ', 'color: #ff00aa; font-size: 14px;');

// Performance monitoring (dev mode only)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    let fps = 0;
    let lastTime = performance.now();

    function measureFPS() {
        const currentTime = performance.now();
        fps = Math.round(1000 / (currentTime - lastTime));
        lastTime = currentTime;

        if (fps < 30) {
            console.warn(`Low FPS detected: ${fps}`);
        }

        requestAnimationFrame(measureFPS);
    }

    // Uncomment to enable FPS monitoring
    // measureFPS();
}

// Initialize
console.log('🚀 Game Station initialized successfully!');
