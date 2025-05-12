class Timer {

    constructor(elId, startTime) {
        this.element = document.getElementById(elId);

        const [minutes, seconds] = startTime.split(':').map(Number);

        if (isNaN(minutes) || isNaN(seconds)) {
            throw new Error('Invalid time format. Expected HH:MM:SS');
        }

        this.minutes = minutes;
        this.seconds = seconds;

        this.intervalId = null;
    }

    start() {
        if (this.intervalId !== null) return;

        const updateTime = () => {

            if (this.minutes === 0 && this.seconds === 0) {
                this.stop();
                return;
            }

            if (this.seconds > 0) {
                this.seconds = --this.seconds;
            }
            else if (this.minutes > 0) {
                this.minutes = --this.minutes;
                this.seconds = 59;
            }

            this.element.textContent = `${String(this.minutes).padStart(2, "0")}:${String(this.seconds).padStart(2, "0")}`
        }

        updateTime();

        this.intervalId = setInterval(updateTime, 1000);
    }

    stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.element.textContent = 'Відлік завершено';
    }
}

const myTimer = new Timer('timer', '01:27');

myTimer.start();
