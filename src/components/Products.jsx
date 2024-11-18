/* eslint-disable react/prop-types */
import Product from "./Product";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
export const Products = ({ products}) => {
  const {setCartItems} =useShoppingCartContext()
  return (
    <div>
      <ul style={{ display: "flex", gap: "16px" }}>
        {products.map((product) => (
            <Product key={product.id} product={product} setCartItems={setCartItems}/>
        ))}
      </ul>
    </div>
  );
};
