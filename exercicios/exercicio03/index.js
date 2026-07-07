function transformIntNumbers(numbers) {
    //code aqui
  const result = [];
    
    for(let i = 0; i < numbers.length; i++) {
        result.push(Number.parseInt(numbers[i]));
    }

    return result;
}

console.log(transformIntNumbers([10, 30, 40]));

//não apague
module.exports = {
    transformIntNumbers
}