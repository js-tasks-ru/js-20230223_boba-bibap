/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 * 
 */
export function sortStrings(strings, order = 'asc') {
    let [newArr, locale] = [[...strings], ['ru-u-kf-upper', 'en-US-u-kf-upper']];

    if (order === 'asc') {
        return newArr.sort((a, b) => a.localeCompare(b, locale));
    } else if (order === 'desc') {
        return newArr.sort((a, b) => b.localeCompare(a, locale));
    }
    return newArr;
}


sortStrings(['b', 'a', 'c'], 'asc');
sortStrings(['b', 'a', 'c'], 'desc');
sortStrings(['абрикос', 'Абрикос', 'яблоко', 'Яблоко', 'ёжик', 'Ёжик'], 'asc');

