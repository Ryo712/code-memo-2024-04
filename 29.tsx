//チェックボックスでステータス変更
import React, { useState } from 'react';

const MyComponent = () => {
  const [status, setStatus] = useState(2); // 初期値は2

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    const newStatus = isChecked ? 1 : 2;
    setStatus(newStatus);
  };

  return (
    <div>
      <input
        type="checkbox"
        onChange={handleCheckboxChange}
        checked={status === 1} // ステータスが1のときにチェックがつく
      />
      <label>Checkbox</label>
    </div>
  );
};

export default MyComponent;
