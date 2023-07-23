"use strict";
//['page','limit','sortBy','sortOrder']
Object.defineProperty(exports, "__esModule", { value: true });
const pick = (obj, keys) => {
    const resultAsObj = {};
    for (const key of keys) {
        if (obj && Object.hasOwnProperty.call(obj, key)) {
            resultAsObj[key] = obj[key];
        }
    }
    return resultAsObj;
};
exports.default = pick;
