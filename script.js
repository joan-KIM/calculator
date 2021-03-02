const numbers = document.querySelectorAll(".number");

for (const num of numbers){
    num.addEventListener("click", function(event){
        let number = document.querySelector(".screen-text").innerHTML;
        
        if(number.length === 11){
            return;
        }

        if(!Number(number)){
            document.querySelector(".screen-text").innerHTML = event.target.innerHTML;
            return;
        }

        document.querySelector(".screen-text").innerHTML = number + event.target.innerHTML;
        
    })
}