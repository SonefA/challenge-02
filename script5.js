// function getSplitName(personName) {
//     let regexName = /^(?:([a-zA-Z]{2,4}\.){0,1} ?([a-zA-Z]{2,24})) ([a-zA-Z]{1,1}\. ){0,1}([a-zA-Z]{2,24} ){0,2}([A-Za-z']{2,24})((?:, ([a-zA-Z]{2,5}\.?)){0,4}?)$/im/
//     if
// }

// function getSplitName(personName) {
//     return {
//         firstName: personName.indexOf(' ') !== 0 && personName.substring(0, personName.indexOf(' ')) || personName,
//         middleName: personName.indexOf(' ') !== 1 && personName.substring(personName.indexOf(' ')) || personName,
//         lastName: personName.indexOf(' ') !== 2 && personName.substring(personName.indexOf(' ') + 8) || ''
//       }
//     }

function getSplitName(personName) {
    let name = personName;
    let result = [];

    if (typeof name !== "string") {
        return "Error: Input karakter huruf";
    
    }  if (name.match(/(\w+)/g).length === 1) {
        result.push({
            firstName: name.split(" ")[0],
            middleName: name.split === "null",
            lastName: name.split === "null",
        });
        return result;
    
    }  if (name.match(/(\w+)/g).length === 2) {
        result.push({
            firstName: name.split(" ")[0],
            middleName: name.split === "null",
            lastName: name.split(" ")[1],
        });
        return result;
    
    } if (name.match(/(\w+)/g).length === 3) {
        result.push({
            firstName: name.split(" ")[0],
            middleName: name.split(" ")[1],
            lastName: name.split(" ")[2],
        });
        return result;
    
    } if (name.match(/(\w+)/g).length > 3) {
        return "ERROR : This function only for 3 characters";

    }
}
console.log(getSplitName("Aldi Daniela Pranata"))

console.log(getSplitName("Dwi Kuncoro"))

console.log(getSplitName("Aurora"))

console.log(getSplitName("Aurora Aureliya Sukma Darma"))

console.log(getSplitName(0))