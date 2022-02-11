import { ChangeEvent, RefObject } from "react";
import styled from "styled-components";
import { input } from "../../config/colors";

const StyledInputContainer = styled.div`
  z-index: 10;
  height: fit-content;
  width: fit-content;
`;

const StyledInput = styled.label`
  padding: 5px;
  margin: 20px 20px;
  display: inline-block;
  border-radius: 5px;
  box-shadow: 0 0 5px ${input.shadow};

  cursor: pointer;
`;

interface IImagePicker {
  callback: (newValue: string) => void;
  customRef: RefObject<HTMLInputElement>;
}

function ImagePicker({ callback, customRef }: IImagePicker) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length !== 0)
      callback(URL.createObjectURL(e.target.files![0]));
  };

  return (
    <StyledInputContainer>
      <StyledInput htmlFor="imageInput">Choose image</StyledInput>
      <input
        id="imageInput"
        ref={customRef}
        type="file"
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleChange}
      />
    </StyledInputContainer>
  );
}

export default ImagePicker;
