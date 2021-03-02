const numbers = document.querySelectorAll(".number");

for (const num of numbers){
    num.addEventListener("click", function(event){
        let number = document.querySelector(".screen-text").innerHTML;
        
        if(!Number(number)){
            document.querySelector(".screen-text").innerHTML = event.target.innerHTML;
        }else{
            document.querySelector(".screen-text").innerHTML = number + event.target.innerHTML;
        }
        
    })
}