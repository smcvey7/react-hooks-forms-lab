import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce"
  })

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    const newItem = {
      ...formData,
      id: uuid()
    }
    onItemFormSubmit(newItem)
    setFormData({
      name: "",
      category: "Produce"
    })

  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>

      <label>
        Category:
        <select value = {formData.category} onChange={handleChange} name="category">
          <option value={"Produce"}>Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
