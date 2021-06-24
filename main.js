var canvas=new fabric.Canvas("myCanvas");
var block_image_width=30;
var block_image_height=30;
var player_y=15;
var player_x=15;
var player_object="";
var block_object="";
function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}
function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}
window.addEventListener("keydown",key_down);
function key_down(e)
{
keypressed=e.keyCode;
console.log(keypressed);
if(keypressed==true && keypressed =="80");
{
console.log("when p and shift key clicked together");
block_image_width=block_image_width+10;
block_image_height=block_image_height+10;
console.log(block_image_width);
console.log(block_image_height);
document.getElementById("width").innerHTML=block_image_width;
document.getElementById("height").innerHTML=block_image_height;

}
if(keypressed==true && keypressed =="77");
{
console.log("when m and shift key clicked together");
block_image_width=block_image_width - 10;
block_image_height=block_image_height - 10;
document.getElementById("width").innerHTML=block_image_width;
document.getElementById("height").innerHTML=block_image_height;

}
if(keypressed=="38")
{
	up();
	console.log("up is pressed");
}

if(keypressed=="40")
{
	down();
	console.log("down is pressed");
}
if(keypressed=="37")
{
	right();
	console.log("right is pressed");
}
if(keypressed=="39")
{
    left();
	console.log("left is pressed");
}

if(keypressed=="87")
{
	new_image("wall.jpg")
	console.log("w is pressed");
}

if(keypressed=="82")
{
	new_image("roof.jpg")
	console.log("r is pressed");
}
if(keypressed=="84")
{
	new_image("trunk.jpg")
	console.log("t is pressed");
}

if(keypressed=="85")
{
	new_image("unique.png")
	console.log("u is pressed");
}

if(keypressed=="89")
{
	new_image("yellow_wall.png")
	console.log("y is pressed");
}

if(keypressed=="76")
{
	new_image("light_green.png")
	console.log("l is pressed");
}

if(keypressed=="71")
{
	new_image("dark_green.png")
	console.log("g is pressed");
}

if(keypressed=="67")
{
	new_image("cloud.jpg")
	console.log("c is pressed");
}

if(keypressed=="66")
{
	new_image("ground.png")
	console.log("b is pressed");
}
}

function up()
{
	if(player_y>=0){
		player_y=player_y - block_image_height;
		console.log("heigth="+block_image_height);
		canvas.remove(player_object);
		player_update();
	}
}

function down()
{
	if(player_y<=500){
		player_y=player_y + block_image_height;
		console.log("heigth="+block_image_height);
		canvas.remove(player_object);
		player_update();
	}
}

function right()
{
	if(player_x<=900){
		player_x=player_x + block_image_width;
		console.log("heigth="+block_image_width);
		canvas.remove(player_object);
		player_update();
	}
}

function left()
{
	if(player_x>=0){
		player_x=player_x - block_image_width;
		console.log("heigth="+block_image_width);
		canvas.remove(player_object);
		player_update();
	}
}

