//  DOM들의 nodelist(숫자 배열이 아님)
const $numBtns = document.querySelectorAll(".number");

// number(레퍼런스)에는 값만 들어있음.
const $screen = document.querySelector(".screen-text");

for (const $numBtn of $numBtns){
    $numBtn.addEventListener("click", function(event){

        // 클릭한 시점에 화면에 있는 값
        // innerHTML 1. 해당 DOM의 내용물을 바꿀 때 2. 해당 DOM의 내용물을 가지고 무언가를 할 때
        const screenText = $screen.innerHTML;

        const value = event.target.innerHTML;

        if(screenText.length === 11){
            return;
        }

        if(!Number(screenText)){
            $screen.innerHTML = value;
            return;
        }

        $screen.innerHTML = screenText + value;
        
    })
}