function calc() {
  //Get radio units
  let heightInput = document.getElementById("heightInput").value;
  let weightInput = document.getElementById("weightInput").value;
  let pound = document.getElementById("lbs");
  let ft = document.getElementById("ft");

  let height, weight;
  if (ft.checked) {
    height = heightInput / 0.305;
  } else {
    height = heightInput;
  }

  if (pound.checked) {
    weight = weightInput / 0.454;
  } else {
    weight = weightInput;
  }

  let result = Math.floor(weight / (height * height));
  let output = document.getElementById("output");
  // output.innerHTML = `Your BMI is ${result}`;
  if (result <= 18.5) {
    output.innerHTML = `Your BMI is ${result} - Underweight`;
  } else if ((result) => 18.5 && result <= 24.5) {
    output.innerHTML = `Your BMI is ${result} - Healthy`;
  } else {
    output.innerHTML = `Your BMI is ${result} - Obese`;
  }
}




//CUT AND PASTE
// let heightInput = document.getElementById("heightInput").value;
// let heightRadios = document.getElementsByName("length");
// let heightUnit = heightRadios[0].checked ? "m" : "ft";

// let weightInput = document.getElementById("weightInput").value;
// let weightRadios = document.getElementsByName("mass");
// let weightUnit = weightRadios[0].checked ? "kg" : "lbs";

//FIRST TEST

// const calc = () => {
//   var fst = document.getElementById("fst").value;
//   var snd = document.getElementById("snd").value;
//   result = Math.floor(fst / (snd * snd));
//   let ass = document.getElementById("sumbtn");
//   // myform.result.value = result;
//   if (result <= 18.5) {
//     ass.innerHTML = `Your BMI is ${result} - Underweight`;
//   } else if ((result) => 18.5 && result <= 24.5) {
//     ass.innerHTML = `Your BMI is ${result} - Healthy`;
//   } else {
//     ass.innerHTML = `Your BMI is ${result} - Obese`;
//   }
// };

// function kilogramToPound(params) {
//   return fst / 0.454;
// }
// function metresToFt() {
//   return snd / 0.305;
// }
// //16 ounces = 1 pound
//1 pound = 0.454 kilogram
//12 inches = 1 foot
//1 foot = 0.3048 metres
