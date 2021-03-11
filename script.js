//  DOM들의 nodelist(숫자 배열이 아님)
const $numBtns = document.querySelectorAll(".number");

// number(레퍼런스)에는 값만 들어있음.
const $screen = document.querySelector(".screen-text");

const INTEGER = "integer";
const DECIMAL = "decimal";
const CLICK = "click";
let status = INTEGER;

for (const $numBtn of $numBtns){
    $numBtn.addEventListener(CLICK, function(event){

        // 클릭한 시점에 화면에 있는 값
        // innerHTML 1. 해당 DOM의 내용물을 바꿀 때 2. 해당 DOM의 내용물을 가지고 무언가를 할 때
        const result = $screen.innerHTML;
        const value = Number(event.target.innerHTML);

        if(result.length === 11){
            return; 
        }

        if(status === DECIMAL){
            $screen.innerHTML = Number(result + value);
            return;
        }   
       
        if(Number(result) < 0){
            $screen.innerHTML = Number(result) * 10 - value;
        }else{
            $screen.innerHTML = Number(result) * 10 + value;
        }
        
    })
}

const $acBtn = document.querySelector(".all-clear");

$acBtn.addEventListener(CLICK, function(event){
    $screen.innerHTML = 0;
    status = INTEGER;
})

const $deleteBtn = document.querySelector(".delete");

$deleteBtn.addEventListener(CLICK, function(event){
    const result = $screen.innerHTML;

    if(Number(result) < 10 && Number(result) > -10 && Number.isInteger(Number(result))){
        $screen.innerHTML = 0;
        return;
    }

    if(result.slice(-1) === '.'){
        status = INTEGER;
    }
    
    $screen.innerHTML = result.slice(0, -1);
})

const $signBtn = document.querySelector(".sign");

$signBtn.addEventListener(CLICK, function(event){
    const result = Number($screen.innerHTML);

    $screen.innerHTML = -result;
})

const $decimalBtn = document.querySelector(".decimal");

$decimalBtn.addEventListener(CLICK, function(event){
    if(status === DECIMAL){
        return;
    }

    const result = $screen.innerHTML;

    $screen.innerHTML = result + ".";
    status = DECIMAL;
})
