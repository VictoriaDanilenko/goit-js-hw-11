class CountdownTimer {
    constructor(obj) {
        this.selector = obj.selector
        this.targetData = obj.targetDate
        this.interval = null
    }
    getRefs() {
        return {
            days: document.querySelector(`${this.selector} [data-value="days"]`),
            hours: document.querySelector(`${this.selector} [data-value="hours"]`),
            mins: document.querySelector(`${this.selector} [data-value="mins"]`),
            sec: document.querySelector(`${this.selector} [data-value="secs"]`),
        }
    }
    updateDate() {
        this.interval = setInterval(() => {

            const {days, hours, mins, sec} = this.getRefs()
            const time = this.targetData - Date.now()
            if (time < 0) {
                clearInterval(this.interval)
                return
            }
            days.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
            hours.textContent = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            mins.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            sec.textContent = Math.floor((time % (1000 * 60)) / 1000);
        }, 1000)
    }
}


new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date("May 31, 2021 06:00")
}).updateDate();