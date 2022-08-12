import React from 'react';
import { useState } from 'react';

interface IProps {
  labelOn: string;
  labelOff: string;
}

export default function CheckboxWithLabel({ labelOn, labelOff }: IProps) {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {isChecked ? labelOn : labelOff}
    </label>
  );
}
