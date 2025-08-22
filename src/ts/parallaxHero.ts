export function setupParallaxHero() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero') as HTMLElement | null;
        const heroContent = document.querySelector('.hero-content') as HTMLElement | null;

        if (hero && heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = (1 - scrolled / window.innerHeight).toString();
        }
    });
}