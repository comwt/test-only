import {
    add,
    divide,
    multiply,
    subtract
} from './lib';

describe("All 'lib' tests", () => {
    describe("add function should:", () => {
        test("properly add numbers", () => {
            const val = add(10, 2);
            expect(val).toBe(12);
        });
    });
    describe("divide function should:", () => {
        test("properly divide numbers", () => {
            const val = divide(10, 2);
            expect(val).toBe(5);
        });
    });
    describe("multiply function should:", () => {
        test("properly multiply numbers", () => {
            const val = multiply(10, 2);
            expect(val).toBe(20);
        });
    });
    describe("subtract function should:", () => {
        test("properly subtract numbers", () => {
            const val = subtract(10, 2);
            expect(val).toBe(8);
            const val2 = subtract(10, 3);
            expect(val2).toBe(7);
        });
    });
});
