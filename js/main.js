'use strict';
/* jshint esversion: 8 */

import drawMap from './modules/map';
import mapInteraction from './modules/interaction-with-map';
import createBranchInfo from './modules/branch-info';

window.addEventListener('DOMContentLoaded', () => {
    //const modalTimerId = setTimeout(() => toggleModal('.modal', modalTimerId), 80000);

    drawMap();    
    mapInteraction();
    createBranchInfo('grodno');
    // form(modalTimerId);
    // modal('[data-modal]', '.modal', modalTimerId);
    // slider({
    //     slideSelector: '.offer__slider-wrapper .offer__slide', 
    //     prevArrowSelector: '.offer__slider-prev',
    //     nextArrowSelector: '.offer__slider-next',
    //     currentSlideSelector: '#current',
    //     totalSlidesSelector: '#total',
    //     wrapperSelector: '.offer__slider-wrapper',
    //     innerSliderSelector: '.offer__slider-inner',
    //     sliderSelector: '.offer__slider',
    //     dotSliderSelector: 'ol'
    // });
    // tabs('.tabheader__items', '.tabheader__item', '.tabcontent', 'tabheader__item_active');
    // timer('2022-05-20');      
});
