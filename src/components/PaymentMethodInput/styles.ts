import styled, { css } from "styled-components";

export const PaymentMethodInputContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;

    &:checked + label div {
      ${({ theme }) => css`
        background: ${theme.colors["purple-light"]};
        border-color: ${theme.colors.purple};

        &:hover {
          background: ${theme.colors["purple-light"]};
        }
      `};
    }
  }
`;

export const ContentContainer = styled.div`
  padding: 0 1rem;
  background: ${({ theme }) => theme.colors["base-button"]};
  color: ${({ theme }) => theme.colors["base-text"]};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  transform: 0.4s;

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
  }

  user-select: none;
`;
