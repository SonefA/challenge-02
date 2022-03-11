function checkEmail(email) {
    
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regexEmail)) {
        return "VALID";
    }
    else {
        return "INVALID";
    }
}
console.log(checkEmail('mushonnefa@gmail.co.id'))
console.log(checkEmail('mushonnefa@gmail.com'))
console.log(checkEmail('mushonnefa@gmail'))
console.log(checkEmail('mushonnef'))

console.log(checkEmail())
