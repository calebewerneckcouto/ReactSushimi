"use client";

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
import { useCartStore } from "@/stores/cart-store";
import { useState } from "react";
import { CheckoutDialog } from "../checkout/dialog";

export const CartSidebar = () => {
  const { cart, incrementItem, decrementItem } = useCartStore();
  const [checkoutOpen,setCheckoutOpen]= useState(false);

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative flex items-center">
          <RocketIcon className="mr-2" />
          <p>Carrinho</p>

          {totalQuantity > 0 && (
            <span
              className="
                absolute 
                -top-1 
                -right-1 
                bg-red-600 
                text-white 
                rounded-full 
                text-xs 
                w-5 
                h-5 
                flex 
                items-center 
                justify-center
                font-bold
              "
            >
              {totalQuantity}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="px-6 py-4">
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-5 my-5 max-h-[60vh] overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-muted-foreground text-sm text-center">
              Seu carrinho está vazio.
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center justify-between gap-4"
              >
                {/* Imagem pequena */}
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-12 h-12 object-cover rounded"
                />

                {/* Apenas o nome */}
                <p className="font-medium flex-1">{item.product.name}</p>

                {/* Controle quantidade */}
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    onClick={() => decrementItem(item.product.id)}
                  >
                    -
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    size="sm"
                    onClick={() => incrementItem(item.product.id)}
                  >
                    +
                  </Button>
                </div>

                {/* Total item */}
                <div className="font-medium">
                  R$ {(item.product.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))
          )}
        </div>

        <Separator className="my-4" />

        <div className="flex justify-between items-center text-sm font-medium">
          <div>Subtotal:</div>
          <div>R$ {subtotal.toFixed(2)}</div>
        </div>

        <Separator className="my-4" />

        <div className="text-center mt-4">
          <Button className="w-full" disabled={cart.length === 0}  onClick={()=>setCheckoutOpen(true)}>
            Finalizar Compra
          </Button>
        </div>

        <CheckoutDialog
         open={checkoutOpen}
         onOpenChange = {setCheckoutOpen}
        />
      </SheetContent>
    </Sheet>
  );
};
