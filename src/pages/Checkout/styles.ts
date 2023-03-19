import styled from "styled-components";
import { size } from "../../layouts/DefaultLayout/styles";

export const CheckoutContainer = styled.form`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: ${size.mobileL}) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: ${size.tablet}) and (max-width: ${size.laptop}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6x;
  padding: 2.5rem;

  @media (max-width: ${size.mobileL}) {
    padding: 0%;
  }
`;
