import { useEffect, useState } from 'react';
import { areCheckboxesAllSelected } from '../../utils';

export const useCheckBox = items => {
  const [isChecked, setIsChecked] = useState(new Array(items.length).fill(false));
  const [isAllChecked, setIsAllChecked] = useState(false);

  const handleCheckbox = position => {
    const updatedIsChecked = isChecked.map((elem, index) => (index === position ? !elem : elem));
    setIsChecked(updatedIsChecked);
  };

  const handleSelectAll = () => {
    const updatedIsChecked = areCheckboxesAllSelected(isChecked)
      ? isChecked.map(elem => (elem = false))
      : isChecked.map(elem => (elem = true));

    setIsChecked(updatedIsChecked);
  };

  useEffect(() => {
    setIsAllChecked(areCheckboxesAllSelected(isChecked) ? true : false);
  }, [isChecked]);

  return { isChecked, setIsChecked, isAllChecked, setIsAllChecked, handleCheckbox, handleSelectAll };
};
