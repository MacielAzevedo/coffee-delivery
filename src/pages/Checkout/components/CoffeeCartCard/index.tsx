import { Trash } from "phosphor-react"
import { useContext } from "react"
import { RegularText } from "../../../../@helpers/Typograph"
import { QuantityInput } from "../../../../components/QuantityInput"
import { CartContext, CartItem } from "../../../../contexts/CartContext"
import { formatMoney } from "../../../../util/formatMoney"
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles"

interface CoffeeCartCardProps {
    coffee: CartItem
}

export const CoffeeCartCard = ({ coffee }: CoffeeCartCardProps) => {
    const { changeCartItemQuantity, removeCartItem } = useContext(CartContext)

    const coffeeTotal = coffee.price * coffee.quantity
    const formattedPrice = formatMoney(coffeeTotal)

    const handleIncrease = () => {
        changeCartItemQuantity(coffee.id, 'increase')
    }

    const handleDecrease = () => {
        if (coffee.quantity > 1) {
            changeCartItemQuantity(coffee.id, 'decrease')
        } else {
            removeCartItem(coffee.id)
        }
    }

    const handleRemove = () => {
        removeCartItem(coffee.id)
    }

    return (
        <CoffeeCartCardContainer>
            <div>
                <img src={coffee.photo} alt="" />
                <div>
                    <RegularText color="subtitle">
                        {coffee.name}
                    </RegularText>
                    <ActionsContainer>
                        <QuantityInput
                            size="small"
                            quantity={coffee.quantity}
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                        />
                        <RemoveButton onClick={handleRemove}>
                            <Trash size={16} />
                            REMOVER
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>
            <p>R$ {formattedPrice}</p>
        </CoffeeCartCardContainer>
    )
}