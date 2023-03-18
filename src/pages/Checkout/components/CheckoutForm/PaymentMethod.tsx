import { Bank, CreditCard, Money } from "phosphor-react"
import { useFormContext } from "react-hook-form"
import { RegularText } from "../../../../@helpers/Typograph"
import { PaymentMethodInput } from "../../../../components/PaymentMethodInput"
import { PaymentMethodContainer } from "./styles"

export const paymentMethods = {
    credit: {
        label: "Cartão de Credito",
        icon: <CreditCard />
    },
    debit: {
        label: "Cartão de Débito",
        icon: <Bank />
    },
    money: {
        label: "Dinheiro",
        icon: <Money />
    }
}

export const PaymentMethod = () => {
    const { register, formState: { errors } } = useFormContext()
    const paymentMethodError = errors?.paymentMethods?.message as unknown as string


    return (
        <PaymentMethodContainer>
            {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
                <PaymentMethodInput
                    key={label}
                    id={key}
                    icon={icon}
                    label={label}
                    value={key}
                    {...register("paymentMethod")}
                />
            ))}
            {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
        </PaymentMethodContainer>
    )
}