import { NumberType, numbersData } from '../common';
import { checkIfAreOfArabicNumberType } from '../utilities';

const getRomanNumberFromNumbersData = (
  input: NumberType,
  section: 'units' | 'tens' | 'hundreds' | 'thousands'
): string => {
  let numberToCompare = input;

  switch (section) {
    case 'tens':
      numberToCompare += '0';
      break;
    case 'hundreds':
      numberToCompare += '00';
      break;
    case 'thousands':
      numberToCompare += '000';
      break;
    default:
      break;
  }

  return (
    numbersData[section].find(
      (numericEntity) => numericEntity.arabic === numberToCompare
    )?.roman || ''
  );
};

export type ConvertNumberToRomanType = (input: NumberType) => NumberType;

export const convertNumberToRoman: ConvertNumberToRomanType = (input) => {
  input = input.trim();

  if (!checkIfAreOfArabicNumberType(input.split(''))) {
    return 'none';
  }

  let [output, signAtIndex] = ['', ''];

  if (input.length > 3) {
    signAtIndex = input.charAt(input.length - 4);
    output += getRomanNumberFromNumbersData(signAtIndex, 'thousands');
  }

  if (input.length > 2) {
    signAtIndex = input.charAt(input.length - 3);
    output += getRomanNumberFromNumbersData(signAtIndex, 'hundreds');
  }

  if (input.length > 1) {
    signAtIndex = input.charAt(input.length - 2);
    output += getRomanNumberFromNumbersData(signAtIndex, 'tens');
  }

  if (input.length > 0) {
    signAtIndex = input.charAt(input.length - 1);
    output += getRomanNumberFromNumbersData(signAtIndex, 'units');
  }

  return output || 'none';
};
