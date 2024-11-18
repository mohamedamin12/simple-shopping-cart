import { useEffect, useState } from "react";
import { Products } from "./components/Products";
import { CartItems } from "./components/CartItems";

const dummyData = [
  {
    id: 1,
    title:
      "هاتف ذكي ريدمي A3 بذاكرة RAM 3GB - تخزين 64GB وشاشة 6.71 انش HD+ 90Hz وبطارية 5000mAh وشريحتين اتصال وكاميرا مزدوجة واتصال 4G لتجربة جوال قوية وانيقة، اسود",
    image:
      "https://m.media-amazon.com/images/I/7153ZxbAtdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    rate: 4,
    price: 3666,
    insteadOf: 4000,
  },
  {
    id: 2,
    title:
      "ريدمي 12 ذاكرة RAM 8GB + روم 128GB 6.79 انش 4G اسود ميدنايت شريحتين",
    image: "https://m.media-amazon.com/images/I/71ZYyxsnisL._AC_SX569_.jpg",
    rate: 5,
    price: 6299,
    insteadOf: 6999,
  },
  {
    id: 3,
    title:
      "تابلت X8a بذاكرة رام 4 جيجابايت - روم 128GB مقاس 28 سم وواي فاي مع غطاء قلاب مجاني من اونر- إصدار الشرق الاوسط - رمادي",
    image: "https://m.media-amazon.com/images/I/41nNr5+myML._AC_SX425_.jpg",
    rate: 5,
    price: 6999,
    insteadOf: 7300,
  },
];

function App() {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      await new Promise((resolve) =>
        setTimeout(resolve, Math.random() * 6000 + 500)
      );
      setProducts(dummyData);
      setIsLoading(false);
    };
    getData();
  }, []);



  return (
    <>
      <div>
        <h1>Welcome To Shop Cart</h1>
        {isLoading && <p>Loading...</p>}
        {!isLoading && products && (
          <Products products={products}/>
        )}
        <hr />
        <CartItems/>
      </div>
    </>
  );
}

export default App;
