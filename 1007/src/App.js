import "./App.css";
import TrendContainer from "./container/TrendContainer";
import UpcomingContainer from "./container/UpcomingContainer";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%", display: "inline-block" }}>
        <TrendContainer />
      </div>
      <div style={{ width: "50%", display: "inline-block" }}>
        <UpcomingContainer />
      </div>
    </div>
  );
}

export default App;