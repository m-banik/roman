import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { NumberConverter } from '.';

describe('Converter component', () => {
  describe('renders properly', () => {
    afterEach(cleanup);

    it('the input element', () => {
      const { getByLabelText } = render(<NumberConverter />);
      expect(
        getByLabelText('Provide a number to be converted:')
      ).toBeInTheDocument();
    });

    it('the button element', () => {
      const { getByText } = render(<NumberConverter />);
      expect(getByText('Convert')).toBeInTheDocument();
    });

    it('the result', () => {
      const { getByText } = render(<NumberConverter />);
      expect(getByText(/Converted number:/)).toBeInTheDocument();
    });
  });

  describe('works properly', () => {
    afterEach(cleanup);

    it('- the input element', () => {
      const { getByLabelText, getByDisplayValue } = render(<NumberConverter />);

      const labeledElement = getByLabelText(
        'Provide a number to be converted:'
      );
      fireEvent.change(labeledElement, { target: { value: 'test' } });

      const inputElement = getByDisplayValue('test');
      expect(inputElement).toBeInTheDocument();
    });

    it('- the button element', () => {
      const { getByText, getByLabelText } = render(<NumberConverter />);

      const labeledElement = getByLabelText(
        'Provide a number to be converted:'
      );
      fireEvent.change(labeledElement, { target: { value: '1' } });

      const buttonElement = getByText('Convert');
      fireEvent.click(buttonElement);

      const resultElement = getByText(/I/);

      expect(resultElement).toBeInTheDocument();
    });

    it('- the button element when component should convert a roman number to arabic', () => {
      const { getByText, getByLabelText } = render(
        <NumberConverter targetSystem={'arabic'} />
      );

      const labeledElement = getByLabelText(
        'Provide a number to be converted:'
      );
      fireEvent.change(labeledElement, { target: { value: 'I' } });

      const buttonElement = getByText('Convert');
      fireEvent.click(buttonElement);

      const resultElement = getByText(/1/);

      expect(resultElement).toBeInTheDocument();
    });
  });
});
