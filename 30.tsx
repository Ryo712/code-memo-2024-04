//チェックボックス1-3ステータス変更
import React, { useState } from 'react';

const MyComponent = () => {
  const [status, setStatus] = useState(1); // 初期値は1（未読）

  const handleCheckboxChange = () => {
    const newStatus = status === 1 ? 3 : 1; // ステータスが1の場合は3（読了）、それ以外は1（未読）
    setStatus(newStatus);
  };

  return (
    <div>
      <input
        type="checkbox"
        onChange={handleCheckboxChange}
        checked={status === 3} // ステータスが3のときにチェックがつく
      />
      <label>読了</label>
    </div>
  );
};

export default MyComponent;
