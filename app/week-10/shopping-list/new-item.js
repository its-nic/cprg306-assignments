"use client"

import { useState } from "react";

export default function NewItem({onAddItem}) {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");


    const handleSubmit = (event) => {
        event.preventDefault();

        const newId = Math.floor(Math.random() * 1000000)

        let item = {
            id: newId,
            name: name,
            quantity: quantity,
            category: category
        };

        console.dir(item);

        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }


    const handleNameChange = (event) => setName(event.target.value);
    const handleCategoryChange = (event) => setCategory(event.target.value);


    const increment = () => {
        if(quantity < 20) setQuantity(quantity + 1);
    }
    const decrement = () => {
        if(quantity > 1) setQuantity(quantity - 1)
    }


    let disableIncrementButton = false;
    let disableDecrementButton = false;

    if(quantity >= 10) disableIncrementButton = true;
    else disableIncrementButton = false;

    if(quantity <= 1) disableDecrementButton = true;
    else disableDecrementButton = false; 


    let buttonStyle = "bg-blue-800 rounded py-1 hover:bg-blue-500 active:bg-blue-400 disabled:bg-neutral-600 w-full";


    return(
        <form onSubmit={handleSubmit} className="flex flex-wrap max-w-sm mx-5 my-3 px-2 py-3 text-white bg-neutral-800 rounded border-2  border-neutral-500">
            <div className="w-full m-4">
                <label className="px-2">Item Name:</label>
                <input type="text" required onChange={handleNameChange} value={name} className="text-black bg-white rounded px-2 py-1"></input>
            </div>
            <div className="flex w-56 m-4">
                <p className="px-2 py-1">Quantity:</p>
                <button type="button" onClick={decrement} disabled={disableDecrementButton} className={buttonStyle}>-</button>
                <p className="py-1 px-2">{quantity}</p>
                <button type="button" onClick={increment} disabled={disableIncrementButton} className={buttonStyle}>+</button>
            </div>
            <div className="w-full m-4">
                <label className="px-2">Category:</label>
                <select onChange={handleCategoryChange} value={category} className="text-black bg-white rounded px-2 py-1">
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>                    
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="w-full">
                <button className={buttonStyle}>Submit</button>
            </div>
        </form>

    );
}