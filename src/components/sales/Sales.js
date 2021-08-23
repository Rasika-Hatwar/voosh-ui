import "./Sales.scss";
import Arrow from "../../assets/Vector.svg";
export default function Sales() {
  return (
    <div className="sales">
      <div className="top-sales">
        <div className="card">
          <div className="total-sales">Total Sales</div>
          <div className="amount">₹1,03,847.68</div>
          <div className="sub-title">Total sales inclusive of taxes</div>
          <div className="know-more">
            <span>Know More</span>
            <img src={Arrow} alt="arrow-icon" />
          </div>
        </div>
        <div className="card">
          <div className="total-sales">Deductions</div>
          <div className="amount">₹31,183.37</div>
          <div className="sub-title">Total sales inclusive of taxes</div>
          <div className="know-more">
            <span>Know More</span>
            <img src={Arrow} alt="arrow-icon" />
          </div>
        </div>
      </div>
      <div className="bottom-sales">
        <div className="card">
          <div>Total Payout</div>
          <div>₹1,03,847.68</div>
          <div className="know-more">
            <div>Calculated for total sales after deductions</div>
            <div>
              <span>Know More</span>
              <img src={Arrow} alt="arrow-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
