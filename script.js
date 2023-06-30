function calc() {
  //Get radio units
  const heightInput = document.getElementById("heightInput").value;
  const heightRadios = document.getElementsByName("length");
  const heightUnit = heightRadios[0].checked ? "m" : "ft";

  const weightInput = document.getElementById("weightInput").value;
  const weightRadios = document.getElementsByName("mass");
  const weightUnit = weightRadios[0].checked ? "kg" : "lbs";

  let height, weight;
  if (heightUnit == ft) {
    height = heightInput * 0.305;
  } else {
    height = heightInput;
  }

  if (weightUnit == lbs) {
    weight = weightInput * 0.454;
  } else {
    weight = weightInput;
  }

  let result = Math.floor(weight / (height * height));
  let output = document.getElementById("output");
  output.innerHTML = `your bmi is ${result}`;
  // if (result <= 18.5) {
  //   output.innerHTML = `Your BMI is ${result} - Underweight`;
  // } else if ((result) => 18.5 && result <= 24.5) {
  //   output.innerHTML = `Your BMI is ${result} - Healthy`;
  // } else {
  //   output.innerHTML = `Your BMI is ${result} - Obese`;
  // }
}

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
