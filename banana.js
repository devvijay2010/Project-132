image1 = "";
status = "";

function preload()
{
    image1 = loadImage("banana.jpg");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    cocossd = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelloaded()
{
    console.log("Model Is Loaded!");
    status = true;
    cocossd.detect(image1, gotResults);
}

function gotResults(error, results)
{
    if(results == error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
    }
}



function draw()
{
    image(image1, 0, 0, 640, 420);
    fill("#FF0000");
    text("Banana", 110, 75);
    noFill();
    stroke("#FF0000");
    rect(100, 60, 450, 310);
}