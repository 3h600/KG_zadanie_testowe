const FilterItems = (params, memoizedProducts, setProducts) => {
  switch (params.attribute) {
    case 'systems':
      if (params.item !== 'all') {
        const productsToFilter = memoizedProducts;
        let filtered = [];

        productsToFilter.map((i) => {
          if (i.attributes.systems.some((item) => item === params.item)) {
            filtered.push(i);
          }
        });
        setProducts(filtered);
      } else if (params.item === 'all') {
        setProducts(memoizedProducts);
      }
      break;
    case 'languages':
      if (params.item !== 'all') {
        const productsToFilter = memoizedProducts;
        let filtered = [];

        productsToFilter.map((i) => {
          if (i.attributes.languages.some((item) => item === params.item)) {
            filtered.push(i);
          }
        });
        setProducts(filtered);
      } else if (params.item === 'all') {
        setProducts(memoizedProducts);
      }
      break;

    default:
      break;
  }
  return null;
};

export default FilterItems;
