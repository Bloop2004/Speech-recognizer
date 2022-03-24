var recognise = new webkitSpeechRecognition;
function Start(){
    document.getElementById("textbox").innerHTML = "";
    recognise.start();
}
recognise.onresult = function(event){
console.log(event);
var speech_converter = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML = speech_converter;
speech_converter.toLowerCase();
if(speech_converter == "take my selfie"){
    speak();
}
}
function speak(){
    var parent = window.speechSynthesis;
    var speaker_data = "Taking your selfie in 5 seconds";
    var child = new SpeechSynthesisUtterance(speaker_data);
    parent.speak(child);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
    },5000);
}
camera = document.getElementById("camera");
Webcam.set({
    height:250,
    width:360,
    image_format : 'png',
    png_quality:90
});
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("selfie_displayer").innerHTML = "<img id='selfie' src='"+data_uri+"'>";
    });
}
