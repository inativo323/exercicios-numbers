const { transformNumbers } = require("./index")

describe('Teste 01', () => {
    it('Deve converter ["10", "20", "30"] para [10, 20, 30]', () => {

        const result = transformNumbers(['10', '20', '30']);

        const expectResult = [10, 20, 30];

        expect(result).toEqual(expectResult);
    })

    it('Deve converter ["1", "2", "4"] para [1, 2, 4]', () => {

        const result = transformNumbers(['1', '2', '4']);

        const expectResult = [1, 2, 4];

        expect(result).toEqual(expectResult);
    })

    it('Deve converter ["5", "2", "4"] para [5, 2, 4]', () => {

        const result = transformNumbers(['5', '2', '4']);

        const expectResult = [5, 2, 4];

        expect(result).toEqual(expectResult);
    })

    it('Deve converter ["45", "43", "4.5"] para [45, 43, 4.5]', () => {

        const result = transformNumbers(['45', '43', '4.5']);

        const expectResult = [45, 43, 4.5];

        expect(result).toEqual(expectResult);
    })
})