
var canvas = new fabric.Canvas("myCanvas");
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {

block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);

block_image_object.set({
top:block_y,
left:block_x
});
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82')
	{
	new_image('red dino ranger .png');
	console.log("r keyPressed");	
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image('green dino ranger.png');
		console.log("g keyPressed");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image('black dino ranger.png');
		console.log("k keyPressed");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image('pink dino ranger.png');
		console.log("p keyPressed");
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image('blue dino ranger.png');
		console.log("b keyPressed");
	}
	
}

