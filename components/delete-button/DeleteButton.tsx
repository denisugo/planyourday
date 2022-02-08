import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { deleteButton } from "../../config/colors";

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  font-size: 1rem;
  box-shadow: 0 0 5px ${deleteButton.shadow};
  background-color: ${deleteButton.background};
  color: ${deleteButton.text};
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  border: none;
  margin: 7px;
  cursor: pointer;
  transition: 0.2s all;

  &:active {
    background-color: ${deleteButton.backgroundHovered};
    transform: scale(0.8);
  }
`;

function DeleteButton({ callback }: { callback?: () => void }) {
  return (
    <StyledButton onClick={callback} title="delete">
      <AiOutlineClose />
    </StyledButton>
  );
}

export default DeleteButton;
