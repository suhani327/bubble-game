var hitrn;
var scor=0;

function bubble_maker() {
    var clutter = " ";
    for (var i = 0; i <= 239; i++) {
        clutter += `<div class="bubble">${grh}</div>`
        document.querySelector("#btmpanal").innerHTML = clutter;
        var grh = Math.floor(Math.random() * 10);
        document.querySelector(".bubble").textContent = grh
    }
}
function timer() {
    var a = 60;
    setInterval(function () {
        if (a > 0) {
            a--;
            document.querySelector("#timer").textContent = a;
        }
        else {
            clearInterval(timer);
             var btmpanal=document.querySelector("#btmpanal");
             btmpanal.innerHTML="Game ended";
            //  btmpanal.innerHTML=`<h1>game over<h1>`
             btmpanal.style.alignItems="center"
             btmpanal.style.fontSize="80px";
        }
    }, 1000)

    var btmpanal=document.querySelector("#btmpanal");
    btmpanal.addEventListener("click",function(dets){
      var clicked_number= Number(dets.target.textContent);
      console.log(clicked_number);
      if(hitrn===clicked_number){
        score();
        bubble_maker();
        hits();
      }else{
        bubble_maker();
        hits();
        
      }
      
        
    })
}
function score() {
        scor =scor+ 10;
        document.querySelector("#score").textContent = scor;
    

}
function hits() {
    var hit = document.querySelector(" #hits");
  hitrn=  hit.textContent = Math.floor(Math.random() * 10);

}

bubble_maker();
timer();
hits();