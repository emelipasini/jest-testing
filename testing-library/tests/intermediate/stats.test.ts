import { sum, average } from "../../src/stats";

test("calculates the sum of all elements of the array", async () => {
    const result = sum([1, 2, 3]);
    const expected = 6;

    expect(expected).toBe(result);
});

test("calculates the average of all elements of the array", async () => {
    const result = average([1, 2, 3]);
    const expected = 2;

    expect(expected).toBe(result);
});

export function expect<T>(expected: T) {
    return {
        toBe<U extends T>(result: U) {
            if (result !== expected) throw new Error(`❌ ${result} is not equal to ${expected}`);
        },
    };
}

export async function test(description: string, callback: () => Promise<void>) {
    try {
        await callback();
        console.log(`✅ ${description}`);
    } catch (error) {
        console.log(`❌ ${description}`);
        console.log(error);
    }
}
