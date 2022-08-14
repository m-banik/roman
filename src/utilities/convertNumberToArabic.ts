import { NumberType, numericEntities } from '../common';
import { checkIfAreOfRomanNumberType } from '../utilities';

export type ConvertNumberToArabicType = (input: NumberType) => NumberType;

export const convertNumberToArabic: ConvertNumberToArabicType = (input) => {
  input = input.trim();

  if (!checkIfAreOfRomanNumberType(input.split(''))) {
    return 'none';
  }

  let output = 0;

  input.split('').forEach((sign, index) => {
    const numericEntity = numericEntities.find(({ roman }) => roman === sign);
    if (!numericEntity) {
      return;
    }

    if (index + 1 < input.length) {
      const possibleNextEntity = numericEntities.find(
        ({ roman }) => roman === input.charAt(index + 1)
      );
      if (
        possibleNextEntity &&
        Number(numericEntity.arabic) < Number(possibleNextEntity.arabic)
      ) {
        output -= Number(numericEntity.arabic);
        return;
      }
    }

    output += Number(numericEntity.arabic);
  });

  return output > 0 ? String(output) : 'none';
};
