const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;


let painting = false;

function stopPainting(event){
    painting = false;
}

function startPainting(){
painting = true;
}
 
function onMouseMove(event){
    const x = event.offsetX;  
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    }else{
        ctx.lineTo(x, y);
        ctx.stroke() //선 시작좌표(moveTo xy)에서 선 끝좌표(lineTo xy)까지 그리기
    }
}//offset canvas 내 마우스 위치 알려주는 것

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup",   stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
}