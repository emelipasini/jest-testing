# Class 3

## Names

With the names of the tests you should be able to understand how the system works. They are another communication tool with the other developers on the team.

The tests must be closer to the client than to the developer, the names must be clear so that when they fail we know where the problem is.

## Test structure

If possible, it only has three blocks: Arrange, Act and Assert.

Arrange
It is the part of the test where we prepare the context to be able to perform the test. For example, if we test a method of a class, we will first have to instantiate the class to test it. A part of the preparation can be contained in the setUp method, if it is common to all tests.

Act
Once the context is prepared, the next step is the action, act: we execute the action we want to test. For example, invoking a method with some parameters.

Assert
We verify if the result of the action is as expected. For example, the result of the previous method invocation has to return a certain value.

## General

If we are methodical and run the tests while programming we can find out what broke the code quickly and debugging is not necessary.

If we add more tests to gain security and feedback we can be redundant but if not it should be avoided.

The test code must be taken care of like the production code, otherwise it will degrade in the same way.

## Named constructor

Instantiate an object using one or more static methods.

Course example:

```ts
export class DiseaseFilter {
    private filters: string[] = [];

    constructor(private readonly cases: Case[], private readonly diagnoses: Diagnosis[]) {}

    static create(cases: Case[], diagnoses: Diagnosis[]) {
        return new DiseaseFilter(cases, diagnoses);
    }
}
```

### Advantages

1. Encapsulation: By encapsulating the instantiation of DiseaseFilter within the create method, you have control over how instances of the class are created. This encapsulation can be useful if you need to perform additional setup logic, validation, or if the instantiation logic becomes more complex in the future.

2. Expressiveness: The create method provides a clear and expressive way to create instances of the DiseaseFilter class. This can make the code more readable, especially when the construction of the object involves multiple steps, default values, or validation.

3. Separation of Concerns: The create method allows you to separate the instantiation logic from the rest of the class. This separation can improve the overall organization of your code, making it easier to understand and maintain.

4. Consistent Initialization: If there are certain initialization steps or checks that need to be performed every time an instance of DiseaseFilter is created, the create method ensures that these steps are consistently applied. This can help avoid common mistakes and ensure a consistent state for objects.

Here's an example that demonstrates these advantages:

```ts
export class DiseaseFilter {
    private filters: string[] = [];

    private constructor(private readonly cases: Case[], private readonly diagnoses: Diagnosis[]) {
        // Additional initialization logic can be added here
    }

    static create(cases: Case[], diagnoses: Diagnosis[]): DiseaseFilter {
        // Validation or additional logic before instantiation
        if (!cases || !diagnoses) {
            throw new Error("Both cases and diagnoses are required.");
        }

        // Instantiate the class using the named constructor
        return new DiseaseFilter(cases, diagnoses);
    }
}
```

## Factories, Builders and Fixtures

Using factories and builders in tests can be particularly useful when you need to create complex objects with various configurations for your test cases.

One of the most time-consuming parts of writing tests is writing the code to set the world up in a known state and then return it to its original state when the test is complete. This known state is called the fixture of the test.

The builder pattern is used in situations where we must build an object repeatedly or when this object has a large amount of associated attributes and data, and where using constructors to create the object is not a convenient solution. Although, it can be strange to build the same type of object so many times and with so many different configurations in production code.

In the disease-filter kata you can see 2 examples of tests:

-   One implemented with Factories, where we create functions that help us instantiate an object with only the information that is relevant to the use case.
-   Another implemented with Builders that allow a more readable and expressive way to construct instances of cases and diagnoses with specific properties. It saves data along the way and generates the desired data structure when the build object is invoked.
