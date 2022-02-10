import styled from "styled-components";
import { footer } from "../../config/colors";
import { desktopDemensions } from "../../config/demensions";

const StyledFooter = styled.footer`
  height: 100px;
  width: 100vw;
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
        Powered by <span> Denis</span>🙃 2022
      </p>
    </StyledFooter>
  );
}

export default AppFooter;
