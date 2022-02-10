import styled from "styled-components";
import { cardElement } from "../../config/colors";
import Element, { IItem } from "../timeline-element/ElementMobile";

export const StyledContainer = styled.div`
  max-width: fit-content;
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: auto;
  grid-template-columns: 1fr;
  margin: 30px 10px 30px 105px;
  border-left: 2px solid ${cardElement.line};
`;

interface IConainer {
  items: IItem[];
  onRemove: (id: number) => void;
  onEdit: (item: IItem) => void;
}

function Container({ items, onRemove, onEdit }: IConainer) {
  return (
    <StyledContainer>
      {items.map((item) => (
        <Element
          key={item.id}
          id={item.id}
          title={item.title}
          text={item.text}
          date={item.date}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      ))}
    </StyledContainer>
  );
}

export default Container;
