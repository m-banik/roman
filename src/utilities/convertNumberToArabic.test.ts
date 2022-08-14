import { convertNumberToArabic } from '.';
import { numbersSamples } from '../common';

const testSamples = numbersSamples.map((sample) => [
  sample[1],
  String(Number(sample[0])),
]);

describe('convertNumberToArabic', () => {
  describe('converts the numbers properly and', () => {
    it('returns none when an empty string is provided', () => {
      const result = convertNumberToArabic('');
      expect(result).toBe('none');
    });

    it.each([
      ['x'],
      ['abc'],
      ['xyz'],
      ['xXXII'],
      ['CyIII'],
      ['CXXz'],
      ['M XXIV'],
    ])(
      'returns none when %s is provided as the incorrect value',
      (argument) => {
        const result = convertNumberToArabic(argument);
        expect(result).toBe('none');
      }
    );

    it.each(testSamples)(
      'when %s roman number is provided, returns %s',
      (argument, expectedResult) => {
        const result = convertNumberToArabic(argument);
        expect(result).toBe(expectedResult);
      }
    );

    it.each([
      [' L', '50'],
      ['LXXV ', '75'],
      [' C ', '100'],
    ])(
      'when "%s" as string with space is provided, returns %s as the correct arabic value',
      (argument, expectedResult) => {
        const result = convertNumberToArabic(argument);
        expect(result).toBe(expectedResult);
      }
    );
  });
});
