const HEAD = <div className="hangman__head" />;
const BODY = <div className="hangman__body" />;
const LEFT_ARM = <div className="hangman__ex hangman__ex--left-arm" />;
const RIGHT_ARM = <div className="hangman__ex hangman__ex--right-arm" />;
const LEFT_LEG = <div className="hangman__ex hangman__ex--left-leg" />;
const RIGHT_LEG = <div className="hangman__ex hangman__ex--right-leg" />;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, LEFT_LEG, RIGHT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="hangman">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="hangman__little-bar" />
      <div className="hangman__horizontal" />
      <div className="hangman__pillar" />
      <div className="hangman__bottom" />
    </div>
  );
}
