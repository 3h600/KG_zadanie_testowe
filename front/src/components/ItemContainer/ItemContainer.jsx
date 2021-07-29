import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './ItemContainer.css';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct } from '../../store/actions/products.actions';
import { useState } from 'react';

const ItemContainer = ({ name, picture, price, id, attributes }) => {
  const dispatch = useDispatch();
  const products = useSelector((type) => type.products);

  const findIsInArray = products?.findIndex(function (product, index) {
    if (product.name === name) return true;
  });

  const [itemsQuantity, setItemsQuantity] = useState(0);
  const addToCart = () => {
    setItemsQuantity(itemsQuantity + 1);
    if (findIsInArray >= 0) {
      dispatch(
        addProduct({
          name: name,
          picture: picture,
          price: price,
          quantity: products[findIsInArray].quantity + 1,
        }),
      );
      dispatch(deleteProduct(findIsInArray));
    } else {
      dispatch(addProduct({ name: name, picture: picture, price: price, quantity: 1 }));
    }
  };

  return (
    <div className="item-container">
      <Row className="row align-items-center">
        <Col lg={3} xs={12}>
          <h4>{name}</h4>
        </Col>
        <Col lg={2} xs={12}>
          <img src={picture} alt={name} />
        </Col>
        <Col lg={2} xs={12}>
          <h4>{price} $</h4>
        </Col>
        <Col lg={2} xs={12}>
          {Array.isArray(attributes.systems) ? (
            attributes.systems.map((i) => {
              return <h6 key={i}>{i}</h6>;
            })
          ) : (
            <div>brak danych</div>
          )}
        </Col>
        <Col lg={2} xs={12}>
          <h6>
            {Array.isArray(attributes.languages) ? (
              attributes.languages.map((i) => {
                return i + ' / ';
              })
            ) : (
              <div>brak danych</div>
            )}
          </h6>
        </Col>

        <Col lg={1} xs={12}>
          <Row className="cart-button-container">
            <button className="add-cart-button" onClick={addToCart}>
              Dodaj do koszyka
            </button>
          </Row>
          <Row>
            {itemsQuantity > 0 ? (
              <div className="little-counter">ilość: {itemsQuantity}</div>
            ) : (
              <div className="little-counter"> </div>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ItemContainer;
