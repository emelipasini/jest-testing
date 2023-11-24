import { sum, average } from "../../src/stats";

let result: number, expected: number;
result = sum([1, 2, 3]);
expected = 6;

if (result === expected) console.log("✅ Test passed");
else throw new Error(`❌ ${result} is not equal to ${expected}`);

result = average([1, 2, 3]);
expected = 2;

if (result === expected) console.log("✅ Test passed");
else throw new Error(`❌ ${result} is not equal to ${expected}`);
