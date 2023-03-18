import { useFormContext } from "react-hook-form"
import { Input } from "../../../../components/Input"
import { AddressFormContainer } from "./styles"


export const AddressForm = () => {
    const { register, watch } = useFormContext()

    return (
        <AddressFormContainer>
            <Input
                placeholder="CEP"
                className="cep"
                type="text"
                minLength={8}
                maxLength={9}
                {...register('cep')}
                required
            />

            <Input
                type="text"
                placeholder="Rua"
                className="street"
                {...register("street")}
                required
            />

            <Input
                placeholder="Número"
                type="text"
                minLength={2}
                maxLength={4}
                {...register('num')}
            />

            <Input
                type="text"
                placeholder="Complemento"
                className="complement"
                {...register("complement")}
            />

            <Input
                type="text"
                placeholder="Bairro"
                {...register("district")}
                required
            />

            <Input
                type="text"
                placeholder="Cidade"
                {...register("city")}
                required
            />

            <Input
                type="text"
                placeholder="UF"
                {...register("uf")}
                required
                min={2}
                max={2}
            />
        </AddressFormContainer>
    )
}