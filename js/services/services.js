'use strict';

const getData = async (url) => {
    let result = await fetch(url);

    if(!result.ok) {
        throw new Error(
          `could not fetch ${url}, with status ${result.status}`);
    }

    return await result.json();
};

export default getData;
