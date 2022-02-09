import { useRef } from "react";
import styled from "styled-components";
import { button } from "../../config/colors";

interface IProps {
  usedFor?: "normal" | "util";
}

const colorResolve = (props: any) => {
  switch (props.usedFor) {
    case "normal":
      return button.background;

    case "util":
      return button.backgroundUtil;

    default:
      return button.background;
  }
};

const StyledButton = styled.button<IProps>`
  width: 200px;
  height: 40px;
  border-radius: 20px;
  font-size: 1rem;
  box-shadow: 0 0 5px ${button.shadow};
  background-color: ${colorResolve};
  color: ${button.text};
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  border: none;
  margin: 7px;
  cursor: pointer;
  transition: 0.2s all;

  &:active {
    background-color: ${(props) => colorResolve(props) + button.hoverOpacity};
    transform: scale(0.8);
  }
`;

interface IButton extends IProps {
  callback?: () => void;
  title: string;
}

function Button({ callback, title, usedFor }: IButton) {
  return (
    <StyledButton title={title} onClick={callback} usedFor={usedFor}>
      {title}
    </StyledButton>
  );
}

export default Button;
