import React from 'react';
import { 
  fireEvent,
  screen
} from '@testing-library/react';
import App from '../../App';
import { regEx, renderReduxComponent } from '../../utils/test_utils';

const input = {
  test: {
    valueChange(labelText: string) {
      it('Changes input value', () => {
        renderReduxComponent(<App />);
        const input = screen.getByLabelText(regEx(labelText)) as HTMLInputElement;
        const value = '1234';
        fireEvent.change(input, { target: { value } });
        expect(input.value).toBe(value);
      })
    },
    valueClear(labelText: string, buttonText: string) {
      it('Clears after button click', () => {
        renderReduxComponent(<App />);
        const input = screen.getByLabelText(regEx(labelText)) as HTMLInputElement;
        const button = screen.getByText(regEx(buttonText));
        fireEvent.change(input, { target: { value: '123' } });
        fireEvent.click(button);
        expect(input.value).toBe('');
      })
    },
    characterProhibition(labelText: string) {
      it('Does not accept characters', () => {       
        renderReduxComponent(<App />);
        const input = screen.getByLabelText(regEx(labelText)) as HTMLInputElement;
        const value = 'asd';
        fireEvent.change(input, { target: { value } });
        expect(input.value).not.toBe(value);
      });
    }
  }
};

describe('set interval tests', () => {
  const labelText = 'time, s';
  const buttonText = 'set interval';

  input.test.valueChange(labelText);
  input.test.valueClear(labelText, buttonText);
  input.test.characterProhibition(labelText);
});

describe('add ticker tests', () => {
  const labelText = 'name';
  const buttonText = 'add ticker';

  input.test.valueChange(labelText);
  input.test.valueClear(labelText, buttonText);
});
