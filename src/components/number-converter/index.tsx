import React, { ChangeEventHandler } from 'react';
import { convertNumberToArabic, convertNumberToRoman } from '../../utilities';
import './styles.css';

type NumberConverterPropsType = {
  targetSystem?: 'arabic' | 'roman';
};

export const NumberConverter: React.FC<NumberConverterPropsType> = ({
  targetSystem = 'roman',
}) => {
  const [inputValue, setInputValue] = React.useState('');
  const [resultNumber, setResultNumber] = React.useState('none');

  const handleInputChange = React.useCallback<
    ChangeEventHandler<HTMLInputElement>
  >(
    (event) => {
      const { value } = event.target;
      setInputValue(value);
    },
    [setInputValue]
  );

  const handleConversion = React.useCallback<VoidFunction>(() => {
    const convertedInputValue =
      targetSystem === 'arabic'
        ? convertNumberToArabic(inputValue)
        : convertNumberToRoman(inputValue);

    setResultNumber(convertedInputValue);
  }, [targetSystem, inputValue, setResultNumber]);

  return (
    <div className={'numberConverter'}>
      <label>
        Provide a number to be converted:
        <input
          className={'input'}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleConversion}>Convert</button>
      <p>
        Converted number: <span>{resultNumber}</span>
      </p>
    </div>
  );
};
