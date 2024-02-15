import { useState } from "react";
import "./DiceGame.css";

const rolling = () => Math.floor(Math.random() * 6) + 1;
const rollTheDices = (dices) => dices.map(() => rolling());

export const DiceGame = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [dices, setDices] = useState([1]);
  const dicesAreEqual =
    dices.length > 1 && dices.every((dice) => dice === dices[0]);

  return (
    <>
      <h1>Roll the Dice!</h1>

      <div className="diceList">
        <ul>
          {dices.map((dice, index) => {
            return (
              <li key={index} className="dice" aria-placeholder="dice">
                {dice}
              </li>
            );
          })}
        </ul>
      </div>

      <button
        onClick={() => {
          setShowMessage(true);
          setDices(rollTheDices);
        }}
      >
        Rickroll all dices!
      </button>

      <button
        onClick={() => {
          setDices([...dices, rolling()]);
          setShowMessage(false);
        }}
      >
        New dice, baby
      </button>

      {showMessage && <p>Wow, you rolled!</p>}
      {dicesAreEqual && <p>And they are equal</p>}
    </>
  );
};
