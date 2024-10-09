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

    const increment = () => {
        if(quantity < 20) setQuantity(quantity + 1);
    }

    const decrement = () => {
        if(quantity > 1) setQuantity(quantity - 1)
    }

    let buttonStyle = "bg-blue-800 rounded mx-2 px-6 py-2 hover:bg-blue-500 active:bg-blue-400 disabled:bg-neutral-600";

    let disableIncrementButton = false;
    let disableDecrementButton = false;

    if(quantity >= 10) disableIncrementButton = true;
    else disableIncrementButton = false;

    if(quantity <= 1) disableDecrementButton = true;
    else disableDecrementButton = false; 

    return(
        <div class="text-white bg-neutral-800 m-2 px-3 py-2 rounded max-w-48 border-2 border-neutral-500 text-center">
            <p class="font-bold text-2x1 pb-4">Count: {quantity}</p>
            <button onClick={decrement} disabled={disableDecrementButton} class={buttonStyle}>-</button>
            <button onClick={increment} disabled={disableIncrementButton} class={buttonStyle}>+</button>
        </div>
    );
}