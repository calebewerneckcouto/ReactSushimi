"use client";

import { Products } from "@/types/product";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useCartStore } from "@/stores/cart-store";

type Props = {
  item: Products;
};

export const ProductItem = ({ item }: Props) => {
  // Pega a função upsertCartItem do Zustand usando seletor
  const upsertCartItem = useCartStore((state) => state.upsertCartItem);

  const handleAddButton = () => {
    // Adiciona 1 unidade do produto no carrinho
    upsertCartItem(item, 1);

    // Exibe o toast de confirmação
    toast(
      <>
        <div className="font-semibold">Adicionado ao carrinho!</div>
        <div className="text-sm text-muted-foreground">{item.name}</div>
      </>,
      {
        action: {
          label: "Fechar",
          onClick: () => {},
        },
      }
    );
  };

  return (
    <div>
      <div className="rounded-md overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-32 object-cover"
        />
      </div>

      <div className="mt-3 flex flex-col gap-2">
        <p className="text-lg">{item.name}</p>
        <p className="text-sm opacity-50">R$ {item.price.toFixed(2)}</p>
        <Button variant="outline" onClick={handleAddButton}>
          Adicionar
        </Button>
      </div>
    </div>
  );
};
