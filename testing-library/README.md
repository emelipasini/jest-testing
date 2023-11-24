# Testing library

We created our own testing library to know the basics of testing.

In this example there are two functions, one that calculates the sum and one that calculates the average.
At the same time, these two functions are repeated in two files, one with synchronous functions and the other with asynchronous functions.

The tests that cover both the synchronous and asynchronous versions are separated into basic, intermediate and advanced.
The basic one only compares the result with the expected value.
The intermediate creates two functions: test and expect that it then uses to do a slightly more complex test.
The advanced one creates functions like describe, test, evaluate, etc in a separate file which it then imports in a very similar way to what we see in Jest.

## Install

```bash
npm install
```

## Compile

```bash
npm run compile
```

## Run tests

```bash
npm run test:basic
npm run test:intermediate
npm run test:advance
```
