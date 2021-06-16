Webcam.set({

    width:350,
    height:250,
    image_quality:'png',
    png_quality:100,
})

Webcam.attach("#camera")

function picture(){

    Webcam.snap(function (take_picture){

    document.getElementById("result").innerHTML = `<img id=camera src=${take_picture}>`
})

}

console.log("ml5.version", ml5.version)
var storage = ml5.imageClssifier("https://teachablemachine.withgoogle.com/models/sQacGPFOT/model.json",modelLoaded)

function modelLoaded(){

    console.log("Model Loaded Sucessfuly!")
}


function speak(){

    var synth = window.speechSynthesis
    pre1_data = "The First Prediction Is"+pre1
    pre2_data = "And The Second Prediction Is"+pre2
    utterThis = new SpeechSynthesisUtterance(pre1_data,pre2_data)
    synth.speak(utterThis)
}