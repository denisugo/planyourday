import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { cardElement } from "../../config/colors";
import Button from "../button/Button";
import DeleteButton from "../delete-button/DeleteButton";
import TextInput from "../text-input/TextInputDesktop";

const StyledElement = styled.div`
  min-width: 250px;
  width: fit-content;
  max-width: 50%;
  min-height: 250px;
  height: fit-content;

  background-color: ${cardElement.background};
  box-shadow: 0 0 5px ${cardElement.shadow};
  margin: 10px 10px 10px 30px;
  border-radius: 10px;

  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: visible;

  &::before {
    content: "";
    position: absolute;
    display: block;
    top: 30px;
    left: -12px;
    width: 30px;
    height: 30px;
    background: #999;
    transform: rotate(45deg) translate(-25%, -50%);
    box-shadow: 0 0 5px ${cardElement.shadow};
    background-color: ${cardElement.background};
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    display: block;
    top: 30px;
    left: -12px;
    width: 30px;
    height: 30px;
    background: #999;
    transform: rotate(45deg) translate(-25%, -50%);
    background-color: ${cardElement.background};
  }

  button[title="delete"] {
    position: absolute;
    top: 30px;
    left: -45px;
    transform: translate(-25%, -75%);
  }
  button[title="Edit"],
  button[title="Confirm"] {
    margin: 20px;
  }

  h2 {
    align-self: center;
    filter: drop-shadow(0 0 10px #666);
    padding: 7px 20px;
    z-index: 1;
    word-wrap: break-word;
    word-break: break-word;
  }

  h2,
  h3 {
    color: ${cardElement.heading};
  }

  p {
    color: ${cardElement.text};
    padding: 7px 10px;
    z-index: 1;
    word-wrap: break-word;
    word-break: break-word;
  }
`;

const StyledCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  position: absolute;
  top: 30px;
  left: -45px;
  transform: translate(0, -50%);
  background-color: ${cardElement.circleBackground};
  box-shadow: 0 0 5px ${cardElement.shadow};
`;

const StyledDate = styled.div`
  width: 80px;
  height: auto;
  position: absolute;
  top: 30px;
  left: -130px;
  transform: translate(0, -50%);
  display: flex;
`;
// ? This is util function that converts array of texts
// ? Into single line string value
const multilineToSingleLine = (
  nodes: NodeListOf<ChildNode>,
  child: number = 0
): string => {
  if (!nodes[child]) return "";

  const value = String(nodes[child].textContent);

  if (value === "null") return multilineToSingleLine(nodes, child + 1);
  return value + " " + multilineToSingleLine(nodes, child + 1);
};

export interface IItem {
  id: number;
  title: string;
  text: string;
  date: string;
}
export interface IElementInternal extends IItem {
  onRemove: (id: number) => void;
  onEdit: (item: IItem) => void;
}

function ElementDesktop({
  title,
  text,
  date,
  id,
  onRemove,
  onEdit,
}: IElementInternal) {
  const [visible, setVisible] = useState(false);
  const [visibleButtons, setVisibleButtons] = useState(false);
  const titleRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const dateRef = useRef<HTMLSpanElement>(null);

  const handleEditBlocksVisible = () => {
    setVisible(true);
  };

  const handleLConfirm = () => {
    setVisibleButtons(false);
    setVisible(false);
    onEdit({
      id,
      text: multilineToSingleLine(textRef.current!.childNodes),
      title: multilineToSingleLine(titleRef.current!.childNodes),
      date: multilineToSingleLine(dateRef.current!.childNodes),
    });
  };

  return (
    <StyledElement
      onMouseOver={() => setVisibleButtons(true)}
      onMouseLeave={() => setVisibleButtons(false)}
    >
      <StyledCircle />
      {(visibleButtons || visible) && (
        <DeleteButton callback={() => onRemove(id)} />
      )}
      <StyledDate>
        {visible && <TextInput ref={dateRef} value={date} usedFor="date" />}

        {!visible && <h3>{date}</h3>}
      </StyledDate>
      {!visible && (
        <>
          <h2>{title}</h2>
          <p>{text}</p>
          {visibleButtons && (
            <Button
              title="Edit"
              usedFor="util"
              callback={handleEditBlocksVisible}
            />
          )}
        </>
      )}
      {visible && (
        <>
          <TextInput ref={titleRef} value={title} usedFor="title" />
          <TextInput ref={textRef} value={text} usedFor="text" />
          <Button title="Confirm" usedFor="util" callback={handleLConfirm} />
        </>
      )}
    </StyledElement>
  );
}

export default ElementDesktop;
