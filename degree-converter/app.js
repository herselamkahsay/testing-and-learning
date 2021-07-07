/*function convertToF(celsius) {
    let fahrenheit = celsius *(9/5)  + 32;
    return fahrenheit;
  }
  
  convertToF(30);*/

const inputLeft = document.getElementById("input");
const inputRight = document.getElementById("output");
const selectLeft = document.getElementById("selectedInput");
const selectRight = document.getElementById("selectedOutput");
setupHandlers(inputLeft, selectLeft, inputRight, selectRight);
setupHandlers(inputRight, selectRight, inputLeft, selectLeft);

function setupHandlers(input, selectedInput, output, selectedOutput) {
  input.addEventListener("keyup", myResult);
  selectedInput.addEventListener("change", myResult);
  function myResult() {
    //output.value = input.value;
    const selectedInputValue = selectedInput.value;
    const selectedOutputValue = selectedOutput.value;
    if (selectedInputValue === "celsius" && selectedOutputValue === "fahrenheit") {
      output.value = (Number(input.value) * 1.8) + 32;
    }
    else if (selectedInputValue === "celsius" && selectedOutputValue === "Kelvin") {
      output.value = Number(input.value) + 273.15;
    }
    else if (selectedInputValue === "celsius" && selectedOutputValue === "celsius") {
      output.value = Number(input.value);
    }
    if (selectedInputValue === "fahrenheit" && selectedOutputValue === "celsius") {
      output.value = (Number(input.value) - 32) / 1.8;
    }
    else if (selectedInputValue === "fahrenheit" && selectedOutputValue === "Kelvin") {
      output.value = (Number(input.value) - 32) / 1.8 + 273.15;
    }
    else if (selectedInputValue === "fahrenheit" && selectedOutputValue === "fahrenheit") {
      output.value = Number(input.value);
    }
    if (selectedInputValue === "Kelvin" && selectedOutputValue === "celsius") {
      output.value = (Number(input.value) - 32) / 1.8;
    }
    else if (selectedInputValue === "Kelvin" && selectedOutputValue === "fahrenheit") {
      output.value = (Number(input.value) - 32) / 1.8 + 273.15;
    }
    else if (selectedInputValue === "Kelvin" && selectedOutputValue === "Kelvin") {
      output.value = Number(input.value);
    }
  }
}



