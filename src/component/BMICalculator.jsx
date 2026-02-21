import React, { useState } from "react";
import "./BMI.css";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  function calculateBMI() {
    if (weight === "" || height === "") {
      alert("Please enter both weight and height!");
      return;
    }

    let h = height / 100;
    let bmiValue = (weight / (h * h)).toFixed(2);

    setBmi(bmiValue);
  }

  const category =
    bmi < 18.5
      ? "Underweight"
      : bmi < 25
      ? "Normal Weight"
      : bmi < 30
      ? "Overweight"
      : "Obese";
  const bmiImage =
    bmi < 18.5
      ? ""
      : bmi < 25
      ? ""
      : bmi < 30
      ? ""
      : "";

  return (
    <div className="bmi-container">
      <h2>BMI Calculator</h2>

      <div className="input-box">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div className="input-box">
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmi && (
        <div className="result-box">
          <h3>Your BMI: {bmi}</h3>

          <p>
            Category: <b>{category}</b>
          </p>
          <img src={bmiImage} alt={category} className="bmi-image" />
        </div>
      )}
    </div>
  );
}
