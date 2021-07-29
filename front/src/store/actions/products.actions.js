export const resetListOfProducts = () => ({ type: 'RESET' });

export const addProduct = (products) => ({ type: 'ADD', products: products });

export const deleteProduct = (payload) => ({ type: 'DELETE_PRODUCT', payload: payload });

export const increaseQuantity = (payload) => ({ type: 'INCREASE_QTY', payload: payload });

export const decreaseQuantity = (payload) => ({
  type: 'DECREASE_QTY',
  payload: payload,
});
