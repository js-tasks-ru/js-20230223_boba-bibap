/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */

const obj = {
    ball: 2,
    pencil: 3,
    book: 5,
}



 export const pick = (obj, ...fields) => {

    const newObj = {}

    Object.entries(obj).map(([key, value]) => {
        if(fields.includes(key)) {
            newObj[key] = value;
        }
    })
    return newObj;
};

console.log(pick(obj, "ball", "pencil"));