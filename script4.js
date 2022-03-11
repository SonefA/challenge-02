function isValidPassword (email) {
    let regexPassword = /^(?:([a-zA-Z]{2,4}\.){0,1} ?([a-zA-Z]{2,24})) ([a-zA-Z]{1,1}\. ){0,1}([a-zA-Z]{2,24} ){0,2}([A-Za-z']{2,24})((?:, ([a-zA-Z]{2,5}\.?)){0,4}?)$/im/g;
    if (typeof(email) === undefined) {
        return "Error: Value tidak ditemukan"
    }
    else if (typeof(email) !== "Number") {
        return "Error: Harus terdapat kombinasi huruf dan angka"
    }
    else if (email.match(regexPassword)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isValidPassword('Meong2021'))

console.log(isValidPassword('meong2021'))

console.log(isValidPassword('@eong2021'))

console.log(isValidPassword('Meong2'))

console.log(isValidPassword(0))

console.log(isValidPassword())