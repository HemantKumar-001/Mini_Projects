let btns = document.querySelectorAll(".icon");

for(let btn of btns){
    btn.addEventListener("click", function(){
        btn.classList.toggle("iconred");
    })
}