import { average, sum } from "../../src/stats";
import * as statsAsync from "../../src/stats-async";

import { describe, expect, it } from "./test-library";

describe("Stats suite", () => {
    it("should calculate the sum of all elements of the array", () => {
        const result = sum([1, 2, 3]);
        const expected = 6;

        expect(expected).toBe(result);
    });

    it("should calculate the average of all elements of the array", () => {
        const result = average([1, 2, 3]);
        const expected = 2;

        expect(expected).toBe(result);
    });
});

describe("Async stats suite", () => {
    it("should calculate the sum of all elements of the array asynchronously", async () => {
        const numbers = [1, 2, 3];
        const result = await statsAsync.sum(numbers);
        const expected = 6;

        expect(result).toBe(expected);
    });

    it("should calculate the average of all elements of the array asynchronously", async () => {
        const numbers = [1, 2, 3];
        const result = await statsAsync.average(numbers);
        const expected = 2;

        expect(result).toBe(expected);
    });
});
