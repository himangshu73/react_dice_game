import { useState } from "react";
import styled from "styled-components";

const RoleDice = () => {
  const [currentDice, setCurrentDice] = useState(2);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const roledice = () => {
    const randomNumber = generateRandomNumber(1, 6);

    setCurrentDice((prev) => randomNumber);
  };

  return (
    <DiceContainer>
      <div className="dice">
        <img
          onClick={roledice}
          src={`./images/dice/dice_${currentDice}.png`}
          alt="dice-1"
        />
      </div>
      <p>Click on the Dice to Roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 24px;
  }
  .dice {
    cursor: pointer;
  }
`;
