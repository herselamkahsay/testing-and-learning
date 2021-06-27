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
       output.value = Number(input.value*1.8) + 32;
     }
     else if (selectedInputValue === "celsius" && selectedOutputValue === "Kelvin") {
      output.value = Number(input.value + 273.15);
    }
    else if (selectedInputValue === "celsius" && selectedOutputValue === "celsius") {
      output.value = input.value;
    }
    if (selectedInputValue === "fahrenheit" && selectedOutputValue === "celsius") {
      output.value = (input.value*1.8) + 32;
    }
    else if (selectedInputValue === "fahrenheit" && selectedOutputValue === "Kelvin") {
     selectedOutputValue = input.value + 273.15;
   }
   else if (selectedInputValue === "fahrenheit" && selectedOutputValue === "fahrenheit") {
     selectedOutputValue = input.value;
   }
    }
 


  