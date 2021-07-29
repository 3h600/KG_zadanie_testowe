import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity } from '../../store/actions/products.actions';
import './Counter.css';

const Counter = ({ value }) => {
  const dispatch = useDispatch();
  const products = useSelector((type) => type.products);

  const findIsInArray = products.findIndex(function (product, index) {
    if (product.name === value) return true;
  });

  const increment = () => {
    if (findIsInArray >= 0) {
      dispatch(increaseQuantity(findIsInArray));
    }
  };

  const decrement = () => {
    if (findIsInArray >= 0) {
      dispatch(decreaseQuantity(findIsInArray));
    }
  };

  return (
    <Row className="row align-items-center counter-container">
      <Col className="xs={12} md={6}" data-testid="counter-button">
        Zmień ilość:
      </Col>
      <Col className="xs={12} md={6}">
        <button variant="outline-primary" className="counter-button" onClick={increment} data-testid="button-increment">
          +
        </button>
        <button variant="outline-primary" className="counter-button" onClick={decrement} data-testid="button-decrement">
          -
        </button>
      </Col>
    </Row>
  );
};

export default Counter;
