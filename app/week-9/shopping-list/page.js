"use client"

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("none");

    const handleAddItem = (newItemObj) => {
        setItems([...items, newItemObj]);
    }

    const handleItemSelect = (itemName) => {
        setSelectedItemName(itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').split(",")[0].trim())
    }

    return(
        <main className="bg-neutral-900 text-white">
            <h1 className="text-4xl font-bold py-4 px-2">Shopping List</h1>
            <div className="flex">
                <div className="flex-2">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList onSelect={handleItemSelect} items={items}/>
                </div>
                <div className="flex-1 my-5">
                    <MealIdeas ingredient={selectedItemName} /> 
                </div>

                
            </div>
            
            
            
        </main>
    );
}