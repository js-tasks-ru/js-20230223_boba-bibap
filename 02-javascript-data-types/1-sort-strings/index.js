/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 * 
 */
    function sortStrings(strings, order = 'asc') {
         const locale = ['ru-u-kf-upper', 'en-US-u-kf-upper'];

        if (order === 'asc') {
            return strings.sort((a, b) => a.localeCompare(b, locale));
        } else if (order === 'desc') {
            return strings.sort((a, b) => b.localeCompare(a, locale));
        }
}


sortStrings(['b', 'a', 'c'], 'asc'); // ['a', 'b', 'c']
sortStrings(['b', 'a', 'c'], 'desc'); // ['c', 'b', 'a'] 
sortStrings(['абрикос', 'Абрикос', 'яблоко', 'Яблоко', 'ёжик', 'Ёжик'], 'asc');

