declare namespace jest {
    interface Matchers<R> {
        customToBe<T>(value: T): CustomMatcherResult;
        isExactly<T>(...values: T[]): CustomMatcherResult;
    }
}

expect.extend({
    customToBe(expected, received) {
        return {
            pass: expected === received,
            message: () => `Expected: ${expected} \nReceived: ${received}`,
        };
    },
    isExactly<T>(expectedList: T[], ...values: T[]) {
        const haveTheSameLength = expectedList.length === values.length;
        const haveTheSameElements = () =>
            values.map((_, i) => values[i] === expectedList[i]).reduce((p, c) => p && c, true);
        return {
            pass: haveTheSameLength && haveTheSameElements(),
            message: () => `Expected: ${expectedList} \nReceived: ${values}`,
        };
    },
});

test("custom assertion (extending)", () => {
    const list = [10, 20, 30];

    expect(list).isExactly(10, 20, 30);
});
