// import variables from other files:
// for export rules see ./vars.js

import { var1, var2 } from './vars';

import * as allVars from './vars';

import defaultVar from './vars';

console.log('import/export example start');
console.log({ var1, var2, allVars, defaultVar });
console.log('import/export example end');

// Object spread and merge:
const object1 = {
  key1: 'value1Object1',
  key2: 'value2Object1',
};

const object2 = {
  key1: 'value1Object2',
  key3: 'value3Object2',
};

// object3 will inherit the keys from object1, overwritten with the keys of object2.
// ... is the spread operator, it spreads the key/value pairs of arrays and objects
// into the key/value pairs of another array or object
const object3 = {
  ...object1,
  ...object2,
};

console.log('spread operator example start');
console.log({ object1, object2, object3 });
console.log('spread operator example end');

// Arrow functions:

// this function returns an immediately invoked function,
// that returns a string
const function1 =
  () =>
    'function1 returned value';

// this function manipulates a value
// then returns it using the return statement manually.
// mind the {}
const function2 =
  () => {
    const value = 'function2 returned value';
    return value;
  };

const valueFunction1 = function1();
const valueFunction2 = function2();

console.log('arrow function example 1: returning start');
console.log({ valueFunction1, valueFunction2 });
console.log('arrow function example 1: returning end');

console.log('return objects from arrow functions example start');
// you need special syntax if you want to return objects from arrow functions
const returnAnObject = {
  objectKey1: 'objectValue1',
  objectKey2: 'objectValue2',
};

// this function returns an object
const functionReturnsObject =
  () => ({
    ...returnAnObject,
  });

// this function also returns an object
const functionAlsoReturnsObject =
  () => {
    return {
      ...returnAnObject,
    };
  };

const returnedObject1 = functionReturnsObject();
const returnedObject2 = functionAlsoReturnsObject();

console.log({ returnedObject1, returnedObject2 });

console.log('return objects from arrow functions example end');


console.log('arrow function arguments example start');

// if you only expect one argument you need no () around it:
export const functionWithOneArgument =
  arg =>
    arg;

// if you expect two or more arguments you need () around them:
export const functionWithMultipleArguments =
  (arg1, arg2, arg3) =>
    [arg1, arg2, arg3].join(' ');

const functionWithOneArgumentReturns = functionWithOneArgument('oneArgument');
const functionWithMultipleArgumentsReturns = functionWithMultipleArguments('arg1', 'arg2', 'arg3');

console.log({
  functionWithOneArgumentReturns,
  functionWithMultipleArgumentsReturns, // always use trailing commas in multiline object assignments
});

console.log('arrow function arguments example end');


console.log('arrow function object argument destructuring example start');

// you can call arrow functions with an object as first argument,
// then automatically destructure the object.
const functionWithObjectArgument =
  ({ key1, key2, key3 }) =>
    [key1, key2, key3].join(' ');

const functionWithObjectArgumentReturns = functionWithObjectArgument(object3);

console.log({ functionWithObjectArgumentReturns });

console.log('arrow function object argument destructuring example end');

console.log('const and let assignment examples start');

const constantVariable = 'bla';
// this will throw an uncatchable build time error:
// constantVariable = 'blu';

let mutableVariable = 'bla';

mutableVariable = 'blu';

console.log({ constantVariable, mutableVariable });

console.log('const and let assignment examples end');

console.log('const and let assignment block scoping start');
// let and const are block scoped:

if (true) {
  let mutableInIf = true;
  mutableInIf = 'yay, mutableInIf was mutable';
  const constantInIf = 'constantInIf is not mutable';
  // constantInIf = 'constantInIf can be mutated.';

  // mutableInIf and constantInIf are defined:
  console.log({ mutableInIf, constantInIf });
}

try {
  // will throw:
  // ReferenceError: mutableInIf is not defined
  // in the catch block below
  console.log ({ mutableInIf, constantInIf });
} catch(e) {
  console.log('error:', e);
}

console.log('const and let assignment block scoping end');

