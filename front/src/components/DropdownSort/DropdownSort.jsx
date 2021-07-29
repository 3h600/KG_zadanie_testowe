import caretDownIcon from '../../assets/caret-down-square.svg';
import { useState } from 'react';
import './DropdownSort.css';
const DropdownSort = ({ items, attributes, filterItems }) => {
  const [dropMenuState, setDropMenuState] = useState('all');

  const onClickAll = () => {
    setDropMenuState('all');
    filterItems({ item: 'all', attribute: attributes });
  };

  return (
    <>
      <div className="dropdown">
        <button className="drop-button">
          {dropMenuState === 'all' ? (
            <img src={caretDownIcon} alt="button down" />
          ) : (
            <h6>{dropMenuState}</h6>
          )}
        </button>
        <div className="dropdown-content">
          <div className="dropdown-link" onClick={onClickAll}>
            Wszystkie
          </div>
          {items.map((item) => {
            return (
              <div
                className="dropdown-link"
                onClick={(e) => {
                  e.preventDefault();
                  setDropMenuState(item);
                  filterItems( { item: item, attribute: attributes });
                }}
                key={item}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DropdownSort;
