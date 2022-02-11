import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { cardElement } from "../../config/colors";
import { desktopDemensions } from "../../config/demensions";
import Button from "../button/Button";
import TextInput from "../text-input/TextInputDesktop";
import { StyledContainer } from "../timeline-container/ContainerDesktop";
import { IItem } from "../timeline-element/useElement";
import useNewElement from "./useNewElement";
import AppImage from "../image/AppImage";
import ImagePicker from "../image-picker/ImagePicker";

const StyledNewElementContainer = styled.div`
  max-width: ${desktopDemensions.minScreenWidth};
  width: 100vw;
  /* max-width: 100%; */
  z-index: 1;
  overflow-x: scroll;
`;

const StyledNewElement = styled.div`
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
  width: 100%;
`;

export interface INewElement {
  onAdd: (item: IItem) => void;
}

function NewElement(props: INewElement) {
  const {
    dateRef,
    textRef,
    titleRef,
    imgRef,
    imageUri,
    setImageUri,
    handleAdd,
  } = useNewElement(props);

  return (
    <StyledNewElementContainer>
      <StyledHint> Add a new event to your timeline</StyledHint>
      <StyledContainer>
        <StyledNewElement>
          <StyledCircle />

          <StyledDate>
            <TextInput ref={dateRef} value={"13 Oct 2010"} usedFor="date" />
          </StyledDate>

          {imageUri && <AppImage imageUri={imageUri} />}

          <ImagePicker callback={setImageUri} customRef={imgRef} />

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
