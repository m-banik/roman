import { convertNumberToRoman } from '.';
import { numbersSamples } from '../common';

describe('convertNumberToRoman', () => {
  describe('converts the numbers properly and', () => {
    it('returns none when an empty string is provided', () => {
      const result = convertNumberToRoman('');
      expect(result).toBe('none');
    });

    it.each([['x'], ['abc'], ['xyz'], ['x23'], ['1y3'], ['12z'], ['1 24']])(
      'returns none when %s is provided as the incorrect value',
      (argument) => {
        const result = convertNumberToRoman(argument);
        expect(result).toBe('none');
      }
    );

    it.each(numbersSamples)(
      'when %s arabic number is provided, returns %s',
      (argument, expectedResult) => {
        const result = convertNumberToRoman(argument);
        expect(result).toBe(expectedResult);
      }
    );

    it.each([
      [' 50', 'L'],
      ['75 ', 'LXXV'],
      [' 100 ', 'C'],
    ])(
      'when "%s" as string with space is provided, returns %s as the correct roman value',
      (argument, expectedResult) => {
        const result = convertNumberToRoman(argument);
        expect(result).toBe(expectedResult);
      }
    );
  });
});
