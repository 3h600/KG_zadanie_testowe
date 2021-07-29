import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './CartItemContainer.css';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../Counter/Counter';
import { deleteProduct } from '../../store/actions/products.actions';
const CartItemContainer = ({ name, picture, price, quantity }) => {
  const dispatch = useDispatch();
  const products = useSelector((type) => type.products);

  const findIsInArray = products.findIndex(function (product, index) {
    if (product.name === name) return true;
  });

  const deleteProductFromList = () => {
    if (findIsInArray >= 0) {
      dispatch(deleteProduct(findIsInArray));
    }
  };
  return (
    <div className="cart-item-container">
      <Row className="row align-items-center" data-testid='take-values'>
        <Col md={4} xs={12}>
          <h4>{name}</h4>
        </Col>
        <Col md={2} xs={12}>
          <img src={picture} alt={name} />
        </Col>
        <Col md={2} xs={12}>
          <h4 >{price} $</h4>
        </Col>
        <Col md={1} xs={12}>
          <h4>Ilość: {quantity}</h4>
        </Col>
        <Col md={2} xs={12}>
          <h4>
            <Counter value={name} />
          </h4>
        </Col>
        <Col md={1} xs={12}>
          <button className="add-cart-button" onClick={deleteProductFromList}>
            Usuń
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default CartItemContainer;
