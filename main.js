function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  clssifier = ml5.imageClassifier('MobileNet', modelLoaded);
}

function modelLoaded(){

  console.log('ModelLoaded!');
}

function draw(){

image(video, 0, 0, 300, 300);
classifier.classify(video,gotResult);
}

var prevoius_result = '';

function gotResult(error,result){

if(error){
  console.error(error); 

} else {

if ((  rseults[0].confidence > 0.5  ) && (  prevoius_results != results[0].label)){

console.log(results);
prevoius_results = results[0].label;
var synth = window.speechSynthesis;
speak_data = 'object detected is - '+ results[0].label;
var utterThis =  new speechSynthesisUttrance(speak_data);
synth_speak = utterThis;


document.getElementById("result_object_name").innerHTML= results[0],label;

document.getElementById("result_object_accuracy").innerHTML= results[0].confidence.toFixed(3);
}
}
}

