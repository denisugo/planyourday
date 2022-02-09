import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { deleteButton } from "../../config/colors";

const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  box-shadow: 0 0 5px ${deleteButton.shadow};
  background-color: ${deleteButton.background};
  color: ${deleteButton.text};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 7px;
  cursor: pointer;
`;

function DeleteButton({ callback }: { callback?: () => void }) {
  return (
    <StyledButton onClick={callback} title="delete">
      <AiOutlineClose />
    </StyledButton>
  );
}

export default DeleteButton;
