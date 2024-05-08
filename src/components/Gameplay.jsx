import styled from "styled-components";
import NumberSelect from "./NumberSelect";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice"

const Gameplay = () => {
  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore />
        <NumberSelect />
      </div>
      <RoleDice />
    </MainContainer>
  );
};

export default Gameplay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`;
