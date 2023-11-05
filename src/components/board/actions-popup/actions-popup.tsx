import styled from "styled-components";


const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  margin: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #7cf17a;
  border: 2px solid #097d0c;
  border-radius: 5px;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #62c061;
  }
`;


const renderBuyCompany = () => {
  const priceData = 1233;
  if (priceData) {

    return (
      <ActionButton >
        Купить за {priceData.cost} $
      </ActionButton>
    );
  }

  return <ActionButton >Купить</ActionButton>;
};

const renderPayRent = () => {

  return <ActionButton >Оплатить</ActionButton>;
};

export const ActionsPopup = () => {


  return (
    <Wrapper>
      <div style={{ marginRight: '1rem' }}>

      </div>

      {currentPlayer?.availableActions.includes('rollDice') && (
        <ActionButton
          onClick={() => {
            enableChipAnimation();
            playerEvents.roleDice();
          }}
        >
          Бросить кубики
        </ActionButton>
      )}

      {currentPlayer?.availableActions.includes('buyCompany') &&
        renderBuyCompany()}

      {currentPlayer?.availableActions.includes('payRent') && renderPayRent()}
    </Wrapper>
  );
});
