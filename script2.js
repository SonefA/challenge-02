// SOAL NOMOR 2
function checkTypeNumber(givenNumber)
{
    if (typeof(givenNumber) === "undefined") {
        return "Error: Bro where is the parameter ?";
        
    }
    else if (typeof(givenNumber) !== "number") {
        return "Error: Invalid data type";
        
    }
    else if (givenNumber % 2 === 0) {
        return "Genap";
    }
    else {
        return 'Ganjil';
    }
}

console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber(3"))
console.log(checkTypeNumber({}))
console.log(checkTypeNumber([]))
console.log(checkTypeNumber())