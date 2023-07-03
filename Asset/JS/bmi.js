function calculate() {
    let height = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    let convert;
    let bmicalcu;
    convert = height / 100;
    bmicalcu = weight / (convert * convert);
    let answer=bmicalcu;

    if(answer > 17 && answer < 18.5){
        document.getElementById("answer").innerHTML = "Thin ness"
        
    }else if (answer > 18.5 && answer < 25) {
      document.getElementById("answer").innerHTML = "Normal";

    }else if (answer > 25 && answer < 30) {
        document.getElementById("answer").innerHTML = "Overweight";

    }else{
        document.getElementById("answer").innerHTML = "Severe Thinness";

    }
    document.getElementById("bmianswer").innerHTML = answer;

    return false;
}