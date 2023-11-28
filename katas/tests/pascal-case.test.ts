import convertToPascalCase from "../src/pascal-case";

describe("Pascal Case converter", () => {
    it("should do nothing to empty strings", () => {
        const result = convertToPascalCase("");
        expect(result).toBe("");
    });

    it("should do nothing to capitalized word", () => {
        const result = convertToPascalCase("Foo");
        expect(result).toBe("Foo");
    });

    it("should join capitalized words separated with spaces", () => {
        const result = convertToPascalCase("Foo Bar Foo");
        expect(result).toBe("FooBarFoo");
    });

    it("should join capitalized words separated with dashes", () => {
        const result = convertToPascalCase("Foo_Bar-Foo");
        expect(result).toBe("FooBarFoo");
    });

    it("should capitalized a lowercase word", () => {
        const result = convertToPascalCase("foo");
        expect(result).toBe("Foo");
    });

    it("should join and capitalize lowercase words separated with dashes", () => {
        const result = convertToPascalCase("foo-bar_foo");
        expect(result).toBe("FooBarFoo");
    });

    it("should join and lower the uppercased words separated with spaces", () => {
        const result = convertToPascalCase("FOO BAR FOO");
        expect(result).toBe("FooBarFoo");
    });
});
