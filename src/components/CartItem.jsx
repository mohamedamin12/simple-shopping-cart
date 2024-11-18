/* eslint-disable react/prop-types */

const CartItem = ({item}) => {
 return (
  <li>
  <img
    src={item.image}
    alt={item.title}
    width="100px"
    height="100px"
  />
  <h3>{item.title}</h3>

  <p>
    <strong>{Number(item.price).toLocaleString()} جنيه</strong>
  </p>
  <p>
    <span style={{ textDecoration: "line-through" }}>
      {item.insteadOf} جنيه
    </span>
  </p>
</li>
 )
}

export default CartItem