document.getElementById("increment").addEventListener("click", increment);
document.getElementById("decrement").addEventListener("click", decrement);
document.getElementById("reset").addEventListener("click", revert);
document.getElementById("start").addEventListener("click", autoProgress);
document.getElementById("stop").addEventListener("click", stopProgress);

function getProgress(){
	var value = document.getElementById("progress-bar").getAttribute("aria-valuenow");
	if(value >= 100){
		alert("Progress complete!");
		}
	else{
		return value;
	}
}

function setProgress(value){
	document.getElementById("progress-bar").setAttribute("aria-valuenow",value);
	document.getElementById("progress-bar").setAttribute("style", "width: "+value+"%;");
	document.getElementById("progress-bar").innerHTML = value+"%";
	
}

function increment(){
	var value = getProgress();
	if(value < 100){
		value++;	
		setProgress(value)
	}	
	
}

function decrement(){
	var value = getProgress();
	if(value < 100 && value > 0){
		value--;	
		setProgress(value)
	}
}

function revert(){
	setProgress(0);
}

var interval;


function autoProgress() {

	var elem = document.getElementById("progress-bar"); 
	var width = document.getElementById("progress-bar").getAttribute("aria-valuenow");
	interval = setInterval(frame, 1000);
	function frame() {
    if (width < 100) {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1 + '%';
    }
  }	
}

function stopProgress() {
	   clearInterval(interval);
  }
