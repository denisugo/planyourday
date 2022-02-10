import styled from "styled-components";
import { BiTimeFive } from "react-icons/bi";

import { global, header } from "../../config/colors";
import { desktopDemensions } from "../../config/demensions";

const StyledHeader = styled.header`
  width: 100%;
  min-width: ${desktopDemensions.minScreenWidth};
  background-color: ${header.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: relative;

  & :after {
    content: "";
    position: absolute;
    width: 100%;
    height: 10px;
    bottom: 0;
    transform: translate(0, 50%);
    z-index: 1;
    display: block;
    background: ${global.background};
  }

  h1 {
    width: 100%;
    margin: 0;
    padding: 20px;
    color: ${header.heading};
    font-size: 3rem;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;

    animation-duration: 2s;
    animation-name: appear;

    span {
      font-size: 4rem;
      margin-left: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        filter: drop-shadow(0 2px 3px ${header.shadow});
      }
    }
  }

  & > svg {
    align-self: center;
    width: 101%;
    margin: 0;
    padding: 0;
    display: block;
    filter: url(#shadow);
  }

  p {
    padding: 15px;
    align-self: center;
    font-size: 1.5rem;
    color: ${header.quote};

    animation-duration: 4s;
    animation-name: appear;
    q {
      font-style: italic;
    }
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

function AppHeader() {
  return (
    <StyledHeader>
      <h1>
        {"Plan your  "}{" "}
        <span>
          <BiTimeFive textRendering={"time"} />
        </span>
      </h1>
      <p>
        <q>Let our advance worrying become advance thinking and planning.</q>
        <span> - Winston Churchill</span>
      </p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1439 319">
        <filter id="shadow" colorInterpolationFilters="sRGB">
          <feOffset dx="0" dy="2" />

          <feGaussianBlur stdDeviation="1" result="offset-blur" />

          <feComposite
            operator="out"
            in="SourceGraphic"
            in2="offset-blur"
            result="inverse"
          />

          <feFlood
            floodColor={header.shadow}
            floodOpacity=".4"
            result="color"
          />
          <feComposite operator="in" in="color" in2="inverse" result="shadow" />
          <feComposite operator="over" in="shadow" in2="SourceGraphic" />
        </filter>
        <path
          fill={global.background}
          fillOpacity="1"
          d="M0,256L48,256C96,256,192,256,288,218.7C384,181,480,107,576,106.7C672,107,768,181,864,181.3C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </StyledHeader>
  );
}

export default AppHeader;
