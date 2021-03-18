const CONTAINER_CLASS = ".button-container";
const $btnContainer = document.querySelector(CONTAINER_CLASS);

$btnContainer.addEventListener(CLICK, function(event){
    const {target} = event;
    
    if(target.className === CONTAINER_CLASS) return;

    // 버블링(클릭한 요소의 상위 방향으로 가장 가까운 BUTTON을 찾은후에 실행함)
    const $target = target.closest("button");
    
    const action = $target.dataset.action;
    const value = Number($target.textContent);
    
    actionHandler(action, value);
});
