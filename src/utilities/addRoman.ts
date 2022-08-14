import { convertNumberToArabic, convertNumberToRoman } from '.';
import { NumberType } from '../common';

export type AddRomanType = (
  firstNumber: NumberType,
  secondNumber: NumberType
) => NumberType;

export const addRoman: AddRomanType = (firstNumber, secondNumber) => {
  const firstNumberAsArabic = convertNumberToArabic(firstNumber);
  const secondNumberAsArabic = convertNumberToArabic(secondNumber);

  if (firstNumberAsArabic === 'none' || secondNumberAsArabic === 'none') {
    return 'none';
  }

  const sum = Number(firstNumberAsArabic) + Number(secondNumberAsArabic);

  if (sum > 5000) {
    return 'none';
  }

  const sumAsRoman = convertNumberToRoman(String(sum));

  return sumAsRoman;
};
