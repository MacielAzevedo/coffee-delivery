import styled from "styled-components";
import { RegularText, TitleText } from "../../../../@helpers/Typograph";

export const BannerContainer = styled.section`
  width: 100%;
  height: 34rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BannerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`;

export const BannerTitle = styled(TitleText)`
  margin-bottom: 1rem;
`;

export const BeneftisListContainer = styled(RegularText)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`;
