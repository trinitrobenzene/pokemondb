// uppercase the first letter of string
export const upperFirst = (word) => (word[0].toUpperCase() + word.slice(1)).replace('-', ' ');

// uppercase gen letter
export const upperGen = (text) => {
    let i = text.indexOf('-')
    return text.slice(0, i) + ' ' + text.slice(i+1).toUpperCase()
}