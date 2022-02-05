import React from "react";
import styled from "styled-components";

const StyledElement = styled.div`
  width: 250px;
  height: 300px;
  background-color: gray;
  margin: 10px 0;
  border-radius: 10px;
`;

function EmptyElementMobile() {
  return <StyledElement></StyledElement>;
}

export default EmptyElementMobile;
