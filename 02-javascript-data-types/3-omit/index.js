/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */

const obj = {
    ball: 2,
    pencil: 3,
    book: 5,
}

export const omit = (obj, ...fields) => {

return Object.fromEntries(Object.entries(obj).filter(([key]) => !fields.includes(key)));

};

