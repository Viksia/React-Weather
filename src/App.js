import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="London" />
    </div>
  );
}
