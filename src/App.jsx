import "./App.css";
import BarChart from "./Components/BarChart";
import LineChart from "./Components/LineChart";
import PieChart from "./Components/PieChart";
function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          flexWrap: "wrap",
          margin: "auto",
        }}
      >
        <div style={{ width: "700px" }}>
          <LineChart />
        </div>
        <div style={{ width: "700px" }}>
          <BarChart />
        </div>
        <div style={{ width: "500px" }}>
          <PieChart />
        </div>
      </div>
    </>
  );
}

export default App;
