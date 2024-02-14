import { useState } from "react";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Logo from "./components/Logo";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAdd(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function togglePacked(id) {
    setItems((items) =>
      items.map((item) => {
        if (item.id !== id) return item;
        return { ...item, packed: !item.packed }; // ... is spread operator, it copies all the properties of the item object and then reassigns the changes(either add or modify) to the original object
      })
    );
  }

  function handleClearAll() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (!confirmed) return;
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form addOneItem={handleAdd} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggle={togglePacked}
        onClearAll={handleClearAll}
      />
      <Stats items={items} />
    </div>
  );
}
