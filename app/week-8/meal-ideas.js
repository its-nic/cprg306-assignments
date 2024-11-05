"use client"

import { useEffect } from "react";
import { useState } from "react";

export default function MealIdeas({ingredient}) {

    const [meals, setMeals] = useState([]);

    async function loadMealIdeas(ingredient) {
        setMeals(await fetchMealIdeas(ingredient))
    }

    useEffect(() => {
        (async () => {
            await loadMealIdeas(ingredient);
        })();
    }, [ingredient]);

    return(
        <div>
            <h1 className="text-lg font-bold">Meal Ideas</h1>
            {meals == null ? (
                ingredient == "none" ? (
                    <div>
                        <p>Select an item to view meal ideas.</p>
                    </div>
                ):(
                    <div>
                        <p>No meal ideas for {ingredient}.</p>
                    </div>
                )
            ):(
                <div>
                    <p className="pl-5 my-2">Meal ideas for {ingredient}:</p>
                    <ul>                    
                        {meals != null && meals.map((meal) => (
                        <li key={meal.idMeal} className="pl-5">
                        &#8226; {meal.strMeal}
                        </li>
                        ))}
                    </ul>
                </div>
            )}           
        </div>
    );
}

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}