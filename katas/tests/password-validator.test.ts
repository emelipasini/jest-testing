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

    it("should return error if the length is less than 8 characters", () => {
        const result = passwordValidator("$Inval1");
        expect(result).toBe("Error: The password must have at least 8 characters");
    });

    it("should return error if there is no uppercase letter", () => {
        const result = passwordValidator("$invalid1");
        expect(result).toBe("Error: The password must have at least 1 uppercase letter");
    });

    it("should return error if there is no lowercase letter", () => {
        const result = passwordValidator("$INVALID1");
        expect(result).toBe("Error: The password must have at least 1 lowercase letter");
    });

    it("should return error if there is no number", () => {
        const result = passwordValidator("$Invalid");
        expect(result).toBe("Error: The password must have at least 1 number");
    });
});
