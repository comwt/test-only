import {
    add
} from './lib';

describe("All 'lib' tests", () => {
    describe("add function should:", () => {
        test("properly add numbers", () => {
            const val = add(10, 2);
            expect(val).toBe(12);
        });
    });
});
