import styled from "styled-components";

import AppTimeline from "../timeline-container/ContainerDesktop";
import Button from "../button/Button";
import { desktopDemensions } from "../../config/demensions";
import NewElement from "../new-timeline-element/NewElementDesktop";
import useTimeline from "./useTimeline";
import { global } from "../../config/colors";

const StyledMain = styled.main`
  width: 100vw;
  /* min-width: ${desktopDemensions.minScreenWidth}; */
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: scroll;

  animation-duration: 1s;
  animation-name: appear;

  button[title="Download"] {
    margin-bottom: 50px;
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const StyledCaptureZone = styled.div`
  width: 100vw;
  max-width: ${desktopDemensions.minScreenWidth};
  height: auto;
  padding: 10px 0;
  overflow: scroll;
  z-index: 1;
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
