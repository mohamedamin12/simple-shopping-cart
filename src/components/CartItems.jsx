import CartItem from "./CartItem";
import { useShoppingCartContext } from "../context/ShoppingCartContext";

export const CartItems = () => {
  const {cartItems} = useShoppingCartContext()
  return (
    <div>
      <h1>cart {cartItems.length}</h1>
      <ul style={{ display: "flex", gap: "16px" }}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))}
      </ul>
    </div>
  );
};
