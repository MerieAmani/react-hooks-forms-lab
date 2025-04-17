import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [searchText, setSearchText] = useState("");
  const [itemList, setItemList] = useState(items);

  const handleSearchChange = (newSearchText) => {
    setSearchText(newSearchText);
  };

  const handleItemFormSubmit = (newItem) => {
    setItemList([...itemList, newItem]);
  };

  const filteredItems = itemList.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter searchText={searchText} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
