function beforesubmit(){
let outputddate = document.querySelector(".outputdate");
let inputdate = document.querySelector(".inputdate");
console.log(inputdate.value);

let formatedDate = new Date(inputdate.value).toLocaleDateString("en-US");
outputddate.value = formatedDate;

}