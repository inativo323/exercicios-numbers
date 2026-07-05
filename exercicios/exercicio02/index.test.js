const { transformAndsumNumbers } = require("./index");

describe('Exercicio 02', () => {
    it('Deve retornar o valor 60', () => {

        const result = transformAndsumNumbers(['10', '20', '30']);

        const expectResult = 60;

        expect(result).toBe(expectResult);
    })

    it('Deve retornar o valor 7', () => {

        const result = transformAndsumNumbers(['1', '2', '4']);

        const expectResult = 7;

        expect(result).toBe(expectResult);
    })

    it('Deve retornar o valor 11', () => {

        const result = transformAndsumNumbers(['5', '2', '4']);

        const expectResult = 11;

        expect(result).toEqual(expectResult);
    })

    it('Deve retornar o valor 98', () => {

        const result = transformAndsumNumbers(['45', '43', '10']);

        const expectResult = 98;

        expect(result).toEqual(expectResult);
    })
})