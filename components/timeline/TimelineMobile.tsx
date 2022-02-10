import styled from "styled-components";

import AppTimeline from "../timeline-container/ContainerMobile";
import Button from "../button/Button";
import { mobileDemensions } from "../../config/demensions";
import NewElement from "../new-timeline-element/NewElementMobile";
import useTimeline from "./useTimeline";

const StyledMain = styled.main`
  width: 100vw;
  /* min-width: ${mobileDemensions.minScreenWidth}; */
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledCaptureZone = styled.div`
  width: 100vw;
  max-width: ${mobileDemensions.maxScreenWidth};
  height: auto;
  padding: 10px 0;
  overflow-x: scroll;
`;

function Timeline() {
  const {
    items,
    timelineRef,
    handleDownload,
    handleEdit,
    handleAdd,
    handleRemove,
  } = useTimeline();

  return (
    <>
      <StyledMain>
        <StyledCaptureZone ref={timelineRef}>
          <AppTimeline
            items={items}
            onRemove={handleRemove}
            onEdit={handleEdit}
          />
        </StyledCaptureZone>
        <NewElement onAdd={handleAdd} />
        <Button title="Download" callback={handleDownload} />
      </StyledMain>
    </>
  );
}

export default Timeline;
