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
/* harmony import */ var _draw_branch_body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw-branch-body */ "./js/modules/draw-branch-body.js");
/* harmony import */ var _edit_branch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-branch */ "./js/modules/edit-branch.js");


;


const createBranchInfo = (pathId = 'default') => {
    const dataBranches = {
		grodno: [
			{
				branch: 'Гродненская ТЭЦ-2', 
				address: 'шоссе Скидельское, 10, 230003, г.Гродно',
				telephone: '(0152) 45-33-59',
				working: 'пн-чт 8:15-17:15; птн 8:15-16:00; обед 12:30-13:15',
				src: 'https://energo.grodno.by/sites/default/files/styles/branch_image/public/2021-03/tc2.jpg?itok=JQd3_cye',
				gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2363.933607412309!2d23.922552416201995!3d53.66598438004729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dfd6c19bf3d791%3A0xf5eda4ee975597d6!2zVGV0cyAyLCDQodC60LjQtNC10LvRjNGB0LrQvtC1INGI0L7RgdGB0LUsIEdyb2Rubw!5e0!3m2!1sen!2sby!4v1511337296371' 
			},
			{
				branch: 'Гродненские электрические сети', 
				address: 'Скидельское шоссе, 18, 230003, Гродно',
				telephone: '(0152) 45-43-59',
				working: 'пн-чт 8:15-17:15; пятн 8:15-16:00; обед 12:30-13:15',
				src: 'https://energo.grodno.by/sites/default/files/styles/branch_image/public/2021-03/electr2.jpg?itok=G8dh1gui',
				gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7951.729301886393!2d23.93118607839354!3d53.66367301254105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dfd6c6eb6ea0a1%3A0xd2e3d615d7177311!2sGrodnenskiye+Elektricheskiye+Seti!5e0!3m2!1sen!2sby!4v1511337479329' 
			},
			{
				branch: 'Гродненские тепловые сети', 
				address: 'ул. Богуцкого, 17, г.Гродно, 230002',
				telephone: '(0152) 792-859, (0152) 792-811',
				working: 'пн-чт 8:15-17:15; пятн 8:15-16:00; обед 12:30-13:15',
				src: 'https://energo.grodno.by/sites/default/files/styles/branch_image/public/2021-05/gteploset2.jpg?itok=NMfw1Rrx',
				gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2363.02426935723!2d23.841495916202533!3d53.68219288005077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dfd63c8c2e96b1%3A0x4a14f3861fdb78e8!2sGrodnenskie+Teplovye+SETI+Filial+Rup+Grodnoyenergo!5e0!3m2!1sen!2sby!4v1511339306138'
			},
			{
				branch: 'ПСДТУ', 
				address: 'ул. Молодежная, 2, 230025, г.Гродно',
				telephone: '(0152) 79-22-59',
				working: 'пн-чт 8:15-17:15; пятн 8:15-16:00; обед 12:30-13:15',
				src: 'https://energo.grodno.by/sites/default/files/styles/branch_image/public/2021-03/psdtu1.jpg?itok=0LIxBkEN',
				gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2363.239608004621!2d23.833580116202455!3d53.678354880050016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dfd63018af49c1%3A0xc9a5bd4090e0244a!2sPredprijatie+Sredstv+Dispetcherskogo+I+Tehnologicheskogo+Upravlenija+Filial+Rup+Grodnoyenergo!5e0!3m2!1sen!2sby!4v1511333427144'
			},
			{
				branch: 'РСП "Энергостройремонт"', 
				address: 'Скидельское шоссе, 18, г.Гродно, 230003',
				telephone: '(0152) 45-41-59',
				working: 'пн-пятн 8:00-16:30; обед 12:00-12:30',
				src: 'https://energo.grodno.by/sites/default/files/styles/branch_image/public/2021-03/stroi1.jpg?itok=Wjn5YqLh',
				gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1987.975288749465!2d23.94187959338384!3d53.66276219169078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dfd6c8f96aa3b3%3A0x307c7a5ad9b5c211!2sRsp+%22Energostroyremont%22+Rup+Grodnoenergo!5e0!3m2!1sen!2sby!4v1511339751408'
			},
			{
				branch: 'Учебный центр', 
				address: 'ул.Буденного, 42, 230023, г.Гродно',
				telephone: '(0152) 77-12-17, 79-22-86',
				working: 'пн-чт 8:15-17:15; пятн 8:15-16:00; обед 12:30-13:15',
				src: 'https://energo.grodno.by/sites/default/files/styles/branch_image/public/2021-03/uc1.jpg?itok=9KAxwR3N',
				gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2362.8233911455645!2d23.842626816202646!3d53.68577298005151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dfd63d3a100001%3A0x613e07a60fd756e1!2sUchebnyi+Centr+Rup+Grodnoyenergo!5e0!3m2!1sen!2sby!4v1511340117395'
			}
		],	
		lida: [
			{
				branch: 'Лидские электрические сети', 
				address: 'ул. Игнатова, д.65, г.Лида, 231300, Гродн. область',
				telephone: '(0154) 53-98-59',
				working: 'пн-чт 8:15-17:15; пятн 8:15-16:00; обед 12:30-13:15',
				src: 'https://energo.grodno.by/sites/default/files/styles/branch_image/public/2022-02/lelectro1.jpg?itok=ZA5YRJ9B',
				gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.4626739828686!2d25.30563021620911!3d53.90575378010007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46de8a611db2409b%3A0x5d70c209e12835bd!2sLidskie+Yelektricheskie+SETI+Filial+Rup+Grodnoyenergo!5e0!3m2!1sen!2sby!4v1511338877258'	
			},
			{
				branch: 'Лидские тепловые сети', 
				address: 'ул.Советская, 75, 231300, г.Лида, Гродн. обл.',
				telephone: '(0154) 53-95-59',
				working: 'пн-чт 8:15-17:15; пятн 8:15-16:00; обед 12:30-13:15',
				src: 'https://energo.grodno.by/sites/default/files/styles/branch_image/public/2021-03/lteploset2.jpg?itok=9HL3KrnI',
				gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.6804797961026!2d25.291603516209012!3d53.9018828800993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46de8a8846cf141b%3A0x88bd105d0fc5de52!2sStolovaya+Lidskiye+Teplovyye+Seti!5e0!3m2!1sen!2sby!4v1511339414403'
			}
		],
		oshmyany: [
			{
				branch: 'Ошмянские электрические сети', 
				address: 'п.Якуба Коласа, 20, г.Ошмяны, 231103, Гродн. область',
				telephone: '(015-93) 4-93-59',
				working: 'пн-чт 8:15-17:15; пятн 8:15-16:00; обед 12:30-13:15',
				src: 'https://energo.grodno.by/sites/default/files/styles/branch_image/public/2021-03/oelectr2.jpg?itok=cs_3F6Tt',
				gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2320.8693415163225!2d25.927931616224612!3d54.42994018022031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dc35c70d307f93%3A0x3b36513a1f80f9d5!2sOshmyanskiye+Elektricheskiye+Seti+Filial+Rup+Grodnoenergo!5e0!3m2!1sen!2sby!4v1511339116380'
			}
		],
		berestovica: [
			{
				branch: 'Агрофирма "Старый Дворец"', 
				address: 'аг.Старый Дворец, 231776, Берестовицкий район, Гродненская область',
				telephone: '(015-11) 43-9-40',
				working: 'пн-пятн 8:00-17:00; обед 12:00-13:00',
				src: 'https://energo.grodno.by/sites/default/files/styles/branch_image/public/2021-03/agro1.jpg?itok=NOFroA1H',
				gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9547.173926652606!2d24.094697401322485!3d53.257401133375566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46df930eb45653a9%3A0x80c8b75378bbe07f!2sStaryy+Dvorets!5e0!3m2!1sen!2sby!4v1511340296173'
			}
		],
		volkovysk: [
			{
				branch: 'Волковысские электрические сети', 
				address: 'ул.Ленина, 15, г.Волковыск, 231900, Гродн. область',
				telephone: '(01512) 7-53-59',
				working: 'пн-чт 8:15-17:15; пятн 8:15-16:00; обед 12:30-13:15',
				src: 'https://energo.grodno.by/sites/default/files/styles/branch_image/public/2021-03/velectr2.jpg?itok=pw2JamEw',
				gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2392.113444706558!2d24.45787921618712!3d53.16200377994077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46df9cf9b6d03f39%3A0xb8e4fed32d22c41c!2sVolkovysskie+Yelektricheskie+SETI+Filial+Rup+Grodnoyenergo!5e0!3m2!1sen!2sby!4v1511338756957'
			},
			{
				branch: 'Санаторий "Энергетик"', 
				address: '231908, Гродненская область, Волковысский район, Волповский сельский совет, 21, около д. Ковали',
				telephone: '(01512) 5-87-08 (приемная), (01512) 5-85-85, 5-87-49, 5-87-82 (заказ и реализация путевок)',
				working: 'пн-чт 8:25-17:00; пятн 8:25-16:00; обед 13:00-13:20',
				src: 'https://energo.grodno.by/sites/default/files/styles/branch_image/public/2021-03/energetik1.jpg?itok=B2w4KaVS',
				gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.721058155829!2d24.398477016193773!3d53.38404027998691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c230c0e978c4781!2sSanatoriy+%22Energetik%22!5e0!3m2!1sen!2sby!4v1511339981162'
			}
		]
	};

    const branchParentContainer = document.createElement('div'),
    branch = document.querySelector('.branch-container');

    branchParentContainer.classList.add('branch-parent-box');	

    if(pathId == 'default') {
        if(branch.innerHTML != '') {
            branch.innerHTML = '';
        }					
        
    } else {
        Object.keys(dataBranches).forEach(branchId => {
            if(branchId == pathId) {										
                (0,_draw_branch_body__WEBPACK_IMPORTED_MODULE_0__["default"])(branchParentContainer, dataBranches[branchId], branch);										

                branch.append(branchParentContainer);
            }			
        });
        
        let i = 0;			
        document.querySelector('.branch-arrow-left')
        .addEventListener('click', (e) => {				
            i--;
            if(i < 0) {
                i = dataBranches[pathId].length - 1;
            }
            
            (0,_edit_branch__WEBPACK_IMPORTED_MODULE_1__["default"])(branchParentContainer, dataBranches[pathId][i]);
        });

        document.querySelector('.branch-arrow-right')
        .addEventListener('click', (e) => {
            i++;
            if(i >= dataBranches[pathId].length) {
                i = 0;
            }				
            
            branchParentContainer.querySelector('h2')
            .innerHTML = `${dataBranches[pathId][i].branch}`;
            branchParentContainer.querySelector('img')
            .src = `${dataBranches[pathId][i].src}`;
            branchParentContainer.querySelector('iframe')
            .src = `${dataBranches[pathId][i].gmap}`;
            branchParentContainer.querySelector('[data-name="address"]')
            .innerHTML = `<strong>адрес:</strong> ${dataBranches[pathId][i].address}`;
            branchParentContainer.querySelector('[data-name="tel"]')
            .innerHTML = `<strong>тел:</strong> ${dataBranches[pathId][i].telephone}`;
            branchParentContainer.querySelector('[data-name="work"]')
            .innerHTML = `<strong>Режим работы:</strong> ${dataBranches[pathId][i].working}`;

            console.log('done right');
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

/***/ "./js/modules/map.js":
/*!***************************!*\
  !*** ./js/modules/map.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* jshint esversion: 8 */

const drawMap = () => {
    const section = document.querySelector('.section_map'),
	map = document.createElement('div'),
	branch = document.createElement('div'),
	mapSectionContainer = document.createElement('div'),
	header2 = document.createElement('h2');

    const createMap = (container) => {
		container.innerHTML = `
		<div class="svg_map_item" id="interactive-map">
			<svg version="1.1" id="svg_map" viewBox="10 295 260 230">             
				<!-- Кореличский район -->    				
				<a xlink:href="" xlink:title="" id="r_korelichi" target="_blank">                     
				   <path id="korelichi" class="svg_region" title="" d="M214.2,434.7l4.3-0.8l-3.9-4.101l-0.8-4.199l-2.5-2.5l-0.505-0.215
				   c-1.439,0.704-3.981,1.551-4.545,2.114c-0.75,0.75-4,1.25-4,1.25s-0.75-1-0.75-0.25s-1.75,1.75-1.75,1.75s-1.25-2-1.5-1.25
				   s0.5,2.5-1,2.25s-4-2-4-2s-0.5,0.5-1,1.5S190.5,433,190.5,433l-2.75,2.5l-2.25-1c0,0-2,1.25-1,2.25s1.5,5.75,1.5,5.75l0.5,1.25
				   c0,0,2,1.75,1.5,2.5c-0.234,0.352-0.964,0.868-1.673,1.318L194.9,448l8.6,1.9l4.9-3.4l4.2,0.2l4.6-3.601L217,437L214.2,434.7z"></path>
				   <text class="svg_text" transform="matrix(1 0 0 1 193.369 437.113)" id="t_korelichi">Кореличи</text>                   
				</a>
	
				<!-- Новогрудский район --> 
				<a xlink:href="" xlink:title="" id="r_novogrudok" target="_blank">                                     
					<path id="novogrudok" class="svg_region" title="" d="M205.9,420.8l-2.7-3.899l-2.5-7.7l-1.7-0.3l0.056-0.453l-3.806,1.803
					c0,0-2-0.75-2.5-1.5s-2.5,1.25-2.5,1.25l-2.75-1.25c0,0,0.5-1.75-2.25-1.75s-4.25-2.25-4.25-2.25l-2.75-0.25h-1.5l-1.5,2.25
					c0,0-1,0-2.75-1.75s-1.5,1.75-2.25,1.75c-0.406,0-0.954-0.37-1.375-0.865c-0.388,0.146-0.86,0.453-1.125,1.115
					c-0.5,1.25,1.25,2.75-2,3.75s-3.25,0.75-3.25,2s0.75,2.25,0.75,2.25l1,1.5c0,0,1.25,1.5-1,1.75S160,418.5,160,418.5s1.5,1.25,1,2
					s-2.25,3.25-2.25,3.25S158.25,426,159,426s2,0.25,2,1s0,3,0,3l3.25-0.75l0.75-1c0,0,3-1.5,2.75-0.5s-0.75,2.5-0.75,2.5
					s5.25-1.25,4.25-0.75s-2.75,1.25-3,2.25s-0.25,2.5-0.25,2.5l3.5-0.25l0.75,1.75l2,0.5l0.75,1l2-0.25l0.5,2.25c0,0,0.75,1-0.25,2.25
					c-0.876,1.095-1.944,1.807-2.195,2.471l4.545,0.43l3.4,3l3.327,0.168c0.709-0.45,1.439-0.967,1.673-1.318c0.5-0.75-1.5-2.5-1.5-2.5
					l-0.5-1.25c0,0-0.5-4.75-1.5-5.75s1-2.25,1-2.25l2.25,1l2.75-2.5c0,0,1.25-3.75,1.75-4.75s1-1.5,1-1.5s2.5,1.75,4,2
					s0.75-1.5,1-2.25s1.5,1.25,1.5,1.25s1.75-1,1.75-1.75s0.75,0.25,0.75,0.25s3.25-0.5,4-1.25c0.564-0.563,3.105-1.41,4.545-2.114
					L205.9,420.8z"></path>
					<text class="svg_text" transform="matrix(1 0 0 1 170.681 422.801)" id="t_novogrudok">Новогрудок</text>                    
				</a>
	
				<!-- Слонимский район -->        
				<a xlink:href="" xlink:title="" id="r_slonim" target="_blank">                                                        
					<path id="slonim" class="svg_region" title="" d="M159.25,462.75l-4-1.25c0,0-0.75-2.5-1-3.25s-3.25-0.5-3.25-0.5
					l-0.5-2c0,0-1,1.5-2,1.75s-1.25,1-1.25,1.75s-1.25,0.5-1.25,0.5l-3.5-0.25l-0.154-0.154L141,460.5l-2.25,1.75l0.25,2.5l-2.25,1.25
					l1.5,3.75l3.75,0.75l1,2.5l-0.75,1.75L139.5,474l-2.75-1c0,0-1-0.25-2.75-0.5s-0.25-1.5-2,1s-3.25,3.5-3.25,3.5s0.75,3,0.25,3.75
					s-0.5,2.5-0.5,2.5l1.5,2.5l-0.892,3.389l0.392,1.262l1.4,0.8l3.3-1.2l-1.3,3.8l3.4,2.4l5.1-1l2.6-2.5l1.6,1.3l0.2,1.4l2.5,1.6
					l1.6-0.5l-1.2-4l0.7-1.4l-0.9-2.399l1.1-1.4l3.7,0.7l0.8-3.6l9.7-8.2l-1.1-2.7l1.8-5.2l-2.3-1.8l0.9-2.4l0.247-1.754L162.5,462.5
					L159.25,462.75z"></path>
					<text class="svg_text" transform="matrix(1 0 0 1 144.181 477.176)" id="t_slonim">Слоним</text>                     
				</a>
	
				<!-- Свислочский район --> 
				<a xlink:href="" xlink:title="" id="r_svisloch" target="_blank">                                                        
					<path id="svisloch" class="svg_region" title="" d="M109,487l-2.25-2.25L104.5,484l-0.75-2.25l-0.75-2
					c0,0,1.5-2.5-0.75-2.5s-5.75-2-5.75-2l-1.25-1.5h-2.5c0,0-1.25,1.5-2.5,1.5c-0.869,0-2.701-2.171-3.74-3.497
					c-2.463,0.029-5.51,0.497-5.51,0.497s0,3.25-0.75,3s0,2.75-0.75,2.25c-0.362-0.241-2.9-0.225-5.104-0.099L72.5,490.6l2,8.2H80
					l3.1-4.3l3,2l1.1,4.8l4.9,0.7l3-4.8l3.4,4.8l4.7,3.3l2.7-1l-0.2-2.8l3.5-5l4.3-4l0.9-1.4l-1.39-2.175l-1.51-1.175L109,487z"></path>
					<text class="svg_text" transform="matrix(1 0 0 1 83.431 490.363)" id="t_svisloch">Свислочь</text>                      
				</a>
	
				<!-- Сморгонский район -->        
				<a xlink:href="" xlink:title="" id="r_smorgon" target="_blank">                                                            
					<path id="smorgon" class="svg_region" title="" d="M227.9,338.2l-1.9-6.4l-2.1,1.3l-1.9-1.6l-1.9-6.4L214,316.4
					l-0.986,0.191c-1.324,0.758-2.64,1.408-3.264,1.408c-1.5,0-3.75-0.25-3.75-0.25l-1.5,0.75l1.75,1.5l-0.5,2.75l2,0.25l-0.25,3.25
					l4.5,2.5l-1.25,3.5l-2.75-2l-2.75,3l-4.5,0.25c0,0,1.75,2.25-0.5,3.75s-0.75,2.5-0.75,2.5l-0.75,0.25v3.25l0.25,2.5l-1.25,1.25
					l2.25,2.75c0,0-2.25,0.5-1.5,1s3,4.5,3,4.5l-1.5,1.5l-0.5,4l2,3l-0.5,1.5c0,0-0.666,2.374-0.25,1.75
					c-0.171,0.257,1.04,1.567,1.917,2.209L203.2,369l4.3,2.1l3.3-0.8l5.9-7l4.9-12.2l3.6-3.199l-1.3-7.801L227.9,338.2z"></path>
					<text class="svg_text" transform="matrix(1 0 0 1 202.931 342.113)" id="t_smorgon">Сморгонь</text>                      
				</a>
	
				<!-- Островецкий район -->  
				<a xlink:href="" xlink:title="" id="r_ostrovets" target="_blank">                                                  
					<path id="ostrovec" class="svg_region" title="" d="M181,338.25l1.75,0.75l3.25,0.75h2c0,0,0.75,0.5,1.75,0.25
					s1.5-1.5,1.5-1.5s0.5,1.75,2.25,0.75s4.5,1,4.5,1l1.5-0.5c0,0-1.5-1,0.75-2.5s0.5-3.75,0.5-3.75l4.5-0.25l2.75-3l2.75,2l1.25-3.5
					l-4.5-2.5l0.25-3.25l-2-0.25l0.5-2.75l-1.75-1.5l1.5-0.75c0,0,2.25,0.25,3.75,0.25c0.624,0,1.94-0.65,3.264-1.408L210.4,317.1
					l-1.4-1.5l-0.5-5.899l-5.9-11.8l-8.8,7.8l-4.9-1.5l-7.8,7.5l-2.9,10.8l-0.7,7.3l1.324,8.134L180.5,339L181,338.25z"></path>
					<text class="svg_text" transform="matrix(1 0 0 1 184.494 328.176)" id="t_ostrovets">Островец</text>                       
				</a>
	
				<!-- Ошмянский район -->
				<a xlink:href="" xlink:title="" id="r_oshmyany" target="_blank">                                            
					<path id="oshmyany" class="svg_region" title="" d="M183.25,367.25c0,1.25,2.5,2.75,2.5,2.75l1.75,2l3.5,1l0.5,1.5h1.417
					l0.183-1.1l5.9-2l1.9-1.5l1.768-0.691c-0.877-0.642-2.088-1.952-1.917-2.209c-0.416,0.624,0.25-1.75,0.25-1.75l0.5-1.5l-2-3l0.5-4
					l1.5-1.5c0,0-2.25-4-3-4.5s1.5-1,1.5-1l-2.25-2.75l1.25-1.25l-0.25-2.5V340l-0.75,0.25c0,0-2.75-2-4.5-1s-2.25-0.75-2.25-0.75
					s-0.5,1.25-1.5,1.5s-1.75-0.25-1.75-0.25h-2l-3.25-0.75l-1.75-0.75l-0.5,0.75l-1.676-1.066l0.076,0.467l-5.1,4.899l-7.1,14.4
					l2,0.899l2.4-0.5l6.307,8.9h3.343C180.75,367,183.25,366,183.25,367.25z"></path>
					<text class="svg_text" transform="matrix(1 0 0 1 178.119 356.051)" id="t_oshmyany">Ошмяны</text>                        
				</a>
	
				<!-- Ивьевский район -->           	        
				<a xlink:href="" xlink:title="" id="r_ivyer" target="_blank">                  
					<path id="ivie" class="svg_region" title="" d="M164.5,379.25c0,0.75-1.5,1.75-2,2.5S162,384,162,384
					s1.5,2.75,0.25,3.25S162,389,162,389l1.5,2.25l1.5,1.5c0,0,0,3.5,0.25,4.25s2.75,1.5,2.75,1.5s0,0.75,0,2.25s0.25,2.75,0.25,3.75
					s1.25,2.25,2,2.25s0.5-3.5,2.25-1.75s2.75,1.75,2.75,1.75l1.5-2.25h1.5l2.75,0.25c0,0,1.5,2.25,4.25,2.25s2.25,1.75,2.25,1.75
					l2.75,1.25c0,0,2-2,2.5-1.25s2.5,1.5,2.5,1.5l3.806-1.803l0.645-5.247l4.6-0.6l4.2-2.4l0.8-3.9l3,0.2l0.2-2.7l-5.6-7.5L203,385.9
					l-5.1,3.8l-0.4-2.7l0.5-7.8l-0.7-2.101l-2.9,1.4l-1.9-1.5l0.417-2.5H191.5L191,373l-3.5-1l-1.75-2c0,0-2.5-1.5-2.5-2.75
					s-2.5-0.25-2.5-0.25h-3.343l0.993,1.4l-4.6,8.5l-8.01,0.965C165.379,378.102,164.5,378.674,164.5,379.25z"></path>
					<text class="svg_text" transform="matrix(1 0 0 1 174.056 393.676)" id="t_ivyer">Ивье</text>                                                    
				</a>
	
				<!-- Гродненский район -->
				<a xlink:href="" xlink:title="" id="r_grodno" target="_blank">       
					<path id="grodno" class="svg_region-red" title="" d="M68,441.25l4,1h3.75l1.5,1l2.5-0.75l1.5-1.75l1,1.5l2-0.75l1.5-1
					c0,0,0.25-6.25-0.5-6.5s1.25-2.25,1.25-2.25l1.5-1.5l4.25,1.75l3.5,1.25l-1-2.5c0,0,2,0,2,0.75s2.5,2.5,2.5,2.5h2l1.558-0.779
					c-0.513-1.007,0.942-4.471,0.942-4.471s-2.5-0.5-3.75-3.75c3.75-5,0.25-5.5,0.25-5.5l0.5-4.5c0,0,2.5-1,3.5-2.25
					c-1.5-1.75-1.5-6.5-1.5-6.5L101,407.5l-1.25-2.25l1-3l3.25-1l1.75-4l-1.141-1.284L103.8,396.5l-7.9-6.6l-10.7,0.5l-5.8-2.5
					l-7.4,1.5l-1.2,3.899l-5.3-2.7l-9.9-0.899l2.5,20.9l8.1,32.899l0.661,2.229l0.639-0.479L68,441.25z"></path>
					<text class="svg_text" transform="matrix(1 0 0 1 64.566 415.676)" id="t_grodno">Гродно</text>                         
				</a>
	
				<!-- Вороновский район -->
				<a xlink:href="" xlink:title="" id="r_voronovo" target="_blank">     
					<path id="voronovo" class="svg_region" title="" d="M121.75,396.5c0,0-1.75,0.25-1,1.25s1.25,2.5,2,2.75s0.25,2,0.25,2
					s-1.25,1.5,0,2.25s5.5,2.25,6.5,2.25s3.75-4,3.75-4l-1-1.25l4.25,0.5l1.5-0.75c0,0,1.25-1,1.75-1.75s1.75-2.75,1.75-2.75l1.75-0.75
					l2.5-2.25c0,0-3.25-2.5,0.75-2.5s4,0,4,0l2.5-2.75v-3l1.75-1.25l0.5,3.75l0.75,1.25l1.25,1.25L160,389h2c0,0-1-1.25,0.25-1.75
					S162,384,162,384s0-1.5,0.5-2.25s2-1.75,2-2.5c0-0.576,0.879-1.148,1.29-1.385l-0.29,0.035v-3.7l1-6.3L165,363.6l-4.7-2.5
					l-6.8,6.301l-4.8,0.699L145,374.7l-6.1,3.7l-10-1.2l-6.6,7.3l4.9,4.1l-3.517,1.704L123.5,392.5L121.75,396.5z"></path>
					<text class="svg_text" transform="matrix(1 0 0 1 136.494 382.738)" id="t_voronovo">Вороново</text>                          
				</a>
	
				<!-- Берестовицкий район -->                                                                     
				<a xlink:href="" xlink:title="" id="r_berestovitsa" target="_blank"> 
					<path id="berestovica" title="" class="svg_region" d="M79.5,477.5c0.75,0.5,0-2.5,0.75-2.25s0.75-3,0.75-3
					s3.25-0.5,5.75-0.5s0.5-2.75-2-3.5s0.5-1.75,0.5-1.75s0.25-1.75,0.5-2.75s-0.25-3.25-0.25-3.25s2-4,2-4.75s-2-3.25-1.25-3.25
					s0.5-1.5,0.5-2.75S86,448.5,86,448.5l0.25-1.75l-2.25-0.5l0.206-4.733l-1.956,0.733l-1-1.5l-1.5,1.75l-2.5,0.75l-1.5-1H72l-4-1
					l-0.5,4l-0.639,0.479L75,473.2l-0.604,4.201C76.6,477.275,79.138,477.259,79.5,477.5z"></path>
					<text class="svg_text" transform="matrix(1 0 0 1 69.431 450.926)" id="t_berestovitsa">Берестовица</text>                              
				</a>
				
				<!-- Волковысский район -->  
				<a xlink:href="" xlink:title="" id="r_volkovysk" target="_blank"> 
					<path id="volkovysk" class="svg_region" title="" d="M117,480.5c0,0-0.25-3.75,0.25-5.5s-1-1.5-1-1.5s-2.75-0.25-3-1
					s0.25-2.25,0.25-2.25l0.25-2l-1.25-1l-0.75-1.75c0,0-3.75-1-4.25-1.75s-1.75-2.5,0.75-1.75s1.5-3,1.5-3l3,0.25l1.314,0.292
					L112.5,457l-3.5-1.75l-2.25-1.75l-3-1.25c0,0-1-2-1-2.75s1-2,1-2l-1.5-2L99,443.75l-3,2.5c0,0,0.5,1,0.75,1.75
					s-2.25,0.25-2.25,0.25l-3-0.25l-1.25,1.25l-3.72-0.413c0.123,0.185,0.22,0.467,0.22,0.913c0,1.25,0.25,2.75-0.5,2.75
					s1.25,2.5,1.25,3.25s-2,4.75-2,4.75s0.5,2.25,0.25,3.25s-0.5,2.75-0.5,2.75s-3,1-0.5,1.75s4.5,3.5,2,3.5
					c-0.079,0-0.16,0.002-0.24,0.003c1.039,1.326,2.871,3.497,3.74,3.497c1.25,0,2.5-1.5,2.5-1.5h2.5l1.25,1.5c0,0,3.5,2,5.75,2
					s0.75,2.5,0.75,2.5l0.75,2l0.75,2.25l2.25,0.75L109,487l2.5,0.75l1.51,1.175l-0.91-1.425l2.8-2.7l2.9,2.3l0.402-0.055L118,483
					L117,480.5z"></path>
					<text class="svg_text" transform="matrix(1 0 0 1 89.744 470.988)" id="t_volkovysk">Волковыск</text>                               
				</a> 
	
				<!-- Дятловский район -->
				<a xlink:href="" xlink:title="" id="r_dyatlovo" target="_blank">       
					<path id="dyatlovo" class="svg_region" title="" d="M177.25,441.5c1-1.25,0.25-2.25,0.25-2.25L177,437l-2,0.25l-0.75-1
					l-2-0.5L171.5,434l-3.5,0.25c0,0,0-1.5,0.25-2.5s2-1.75,3-2.25s-4.25,0.75-4.25,0.75s0.5-1.5,0.75-2.5s-2.75,0.5-2.75,0.5l-0.75,1
					L161,430c0,0,0-2.25,0-3s-1.25-1-2-1s-0.25-2.25-0.25-2.25s-2.75-1.25-3.5-1.25s0,1.75,0,1.75l-4,2.5c0,0-1.25,3.75-2.25,4.25
					s-3.75,1.5-3.75,1.5l-0.25,2l-1.75,1.75l0.25,2.5l-1.25-1.75c0,0-1.25-2.25-1.25-3c0-0.449-0.985-0.359-1.777-0.216
					C139.107,434.46,139,435,139,435l-3,0.75c0,0,0,2.75,0.25,3.5c0.083,0.251,0.109,0.586,0.108,0.921L139,442l-1,2.75l-0.25,3.25
					c0,0-0.25,2.25-0.25,3.5s-0.25,3.75,0,4.5s2.75,1.25,2.75,1.25l2.096,2.096L142.75,459l-0.404,0.346l0.154,0.154l3.5,0.25
					c0,0,1.25,0.25,1.25-0.5s0.25-1.5,1.25-1.75s2-1.75,2-1.75l0.5,2c0,0,3-0.25,3.25,0.5s1,3.25,1,3.25l4,1.25l3.25-0.25l0.847-0.154
					L164,457.7l8.2-14l2.855,0.271C175.306,443.307,176.374,442.595,177.25,441.5z"></path>
					<text class="svg_text" transform="matrix(1 0 0 1 146.306 444.176)" id="t_dyatlovo">Дятлово</text>                           
				</a>
	
				<!-- Мостовский район -->
				<a xlink:href="" xlink:title="" id="r_mosty" target="_blank">                                 
					<path id="mosty" class="svg_region" title="" d="M91.5,448l3,0.25c0,0,2.5,0.5,2.25-0.25S96,446.25,96,446.25l3-2.5
					l3.25,1.75l1.5,2c0,0-1,1.25-1,2s1,2.75,1,2.75l3,1.25l2.25,1.75l3.5,1.75l1.564,2.542L115,459.75l2.5-0.25c0,0,1-0.5,2.25,0
					s1.25-1.25,1.25-1.25l1.75-1.5c0,0,1,1.25,1.75,1.5s2,1.25,2,1.25s1.5,0.5,2-0.25s2.75-0.5,2.75-0.5s0.75,1.75,2,1.75
					s0-1.75,1.75-4s2.5-0.5,2.5-0.5c-0.25-0.75,0-3.25,0-4.5s0.25-3.5,0.25-3.5l0.25-3.25l1-2.75l-2.642-1.829
					c0,0.665-0.108,1.329-0.108,1.329l-3.75-2.25c0,0-1.75,1-3.25,1s-3-0.25-3-0.25l0.25,2c0,0-2.25,0.75-3.5,1.5s-2.5-3-2.5-3
					l-1.5-1.75l-0.25-1.25l-1.5-0.25l-1.25-3h-5.25c0,0,0,1.5,0,3c-5.25,0.5-3.25-2.25-3.25-2.25s-2.75-1.5-4.25-1.5
					c-0.218,0-0.354-0.108-0.442-0.279L101.25,434h-2c0,0-2.5-1.75-2.5-2.5s-2-0.75-2-0.75l1,2.5l-3.5-1.25L88,430.25l-1.5,1.5
					c0,0-2,2-1.25,2.25s0.5,6.5,0.5,6.5l-1.5,1l-0.044,0.017L84,446.25l2.25,0.5L86,448.5c0,0,0.309,0.005,0.53,0.337l3.72,0.413
					L91.5,448z"></path>
					<text class="svg_text" transform="matrix(1 0 0 1 116.494 450.988)" id="t_mosty">Мосты</text>                             
				</a>
				
				<!-- Зельвенский район -->
				<a xlink:href="" xlink:title="" id="r_zelva" target="_blank">             
					<path id="zelva" class="svg_region" title="" d="M128.5,483.25c0,0,0-1.75,0.5-2.5s-0.25-3.75-0.25-3.75
					s1.5-1,3.25-3.5s0.25-1.25,2-1s2.75,0.5,2.75,0.5l2.75,1l2.75,0.75L143,473l-1-2.5l-3.75-0.75l-1.5-3.75l2.25-1.25l-0.25-2.5
					l2.25-1.75l1.346-1.154l-2.096-2.096c0,0-2.5-0.5-2.75-1.25c0,0-0.75-1.75-2.5,0.5s-0.5,4-1.75,4s-2-1.75-2-1.75
					s-2.25-0.25-2.75,0.5s-2,0.25-2,0.25s-1.25-1-2-1.25s-1.75-1.5-1.75-1.5l-1.75,1.5c0,0,0,1.75-1.25,1.25s-2.25,0-2.25,0l-2.5,0.25
					l-0.936-0.208l0.436,0.708l-0.436-0.708l-1.314-0.292l-3-0.25c0,0,1,3.75-1.5,3s-1.25,1-0.75,1.75s4.25,1.75,4.25,1.75l0.75,1.75
					l1.25,1l-0.25,2c0,0-0.5,1.5-0.25,2.25s3,1,3,1s1.5-0.25,1,1.5s-0.25,5.5-0.25,5.5l1,2.5l0.202,4.045l6.198-0.845l3.3-1.601
					l1.408,4.539L130,485.75L128.5,483.25z"></path>
					<text class="svg_text" transform="matrix(1 0 0 1 117.494 468.176)" id="t_zelva">Зельва</text>                            
				</a>    
	
				<!-- Лидский район -->       
				<a xlink:href="" xlink:title="" id="r_lidar" target="_blank">                             
					<path id="lida" class="svg_region" title="" d="M141,434c0,0.75,1.25,3,1.25,3l1.25,1.75l-0.25-2.5l1.75-1.75l0.25-2
					c0,0,2.75-1,3.75-1.5s2.25-4.25,2.25-4.25l4-2.5c0,0-0.75-1.75,0-1.75s3.5,1.25,3.5,1.25s1.75-2.5,2.25-3.25s-1-2-1-2
					s1,0,3.25-0.25s1-1.75,1-1.75l-1-1.5c0,0-0.75-1-0.75-2.25s0-1,3.25-2s1.5-2.5,2-3.75c0.265-0.662,0.737-0.969,1.125-1.115
					c-0.357-0.419-0.625-0.926-0.625-1.385c0-1-0.25-2.25-0.25-3.75s0-2.25,0-2.25s-2.5-0.75-2.75-1.5s-0.25-4.25-0.25-4.25l-1.5-1.5
					L162,389h-2l-2.75,1.75L156,389.5l-0.75-1.25l-0.5-3.75l-1.75,1.25v3l-2.5,2.75c0,0,0,0-4,0s-0.75,2.5-0.75,2.5l-2.5,2.25
					L141.5,397c0,0-1.25,2-1.75,2.75S138,401.5,138,401.5l-1.5,0.75l-4.25-0.5l1,1.25c0,0-1.315,1.912-2.457,3.092L133,408.5
					c0,0-0.75,1.75-0.25,2.75s-1.75,2.25-1,2.25s-0.5,2.5-0.25,3.25s2.25,2.25,4.75,0.5c-1,2,2.75,3.75,2.75,3.75l-1.25,1.25
					c0,0-0.5,1.5-1.25,1.5s-1.5,0.75-1.25,2.25s3,0.5,3,0.5s-0.75,1.75,0.25,1.75s1,2.25,1,3.25c0,0.536-0.144,1.502-0.277,2.284
					C140.015,433.641,141,433.551,141,434z"></path>
					<text class="svg_text" transform="matrix(1 0 0 1 142.869 406.488)" id="t_lidar">Лида</text>                      
				</a>
				
				<!-- Щучинский район -->
				<a xlink:href="" xlink:title="" id="r_schuchin" target="_blank" title="title1">                                                              
					<path id="shuchin" class="svg_region" title="" d="M104,401.25l-3.25,1l-1,3l1.25,2.25l1.75-1.25c0,0,0,4.75,1.5,6.5
					c-1,1.25-3.5,2.25-3.5,2.25l-0.5,4.5c0,0,3.5,0.5-0.25,5.5c1.25,3.25,3.75,3.75,3.75,3.75s-2,4.75-0.5,4.75s4.25,1.5,4.25,1.5
					s-2,2.75,3.25,2.25c0-1.5,0-3,0-3H116l1.25,3l1.5,0.25l0.25,1.25l1.5,1.75c0,0,1.25,3.75,2.5,3s3.5-1.5,3.5-1.5l-0.25-2
					c0,0,1.5,0.25,3,0.25s3.25-1,3.25-1l3.75,2.25c0,0,0.25-1.5,0-2.25s-0.25-3.5-0.25-3.5l3-0.75c0,0,0.5-2.5,0.5-3.5s0-3.25-1-3.25
					s-0.25-1.75-0.25-1.75s-2.75,1-3-0.5s0.5-2.25,1.25-2.25s1.25-1.5,1.25-1.5L139,421c0,0-3.75-1.75-2.75-3.75
					c-2.5,1.75-4.5,0.25-4.75-0.5s1-3.25,0.25-3.25s1.5-1.25,1-2.25s0.25-2.75,0.25-2.75l-2.207-2.408
					c-0.509,0.526-0.984,0.908-1.293,0.908c-1,0-5.25-1.5-6.5-2.25s0-2.25,0-2.25s0.5-1.75-0.25-2s-1.25-1.75-2-2.75s1-1.25,1-1.25
					l1.75-4l0.183-2.196L117.5,393.3l-3.7-3.399l-9.191,6.065l1.141,1.284L104,401.25z"></path>
					<text class="svg_text" transform="matrix(1 0 0 1 107.056 422.926)" id="t_schuchin">Щучин</text>                        
				</a>
			</svg>

			<div class="svg_map_text" id="grodno_text">
			<div id="grodno_text_inner"></div>
			<div class="svg_map_text_close" onclick="close_block('grodno_text')"></div>
			</div>
		</div>`;
		
		return container;
	};

	const mapData = createMap(map);
	mapData.classList.add('map-container');
	branch.classList.add('branch-container');
	mapSectionContainer.classList.add('map-parent-container');	
	header2.innerHTML = `Филиалы`;
	
	section.append(header2);	
	section.append(mapSectionContainer);	
	mapSectionContainer.append(mapData);
	mapSectionContainer.append(branch);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drawMap);

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
/* harmony import */ var _modules_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/map */ "./js/modules/map.js");
/* harmony import */ var _modules_interaction_with_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/interaction-with-map */ "./js/modules/interaction-with-map.js");
/* harmony import */ var _modules_branch_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/branch-info */ "./js/modules/branch-info.js");

/* jshint esversion: 8 */





window.addEventListener('DOMContentLoaded', () => {
    //const modalTimerId = setTimeout(() => toggleModal('.modal', modalTimerId), 80000);

    (0,_modules_map__WEBPACK_IMPORTED_MODULE_0__["default"])();    
    (0,_modules_interaction_with_map__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_branch_info__WEBPACK_IMPORTED_MODULE_2__["default"])('grodno');
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

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map