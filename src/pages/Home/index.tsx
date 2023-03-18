import { Banner } from "./components/Banner"
import { OurCoffees } from "./components/OurCoffees"
import { HomeContainer } from "./styles"

export const Home = () => {
    return (
        <HomeContainer>
            <Banner />
            <OurCoffees />
        </HomeContainer>
    )
}