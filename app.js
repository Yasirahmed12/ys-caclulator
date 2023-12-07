var inputtext = document.getElementById("inputtext")

function Setdata(text){
    inputtext.value +=text
}
function calculate(){
    inputtext.value = eval(inputtext.value)
}

function clearfunc(){
    console.log("test")
    inputtext.value = ""
}
// function Square(){
//     inputtext.value = eval(inputtext.value*inputtext.value)
// }
// function SquareRoot(){
//     inputtext.value = Math.sort(inputtext.value)
// }
// function percent(){
//     inputtext.value = eval.sort(inputtext.value)
// }
function enterData(text) {
    inputtext.value += text;
  }
  function square() {
    inputtext.value = eval(inputtext.value * inputtext.value);
  }




// let inputtext = document.getElementById("input");
// function Setdata(data) {
//   inputtext.value += text
// }
// function calculate() {
//   inputtext.value = eval(inputtext.value);
// }
// function clearfunc() {
//   inputtext.value = "";
// }
// function enterData(data) {
//     inputtext.value += text;
//   }
//   function square() {
//     inputtext.value = eval(inputtext.value * inputtext.value);
//   }