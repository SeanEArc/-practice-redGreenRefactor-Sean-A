
function countVowels(str){
    let count = 0
    let lowerCaseString = str.toLowerCase()
    for (i = 0; i < str.length; i++){
    if (lowerCaseString[i].includes("a")) {
        count += 1
    } else if (lowerCaseString[i].includes("e")) {
        count += 1
    } else if (lowerCaseString[i].includes("i")) {
        count += 1
    } else if (lowerCaseString[i].includes("o")) {
        count += 1
    } else if (lowerCaseString[i].includes("u")) {
        count += 1
    }}

    return `${str} has ${Number(count)} vowels`
}

countVowels("jest")

module.exports = countVowels