"use client"

import { useState } from "react";

export default function NewItem() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");


    const handleSubmit = (event) => {
        event.preventDefault();

        let item = {
            nme: name,
            qty: quantity,
            cat: category
        };

        console.dir(item);

        alert(`
            Name: ${item.nme}
            Quantity: ${item.qty}
            Category: ${item.cat}
            `);

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


    let buttonStyle = "bg-blue-800 rounded mx-2 px-6 py-2 hover:bg-blue-500 active:bg-blue-400 disabled:bg-neutral-600";


    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Item Name:</label>
                <input type="text" required onChange={handleNameChange} value={name}></input>
            </div>
            <div class="text-white bg-neutral-800 m-2 px-3 py-2 rounded max-w-48 border-2 border-neutral-500 text-center">
                <p class="font-bold text-2x1 pb-4">Count: {quantity}</p>
                <button type="button" onClick={decrement} disabled={disableDecrementButton} class={buttonStyle}>-</button>
                <button type="button" onClick={increment} disabled={disableIncrementButton} class={buttonStyle}>+</button>
            </div>
            <div>
                <label>Category:</label>
                <select onChange={handleCategoryChange} value={category}>
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
            <div>
                <button>Submit</button>
            </div>
        </form>

    );
}