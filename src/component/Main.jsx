import { useEffect, useState } from "react";
import Food from "./Food";

export default function Main() {
  const [recipes, setRecipies] = useState([]);
  useEffect(() => {
    async function fetchRecipes() {
      try {
        const result = await fetch("https://dummyjson.com/recipes");
        const data = await result.json();
        setRecipies(data.recipes);
      } catch (error) {
        console.error("Error fetching result:", error);
      }
    }
    fetchRecipes();
  }, []);

  return (
    <main className="p-4">
      <p>Our Recipe</p>
      <div>
        {recipes.map((r) => (
          <Food recipe={r} />
        ))}
      </div>
    </main>
  );
}
