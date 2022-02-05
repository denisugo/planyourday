import React, { useState } from "react";
import styled from "styled-components";

const StyledElement = styled.div`
  max-width: 100%;
  min-width: 250px;
  width: fit-content;
  height: 300px;
  background-color: gray;
  margin: 10px 10px 10px 30px;
  border-radius: 10px;
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-right: 12px solid gray;
    position: absolute;
    top: 30px;
    left: -12px;
    transform: translate(0, -50%);
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
`;

const StyledDate = styled.div`
  width: 80px;
  height: auto;
  position: absolute;
  top: 30px;
  left: -130px;
  transform: translate(0, -50%);
`;

export interface IElement {
  id?: number;
  title: string;
  text: string;
  date?: string | undefined;
  callback?: (id: number) => void;
}

function ElementDesktop({ title, text, date, id, callback }: IElement) {
  const [visible, setVisible] = useState(false);
  const handleOver = () => {
    setVisible(true);
  };
  const handleLeave = () => {
    setVisible(false);
  };

  return (
    <StyledElement onMouseOver={handleOver} onMouseLeave={handleLeave}>
      <StyledCircle />
      <StyledDate>
        <h3>{date}</h3>
      </StyledDate>
      <h2>{title}</h2>
      <p>{text}</p>
      {visible && (
        <>
          <button onClick={() => console.log(id)}>delete</button>
          <button>edit</button>
        </>
      )}
    </StyledElement>
  );
}

export default ElementDesktop;
