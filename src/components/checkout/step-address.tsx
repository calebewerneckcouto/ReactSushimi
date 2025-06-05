import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutSteps } from "@/types/checkout-steps";
import { useCheckoutStore } from "@/stores/checkout-store";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

// 🧩 Esquema de validação com Zod
const formSchema = z.object({
    street: z.string().min(2, "Preencha o endereço:"),
    number: z.string().min(1, "Preencha o número:"),
    complement: z.string().optional(),
    district: z.string().min(2, "Preencha o bairro:"),
    city: z.string().min(2, "Preencha a cidade:"),
    state: z.string().min(2, "Preencha o estado:")
});

type FormData = z.infer<typeof formSchema>;

type Props = {
    setStep: Dispatch<SetStateAction<CheckoutSteps>>;
};

export const StepAddress = ({ setStep }: Props) => {
    const { setAddress } = useCheckoutStore((state) => state); // ajuste conforme seu store

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            street: "",
            number: "",
            complement: "",
            district: "",
            city: "",
            state: ""
        }
    });

    const onSubmit = (values: FormData) => {
        setAddress(values); // Armazena os dados no store
        setStep("finish"); // Vai para o próximo passo
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <FormField
                    control={form.control}
                    name="street"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Rua</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite o nome da rua" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="number"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Número</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite o número" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="complement"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Complemento</FormLabel>
                            <FormControl>
                                <Input placeholder="Apartamento, bloco, etc." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="district"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Bairro</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite o bairro" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Cidade</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite a cidade" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Estado</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite o estado" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" variant="outline">
                    Próximo
                </Button>
                <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setStep("user")}
                >
                    Voltar
                </Button>
            </form>
        </Form>
    );
};
