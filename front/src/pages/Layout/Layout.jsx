import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ItemContainer, TableHeader } from '../../components';
import Cart from '../../components/Cart/Cart';
import { Pagination } from '../../components';
import FilterItems from '../../utils/FilterItems';
import SortItems from '../../utils/SortItems';
import { useContext } from 'react';
import { DataContext } from '../../utils/DataContext';
import './Layout.css';

const Layout = () => {
  const {
    products,
    currentProduct,
    sortOrder,
    setsortOrder,
    memoizedProducts,
    setProducts,
    productsPerPage,
    paginate,
  } = useContext(DataContext);
  return (
    <>
      <Container className="sm={12} ">
        <Row>
          <Col className="col-sm-12 col-md-10">
            <h2> Platforma zakupowa </h2>
          </Col>
          <Col className="col-sm-12 col-md-2 justify-items-end">{Cart()}</Col>
        </Row>
      </Container>

      <Container className="sm={12} md={10}">
        {currentProduct?.length > 0 ? (
          <>
            <TableHeader
              sort={(e, sortColumn) => {
                SortItems(e, sortColumn, sortOrder, setsortOrder, products);
              }}
              sortOrder={sortOrder}
              filterItems={(params) => {
                FilterItems(params, memoizedProducts, setProducts);
              }}
            />
            {currentProduct.map((item) => {
              return (
                <ItemContainer
                  name={item.name}
                  picture={item.imageUrl}
                  price={item.price}
                  attributes={item.attributes}
                  key={item.imageUrl}
                />
              );
            })}
            <Pagination
              postsPerPage={productsPerPage}
              totalPosts={products.length}
              paginate={paginate}
            />
          </>
        ) : (
          <div className="spinner-container">
            <div className="spinner-border" role="status"></div>
            <div>&nbsp;Loading..</div>
          </div>
        )}
      </Container>
    </>
  );
};

export default Layout;
