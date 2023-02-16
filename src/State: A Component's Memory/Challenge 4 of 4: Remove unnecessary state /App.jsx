export default function FeedbackForm() {
  function handleClick() {
    const newName = prompt("What is your name?");

    alert(`Hello, ${newName}!`);
  }

  return <button onClick={handleClick}>Greet</button>;
}
