import React from 'react';
import { render, cleanup, fireEvent, getByText } from '@testing-library/react';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

afterEach(cleanup);

test('renders counter component', async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Counter />
    </Provider>,
  );
  expect(getByTestId('counter-button')).toBeTruthy();
});

test('allow user to +/- value', async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Counter />
    </Provider>,
  );

  fireEvent.click(getByTestId('button-increment'));
  fireEvent.click(getByTestId('button-decrement'));
});
