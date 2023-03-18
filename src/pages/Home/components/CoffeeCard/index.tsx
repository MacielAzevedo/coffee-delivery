import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles"
import { RegularText, TitleText } from "../../../../@helpers/Typograph"
import { QuantityInput } from "../../../../components/QuantityInput"
import { ShoppingCart } from "phosphor-react"
import { formatMoney } from "../../../../util/formatMoney"
import { useContext, useState } from "react"
import { CartContext } from "../../../../contexts/CartContext"

export interface Coffee {
    id: number
    tags: string[]
    name: string
    description: string
    photo: string
    price: number
}

interface CoffeeProps {
    coffee: Coffee
}

export const CoffeeCard = ({ coffee }: CoffeeProps) => {
    const { addCoffeeToCart } = useContext(CartContext)
    const [quantity, setQuantity] = useState(1)

    const handleIncrease = () => {
        setQuantity(state => state + 1)
    }

    const isQuantityMoreThanZero = quantity > 1

    const handleDecrease = () => {
        if (isQuantityMoreThanZero) {
            setQuantity(state => state - 1)
        }
    }

    const formattedPrice = formatMoney(coffee.price)

    const handleAddToCart = () => {
        const coffeeToAdd = {
            ...coffee,
            quantity
        }
        addCoffeeToCart(coffeeToAdd)
    }
    return (
        <CoffeeCardContainer>
            <img src={coffee.photo} alt="" />

            <Tags>
                {coffee.tags.map(tag => (
                    <span key={`${coffee.id} ${tag}`}>{tag}</span>
                ))}
            </Tags>

            <Name>{coffee.name}</Name>

            <Description>
                {coffee.description}
            </Description>

            <CardFooter>
                <div>
                    <RegularText size="s">R$</RegularText>
                    <TitleText size="m" color="text" as="strong">{formattedPrice}</TitleText>
                </div>

                <AddCartWrapper>
                    <QuantityInput
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                        quantity={quantity}
                    />
                    <button onClick={handleAddToCart}>
                        <ShoppingCart weight="fill" size={22} />
                    </button>
                </AddCartWrapper>
            </CardFooter>
        </CoffeeCardContainer>
    )
}