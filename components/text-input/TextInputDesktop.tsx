import { ForwardedRef, forwardRef } from "react";
import styled from "styled-components";
import { input } from "../../config/colors";

interface IProps {
  usedFor: "title" | "text" | "date";
}

const StyledInput = styled.span<IProps>`
  box-shadow: 0 0 5px ${input.shadow};
  border-radius: 5px;
  margin: ${(props) => (props.usedFor === "date" ? 0 : "20px 20px 0 20px")};
  padding: 5px 6px;

  word-wrap: break-word;
  word-break: ${(props) =>
    props.usedFor === "date" ? "normal" : "break-word"};

  color: ${input.inactiveText};
  font-size: ${(props) => (props.usedFor === "title" ? "1.5rem" : "1rem")};
  font-weight: ${(props) => (props.usedFor === "title" ? "bold" : "normal")};

  z-index: 1;

  &:focus {
    color: ${input.text};
  }
`;

interface IInput extends IProps {
  value: string;
}

const TextInputDesktop = forwardRef(
  ({ value, usedFor }: IInput, ref: ForwardedRef<HTMLSpanElement>) => {
    return (
      <StyledInput
        ref={ref}
        role="textbox"
        title={usedFor}
        usedFor={usedFor}
        contentEditable
        suppressContentEditableWarning
      >
        <div>{value}</div>
      </StyledInput>
    );
  }
);

TextInputDesktop.displayName = "TextInput";

export default TextInputDesktop;
