import "./Home.scss";
import Header from "../../header/Header";
import Sales from "../../sales/Sales";
import OrderDetails from "../../orders/OrderDetails";

export default function Home() {
  return (
    <div className="home-container">
      <div className="top-home">
        <div className="header">
          <Header />
        </div>
        <div className="top-cards">
          <Sales />
        </div>
      </div>
      <div className="sub-heading">Channel Financial Breakdown</div>
      <div className="bottom-home">
        <OrderDetails />
      </div>
    </div>
  );
}
