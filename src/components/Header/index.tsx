import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles"
import coffeeLogoImage from '../../assets/coffeeLogo.svg'
import { MapPin, ShoppingCart } from "phosphor-react"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

export const Header = () => {
    const { cartQuantity } = useContext(CartContext)

    return (
        <HeaderContainer className="container">
            <NavLink to="/">
                <img src={coffeeLogoImage} alt="" />
            </NavLink>
            <HeaderButtonContainer>
                <HeaderButton variant="purple">
                    <MapPin size={20} weight="fill" />
                    Porto Alegre, RS
                </HeaderButton>
                <NavLink to="/checkout">
                    <HeaderButton variant="yellow">
                        {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                        <ShoppingCart size={20} weight="fill" />
                    </HeaderButton>
                </NavLink>
            </HeaderButtonContainer>
        </HeaderContainer>
    )
}