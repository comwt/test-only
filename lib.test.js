import {
    add
} from './lib';

describe("All 'lib' tests", () => {
    describe("add function should:", () => {
        test("properly add numbers", () => {
            const val = add(10, 2);
            expect(val).toBe(12);
        });
        test("properly subtract numbers", () => {
            const val = subtract(10, 2);
            expect(val).toBe(8);
            const val2 = subtract(10, 3);
            expect(val2).toBe(7);
        });
    });
});
