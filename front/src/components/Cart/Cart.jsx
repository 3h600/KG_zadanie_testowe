import CartIcon from '../../assets/cart4.svg';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { routes } from '../../utils';
import './Cart.css';

const Cart = () => {
  const products = useSelector((type) => type.products);
  const history = useHistory();
  const goToCart = () => {
    history.push(routes.cart);
  };
  return (
    <div onClick={goToCart}>
      <div>
        <img src={CartIcon} alt="minicart" className="cart-icon" />
      </div>
      <div className="minicart">
        {products !== undefined ? products.reduce((a, v) => (a = a + v.quantity), 0) : 0}
      </div>
    </div>
  );
};

export default Cart;
