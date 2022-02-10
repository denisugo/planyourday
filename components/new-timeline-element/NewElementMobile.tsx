import React, { useRef } from "react";
import styled from "styled-components";
import { cardElement } from "../../config/colors";
import { mobileDemensions } from "../../config/demensions";
import Button from "../button/Button";
import TextInput from "../text-input/TextInputDesktop";
import { StyledContainer } from "../timeline-container/ContainerDesktop";
import useNewElement from "./useNewElement";

const StyledNewElementContainer = styled.div`
  width: ${mobileDemensions.minScreenWidth};
  max-width: ${mobileDemensions.maxScreenWidth};
  overflow-x: scroll;
`;

const StyledNewElement = styled.div`
  /* min-width: 250px; */
  width: fit-content;
  max-width: 100%;
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

  button[title="Add"] {
    margin: 20px;
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

const StyledHint = styled.h2`
  padding: 10px;
  text-align: center;
`;

export interface IItem {
  id: number;
  title: string;
  text: string;
  date: string;
}
export interface INewElement {
  onAdd: (item: IItem) => void;
}

function NewElement(props: INewElement) {
  const { dateRef, textRef, titleRef, handleAdd } = useNewElement(props);

  return (
    <StyledNewElementContainer>
      <StyledHint> Add a new event to your timeline</StyledHint>
      <StyledContainer>
        <StyledNewElement>
          <StyledCircle />

          <StyledDate>
            <TextInput ref={dateRef} value={"13 Oct 2010"} usedFor="date" />
          </StyledDate>

          <TextInput ref={titleRef} value={"Title"} usedFor="title" />
          <TextInput
            ref={textRef}
            value={"Just a random text"}
            usedFor="text"
          />
          <Button title="Add" usedFor="util" callback={handleAdd} />
        </StyledNewElement>
      </StyledContainer>
    </StyledNewElementContainer>
  );
}

export default NewElement;
