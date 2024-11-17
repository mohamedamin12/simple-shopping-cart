/* eslint-disable react/prop-types */
import StarIcon from "../assets/icons/star.png";
export const Products = ({ products }) => {
  return (
    <div>
      <ul style={{ display: "flex", gap: "16px" }}>
        {products.map((product) => (
          <li key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              width="100px"
              height="100px"
            />
            <h3>{product.title}</h3>
            <p>
              Rate : {product.rate}
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
              Price :{" "}
              <strong>{Number(product.price).toLocaleString()} جنيه</strong>
            </p>
            <p>
              Instead Of :{" "}
              <span style={{ textDecoration: "line-through" }}>
                {product.insteadOf} جنيه
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
