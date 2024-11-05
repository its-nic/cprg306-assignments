"use client"

import Item from "./item";
import { useState } from "react";

export default function ItemList({items, onSelect}) {

  const [sortBy, setSortBy] = useState("name");

  const sortName = () => setSortBy("name");
  const sortCategory = () => setSortBy("category");

  let sortedItems = items.map((item) => ({...item}))
  if (sortBy == "name") sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy == "category") sortedItems.sort((a, b) => a.category.localeCompare(b.category));

  let buttonStyle = "bg-blue-800 rounded py-1 m-3 hover:bg-blue-500 active:bg-blue-400 disabled:bg-neutral-600 w-32";

    return(
        <div>
          <label className="ml-8 my-3">Sort by:</label>
          <button onClick={sortName} className={buttonStyle}>Name</button>
          <button onClick={sortCategory} className={buttonStyle}>Category</button>
            <ul>
              {sortedItems.map((item) => (
                <li key={item.id} className="bg-neutral-800 mx-5 my-2 px-3 py-2 rounded max-w-sm border-2 border-neutral-500">
                  <Item onSelect={onSelect} name={item.name} quantity={item.quantity} category={item.category} />
                </li>                
              ))}
            </ul>
        </div>
    );
}
