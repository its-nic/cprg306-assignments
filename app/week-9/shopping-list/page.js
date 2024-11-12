"use client"

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("none");

    const {user} = useUserAuth();

    const handleAddItem = (newItemObj) => {
        setItems([...items, newItemObj]);
    }

    const handleItemSelect = (itemName) => {
        setSelectedItemName(itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').split(",")[0].trim())
    }

    let buttonStyle = "bg-blue-800 rounded py-1 m-3 hover:bg-blue-500 active:bg-blue-400 disabled:bg-neutral-600 w-32";

    return(
        <main className="bg-neutral-900 text-white min-h-screen">
            <header>
                <h1 className="text-4xl font-bold py-4 px-2">Shopping List</h1>
            </header>
            {user ? (
                <div className="flex">
                    <div className="flex-2">
                        <NewItem onAddItem={handleAddItem} />
                        <ItemList onSelect={handleItemSelect} items={items}/>
                    </div>
                    <div className="flex-1 my-5">
                        <MealIdeas ingredient={selectedItemName} />
                    </div>
                </div>
            ):(
                <div>
                    <p>You must be logged in to view this page.</p>
                    <button className={buttonStyle}><Link href="/week-9/">Return to Login</Link></button>
                </div>
            )}
        </main>
    );
}