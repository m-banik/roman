import { ArabicNumberType, RomanNumberType } from '../common';

export const checkIfIsOfArabicNumberType = (
  input: unknown
): input is ArabicNumberType => {
  const instance = input as ArabicNumberType;

  return (
    instance === '0' ||
    instance === '1' ||
    instance === '2' ||
    instance === '3' ||
    instance === '4' ||
    instance === '5' ||
    instance === '6' ||
    instance === '7' ||
    instance === '8' ||
    instance === '9'
  );
};

export const checkIfAreOfArabicNumberType = (
  input: unknown
): input is ArabicNumberType[] => {
  const instance = input as ArabicNumberType[];

  return (
    instance instanceof Array &&
    instance.every((element) => checkIfIsOfArabicNumberType(element))
  );
};

export function assertIsOfArabicNumberType(
  input: unknown,
  errorMessage = 'Input is not of RomanNumberType!'
): asserts input is ArabicNumberType {
  if (!checkIfIsOfArabicNumberType(input)) {
    throw new Error(errorMessage);
  }
}

export function assertAreOfArabicNumberType(
  input: unknown,
  errorMessage = 'Input is not an array of RomanNumberType!'
): asserts input is ArabicNumberType[] {
  if (!checkIfAreOfArabicNumberType(input)) {
    throw new Error(errorMessage);
  }
}

export const checkIfIsOfRomanNumberType = (
  input: unknown
): input is RomanNumberType => {
  const instance = input as RomanNumberType;

  return (
    instance === 'I' ||
    instance === 'V' ||
    instance === 'X' ||
    instance === 'L' ||
    instance === 'C' ||
    instance === 'D' ||
    instance === 'M'
  );
};

export const checkIfAreOfRomanNumberType = (
  input: unknown
): input is RomanNumberType[] => {
  const instance = input as RomanNumberType[];

  return (
    instance instanceof Array &&
    instance.every((element) => checkIfIsOfRomanNumberType(element))
  );
};

export function assertIsOfRomanNumberType(
  input: unknown,
  errorMessage = 'Input is not of RomanNumberType!'
): asserts input is RomanNumberType {
  if (!checkIfIsOfRomanNumberType(input)) {
    throw new Error(errorMessage);
  }
}

export function assertAreOfRomanNumberType(
  input: unknown,
  errorMessage = 'Input is not an array of RomanNumberType!'
): asserts input is RomanNumberType[] {
  if (!checkIfAreOfRomanNumberType(input)) {
    throw new Error(errorMessage);
  }
}
