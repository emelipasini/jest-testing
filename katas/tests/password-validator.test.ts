import { describe, it, expect } from "@jest/globals";

import passwordValidator from "../src/password-validator";

describe("Password validator", () => {
    /*
        Conditions:
        - at least 8 characters
        - at least 1 uppercase letter
        - at least 1 lowercase letter
        - at least 1 number
        - at least 1 special character

        Cases:
        - Valid password
        - Missing length
        - Missing uppercase
        - Missing lowercase
        - Missing number
        - Missing special character
    */

    it("should return true if the password is valid", () => {
        const result = passwordValidator("$ValidPass1");
        expect(result).toBe(true);
    });
});
