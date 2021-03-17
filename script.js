const $screen = document.querySelector(".screen-text");
const $btnContainer = document.querySelector(".button-container");

$btnContainer.addEventListener(CLICK, function(event){
    const {target} = event; 
    
    if(target.tagName === "DIV") return;

    // 버블링(클릭한 요소의 상위 방향으로 가장 가까운 BUTTON을 찾은후에 실행함)
    // const $target = target.closest("button");
    let $target = target;

    while($target.tagName !== "BUTTON"){
        $target = $target.parentNode;
    }
    
    const action = $target.dataset.action;
    const value = Number($target.innerHTML);
    
    actionHandler(action, value);
})


