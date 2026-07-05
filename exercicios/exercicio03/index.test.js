const { transformIntNumbers } = require("./index");

describe('Teste 03', () => {
    it('Deve converter [10.5, 20.3, 30.7] para [10, 20, 30]', () => {

        const result = transformIntNumbers([10.5, 20.3, 30.7]);

        const expectResult = [10, 20, 30];

        expect(result).toEqual(expectResult);
    })

    it('Deve converter [1.3, 2.4, 4.5] para [1, 2, 4]', () => {

        const result = transformIntNumbers([1.3, 2.4, 4.5]);

        const expectResult = [1, 2, 4];

        expect(result).toEqual(expectResult);
    })

    it('Deve converter [5.9, 2.8, 4.2] para [5, 2, 4]', () => {

        const result = transformIntNumbers([5.9, 2.8, 4.2]);

        const expectResult = [5, 2, 4];

        expect(result).toEqual(expectResult);
    })

    it('Deve converter [45.3, 43.45, 4.32] para [45, 43, 4]', () => {

        const result = transformIntNumbers([45.3, 43.45, 4.32]);

        const expectResult = [45, 43, 4];

        expect(result).toEqual(expectResult);
    })
})