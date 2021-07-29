import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../ItemContainer/ItemContainer.css';
import arrowUpIcon from '../../assets/arrow-up.svg';
import arrowDownIcon from '../../assets/arrow-down.svg';
import arrowDownUpIcon from '../../assets/arrow-down-up.svg';
import './TableHeader.css';
import DropdownSort from '../DropdownSort/DropdownSort';

const TableHeader = ({ sort, sortOrder, filterItems }) => {
  const FilterArrow = ({ sortOrder }) => {
    if (sortOrder === 'ASC') return <img src={arrowUpIcon} alt="up icon" />;
    else if (sortOrder === 'DESC') return <img src={arrowDownIcon} alt="up icon" />;
    else return <img src={arrowDownUpIcon} alt="up icon" />;
  };

  const sortBy = (e, columnName) => {
    sort(e, columnName);
  };

  return (
    <div className="header-item-container d-none d-lg-block">
      <Row className="row align-items-center">
        <Col md={3} xs={12}>
          <div
            onClick={(e) => {
              sortBy(e, 'name');
            }}
            className="sorting-container"
          >
            <h5>Nazwa</h5>
            <FilterArrow sortOrder={sortOrder.name} />
          </div>
        </Col>
        <Col md={2} xs={12}>
          <h5>Okładka</h5>
        </Col>
        <Col md={2} xs={12}>
          <div
            onClick={(e) => {
              sortBy(e, 'price');
            }}
            className="sorting-container"
          >
            <h5>Cena</h5>
            <FilterArrow sortOrder={sortOrder.price} />
          </div>
        </Col>
        <Col md={2} xs={12}>
          <div className="sorting-container">
            <h5>System</h5>

            <DropdownSort
              items={['Windows', 'Linux', 'MacOS']}
              attributes={'systems'}
              filterItems={filterItems}
            />
          </div>
        </Col>
        <Col md={1} xs={12}>
          <div className="sorting-container">
            <h5>Języki</h5>
            <DropdownSort
              items={['en_US', 'de_DE', 'fr_FR', 'es_ES', 'it_IT']}
              attributes={'languages'}
              filterItems={filterItems}
            />
          </div>
        </Col>

        <Col md={2} xs={12}></Col>
      </Row>
    </div>
  );
};

export default TableHeader;
