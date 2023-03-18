import styled from "styled-components";
import { device } from "../../../../layouts/DefaultLayout/styles";

export const OurCoffeesContainer = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
`;

export const CoffeeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;

  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
