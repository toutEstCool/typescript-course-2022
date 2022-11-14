"use strict";
/*{ Union Type }*/
function logId(id) {
    /*{ Сужение типов}*/
    if (typeof id === 'string') {
        console.log(id.toLocaleUpperCase());
    }
    else if (typeof id === 'number') {
        console.log(id.valueOf());
    }
    else {
        console.log(id);
    }
}
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
function logObject(obj) {
    if ('a' in obj) {
        console.log(obj.a);
    }
}
