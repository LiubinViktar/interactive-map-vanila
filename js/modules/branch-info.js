'use strict'

import getData from "../services/services";
import drawBranch from "./draw-branch-body";
import editBranch from "./edit-branch";

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
        getData(`http://${addr}/${pathId}`)
        .then(data => {            
            drawBranch(branchParentContainer, data, branch);										
    
            branch.append(branchParentContainer); 

            let i = 0;			
            document.querySelector('.branch-arrow-left')
            .addEventListener('click', (e) => {				
                i--;
                if(i < 0) {
                    i = data.length - 1;
                }
                
                editBranch(branchParentContainer, data[i]);
            });
    
            document.querySelector('.branch-arrow-right')
            .addEventListener('click', (e) => {
                i++;
                if(i >= data.length) {
                    i = 0;
                }            
                
                editBranch(branchParentContainer, data[i]);
            });
        });        
    }				
};

export default createBranchInfo;