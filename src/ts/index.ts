import { setupSmoothScroll } from './smoothScroll';
import { setupParallaxHero } from './parallaxHero';
import { animateFeatureCards } from './featureCardAnimation';

document.addEventListener('DOMContentLoaded', () => {
    setupSmoothScroll();
    setupParallaxHero();
    animateFeatureCards();
});
