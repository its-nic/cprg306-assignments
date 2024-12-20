"use client"

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json"

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItemObj) => {
        setItems([...items, newItemObj]);
    }

    return(
        <main className="bg-neutral-900 text-white">
            <h1 className="text-4xl font-bold py-4 px-2">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items}/>
        </main>
    );
}