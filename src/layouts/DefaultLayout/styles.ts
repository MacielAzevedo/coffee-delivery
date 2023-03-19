import styled from "styled-components";

export const size = {
  mobileL: "450px",
  tablet: "768px",
  laptop: "1024px",
} as const;

export const LayoutContainer = styled.div`
  .container {
    width: 100%;
    max-width: 70rem;
    margin-right: auto;
    margin-left: auto;

    @media (max-width: ${size.mobileL}) {
      padding: 0 1rem;
    }

    @media (min-width: ${size.tablet}) and (max-width: ${size.laptop}) {
      padding: 0 1.2rem;
    }
  }
`;
