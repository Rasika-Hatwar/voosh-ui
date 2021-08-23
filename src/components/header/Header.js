import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="header-title">Voosh VGN</div>
      <button>This Month</button>
      <button>
        {" "}
        <span className="log-out-text">Log Out</span>
      </button>
    </div>
  );
}
