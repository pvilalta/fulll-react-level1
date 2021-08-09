import React from 'react';
import PropTypes from 'prop-types';

import { useCheckBox } from './hooks';
import './Playground.css';

const Playground = ({ items }) => {
  const { isChecked, isAllChecked, handleCheckbox, handleSelectAll } = useCheckBox(items);

  return (
    <div className="Playground">
      <div className="boxList">
        <div className="titleBox">
          <span>Tick the checkboxes</span>
        </div>
        <div className="welcomeBox">{isAllChecked && <span>nice to meet you !</span>}</div>
        <div className="selectAllBox">
          <input
            type="checkbox"
            id="selectAll"
            data-testid="selectAll"
            name="selectAll"
            checked={isAllChecked}
            onChange={() => handleSelectAll()}
          />
          <label htmlFor="selectall" />
        </div>
        <div className="listItemsBox">
          {items.map((_, index) => {
            return (
              <div className="item" key={`item-${index}`}>
                <input
                  type="checkbox"
                  id={`item-${index}`}
                  data-testid={`item-${index}`}
                  name={`item-${index}`}
                  checked={isChecked[index]}
                  onChange={() => handleCheckbox(index)}
                />
                <label htmlFor={`item-${index}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

Playground.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Playground;
