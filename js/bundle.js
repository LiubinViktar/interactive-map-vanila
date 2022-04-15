/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/branch-info.js":
/*!***********************************!*\
  !*** ./js/modules/branch-info.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");
/* harmony import */ var _draw_branch_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw-branch-body */ "./js/modules/draw-branch-body.js");
/* harmony import */ var _edit_branch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-branch */ "./js/modules/edit-branch.js");


;



const createBranchInfo = (pathId = 'default') => {    		

    const branchParentContainer = document.createElement('div'),
    branch = document.querySelector('.branch-container'),
    addr = 'localhost:3000';

    branchParentContainer.classList.add('branch-parent-box');	

    if(pathId == 'default') {
        if(branch.innerHTML != '') {
            branch.innerHTML = '';
        }					
        
    } else {
        (0,_services_services__WEBPACK_IMPORTED_MODULE_0__["default"])(`http://${addr}/${pathId}`)
        .then(data => {            
            (0,_draw_branch_body__WEBPACK_IMPORTED_MODULE_1__["default"])(branchParentContainer, data, branch);										
    
            branch.append(branchParentContainer); 

            let i = 0;			
            document.querySelector('.branch-arrow-left')
            .addEventListener('click', (e) => {				
                i--;
                if(i < 0) {
                    i = data.length - 1;
                }
                
                (0,_edit_branch__WEBPACK_IMPORTED_MODULE_2__["default"])(branchParentContainer, data[i]);
            });
    
            document.querySelector('.branch-arrow-right')
            .addEventListener('click', (e) => {
                i++;
                if(i >= data.length) {
                    i = 0;
                }            
                
                (0,_edit_branch__WEBPACK_IMPORTED_MODULE_2__["default"])(branchParentContainer, data[i]);
            });
        });        
    }				
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBranchInfo);

/***/ }),

/***/ "./js/modules/draw-branch-body.js":
/*!****************************************!*\
  !*** ./js/modules/draw-branch-body.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const drawBranch = (element, data, branch, i = 0) => {		
    if(branch.innerHTML != '') {
        branch.innerHTML = '';
    }

    element.innerHTML = `
    <h2>${data[i].branch}</h2>
    <div>
        <ul>
            <li data-name="address"><strong>адрес:</strong> ${data[i].address}</li>
            <li data-name="tel"><strong>тел:</strong> ${data[i].telephone}</li>
            <li data-name="work"><strong>Режим работы:</strong> ${data[i].working}</li>
        </ul>
        <div class="branch-image-box">
        <div class="branch-arrow branch-arrow-left">&lt;</div>
            <div><img src=${data[i].src} /></div>
        <div class="branch-arrow branch-arrow-right">&gt;</div>	
        </div>
        <div class="gmaprue">
            <iframe allowfullscreen="" 
                    frameborder="0" 
                    height="338" 
                    src=${data[i].gmap} 
                    style="border:0" 
                    width="634">
            </iframe>
        </div>
    </div>
    `;		
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drawBranch);

/***/ }),

/***/ "./js/modules/edit-branch.js":
/*!***********************************!*\
  !*** ./js/modules/edit-branch.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const editBranch = (container, data) => {
    container.querySelector('h2')
    .innerHTML = `${data.branch}`;

    container.querySelector('img')
    .src = `${data.src}`;

    container.querySelector('iframe')
    .src = `${data.gmap}`;

    container.querySelector('[data-name="address"]')
    .innerHTML = `<strong>адрес:</strong> ${data.address}`;

    container.querySelector('[data-name="tel"]')
    .innerHTML = `<strong>тел:</strong> ${data.telephone}`;

    container.querySelector('[data-name="work"]')
    .innerHTML = `<strong>Режим работы:</strong> ${data.working}`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editBranch);

/***/ }),

/***/ "./js/modules/interaction-with-map.js":
/*!********************************************!*\
  !*** ./js/modules/interaction-with-map.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _branch_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./branch-info */ "./js/modules/branch-info.js");


;

const mapInteraction = () => {
    const regions = document.querySelectorAll('#interactive-map path');

	//bind even listeners to all regions on map - function
	const bindAction = (container) => {
		container.addEventListener('click', (e) =>{
			e.preventDefault();	
			
			//change region color on the map
			regions.forEach(region => {
				if(region.classList.contains('svg_region-red') 
				&& e.target.classList.contains('svg_region-red')) {					
					return;
				}

				region.classList.remove('svg_region-red');
				region.classList.add('svg_region');
			});

			e.target.classList.toggle('svg_region-red');
			e.target.classList.toggle('svg_region');

			//import branch data	
			if(e.target.classList.contains('svg_region-red')) {
				(0,_branch_info__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target.id);
			} else {
				(0,_branch_info__WEBPACK_IMPORTED_MODULE_0__["default"])();
			}		
				
		});
	};
	
	regions.forEach(region => {
		bindAction(region);
	});	
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapInteraction);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const getData = async (url) => {
    let result = await fetch(url);

    if(!result.ok) {
        throw new Error(
          `could not fetch ${url}, with status ${result.status}`);
    }

    return await result.json();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_interaction_with_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/interaction-with-map */ "./js/modules/interaction-with-map.js");
/* harmony import */ var _modules_branch_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/branch-info */ "./js/modules/branch-info.js");





window.addEventListener('DOMContentLoaded', () => {      
    (0,_modules_interaction_with_map__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_branch_info__WEBPACK_IMPORTED_MODULE_1__["default"])('grodno');          
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map