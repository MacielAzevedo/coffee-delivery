import { useContext } from "react"
import { RegularText } from "../../../../@helpers/Typograph"
import { Button } from "../../../../components/Button"
import { CartContext } from "../../../../contexts/CartContext"
import { formatMoney } from "../../../../util/formatMoney"
import { ConfirmationSectionContainer } from "./styles"

const DELIVERY_PRICE = 3.5

export const ConfirmationSection = () => {
    const { cartItemsTotal, cartQuantity } = useContext(CartContext)
    const cartTotal = DELIVERY_PRICE + cartItemsTotal
    const formattedItemsTotal = formatMoney(cartItemsTotal)
    const formattedCartTotal = formatMoney(cartTotal)
    const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)

    return (
        <ConfirmationSectionContainer>
            <div>
                <RegularText size="s">Total de itens</RegularText>
                <RegularText>R$ {formattedItemsTotal}</RegularText>
            </div>

            <div>
                <RegularText size="s">Entrega</RegularText>
                <RegularText>R$ {formattedDeliveryPrice}</RegularText>
            </div>

            <div>
                <RegularText weight="700" color="subtitle" size="l">Total</RegularText>
                <RegularText weight="700" color="subtitle" size="l">R$ {formattedCartTotal}</RegularText>
            </div>

            <Button
                disabled={cartQuantity <= 0}
                text="Confirmar Pedido"
                type="submit"
            />
        </ConfirmationSectionContainer>
    )
}