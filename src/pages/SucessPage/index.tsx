import { RegularText, TitleText } from "../../@helpers/Typograph"
import { SucessDetailsContainer, SucessPageContainer } from "./styles"
import sucessImage from '../../assets/sucess-image.svg'
import { BenefitsListItem } from "../../components/BenefitsListItem"
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useTheme } from "styled-components"
import { useLocation, useNavigate } from "react-router-dom"
import { CheckoutData } from "../Checkout"
import { paymentMethods } from "../Checkout/components/CheckoutForm/PaymentMethod"
import { useEffect } from "react"

interface LocationType {
    state: CheckoutData
}

export const SucessPage = () => {
    const { colors } = useTheme()
    const { state } = useLocation() as unknown as LocationType

    const navigate = useNavigate()

    useEffect(() => {
        if (!state) {
            navigate("/")
        }
    }, [])

    if (!state) return <></>

    return (
        <SucessPageContainer className="container">
            <div>
                <TitleText size="l">
                    Uhu! Pedido confirmado
                </TitleText>
                <RegularText size="l" color="subtitle">
                    Agora é só aguardar que logo o café chegará até você
                </RegularText>
            </div>

            <section>
                <SucessDetailsContainer>
                    <BenefitsListItem
                        icon={<MapPin weight="fill" />}
                        iconBg={colors.purple}
                        text={
                            <RegularText>
                                Entrega em <strong>{state.street}, {state.num}</strong>,
                                <br />
                                {state.district} - {state.city}, {state.uf}
                            </RegularText>
                        }
                    />

                    <BenefitsListItem
                        icon={<Clock weight="fill" />}
                        iconBg={colors.yellow}
                        text={
                            <RegularText>
                                Previsão de entrega
                                <br />
                                <strong>20 min - 30 min</strong>
                            </RegularText>
                        }
                    />

                    <BenefitsListItem
                        icon={<CurrencyDollar weight="fill" />}
                        iconBg={colors["yellow-dark"]}
                        text={
                            <RegularText>
                                Pagamento na entrega
                                <br />
                                <strong>{paymentMethods[state.paymentMethod].label}</strong>
                            </RegularText>
                        }
                    />
                </SucessDetailsContainer>
                <img src={sucessImage} alt="" />
            </section>
        </SucessPageContainer>
    )
}