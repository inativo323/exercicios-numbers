function verifyNumberAndConvert(numbers) {
    //code aqui
    const result = [];

    for(let i = 0; i < numbers.length; i++) {

        const item = Number(numbers[i]) ? numbers[i].toString() : numbers[i];

        result.push(item)
    }

    return result
}

console.log(verifyNumberAndConvert([10, 30, 40]));

//não apague
module.exports = {
    verifyNumberAndConvert
}