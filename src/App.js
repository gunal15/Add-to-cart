import "./App.css";
import Card from "./Card";
import Cart from "./Cart";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  let datalist = [
    {
      id: 1,
      product: "Iphone 14 ",
      imgurl:
        "https://cdn.shopify.com/s/files/1/0568/5942/7015/products/MPV03HN_A_1.jpg?v=1662718728",
      price: 81999,
    },
    {
      id: 2,
      product: "Iphone 14 pro",
      imgurl:
        "https://cdn.shopify.com/s/files/1/0568/5942/7015/products/MQ9P3HN_A_1_560x.jpg?v=1662718624",
      price: 129999,
    },
    {
      id: 3,
      product: "iPad Air",
      imgurl:
        "https://cdn.shopify.com/s/files/1/0568/5942/7015/products/MM6U3HN_A_1_560x.png?v=1647001351",
      price: 69899,
    },
    {
      id: 4,
      product: "Mac Book Pro",
      imgurl:
        "https://cdn.shopify.com/s/files/1/0568/5942/7015/products/MK183HN_A_1_560x.png?v=1634727896",
      price: 159999,
    },
    {
      id: 5,
      product: "Apple Watch Ultra",
      imgurl:
        "https://cdn.shopify.com/s/files/1/0568/5942/7015/products/MQFL3HN_A_1_560x.jpg?v=1662633980",
      price: 59999,
    },
    {
      id: 6,
      product: "Airpods Pro",
      imgurl:
        "https://cdn.shopify.com/s/files/1/0568/5942/7015/products/MQD83HN_A_1.jpg?v=1662723805",
      price: 18999,
    },
  ];
  const [cartlist, setList] = useState([]);
  const [total, setTotal] = useState(0);

  let addtocart = (product) => {
    setList([...cartlist, product]);
    setTotal(total + product.price);
  };

  let removecart = (product) => {
    let index = cartlist.findIndex((cartitem) => datalist.id === cartitem.id);
    cartlist.splice(index, 1);
    setList([...cartlist]);
    setTotal(total - product.price);
  };

  

  return (
    <>
      <div className="header">
        <h1> Apple Shopping </h1>
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                {datalist.map((card) => {
                  return (
                    <Card
                      product={card}
                      addtocart={addtocart}
                      cartlist={cartlist}
                    />
                  );
                })}
              </div>
            </div>
            <div className="col-lg-3">
              <h3>Cart:</h3>
              <Cart cartlist={cartlist} removecart={removecart} />
              <h4>Total:{total}</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
