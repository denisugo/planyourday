import React from "react";
import styled from "styled-components";

const StyledElement = styled.div`
  width: 250px;
  height: 300px;
  background-color: gray;
  margin: 10px 0;
  border-radius: 10px;
`;

function EmptyElementDesktop() {
  return <StyledElement>11 May</StyledElement>;
}

export default EmptyElementDesktop;
