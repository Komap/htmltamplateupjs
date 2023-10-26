"use strict"
import * as Swiper from "./slider.js";
import * as flsFunction from "./modules/functions.js";

    // flsFunction.isWebp();
    
    // import Swiper, { Navigation, Pagination } from 'swiper';
    
    // const swiper = new Swiper('.swiper', {});;
    

document.addEventListener('DOMContentLoaded',()=> {

    const btnCatalog = document.querySelector('.header__select');
    const catalogMenu = document.querySelector('.sidebar__list');

    const openHeadMenu = () => {
        if(!btnCatalog.parentElement.querySelector("svg").classList.contains('arrow-down')){  
            btnCatalog.parentElement.querySelector("svg").classList.add('arrow-down');
            btnCatalog.parentElement.querySelector("svg").classList.remove('arrow-up');
            catalogMenu.classList.add('sidebar__list--active');
        }
        else{
            btnCatalog.parentElement.querySelector("svg").classList.remove('arrow-down');
            btnCatalog.parentElement.querySelector("svg").classList.add('arrow-up');
            catalogMenu.classList.remove('sidebar__list--active');
        }
    }
    btnCatalog.addEventListener('click', openHeadMenu)



})


// btnCatalog.parentElement.querySelector("svg").style.cssText='transform: rotate(0deg)';
