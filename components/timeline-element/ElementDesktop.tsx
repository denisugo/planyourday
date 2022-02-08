import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { cardElement } from "../../config/colors";
import Button from "../button/Button";
import DeleteButton from "../delete-button/DeleteButton";

const StyledElement = styled.div`
  min-width: 250px;
  width: fit-content;
  min-height: 300px;
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

  h2 {
    align-self: center;
    filter: drop-shadow(0 0 10px #666);
    padding: 7px 20px;
    z-index: 1;
  }

  h2,
  h3 {
    color: ${cardElement.heading};
  }

  p {
    color: ${cardElement.text};
    padding: 7px 10px;
    z-index: 1;
  }
`;

const StyledCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: blue;
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
`;

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
  const handleEditBlocksVisible = () => {
    setVisible(true);
  };
  const handleLConfirm = () => {
    setVisibleButtons(false);
    setVisible(false);
    onEdit({ id, text, title, date });
  };

  return (
    <StyledElement
      //   onMouseEnter={() => setVisibleButtons(true)}
      onMouseOver={() => setVisibleButtons(true)}
      onMouseLeave={() => setVisibleButtons(false)}
    >
      <StyledCircle />
      <StyledDate>
        <h3>{date}</h3>
      </StyledDate>
      {visibleButtons && <DeleteButton callback={() => onRemove(id)} />}
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
          <textarea
            name="Title"
            placeholder={title}
            style={{
              fontSize: 17,
              height: "100%",
              marginTop: 54,
              width: "fit-content",
            }}
          />
          <span
            role="textbox"
            contentEditable
            style={{
              border: "1px solid #ccc",
              fontSize: 17,

              padding: "1px 6px",
            }}
          >
            99
          </span>
          <Button title="Confirm" usedFor="util" callback={handleLConfirm} />
        </>
      )}
    </StyledElement>
  );
}

export default ElementDesktop;
