const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => {
        return (
          <div>
            {index !== 0 && <hr />}
            <p key={index}>{line}</p>
          </div>
        );
      })}
    </article>
  );
}
