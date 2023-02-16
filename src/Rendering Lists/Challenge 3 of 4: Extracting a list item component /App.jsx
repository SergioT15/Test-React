import { recipes } from "./data.js.js";

function Recipe(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <ul>
        {props.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe
          id={recipe.id}
          name={recipe.name}
          ingredients={recipe.ingredients}
          key={recipe.id}
        />
      ))}
    </div>
  );
}
