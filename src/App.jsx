import "./App.css";
import BarChart from "./Components/BarChart";
import DoughNutChart from "./Components/DoughNut";
import LineChart from "./Components/LineChart";
import PieChart from "./Components/PieChart";
function App() {
  return (
    <>
      <div
        style={{
          fontSize: "min(40px, 5vw)",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "min(20px, 2vw)",
          height: "min(50px, 5vw)",
          width: "100%",
        }}
      >
        Chart Implementation
      </div>
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
        <div style={{ width: "700px", height: "500px" }}>
          <PieChart />
        </div>
        <div style={{ width: "700px", height: "500px" }}>
          <DoughNutChart />
        </div>
      </div>
    </>
  );
}

export default App;
