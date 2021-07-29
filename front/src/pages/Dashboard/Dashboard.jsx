import React, { useEffect, useState } from 'react';
import fetchAPI from '../../helpers/apiTools';
import { useHistory } from 'react-router-dom';
import { routes } from '../../utils';
import { DataContext } from '../../utils/DataContext';
import Layout from '../Layout/Layout';

const Dashboard = () => {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const [memoizedProducts, setMemoizedProducts] = useState();
  const [sortOrder, setsortOrder] = useState({
    name: '',
    price: '',
  });
  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    // symulowanie opóźnienia ładowania danych z serwera
    setTimeout(() => {
      const fetchData = async () => {
        const fetchProducts = await fetchAPI();
        if (fetchProducts.isError !== true) {
          setProducts(fetchProducts.data);
          setMemoizedProducts(fetchProducts.data);
        } else {
          alert('error');
          history.push(routes.internalError);
        }
      };
      fetchData();
    }, 500);
  }, []);

  return (
    <DataContext.Provider
      value={{
        products,
        currentProduct,
        sortOrder,
        setsortOrder,
        memoizedProducts,
        setProducts,
        productsPerPage,
        paginate,
      }}
    >
      <Layout />
    </DataContext.Provider>
  );
};

export default Dashboard;
