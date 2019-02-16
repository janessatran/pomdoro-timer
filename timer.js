var intervalCount;
var minutesDisplay = document.getElementById('minutes');
console.log(minutesDisplay);
var secondsDisplay = document.getElementById('seconds');
var pomdoro_duration = 25*60;
function startTimer(duration) {
    console.log('timer activated!')
    var timer = duration, minutes, seconds;
    // update the timer display every second (1000)
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        // add padding in case minutes or seconds < 10
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10? "0" + seconds : seconds;
        minutesDisplay.textContent = minutes;
        secondsDisplay.textContent = seconds;
        console.log(minutesDisplay.textContent);

        // decrease timer by one second
        if(timer-- < 0){
            alert('Time for a break!');
            intervalCount ++;
            timer = duration;
        }
    }, 1000);
}


function play() {
    
}

function pause() {

}

function stop() {

}

function reset() {
    
}
// to test that timer works
window.onload = function() { startTimer(pomdoro_duration) };