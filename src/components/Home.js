import React from "react";
import Header from "./Header";
import Homepage from "./Homepage";
import Checkout from "./Checkout";
import { cardData } from "../constants/constants";
const Home = (props) => {
  const { addToCartHandler, removeToCartHandler } = props;
  const { counts } = props.counts.cardItems;
  console.log("props", counts);
  return (
    <div>
      <Header />
      <Homepage />
      <Checkout />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cardData.map((item) => (
          <div className="col">
            <div className="card">
              <img src={item.src} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">price: {item.price}</p>
                {counts[item.title] > 0 && (
                  <>
                    <p className="card-text">Total: {counts[item.title]}</p>
                    <p className="card-text">
                      Cost: INR {item.price * counts[item.title]}
                    </p>
                  </>
                )}
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() =>
                    addToCartHandler({
                      name: item.title
                    })
                  }
                >
                  +
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removeToCartHandler({ name: item.title })}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
