import styled from "styled-components";
import { device } from "../../layouts/DefaultLayout/styles";

export const CheckoutContainer = styled.form`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media ${device.mobileS} {
    flex-direction: column;
    align-items: center;
  }
`;

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6x;
  padding: 2.5rem;

  @media ${device.mobileS} {
    padding: 0%;
  }
`;
