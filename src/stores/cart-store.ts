import { create } from "zustand";
import { Products } from "@/types/product";
import { Cart } from "@/types/cart";

type States = {
  cart: Cart[];
};

type Actions = {
  upsertCartItem: (product: Products, quantity: number) => void;
  incrementItem: (productId: number) => void;
  decrementItem: (productId: number) => void;
  removeItem: (productId: number) => void;
};

export const useCartStore = create<States & Actions>((set) => ({
  cart: [],

  upsertCartItem: (product, quantity) =>
    set((state) => {
      const itemIndex = state.cart.findIndex((item) => item.product.id === product.id);
      if (itemIndex === -1) {
        return { cart: [...state.cart, { product, quantity }] };
      } else {
        const newCart = [...state.cart];
        newCart[itemIndex].quantity += quantity;
        if (newCart[itemIndex].quantity < 1) {
          newCart.splice(itemIndex, 1);
        }
        return { cart: newCart };
      }
    }),

  incrementItem: (productId) =>
    set((state) => {
      const newCart = state.cart.map((item) =>
        item.product.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      return { cart: newCart };
    }),

  decrementItem: (productId) =>
    set((state) => {
      const item = state.cart.find((item) => item.product.id === productId);
      if (!item) return state;
      if (item.quantity <= 1) {
        return { cart: state.cart.filter((item) => item.product.id !== productId) };
      } else {
        const newCart = state.cart.map((item) =>
          item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
        return { cart: newCart };
      }
    }),

  removeItem: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.product.id !== productId),
    })),
}));
