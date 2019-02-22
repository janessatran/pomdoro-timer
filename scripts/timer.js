

function startTimer() {
    intervalId = setInterval(updateTimer, 1000);
}

function updateTimer(stop=false) {
    // second param specifies numeral system
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    // add padding in case minutes or seconds < 10
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10? "0" + seconds : seconds;
    minutesDisplay.textContent = minutes;
    secondsDisplay.textContent = seconds;
    if (!stop ) {
        // decrease timer by one second
        if(timer-- < 0){
            intervalCount ++;
            sound.play();
            sound.play();
            sound.play();
            if (modeDisplay.textContent == 'Work Session') modeDisplay.textContent = 'Break Session'
            else modeDisplay.textContent = 'Work Session'
            minutesDisplay.textContent = '00';
            secondsDisplay.textContent = '00';
            setTime();
        }
    }
    else {
        clearInterval(intervalId);
    }
}

function play() {
    if (intervalCount == -1) {
        setTime();
        intervalCount = 0;
        startTimer();
    }
    else {
        startTimer();
    timerRunning = true;
}

function pause() {
    updateTimer(stop=true)
}

function reset() {
    console.log('resetting timer!')
    minutes = 25;
    seconds = 0;
    setTime();
    pause()
}
function setTime() {
    if (modeDisplay.textContent == 'Work Session') {
        minutes = workMinutesSetting.textContent;
        duration = minutes*60;
    }
    else {
        minutes = breakMinutesSetting.textContent;
        duration = minutes*60;
    }
    timer = duration, minutes, seconds;
}


var intervalCount;
var workMinutesSetting = document.getElementById('work-minutes');
var breakMinutesSetting = document.getElementById('break-minutes');
var modeDisplay = document.getElementById('mode');
var minutesDisplay = document.getElementById('minutes');
var secondsDisplay = document.getElementById('seconds');
var timer; 
var minutes; 
var seconds = secondsDisplay.textContent;;
var intervalId;
var intervalCount = -1;
var timerRunning = false;
let sound = document.getElementById('bell-sound');

// add event listeners for play button, 
var playButton = document.getElementById('play');
if (playButton.addEventListener) {
    playButton.addEventListener('click', function() {
        if(timerRunning == false) play();
    }, false);
}
//IE8 support 
else { 
    playButton.attachEvent('onclick', function () {
        if(timerRunning == false) play();
    });
}  

// add event listeners for pause button
var pauseButton = document.getElementById('pause')
if (pauseButton.addEventListener) {
    pauseButton.addEventListener('click', function() {
        pause();
    }, false);
}
//IE8 support 
else { 
    pauseButton.attachEvent('onclick', function () {
        pause();
    });
}  

// add event listeners for + work minutes
var increaseWorkMin = document.getElementById('increase-work-min')
if (increaseWorkMin.addEventListener) {
    increaseWorkMin.addEventListener('click', function() {
        workMinutesSetting.textContent++;
        minutesDisplay.textContent = workMinutesSetting.textContent;

    }, false);
}
//IE8 support 
else { 
    increaseWorkMin.attachEvent('onclick', function () {
        workMinutesSetting.textContent++;
        minutesDisplay.textContent = workMinutesSetting.textContent;
    });
}  

// add event listeners for - work minutes
var decreaseWorkMin = document.getElementById('decrease-work-min')
if (decreaseWorkMin.addEventListener) {
    decreaseWorkMin.addEventListener('click', function() {
        if(workMinutesSetting.textContent > 0) {
            workMinutesSetting.textContent--;
            minutesDisplay.textContent = workMinutesSetting.textContent;
        }
    }, false);
}
//IE8 support 
else { 
    decreaseWorkMin.attachEvent('onclick', function () {
        if(workMinutesSetting.textContent > 0) {
            workMinutesSetting.textContent--;
            minutesDisplay.textContent = workMinutesSetting.textContent;
        }
    });
}  


// add event listeners for + break minutes
var increaseBreakMin = document.getElementById('increase-break-min')
if (increaseBreakMin.addEventListener) {
    increaseBreakMin.addEventListener('click', function() {
        breakMinutesSetting.textContent++;

    }, false);
}
//IE8 support 
else { 
    increaseBreakMin.attachEvent('onclick', function () {
        breakMinutesSetting.textContent++;
    });
}  

// add event listeners for - break minutes
var decreaseBreakMin = document.getElementById('decrease-break-min')
if (decreaseBreakMin.addEventListener) {
    decreaseBreakMin.addEventListener('click', function() {
        if(breakMinutesSetting.textContent > 0)
            breakMinutesSetting.textContent--;
    }, false);
}
//IE8 support 
else { 
    decreaseBreakMin.attachEvent('onclick', function () {
        if(breakMinutesSetting.textContent > 0)
            breakMinutesSetting.textContent--;
    });
}  
// add event listeners for reset button
var resetTimer = document.getElementById('reset')
if (resetTimer.addEventListener) {
    resetTimer.addEventListener('click', function() {
        reset();
    }, false);
}
//IE8 support 
else { 
    resetTimer.attachEvent('onclick', function () {
        reset();
    });
}  
