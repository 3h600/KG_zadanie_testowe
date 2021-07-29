import React from 'react';
import { render, cleanup, fireEvent, getByText, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { Row } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import CartItemContainer from './CartItemContainer';

afterEach(cleanup);

test('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Row></Row>, div);
});

test('check are props are displaying', async () => {
  render(
    <Provider store={store}>
      <CartItemContainer name="name" price="price" />
    </Provider>,
  );
  const columnName = screen.getByText('name');
  expect(columnName).toBeInTheDocument();

  const imageAlt = screen.getAllByAltText('name');
  expect(imageAlt).toBeTruthy();
});

test('increasing counter value', () => {
  render(
    <Provider store={store}>
      <CartItemContainer name="name" price="price" quantity={1} />
    </Provider>,
  );
  const paragraphElement = screen.getByText(/Ilość: 1/);
  expect(paragraphElement).toBeInTheDocument();
});


test ('integration test of displaying few instances', ()=>{
  render(
    <Provider store={store}>
      <CartItemContainer name="name" price="price" quantity={1} />
      <CartItemContainer name="name" price="price" quantity={1} />
    </Provider>,
  );
  const instance = screen.getAllByText('name');
  expect(instance).toHaveLength(2)
})