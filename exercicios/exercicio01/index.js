function transformNumbers(numbers) {
    //code aqui
    const result = [];
    
    for(let i = 0; i < numbers.length; i++) {
        result.push(Number(numbers[i]));
    }

    return result;
}

console.log(transformNumbers(['10', '30', '40']));

//não apague
module.exports = {
    transformNumbers
}