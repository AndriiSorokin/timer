class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector)
    this.targetDate = targetDate.getTime()
    this.day = document.querySelector('[ data-value="days"]');
    this.hour = document.querySelector('[data-value="hours"]');
    this.min = document.querySelector('[data-value="mins"]');
    this.sec = document.querySelector('[data-value="secs"]')
  }
  timer() {
    setInterval(() => {
      let currentDate = new Date().getTime()
      let time = this.targetDate - currentDate;
      let days = Math.floor(time / (1000 * 60 * 60 * 24));
      let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((time % (1000 * 60)) / 1000);

      this.day.textContent = `${days}`
      this.hour.textContent = `${hours}`
      this.min.textContent = `${mins}`
      this.sec.textContent = `${secs}`

      if (time < 0) {
        clearInterval(this.expirationDate);
        this.day.textContent = "00";
        this.hour.textContent = "00";
        this.min.textContent = "00";
        this.sec.textContent = "00";
      }
    }, 1000);
  }
  init() {
    this.timer();
  }
}
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jun 07, 2021, 12:00"),
}).init();


