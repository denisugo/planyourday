import styled from "styled-components";
import Element, { IItem } from "../timeline-element/ElementDesktop";
const StyledContainer = styled.div`
  max-width: 80%;
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: auto;
  grid-template-columns: 1fr;
  margin: 30px 10px 30px 160px;
  border-left: 2px solid black;
`;

interface IConainer {
  items: IItem[];
  onRemove: (id: number) => void;
  onEdit: (item: IItem) => void;
}

function ContainerDesktop({ items, onRemove, onEdit }: IConainer) {
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

export default ContainerDesktop;
