"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smoothScroll_1 = require("./smoothScroll");
const parallaxHero_1 = require("./parallaxHero");
const featureCardAnimation_1 = require("./featureCardAnimation");
document.addEventListener('DOMContentLoaded', () => {
    (0, smoothScroll_1.setupSmoothScroll)();
    (0, parallaxHero_1.setupParallaxHero)();
    (0, featureCardAnimation_1.animateFeatureCards)();
});
