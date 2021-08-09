export const areCheckboxesAllSelected = inputArray => inputArray && inputArray.every(isTruthy);
const isTruthy = elem => elem === true;

export const checkboxGenerator = number => {
  let defaultNumber;
  if (!number || typeof number !== 'number') {
    defaultNumber = 4;
  }
  return Array.from({ length: defaultNumber || number }, (_, index) => index);
};
