import '../../styles/hierarchy/Difficulty.css';

function Difficulty({ className, difficulty, setDifficulty, min = 0, max = 7 }) {
  const handleChange = (e) => {
    let val = Number(e.target.value);
    if (val < min) val = min;
    if (val > max) val = max;
    setDifficulty(val);
  };

  const increment = () => setDifficulty(d => (d < max ? d + 1 : max));
  const decrement = () => setDifficulty(d => (d > min ? d - 1 : min));

  return (
    <div className={`${className} difficulty`}>
      <button
        className="difficulty-adjust"
        onClick={decrement}
        aria-label="Decrease difficulty">
        -
      </button>
      <input
        className="difficulty-input"
        type="number"
        min={min}
        max={max}
        value={difficulty}
        onChange={handleChange}
      />
      <button
        className="difficulty-adjust"
        onClick={increment}
        aria-label="Increase difficulty">
        +
      </button>
    </div>
  );
} export default Difficulty;