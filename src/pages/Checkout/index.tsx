import { CheckoutForm } from "./components/CheckoutForm"
import { SelectedCoffees } from "./components/SelectedCoffees"
import { CheckoutContainer } from "./styles"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../contexts/CartContext"
import { useContext } from "react"

enum PaymentMethods {
    credit = "credit",
    debit = "debit",
    money = "money",
}

const confirmCheckoutFormValidationSchema = zod.object({
    cep: zod.string(),
    street: zod.string(),
    num: zod.string(),
    complement: zod.string(),
    district: zod.string(),
    city: zod.string(),
    uf: zod.string(),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
        errorMap: () => {
            return { message: "Informe o método de pagamento" };
        }
    })
})

export type CheckoutData = zod.infer<typeof confirmCheckoutFormValidationSchema>

type confirmCheckoutData = CheckoutData


export const Checkout = () => {
    const { cleanCart } = useContext(CartContext);

    const confirmCheckoutForm = useForm<confirmCheckoutData>({
        resolver: zodResolver(confirmCheckoutFormValidationSchema),
        defaultValues: {
            cep: '',
            street: '',
            num: '',
            complement: '',
            district: '',
            city: '',
            uf: '',
        }
    })

    const { handleSubmit } = confirmCheckoutForm

    const navigate = useNavigate()

    function handleConfirmCheckout(data: confirmCheckoutData) {
        navigate('/sucessPage', {
            state: data
        })
        cleanCart()
        console.log(data)
    }

    return (
        <CheckoutContainer
            className="container"
            onSubmit={handleSubmit(handleConfirmCheckout)}
        >
            <FormProvider {...confirmCheckoutForm}>
                <CheckoutForm />
            </FormProvider>
            <SelectedCoffees />
        </CheckoutContainer>
    )
}