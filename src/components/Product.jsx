/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import StarIcon from "../assets/icons/star.png";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
const Product = ({ product  }) => {
  const {setCartItems} = useShoppingCartContext()
  const addToCart = (product) => {
    setCartItems(prev => {
      return [...prev, product];
    });
    toast.success("تم اضافة المنتج الي السله");
  };
  return (
    <li>
      <img
        src={product.image}
        alt={product.title}
        width="100px"
        height="100px"
      />
      <h3>{product.title}</h3>
      <p>
        {product.rate}
        {Array(product.rate)
          .fill(0)
          .map((_, index) => (
            <img
              key={index}
              src={StarIcon}
              alt="starImg"
              width="16px"
              height="16px"
            />
          ))}
      </p>
      <p>
        <strong>{Number(product.price).toLocaleString()} جنيه</strong>
      </p>
      <p>
        <span style={{ textDecoration: "line-through" }}>
          {product.insteadOf} جنيه
        </span>
      </p>
      <button style={{cursor: 'pointer'}} type="button" onClick={() => addToCart(product)}>
        اضف الي السله
      </button>
    </li>
  );
};

export default Product;
