import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import itemData from "../data/items";

function ShoppingList() {
  const [items, setItems] = useState(itemData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function onSearchChange(e){
    setSearch(e.target.value)
  }

  function onCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  function handleNewItem(newItem){
    setItems([...items, newItem])
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All"){
      if (search !== ""){ return item.name.toLowerCase().includes(search.toLowerCase())
      } else return true
    } else if (item.category === selectedCategory) return item.name.toLowerCase().includes(search.toLowerCase())
    
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleNewItem}/>
      <Filter search={search} selectedCategory={selectedCategory} onSearchChange = {onSearchChange} onCategoryChange={onCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
