/*function convertToF(celsius) {
    let fahrenheit = celsius *(9/5)  + 32;
    return fahrenheit;
  }
  
  convertToF(30);*/
  
  const input = document.getElementById("input");
  const output = document.getElementById("output");
  const selectedInput = document.getElementById("selectedInput");
  const selectedOutput = document.getElementById("selectedOutput");
  var selectedInputValue,selectedOutputValue;

    input.addEventListener("keyup",myResult);
    selectedInput.addEventListener("change",myResult);
    selectedOutput.addEventListener("change",myResult);
    selectedInputValue  = selectedInput.value;
    selectedOutputValue = selectedOutput.value;
    function myResult () {
      //output.value = input.value;
      selectedInputValue  = selectedInput.value;
      selectedOutputValue = selectedOutput.value;
     if (selectedInputValue === "celsius" && selectedOutputValue === "fahrenheit") {
       selectedOutputValue = Number(selectedInput.value*1.8) + 32;
     }
     else if (selectedInputValue === "celsius" && selectedOutputValue === "kelvin") {
      selectedOutputValue = Number(selectedInput.value + 273.15);
    }
    else if (selectedInputValue === "celsius" && selectedOutputValue === "celsius") {
      selectedOutputValue = selectedInput.value;
    }
    if (selectedInputValue === "fahrenheit" && selectedOutputValue === "celsius") {
      selectedOutputValue = (input.value*1.8) + 32;
    }
    else if (selectedInputValue === "fahrenheit" && selectedOutputValue === "kelvin") {
     selectedOutputValue = input.value + 273.15;
   }
   else if (selectedInputValue === "fahrenheit" && selectedOutputValue === "fahrenheit") {
     selectedOutputValue = input.value;
   }
    }
 


  