import styled from "styled-components";
import { size } from "../../layouts/DefaultLayout/styles";

export const SucessPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  h1 {
    color: ${({ theme }) => theme.colors["yellow-dark"]};
  }

  @media (max-width: ${size.mobileL}) {
    margin-top: 1rem;
    > div {
      margin: 0 auto;
    }
  }
  @media (min-width: ${size.tablet}) and (max-width: ${size.laptop}) {
    margin-top: 1rem;
    > div {
      margin: 0 auto;
    }
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${size.mobileL}) {
      flex-direction: column;
      img {
        max-width: 100%;
        margin: 2rem 0;
      }
    }
  }
`;

export const SucessDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${({ theme }) => theme.colors.background};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }

  @media (max-width: ${size.mobileL}) {
    min-width: 0;
    padding: 1.5rem;
  }

  @media (min-width: ${size.tablet}) and (max-width: ${size.laptop}) {
    min-width: 20rem;
    padding: 1.5rem;
  }
`;
