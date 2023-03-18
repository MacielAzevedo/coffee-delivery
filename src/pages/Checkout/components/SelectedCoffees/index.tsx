import { useContext } from "react"
import { TitleText } from "../../../../@helpers/Typograph"
import { CartContext } from "../../../../contexts/CartContext"
import { CoffeeCartCard } from "../CoffeeCartCard"
import { ConfirmationSection } from "./ConfirmationSection"
import { DetailsContainer, SelectedCoffeesContainer } from "./styles"

export const SelectedCoffees = () => {
    const { cartItems } = useContext(CartContext)
    return (
        <SelectedCoffeesContainer>
            <TitleText size="xs" color="subtitle">
                Cafés selecionados
            </TitleText>

            <DetailsContainer>
                {cartItems.map(item => (
                    <CoffeeCartCard
                        key={item.id}
                        coffee={item}
                    />
                ))}
                <ConfirmationSection />
            </DetailsContainer>
        </SelectedCoffeesContainer>
    )
}