import "./OrderDetails.scss";
import GraphImage from "../../../src/assets/graph.svg";

export default function OrderDetails() {
  return (
    <div className="order-details">
      <div className="top-order">
        <div className="order-card">
          <div className="order-title">Delivered Order(s)</div>
          <div className="order-amount">465</div>
          <div className="sub-title">Total Orders Delivered</div>
        </div>
        <div className="order-card">
          <div className="order-title">Cancelled Order(s)</div>
          <div className="order-amount">1</div>
          <div className="sub-title">Total Orders Cancelled</div>
        </div>
      </div>
      <div className="top-order">
        <div className="order-card">
          <div className="order-title">Total Sales</div>
          <div className="order-amount">465</div>
          <div className="sub-title">Total Orders Delivered</div>
        </div>
        <div className="order-card">
          <div className="order-title">Net Payout</div>
          <div className="order-amount">1</div>
          <div className="sub-title">Total Orders Cancelled</div>
        </div>
      </div>
      <div className="bottom-order">
        <div className="sub-text">Deductions</div>
        <div>
          <img
            className="graph"
            src={GraphImage}
            alt="graph-icon"
            width="300"
            height="300"
          />
        </div>

        <div className="deduction-details">
          <div className="deduction-title">
            <li>Total commissions incl taxes</li>
            <li>Total ad expenses</li>
            <li>Tax deductions</li>
            <li>Merchant cancel charges</li>
            <li>Misc charges</li>
          </div>
          <div className="price">
            <li>₹ 23,036.50</li>
            <li>₹ 4,146.74</li>
            <li>₹ 921.54</li>
            <li>₹ 920.23</li>
            <li>₹ 0</li>
          </div>
        </div>
      </div>

      {/* <Card/> */}
    </div>
  );
}
