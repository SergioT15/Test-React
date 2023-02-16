import { recipes } from "./data.js";

export default function RecipeList() {
  return (
    <>
      {recipes.map((elem) => {
        return (
          <div key={elem.id}>
            <h2>{elem.name}</h2>
            <ul>
              {elem.ingredients.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}
