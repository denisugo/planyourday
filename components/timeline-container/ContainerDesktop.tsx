import styled from "styled-components";
import Element, { IElement } from "../timeline-element/ElementDesktop";
import EmptyElement from "../timeline-element/EmptyElementDesktop";
const StyledContainer = styled.div`
  max-width: 80%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr;
  margin: 30px 10px 30px 160px;
  border-left: 2px solid black;
`;

function ContainerDesktop({ items }: { items: IElement[] }) {
  return (
    <StyledContainer>
      {items.map((item) => (
        <Element
          key={item.id}
          id={item.id}
          title={item.title}
          text={item.text}
          date={item.date}
        />
      ))}
      {/* <EmptyElement /> */}
    </StyledContainer>
  );
}

export default ContainerDesktop;
