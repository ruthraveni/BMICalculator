import { useState } from "react";
import { useNavigate } from "react-router-dom";
import"./BMI.css";

function BMICalculator() {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const navigate = useNavigate();

  const calculateBMI = () => {
    if (!name || !weight || !height) {
      alert("Enter name, weight and height");
      return;
    }

    const h = height / 100;
    const result = (weight / (h * h)).toFixed(2);

    let status = "";

    if (result < 18.5) status = "Underweight";
    else if (result < 24.9) status = "Normal";
    else if (result < 29.9) status = "Overweight";
    else status = "Obese";

    navigate("/result", {
      state: { name, bmi: result, status }
    });
  };

  return (
    <div className="container">
      <div className="box">
        <h2>BMI Calculator</h2>

        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <button onClick={calculateBMI}>Calculate</button>
      </div>
    </div>
  );
}

export default BMICalculator;