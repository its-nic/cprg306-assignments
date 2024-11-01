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
            <h1>Recipes:</h1>
            <ul>
                {meals.map((meal) => (
                <li key={meal.idMeal} className="bg-neutral-800 m-2 px-3 py-2 rounded max-w-md border-2 border-neutral-500">
                  {meal.strMeal}
                </li>
                ))}                 
            </ul>
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