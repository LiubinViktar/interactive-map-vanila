'use strict';
/* jshint esversion: 8 */

const postData = async (url, data) => {
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },                
        body: data
    });

    return await result.json();
};

const getData = async (url) => {
    let result = await fetch(url);

    if(!result.ok) {
        throw new Error(
          `could not fetch ${url}, with status ${result.status}`);
    }

    return await result.json();
};

export {postData, getData};
