import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { RocketIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const CartSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <RocketIcon className="mr-2" />
          <p>Carrinho</p>
        </Button>
      </SheetTrigger>

      <SheetContent className="px-6 py-4"> {/* Adiciona padding interno */}
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-5 my-5">
          {/* Conteúdo do carrinho */}
          ...
        </div>

        <Separator className="my-4" />

        <div className="flex justify-between items-center text-sm">
          <div>Subtotal:</div>
          <div>...</div>
        </div>

        <Separator className="my-4" />

        <div className="text-center mt-4">
          <Button className="w-full">Finalizar Compra</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
