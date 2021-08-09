import { areCheckboxesAllSelected, checkboxGenerator } from '../index.js';

describe('utils | index', () => {
  test('areCheckboxesAllSelected | should be truthy (input is an array filled with true)', () => {
    const inputArray = [true, true, true];

    const myTest = areCheckboxesAllSelected(inputArray);
    expect(myTest).toBeTruthy();
  });

  test('areCheckboxesAllSelected | should be falsy (input is an array filled with false)', () => {
    const inputArray = [false, false, false];

    const myTest = areCheckboxesAllSelected(inputArray);
    expect(myTest).toBeFalsy();
  });

  test('areCheckboxesAllSelected | should be falsy (input is an array filled with false and true)', () => {
    const inputArray = [false, true, false];

    const myTest = areCheckboxesAllSelected(inputArray);
    expect(myTest).toBeFalsy();
  });

  test('areCheckboxesAllSelected | should be falsy (input with undefined)', () => {
    const inputArray = undefined;

    const myTest = areCheckboxesAllSelected(inputArray);
    expect(myTest).toBeFalsy();
  });

  test('areCheckboxesAllSelected | should be falsy (input with null)', () => {
    const inputArray = null;

    const myTest = areCheckboxesAllSelected(inputArray);
    expect(myTest).toBeFalsy();
  });

  test('checkboxGenerator | should create an array with custom length (input is a number)', () => {
    const myTest = checkboxGenerator(2);
    expect(myTest.length).toBe(2);
  });

  test('checkboxGenerator | should create an array with default length (input is a string)', () => {
    const myTest = checkboxGenerator('random string');
    expect(myTest.length).toBe(4);
  });

  test('checkboxGenerator | should create an array with default length (no input)', () => {
    const myTest = checkboxGenerator();
    expect(myTest.length).toBe(4);
  });
});
