import { useState } from "react";

const SortItems = (e, sortColumn, sortOrder, setsortOrder, products) => {
  e.preventDefault();

  switch (sortColumn) {
    case 'name':
      if (sortOrder.name === 'ASC' || sortOrder.name === '') {
        setsortOrder({ name: 'DESC', price: '' });
        products.sort((a, b) => a.name > b.name);
      } else if (sortOrder.name === 'DESC') {
        setsortOrder({ name: 'ASC', price: '' });
        products.sort((a, b) => b.name > a.name);
      }
      break;
    case 'price':
      if (sortOrder.price === 'ASC' || sortOrder.price === '') {
        setsortOrder({ name: '', price: 'DESC' });
        products.sort((a, b) => a.price > b.price);
      } else if (sortOrder.price === 'DESC') {
        setsortOrder({ name: '', price: 'ASC' });
        products.sort((a, b) => b.price > a.price);
      }
      break;
    default:
      break;
  }
};

export default SortItems;
