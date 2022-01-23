var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
var player_object = "";

function new_Image()
{
	   fabric.Image.fromURL("BirthdayImage.jpg", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(900);
        player_object.scaleToHeight(650);
        
        player_object.set({
            top:0, left: 0
        });
        canvas.add(player_object);
    });
	
}

function Surprise(){
    x.play();
}
