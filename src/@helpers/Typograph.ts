import styled from "styled-components";
import { size } from "../layouts/DefaultLayout/styles";

interface TitleTextProps {
  size?: "xl" | "l" | "m" | "s" | "xs";
  color?: "title" | "subtitle" | "text";
  weight?: string | number;
}

export const TitleText = styled.h1<TitleTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? "title"}`]};
  font-size: ${({ theme, size }) => theme.textSizes[`title-${size ?? "m"}`]};
  font-family: "Baloo 2", cursive;
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 800};

  @media (max-width: ${size.mobileL}) {
    text-align: center;
  }

  @media (min-width: ${size.tablet}) and (max-width: ${size.laptop}) {
    text-align: center;
  }
`;

interface RegularTextProps {
  size?: "l" | "m" | "s";
  color?: "text" | "subtitle" | "label";
  weight?: string | number;
}

export const RegularText = styled.div<RegularTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? "title"}`]};
  font-size: ${({ theme, size }) =>
    theme.textSizes[`text-regular-${size ?? "m"}`]};
  font-family: "Roboto", sans-serif;
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 400};

  @media (max-width: ${size.mobileL}) {
    text-align: center;
  }

  @media (min-width: ${size.tablet}) and (max-width: ${size.laptop}) {
    text-align: center;
  }
`;
