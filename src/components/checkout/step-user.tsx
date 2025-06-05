import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutSteps } from "@/types/checkout-steps";
import { useCheckoutStore } from "@/stores/checkout-store";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

// Esquema de validação com Zod
const formSchema = z.object({
  name: z.string().min(2, "Preencha seu Nome:")
});

type FormData = z.infer<typeof formSchema>;

type Props = {
  setStep: Dispatch<SetStateAction<CheckoutSteps>>;
};

export const StepUser = ({ setStep }: Props) => {
  const { name, setName } = useCheckoutStore((state) => state);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name || ""
    }
  });

  const onSubmit = (values: FormData) => {
    setName(values.name);
    setStep("address");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input autoFocus placeholder="Digite seu nome" {...field} />
              </FormControl>

         <FormMessage/>

              
            </FormItem>
          )}
        />
        <Button type="submit" variant="outline">Próximo</Button>
      </form>
    </Form>
  );
};
