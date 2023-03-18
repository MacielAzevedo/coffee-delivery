import { ReactNode } from "react"
import { BenefitsItemContainer, IconContainer } from "./styles"

interface BenefitsListItemProps {
    icon: ReactNode
    text: string | ReactNode
    iconBg: string
}

export const BenefitsListItem = ({ icon, text, iconBg }: BenefitsListItemProps) => {
    return (
        <BenefitsItemContainer>
            <IconContainer iconBg={iconBg}>
                {icon}
            </IconContainer>
            {typeof text === "string" ? <p>{text}</p> : text}
        </BenefitsItemContainer>
    )
}