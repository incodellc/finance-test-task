import React, { ReactNode } from 'react';
import { 
  fireEvent,
  render,
  screen
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

const renderReduxComponent = (component: ReactNode) => render(
  <Provider store={store}>
      {component}
  </Provider>
);

describe('interval tests', () => {
  it('Changes input value', () => {       
    renderReduxComponent(<App />);
    const input = screen.getByLabelText(/time, s/i) as HTMLInputElement;
    const value = '1234';
    fireEvent.change(input, { target: { value } });
    expect(input.value).toBe(value);
  });

  it('Does not accept characters', () => {       
    renderReduxComponent(<App />);
    const input = screen.getByLabelText(/time, s/i) as HTMLInputElement;
    const value = 'asd';
    fireEvent.change(input, { target: { value } });
    expect(input.value).not.toBe(value);
  });

  it('Clears after button click', () => {       
    renderReduxComponent(<App />);
    const input = screen.getByLabelText(/time, s/i) as HTMLInputElement;
    const button = screen.getByText(/set interval/i);
    fireEvent.change(input, { target: { value: '123' } });
    fireEvent.click(button);
    expect(input.value).toBe('');
  });
});