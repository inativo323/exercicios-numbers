const { verifyNumberAndConvert } = require("./index");

describe('Teste 04', () => {
    it('Deve converter ["X", "y", "lopes", 1] para ["X", "y", "lopes", "1"]', () => {

        const result = verifyNumberAndConvert(["X", "y", "lopes", 1]);

        const expectResult = ['X', 'y', 'lopes', '1'];

        expect(result).toEqual(expectResult);
    })

    it('Deve converter ["20", 10, "lopes", 1] para ["20", "10", "lopes", "1"]', () => {

        const result = verifyNumberAndConvert(["20", 10, "lopes", 1]);

        const expectResult = ['20', '10', 'lopes', '1'];

        expect(result).toEqual(expectResult);
    })

    it('Deve converter ["y", "lopes"] para ["y", "lopes"]', () => {

        const result = verifyNumberAndConvert(["y", "lopes"]);

        const expectResult = ['y', 'lopes'];

        expect(result).toEqual(expectResult);
    })

    it('Deve converter [10, 20, 43] para ["10", "20", "43"]', () => {

        const result = verifyNumberAndConvert([10, 20, 43]);

        const expectResult = ['10', '20', '43'];

        expect(result).toEqual(expectResult);
    })
})