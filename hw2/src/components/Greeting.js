function Greeting({ name = "Гость" }) {
  return (
    <div className="Greeting">
      <p>Привет, {name}!</p>
    </div>
  );
}

export default Greeting;
