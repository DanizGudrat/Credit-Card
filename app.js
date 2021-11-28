let btn = document.getElementById("btn")
let inp_num1 = document.getElementById("inp-num1")
let inp_num2 = document.getElementById("inp-num2")
let inp_num3 = document.getElementById("inp-num3")
let inp_num4 = document.getElementById("inp-num4");
let ad = document.getElementById("name");
let inp_mont = document.getElementById("inp-month")
let inp_year = document.getElementById("inp-year");
let cvv = document.getElementById("cvv");




// card
let card_inp_num1 = document.getElementById("card_inp_num1");
let card_inp_num2 = document.getElementById("card_inp_num2");
let card_inp_num3 = document.getElementById("card_inp_num3");
let card_inp_num4 = document.getElementById("card_inp_num4");
let card_name = document.getElementById("card-name");
let card_date = document.getElementById("card-date");
let card_cvv = document.getElementById("card-cvv");
let card = document.getElementById("card");



cvv.addEventListener("keyup", function () {
    
    card_cvv.innerText="cvv-"+this.value
})


cvv.addEventListener("mouseenter", function () {
    card.classList.add("rot")
})
cvv.addEventListener("mouseleave", function () {
    card.classList.remove("rot")
})


inp_mont.addEventListener("change", () => {
    card_date.innerText = inp_mont.value + "/"
    let y=inp_mont.value+"/"
})

inp_year.addEventListener("change", ()=>{
    card_date.innerText= inp_mont.value + "/"+inp_year.value
})



inp_num1.addEventListener("keyup", function(){
    
       card_inp_num1.innerText = this.value;
    if (this.value.length > 3){
          inp_num2.focus();
        
    } 
})

inp_num2.addEventListener("keyup", function(){
    
       card_inp_num2.innerText = this.value;
    if (this.value.length > 3){
          inp_num3.focus();
        
    } 
})

inp_num3.addEventListener("keyup", function(){
    
       card_inp_num3.innerText = this.value;
    if (this.value.length > 3){
          inp_num4.focus();
        
    } 
})

inp_num4.addEventListener("keyup", function(){
    
    card_inp_num4.innerText = this.value;
    
})

ad.addEventListener("keyup", function () {
    
    card_name.innerText=ad.value
})

const Button = document.querySelector('button');
const refreshPage = () => {
    location.reload();
}
Button.addEventListener('click', refreshPage)


