# Katas

#### Configuration

```bash
cd katas

npm install
npm run compile
```

#### Run all tests

```bash
npm test
```

## Pascal Case

A function that converts the strings to pascalcase format, that is, each word begins with a capital letter and there are no separations between words.

The function has its corresponding tests that evaluate the most relevant cases such as an empty string, words separated by space or by dashes with or without capital letters.

To run only pascal case converter tests:

```bash
npm test tests/pascal-case.test.ts
```

## Fizz Buzz

A simple function that receives a number and returns "fizz" if it's divisible by 3, "buzz" if it's divisible by 5 and "fizzbuzz" if it's divisible by both.

To run only fizz buzz tests:

```bash
npm test tests/fizz-buzz.test.ts
```

## Disease Filter

A class that has a method to get the filtered cases, it is just an example to apply factories and builders in the tests.

To run only disease filter tests:

```bash
npm test -j tests/disease-filter
```
