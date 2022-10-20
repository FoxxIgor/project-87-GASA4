var canvas =new fabric.Canvas("myCanvas");
var cashierObject ="";
var dummyObject ="";
var playerObject ="";

function cashier(){
    fabric.Image.fromURL("cashier.png", function(Img){
        cashierObject =Img;
        cashierObject.scaleToWidth(100);
        cashierObject.scaleToHeight(400);
        cashierObject.set({top:200, left:200});
        canvas.add(cashierObject);
    })
}
function dummy(){
    fabric.Image.fromURL("dummy.png", function(Img){
        dummyObject =Img;
        dummyObject.scaleToWidth(100);
        dummyObject.scaleToHeight(400);
        dummyObject.set({top:200, left:0});
        canvas.add(dummyObject);
    })
}
function player(){
    fabric.Image.fromURL("player.webp", function(Img){
        playerObject =Img;
        playerObject.scaleToWidth(100);
        playerObject.scaleToHeight(400);
        playerObject.set({top:200, left:500});
        canvas.add(playerObject);
    })
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    var keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed=="67"){
        cashier();
    }
    if(keypressed=="68"){
        dummy();
    }
    if(keypressed=="80"){
        player();
    }
    
}