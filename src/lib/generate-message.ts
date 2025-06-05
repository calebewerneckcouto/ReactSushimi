import { useCartStore } from "@/stores/cart-store";
import { useCheckoutStore } from "@/stores/checkout-store";

export const generateMessage = () => {
  const { name, address } = useCheckoutStore(state => state);
  const { cart } = useCartStore(state => state);

  // Monta lista de produtos formatados
  const orderProducts = cart.map(
    (item, index) => `  ${index + 1}. ${item.quantity}x ${item.product.name}`
  );

  // Fallback para complemento vazio
  const complement = address.complement ? address.complement : "—";

  return `
**📋 Dados do Cliente**

Nome: *${name}*

Endereço:
  ${address.street}, ${address.number} (${complement})
  ${address.district}
  ${address.city} / ${address.state}

---

**🛒 Pedido**

${orderProducts.join("\n")}

---

*Obrigado pela preferência! Qualquer dúvida, estamos à disposição.*  
`;
};
