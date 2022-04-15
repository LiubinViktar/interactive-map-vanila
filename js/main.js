'use strict';

import mapInteraction from './modules/interaction-with-map';
import createBranchInfo from './modules/branch-info';

window.addEventListener('DOMContentLoaded', () => {      
    mapInteraction();
    createBranchInfo('grodno');          
});
