import { useState } from "react"
import RecipeCard from "./RecipeCard"

const UsingFetch = () => {

    const [recipe, setRecipe] = useState(null);

    const fetchReciepe = () => {
        fetch("https://api.react-formula.com/learning-api/demos/using-fetch/recipes")
            .then((response) => response.json())
            .then((data) => ({
                name: data.name,
                imageUrl: data.image_url
            })
            ).then(data => setRecipe(data))
    }

    return (
        <div className="flex justify-center flex flex-col items-center">
            {recipe && <RecipeCard recipe={recipe} />}
            <button className="rounded-full px-4 py-4 bg-blue-400 text-white"
                onClick={fetchReciepe}
            >get random recipe</button>
        </div>

    )

}


export default UsingFetch