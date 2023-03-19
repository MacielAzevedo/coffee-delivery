import styled from "styled-components";
import { size } from "../../../../layouts/DefaultLayout/styles";

export const SectionTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (min-width: ${size.tablet}) and (max-width: ${size.tablet}) {
    justify-content: center;
  }
`;
