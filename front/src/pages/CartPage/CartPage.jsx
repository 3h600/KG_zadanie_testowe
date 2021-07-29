import React from 'react';
import { CartItemContainer } from '../../components';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import arrowBackIcon from '../../assets/arrow-left.svg';
import './CartPage.css';
import { routes } from '../../utils';
import { useHistory } from 'react-router-dom';
import { resetListOfProducts } from '../../store/actions/products.actions';
const CartPage = () => {
  const products = useSelector((type) => type.products);
  const history = useHistory();
  const dispatch = useDispatch();

  const resetAllProducts = () => {
    dispatch(resetListOfProducts());
  };
  const backToShopping = () => {
    history.push(routes.home);
  };
  return (
    <>
      <Container className="sm={12} header">
        <Row>
          <Col className="col-sm-12 col-md-6">
            <h2> Koszyk twoich zakupów </h2>
          </Col>
          <Col className="col-sm-12 col-md-6 col justify-items-end">
            <button className="button-back" onClick={backToShopping}>
              <div className="button-back-description">
                <img src={arrowBackIcon} alt="back" />
                <h5>Wróć do zakupów</h5>
              </div>
            </button>
          </Col>
        </Row>
      </Container>

      <Container className="sm={12} md={8}">
        {(products.length && products !== undefined) > 0 ? (
          <>
            {products.map((item) => {
              return (
                <CartItemContainer
                  name={item.name}
                  picture={item.picture}
                  price={item.price}
                  quantity={item.quantity}
                  key={item.name}
                />
              );
            })}
            <button
              onClick={resetAllProducts}
              className="add-cart-button"
              style={{ margin: '1rem 0 1rem 0' }}
            >
              Wyczyść cały koszyk
            </button>
          </>
        ) : (
          <div
            style={{
              height: '500px',
              bottom: '0',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <p>Brak produktów w koszyku</p>
          </div>
        )}
      </Container>
    </>
  );
};

export default CartPage;
