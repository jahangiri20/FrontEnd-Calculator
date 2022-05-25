//watch
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.querySelector(".times").innerHTML = time ;


//calculator
let display = document.querySelector('.display');
let btnClear = document.querySelector('.btn__clear');
let btnBackspace = document.querySelector('.btn__backspace');
let btnDiv = document.querySelector('.btn__div');
let btnMul = document.querySelector('.btn__mul');
let btnMinus = document.querySelector('.btn__minus');
let btnPlus = document.querySelector('.btn__plus');
let btnEquls = document.querySelector('.btn__equls');
let btnPoint = document.querySelector('.btn__point');
let btnPn = document.querySelector('.btn__pn');
let btnPercent = document.querySelector('.btn__percent');

let btnNumbers = document.querySelectorAll('.btn__number');

let point = false;
let number1 , number2 , result ;
let operator= "";
let setAdd = false;
 

btnNumbers.forEach((item)=>{
    item.addEventListener('click' , (e)=>{
        if (display.textContent == "0") {
            display.textContent = e.target.textContent;  
        } else {
            display.textContent += e.target.textContent;  
        }   
    })
})




btnPoint.addEventListener('click', (e)=>{
    if (point == false ) {
        display.textContent += ".";
        point = true;  
    }   
})


btnClear.addEventListener('click', (e)=>{
    display.textContent= "0";
    point= false;
})


btnBackspace.addEventListener('click' , (e)=>{
    let len = display.textContent.length;
    let last = display.textContent.substring(len -1 , len)
    if (len>1) {
        point = false;

        display.textContent = display.textContent.substring( 0, len-1);
    }else{
        display.textContent = "0"
    }
})


btnPlus.addEventListener('click' , (e)=>{
   number1 = Number(display.textContent );
   display.textContent= "0";
   operator = "+";
    
})
btnMinus.addEventListener('click' , (e)=>{
    number1 = Number(display.textContent );
    display.textContent= "0";
    operator = "-";
     
 })
 btnMul.addEventListener('click' , (e)=>{
    number1 = Number(display.textContent );
    display.textContent= "0";
    operator = "*";
     
 })
 btnDiv.addEventListener('click' , (e)=>{
    number1 = Number(display.textContent );
    display.textContent= "0";
    operator = "/";
     
 })
 btnPercent.addEventListener('click' , (e)=>{
    number2 = Number(display.textContent );
    display.textContent= "0";
    operator = " % ";
     
 })

btnEquls.addEventListener('click' , (e)=>{
    if (setAdd == false) {
    number2 = Number(display.textContent);
    }else{
    number1 = Number(display.textContent);
    setAdd = true;
    }
    switch (operator) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
        case "%": 
            result = number1 / number2 ;
    }    
    display.textContent = result; 
})

btnPn.addEventListener('click', (e)=>{
    display.textContent = display.textContent * -1;
});


let show = document.querySelector('.show');

show.innerHTML = display.textContent;



console.log(btnNumbers);


 

