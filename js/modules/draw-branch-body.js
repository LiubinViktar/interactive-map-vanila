'use strict'

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

export default drawBranch;