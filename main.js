var Canvas = new fabric.Canvas('myCanvas');
var Block_width = 30;
var Block_height = 30;
var Player_X = 20;
var Player_Y = 10;
var Player_object = "";

function Player_Update() {
    fabric.Image.fromURL("Captain_Marvel.png", function(Img) {
        Player_object = Img;
        Player_object.scaleToWidth(45);
        Player_object.scaleToHeight(90);
        Player_object.set({
            top: Player_Y,
            left: Player_X
        });
        Canvas.add(Player_object);
    });
}

function Block_add(newImage) {
    fabric.Image.fromURL(newImage, function(Img) {
        Block_object = Img;
        Block_object.scaleToWidth(Block_width);
        Block_object.scaleToHeight(Block_height);
        Block_object.set({ top: Player_Y, left: Player_X });
        canvas.add(Block_object);
    });
}

window.addEventListener("keydown", MyKeydown);

function MyKeydown(e) {
    var Key = e.KeyCode;
    console.log(Key);
    if (Key == "80" && e.shiftKey == true) {
        Block_width = Block_width + 5;
        Block_height = Block_height + 5;
        console.log("p is pressed")
        document.getElementById("Width").innerHTML = Block_width;
        document.getElementById("Height").innerHTML = Block_height;
    }
    if (Key == "77" && e.shiftKey == true) {
        Block_height = Block_height - 5;
        Block_width = Block_width - 5;
        console.log("m is pressed")
        document.getElementById("Width").innerHTML = Block_width;
        document.getElementById("Height").innerHTML = Block_height;
    }
    if (Key == "70") {
        Block_add("Ultimate_Avengar_Face.png");
        console.log("f is pressed")
    }
    if (Key == "66") {
        Block_add("Ultimate_Avengar_Body.png");
        console.log("b is pressed")
    }
    if (Key == "76") {
        Block_add("Ultimate_Avengar_Legs.png");
        console.log("l is pressed")
    }
    if (Key == "66") {
        Block_add("Ultimate_Avengar_Righthand.png");
        console.log("R is pressed")
    }
    if (Key == "66") {
        Block_add("Ultimate_Avengar_Lefthand.png");
        console.log("h is pressed")
    }

    function up() {
        if (Player_Y > 10) {
            Player_Y = Player_Y - Block_width;
            Canvas.remove(Player_object);
            Player_add()
        }
    }

    function down() {
        if (Player_Y < 650) {
            Player_Y = Player_Y + Block_width;
            Canvas.remove(Player_object);
            Player_add()
        }
    }

    function left() {
        if (Player_X > 0) {
            Player_X = Player_X - Block_width;
            Canvas.remove(Player_object);
            Player_add()
        }
    }

    function right() {
        if (Player_X < 985) {
            Player_X = Player_X + Block_width;
            Canvas.remove(Player_object);
            Player_add()
        }
    }
}
