// uppercase the first letter of string
export const upperFirst = (word) => (word[0].toUpperCase() + word.slice(1)).replace('-', ' ');

// uppercase gen letter
export const upperGen = (text) => {
    let i = text.indexOf('-')
    return text.slice(0, i) + ' ' + text.slice(i+1).toUpperCase()
}

export const pokeIdTransfer = (id, sign = '') => {
    if (id < 10) return `${sign}00${id}`;
    else if (id < 100) return `${sign}0${id}`;
    return `${sign}${id}`;
};