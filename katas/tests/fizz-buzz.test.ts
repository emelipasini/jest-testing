import { describe, it, expect } from "@jest/globals";

import fizzBuzz from "../src/fizz-buzz";

describe("Fizz buzz suite", () => {
    it("should return the same number if it's not divisible by 3 or 5", () => {
        const result = fizzBuzz(7);
        expect(result).toBe("7");
    });

    it("should return fizz if the number is 3", () => {
        const result = fizzBuzz(3);
        expect(result).toBe("fizz");
    });

    it("should return buzz if the number is 5", () => {
        const result = fizzBuzz(5);
        expect(result).toBe("buzz");
    });

    it("should return fizzbuzz if the number is 15", () => {
        const result = fizzBuzz(15);
        expect(result).toBe("fizzbuzz");
    });

    it("should return fizz for any number divisible by 3", () => {
        const result = fizzBuzz(9);
        expect(result).toBe("fizz");
    });

    it("should return buzz for any number divisible by 5", () => {
        const result = fizzBuzz(10);
        expect(result).toBe("buzz");
    });

    it("should return fizzbuzz for any number divisible by 3 and 5", () => {
        const result = fizzBuzz(30);
        expect(result).toBe("fizzbuzz");
    });
});
