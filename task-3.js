function convertTemp() {
  const input = document.getElementById("tempInput").value;
  const unit = document.getElementById("unitSelect").value;
  const resultArea = document.getElementById("resultArea");

  if (input === "" || isNaN(input)) {
    resultArea.textContent = "❌ Please enter a valid number.";
    return;
  }

  const temp = parseFloat(input);
  let resultHTML = "";

  if (unit === "celsius") {
    const fahrenheit = (temp * 9/5) + 32;
    const kelvin = temp + 273.15;
    resultHTML = `
      🌡️ ${temp.toFixed(2)} °C<br>
      = ${fahrenheit.toFixed(2)} °F<br>
      = ${kelvin.toFixed(2)} K
    `;
  } else if (unit === "fahrenheit") {
    const celsius = (temp - 32) * 5/9;
    const kelvin = (temp - 32) * 5/9 + 273.15;
    resultHTML = `
      🌡️ ${temp.toFixed(2)} °F<br>
      = ${celsius.toFixed(2)} °C<br>
      = ${kelvin.toFixed(2)} K
    `;
  } else if (unit === "kelvin") {
    const celsius = temp - 273.15;
    const fahrenheit = (temp - 273.15) * 9/5 + 32;
    resultHTML = `
      🌡️ ${temp.toFixed(2)} K<br>
      = ${celsius.toFixed(2)} °C<br>
      = ${fahrenheit.toFixed(2)} °F
    `;
  }

  resultArea.innerHTML = resultHTML;
}
