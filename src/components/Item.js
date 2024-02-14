import React from "react";

function Item({ item, onDeleteItem, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggle(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
      {/* 
        here callback function is needed because we are calling the function immediately, so that it can be called when the button is clicked
         */}
      {/* yaha direct mat likhna onClick={onDeleteItem(item.id)} nahi toh react direct call karenga aur aate hi delete hojaega
      isiliye call back function rahte hai, ()=> aise wale */}
    </li>
  );
}

export default Item;
