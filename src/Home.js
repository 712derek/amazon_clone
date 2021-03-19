import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images.unsplash.com/photo-1512446733611-9099a758e5e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3000&q=80"
        alt="background image"
      />
      {/* productid, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="12321314"
          title="Haruki Murakami: Kafka on the Shore"
          price={12.29}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/3190fsfp48L._SX321_BO1,204,203,200_.jpg"
        />
        <Product
          id="26845931"
          title="Apple iPad mini (7,9‑inch, Wi-Fi, 64 GB) - Spacegrey"
          price={399.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71Ha06XS-VL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="78654328"
          title="Polar Vantage M All-round Multisport Watch with GPS Heart Rate Monitor"
          price={189.2}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/61hxb3WKV9L._AC_SL1080_.jpg"
        />
        <Product
          id="59823641"
          title="Makita DLX2221JX2 Battery Impact Screwdriver (2 Battery/Charger, 18 V)"
          price={314.59}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51vTXBsNnqL._AC_.jpg"
        />
        <Product
          id="54778166"
          title="Shure SRH1540-BK black"
          price={490.89}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81qWtVX49UL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="78958694"
          title="ADAM A5X Professional Active Monitor Speaker"
          price={459.52}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71LSMEhWrBL._AC_SL1363_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
