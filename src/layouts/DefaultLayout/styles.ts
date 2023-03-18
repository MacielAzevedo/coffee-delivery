import styled from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.laptop})`,
  laptop: `(min-width: ${size.laptop})`,
};

export const LayoutContainer = styled.div`
  .container {
    width: 100%;
    max-width: 70rem;
    margin-right: auto;
    margin-left: auto;

    @media ${device.mobileS} {
      padding: 0 1rem;
    }
  }
`;
