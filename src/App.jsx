import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BMICalculator from "./calculator/BMICalculator";
import ResultPage from "./calculator/ResultPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BMICalculator />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
