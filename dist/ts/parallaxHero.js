"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupParallaxHero = setupParallaxHero;
function setupParallaxHero() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        if (hero && heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = (1 - scrolled / window.innerHeight).toString();
        }
    });
}
