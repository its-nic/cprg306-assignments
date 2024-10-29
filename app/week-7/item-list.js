"use client"

import Item from "./item";
import { useState } from "react";
import items from "./items.json"

export default function ItemList() {

  const [sortBy, setSortBy] = useState("name");

  const sortName = () => setSortBy("name");
  const sortCategory = () => setSortBy("category");

  if (sortBy == "name") items.sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy == "category") items.sort((a, b) => a.category.localeCompare(b.category));

  let buttonStyle = "bg-blue-800 rounded py-1 m-3 hover:bg-blue-500 active:bg-blue-400 disabled:bg-neutral-600 w-36";

    return(
        <div>
          <label class="m-3">Sort by:</label>
          <button onClick={sortName} class={buttonStyle}>Name</button>
          <button onClick={sortCategory} class={buttonStyle}>Category</button>
            <ul>
              {items.map((item) => (<Item name={item.name} quantity={item.quantity} category={item.category} />))}
            </ul>
        </div>
    );
}
