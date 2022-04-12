'use strict'

import createBranchInfo from "./branch-info";

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
				createBranchInfo(e.target.id);
			} else {
				createBranchInfo();
			}		
				
		});
	};
	
	regions.forEach(region => {
		bindAction(region);
	});	
};

export default mapInteraction;