import styled from "styled-components";
import { RegularText, TitleText } from "../../../../@helpers/Typograph";
import { size } from "../../../../layouts/DefaultLayout/styles";

export const BannerContainer = styled.section`
  width: 100%;
  height: 34rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${size.mobileL}) {
    height: 100%;
  }

  @media (min-width: ${size.tablet}) and (max-width: ${size.laptop}) {
    height: 100%;
  }
`;

export const BannerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  @media (max-width: ${size.mobileL}) {
    height: 100%;
    flex-direction: column;
  }

  @media (min-width: ${size.tablet}) and (max-width: ${size.laptop}) {
    height: 100%;
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const RightContainer = styled.div`
  @media (max-width: ${size.mobileL}) {
    img {
      width: 100%;
    }
  }
`;

export const BannerTitle = styled(TitleText)`
  margin-bottom: 1rem;
`;

export const BeneftisListContainer = styled(RegularText)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  @media (max-width: ${size.mobileL}) {
    grid-template-columns: 1fr;
  }
`;
