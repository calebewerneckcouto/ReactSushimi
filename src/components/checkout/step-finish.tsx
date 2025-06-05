import { useCheckoutStore } from "@/stores/checkout-store";
import { Button } from "../ui/button";
import { generateMessage } from "@/lib/generate-message";

export const StepFinish = () => {
  const { name } = useCheckoutStore((state) => state);

  const message = generateMessage();
  const linkZap = `https://wa.me/${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURIComponent(message)}`;

  console.log("WhatsApp link:", linkZap);

  return (
    <div className="text-center flex flex-col gap-5">
      <p>Perfeito!</p>
      <p>
        Agora envie o seu pedido ao nosso WhatsApp para concluir. Nosso atendente irá te guiar!
      </p>

      <Button asChild>
        <a href={linkZap} target="_blank" rel="noopener noreferrer">
          Enviar para o WhatsApp
        </a>
      </Button>
    </div>
  );
};
