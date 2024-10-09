"use client"

import { useState } from "react";

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if( quantity < 20 ) setQuantity(quantity + 1);
    }

    const decrement = () => {
        if( quantity > 1 ) setQuantity(quantity - 1)
    }

    return(
        <div>

        </div>
    );
}