const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div className="keyboard">
      {KEYS.map((letter) => {
        const active = activeLetters.includes(letter);
        const inactive = inactiveLetters.includes(letter);
        return (
          <button
            key={letter}
            className={`keyboard__keys ${active ? "active" : ""} ${
              inactive ? "inactive" : ""
            }`}
            disabled={active || inactive || disabled}
            onClick={() => addGuessedLetter(letter)}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}
