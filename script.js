

const calc = () => {
    var fst = myform.fst.value;
    var snd = myform.snd.value;
    result = fst / snd / snd;
    // myform.result.value = result;  
    if (result <= 18.5) {
        myform.result.value = `${result} -Underweight`;
    } else if (result => 18.5 && result <= 24.5) {
        myform.result.value = `${result} - Healthy`;
    }
    else {
        myform.result.value = "Obese"
    }
};
