'use strict'

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

export default editBranch;