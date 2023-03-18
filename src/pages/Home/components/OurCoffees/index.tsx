import { coffees } from "../../../../@helpers/coffees"
import { TitleText } from "../../../../@helpers/Typograph"
import { CoffeeCard } from "../CoffeeCard"
import { CoffeeList, OurCoffeesContainer } from "./styles"

export const OurCoffees = () => {
    return (
        <OurCoffeesContainer className="container">
            <TitleText size="l" color="subtitle">
                Nossos Cafés
            </TitleText>

            <CoffeeList>
                {coffees.map(coffee => (
                    <CoffeeCard
                        key={coffee.id}
                        // @ts-expect-error
                        coffee={coffee}
                    />
                ))}
            </CoffeeList>
        </OurCoffeesContainer>
    )
}