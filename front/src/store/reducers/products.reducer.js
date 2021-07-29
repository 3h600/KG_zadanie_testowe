const initialProducts = {
  products: [],
};

const productsReducer = (state = initialProducts, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, products: [...state.products, action.products] };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter((item, index) => index !== action.payload),
      };
    case 'INCREASE_QTY':
      state.products[action.payload].quantity = state.products[action.payload].quantity + 1;
      return { ...state, products: [...state.products] };
    case 'DECREASE_QTY': {
      if (state.products[action.payload].quantity > 0) {
        state.products[action.payload].quantity = state.products[action.payload].quantity - 1;
      }
      return { ...state, products: [...state.products] };
    }
    case 'RESET':
      return { products: [] };
    default:
      return state;
  }
};

export default productsReducer;
