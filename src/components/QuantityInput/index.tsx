import { Minus, Plus } from "phosphor-react"
import { IconWrapper, QuantityInputContainer } from "./styles"

interface QuantityInputProps {
    size?: 'medium' | 'small'
    quantity: number
    onIncrease: () => void
    onDecrease: () => void
}

export const QuantityInput = ({ size = 'medium', quantity, onDecrease, onIncrease }: QuantityInputProps) => {
    return (
        <QuantityInputContainer size={size}>
            <IconWrapper onClick={onDecrease}>
                <Minus
                    size={14}
                    weight="fill"
                />
            </IconWrapper>

            <strong>{quantity}</strong>

            <IconWrapper onClick={onIncrease}>
                <Plus
                    size={14}
                    weight="fill"
                />
            </IconWrapper>
        </QuantityInputContainer>
    )
}