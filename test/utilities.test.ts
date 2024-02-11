import {closestPowerOf2} from "../src/utils"


test('Test power of 2 when perfect', () => {
    let result = closestPowerOf2(8);
    expect(result).toEqual(8);
});

test('Test power of two when imperfect', () => {
    let result = closestPowerOf2(18);
    expect(result).toEqual(32);
});

test("Test bye calculation with invalid values", () => {
    // Test with a negative number
    let result = closestPowerOf2(-10);
    expect(result).toEqual(2);

    // Test with zero
    result = closestPowerOf2(0);
    expect(result).toEqual(2);
});