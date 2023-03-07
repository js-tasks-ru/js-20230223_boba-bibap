/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */

const product = {
    category: {
        title: "Goods"
    }
}

 export function createGetter(path) {

    const properties = path.split(".");

    return function(obj) {

        let result = obj;

        for (const prop of properties) {
            if (result.hasOwnProperty(prop)) {
                result = result[prop];
            } else {
                return undefined;
            }
        }

        return result;
    }

}






