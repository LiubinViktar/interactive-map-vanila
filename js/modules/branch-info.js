'use strict'

import drawBranch from "./draw-branch-body";
import editBranch from "./edit-branch";

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
                drawBranch(branchParentContainer, dataBranches[branchId], branch);										

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
            
            editBranch(branchParentContainer, dataBranches[pathId][i]);
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

export default createBranchInfo;