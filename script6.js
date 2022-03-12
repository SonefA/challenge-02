// function getAngkaTerbesarKedua (arrayNumber) {
//     var arrayFilter = [];
//     var arraySort = []; 

//     let arrayFilter = arrayNumber.filter(c, index) => {
//         return arrayNumber.indexOf(c) === index;
    
//     });


//     arraySort = arrayFilter.sort((a, b) => b - a);
//     return arraySort[1];
// }

function getAngkaTebesarKedua(arrayNumber) 
{
    if(arrayNumber) 
    {
        let arrayFilter = []
        for(let i of arrayNumber) {
            if(arrayFilter.indexOf(i) === -1) 
            {
                arrayFilter.push(i);
            }
        }
        let arraySort = arrayFilter.sort((a, b) => b - a);
        return arraySort[1]
    }
    else if (arrayNumber == null) 
    {
        return "Error"
    }
    else {
        return "Error"
    }
}



const dataAngka = [9,4,7,7,4,3,2,2,8]

console.log(getAngkaTebesarKedua(dataAngka))

console.log(getAngkaTebesarKedua(0))

console.log(getAngkaTebesarKedua())


