import { CurrencyDollar, MapPinLine } from "phosphor-react"
import { useTheme } from "styled-components"
import { TitleText } from "../../../../@helpers/Typograph"
import { SectionTitle } from "../SectionTitle"
import { AddressForm } from "./AdressForm"
import { PaymentMethod } from "./PaymentMethod"
import { CheckoutFormContainer, FormSectionContainer } from "./styles"

export const CheckoutForm = () => {
    const { colors } = useTheme()
    return (
        <CheckoutFormContainer>
            <TitleText size="xs" color="subtitle">
                Complete seu pedido
            </TitleText>

            <FormSectionContainer>
                <SectionTitle
                    icon={<MapPinLine size={22} color={colors["yellow-dark"]} />}
                    title="Endereço de Entrega"
                    subtitle="Informe o endereço onde deseja receber seu pedido"
                />
                <AddressForm />
            </FormSectionContainer>

            <FormSectionContainer>
                <SectionTitle
                    icon={<CurrencyDollar size={22} color={colors.purple} />}
                    title="Pagamento"
                    subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                />
                <PaymentMethod />
            </FormSectionContainer>
        </CheckoutFormContainer>
    )
}