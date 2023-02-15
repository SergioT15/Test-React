function Drink({ name }) {
  let part, coffeine, age;
  if (name === "tea") {
    part = "leaf";
    coffeine = "15–70 mg/cup";
    age = "4,000+ years";
  } else {
    part = "bean";
    coffeine = "80–185 mg/cup";
    age = "1,000+ years";
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{part}</dd>
        <dt>Caffeine content</dt>
        <dd>{coffeine}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}