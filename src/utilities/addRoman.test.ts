import { addRoman } from '.';
import { NumberType } from '../common';

const testSamples: NumberType[][] = [
  ['I', 'IV', 'V'],
  ['X', 'XL', 'L'],
  ['IV', 'XCVI', 'C'],
  ['CXXV', 'CCCLXXXII', 'DVII'],
  ['CCLXXVII', 'MDCCXLVI', 'MMXXIII'],
  ['CMLXXXI', 'MMCLXXXIX', 'MMMCLXX'],
  ['MMMDLV', 'CMLXXXIX', 'MMMMDXLIV'],
  ['MMMMDCLXXXVI', 'CXXVII', 'MMMMDCCCXIII'],
  ['LV', 'XX', 'LXXV'],
  ['MMMMCMXCIX', 'I', 'MMMMM'],
];

describe('addRoman', () => {
  describe('returns "none"', () => {
    it('if invalid roman number was provided as the first argument', () => {
      const result = addRoman('', 'I');
      expect(result).toBe('none');
    });

    it('if invalid roman number was provided as the second argument', () => {
      const result = addRoman('II', 'abc');
      expect(result).toBe('none');
    });

    it('if invalid roman numbers were provided as both of the arguments', () => {
      const result = addRoman('abc', 'xyz');
      expect(result).toBe('none');
    });
  });

  describe('adds numbers properly', () => {
    it.each(testSamples)(
      'when %s and %s were provided as arguments, it returns %s as the correct sum',
      (firstNumber, secondNumber, sum) => {
        const result = addRoman(firstNumber, secondNumber);

        expect(result).toBe(sum);
      }
    );

    it('and returns "none" if the sum is greater than 5000', () => {
      const result = addRoman('MMMMCMXCIX', 'II');

      expect(result).toBe('none');
    });
  });
});
