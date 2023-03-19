import styled from "styled-components";
import { size } from "../../layouts/DefaultLayout/styles";

export const BenefitsItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: ${size.mobileL}) {
    max-width: 425px;
    p {
      text-align: left;
    }
  }

  @media (min-width: ${size.tablet}) and (max-width: ${size.laptop}) {
    justify-content: center;
  }
`;

interface IconContainerProps {
  iconBg: string;
}

export const IconContainer = styled.div<IconContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background: ${({ iconBg }) => iconBg};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;
