import React from "react";
import { useState } from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItem, onToggle, onClearAll }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description") {
    sortedItems = [...items].sort(
      (a, b) =>
        a.description.toLowerCase().localeCompare(b.description.toLowerCase()) // case insensitive sorting, but alphabetical
    );
  }

  if (sortBy === "packed") {
    sortedItems = [...items].sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggle={onToggle}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearAll}>Clear All</button>{" "}
        {/* 
          here callback function is not needed because we are not calling the function immediately, we are just passing the reference of the function to the button, so that it can be called when the button is clicked
          when we are not passing any arguments to the function, then we can directly pass the reference of the function to the button
          but if we are passing any arguments to the function, then we need to pass the reference of the function to the button using callback function
         */}
      </div>
    </div>
  );
}

export default PackingList;
