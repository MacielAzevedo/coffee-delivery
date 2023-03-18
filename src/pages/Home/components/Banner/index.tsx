import { BannerContainer, BannerContent, BannerTitle, BeneftisListContainer, LeftContainer, RightContainer } from "./styles"
import bannerImage from '../../../../assets/banner-image.svg'
import { RegularText } from "../../../../@helpers/Typograph"
import { BenefitsListItem } from "../../../../components/BenefitsListItem"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { useTheme } from "styled-components"


export const Banner = () => {
    const { colors } = useTheme()
    return (
        <BannerContainer>
            <BannerContent className="container">
                <LeftContainer>
                    <section>
                        <BannerTitle size="xl">
                            Encontre o café perfeito para qualquer hora do dia
                        </BannerTitle>
                        <RegularText size="l" color="subtitle">
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </RegularText>
                    </section>

                    <BeneftisListContainer>
                        <BenefitsListItem
                            icon={<ShoppingCart weight="fill" />}
                            text='Compra simples e segura'
                            iconBg={colors["yellow-dark"]}
                        />

                        <BenefitsListItem
                            icon={<Package weight="fill" />}
                            text='Embalagem mantém o café intacto'
                            iconBg={colors["base-text"]}
                        />

                        <BenefitsListItem
                            icon={<Timer weight="fill" />}
                            text='Entrega rápida e rastreada'
                            iconBg={colors["yellow"]}
                        />

                        <BenefitsListItem
                            icon={<Coffee weight="fill" />}
                            text='O café chega fresquinho até você'
                            iconBg={colors.purple}
                        />
                    </BeneftisListContainer>
                </LeftContainer>

                <RightContainer>
                    <img src={bannerImage} alt="" />
                </RightContainer>

            </BannerContent>
        </BannerContainer>
    )
}