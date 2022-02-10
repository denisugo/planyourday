import styled from "styled-components";
import { cardElement } from "../../config/colors";
import Button from "../button/Button";
import DeleteButton from "../delete-button/DeleteButton";
import TextInput from "../text-input/TextInputDesktop";
import useElement from "./useElement";

const StyledElement = styled.div`
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

  button[title="delete"] {
    position: absolute;
    top: 30px;
    left: -45px;
    transform: translate(-25%, -75%);
    animation-name: buttonAppear;
    animation-duration: 1s;
  }
  button[title="Edit"],
  button[title="Confirm"] {
    margin: 20px;
    animation-name: buttonAppear;
    animation-duration: 1s;
  }

  h2 {
    align-self: center;
    filter: drop-shadow(0 0 10px #666);
    padding: 7px 20px;
    z-index: 1;
    width: 100%;
    text-align: center;
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

  @keyframes buttonAppear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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

function Element(props: IElementInternal) {
  const {
    handleLConfirm,
    handleEditBlocksVisible,
    onRemove,
    visible,
    visibleButtons,
    setVisibleButtons,
    titleRef,
    textRef,
    dateRef,
    text,
    title,
    date,
    id,
  } = useElement(props);
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

export default Element;
