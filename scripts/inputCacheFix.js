'use strict';

window.onload = () => {
    let elementsCollection = document.getElementsByTagName('input');
    for(let i=0; i<elementsCollection.length; i++)
    {
        elementsCollection[i].value = '';
    }
}