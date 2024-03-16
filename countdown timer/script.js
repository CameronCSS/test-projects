let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft)
    }, 1000);
}


function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
    
}


function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    let hour = end.getHours();
    const minutes = end.getMinutes();

    if (hour === 0) {
        hour = 12;
    } else if (hour > 12) {
        hour -= 12; 
    }

    endTime.textContent = `Be Back At ${hour}:${minutes < 10 ? '0' : ''}${minutes} ${hour < 12 ? 'PM' : 'AM'}`;
}


function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}


buttons.forEach(button => button.addEventListener('click', startTimer));

// You can directly select elements with this syntax
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();

});

