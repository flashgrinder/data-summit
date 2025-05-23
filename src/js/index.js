import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import mobileNav from './modules/mobile-nav.js';
import partnersSliders from "./modules/partners-sliders";
import wasSliders from "./modules/was-slider";
import animationsSections from "./modules/animation-section";
import showHideHeader from "./modules/show-hide-header";
import initModal from "./modules/modals-form";

document.addEventListener('DOMContentLoaded', ()=> {

    mobileNav();
    showHideHeader();
    wasSliders();
    partnersSliders();
    animationsSections();
    initModal();
    Fancybox.bind('[data-fancybox]');

})
// import isAvifWebp from 'avif-webp-checker';
// isAvifWebp({ mode: 'webp' });
