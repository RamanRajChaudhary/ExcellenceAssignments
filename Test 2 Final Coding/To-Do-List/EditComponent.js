import { useState } from "react";
import React from "react";
export default function EditComponent(props) {
  const [item, setItem] = useState("");

  const handleItem = (e) => {
    setItem(e.target.value);
  };

  return (
    <div className="Item">
      <input
        type="text"
        placeholder="Items"
        onChange={handleItem}
        value={item}
      />
      <button onClick={() => props.addItem(item)}>Add Item</button>
    </div>
  );
}
