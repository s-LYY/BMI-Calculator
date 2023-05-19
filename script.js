// function sum() {

//     var total = Number(fst) + Number(snd);
//     document.getElementById('ass').innerHTML = `The total is ${total}`;
// }

const calc = () => {
  var fst = document.getElementById("fst").value;
  var snd = document.getElementById("snd").value;
  result = Math.floor(fst / snd / snd);
  let ass = document.getElementById("ass");
  // myform.result.value = result;
  if (result <= 18.5) {
    ass.innerHTML = `Your BMI is ${result} - Underweight`;
  } else if ((result) => 18.5 && result <= 24.5) {
    ass.innerHTML = `Your BMI is ${result} - Healthy`;
  } else {
    ass.innerHTML = `Your BMI is ${result} - Obese`;
  }
};

// //16 ounces = 1 pound
//1 pound = 0.454 kilogram
//12 inches = 1 foot
