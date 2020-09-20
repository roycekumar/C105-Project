Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:2140
});
Webcam.attach("#camera");
camera=document.getElementById("camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';

    });
}
console.log("ml5 version: ",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/O18gB6EIr/model.json",modelLoaded)
function modelLoaded(){
    console.log("model loaded");
}
function download(){
link=document.getElementById("my_link");
image=document.getElementById("captured_image").src;
link.href=image;
link.click();
}