function transformAndsumNumbers(numbers) {
    //code aqui
    let acc = 0;
    
    for(let i = 0; i < numbers.length; i++) {
        acc += Number(numbers[i]);
    }

    return acc;
}

console.log(transformAndsumNumbers(['10', '30', '40']));

//não apague
module.exports = {
    transformAndsumNumbers
}


