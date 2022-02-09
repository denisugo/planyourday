import React from "react";
import styled from "styled-components";
import { footer } from "../../config/colors";
import { desktopDemensions } from "../../config/demensions";

const StyledFooter = styled.footer`
  height: 100px;
  width: 100%;
  min-width: ${desktopDemensions.minScreenWidth};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  background-color: ${footer.background};
  color: ${footer.text};

  span {
    color: ${footer.span};
    font-weight: bold;
  }
`;

function AppFooter() {
  return (
    <StyledFooter>
      <p>
        Powered by <span> Denis</span>🙃
      </p>
    </StyledFooter>
  );
}

export default AppFooter;
