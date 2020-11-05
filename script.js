
const targetDate = '1 Jan 2021'
const secondsEl = document.getElementById('seconds')
const minutesEl = document.getElementById('minutes')
const hoursEl = document.getElementById('hours')
const daysEl = document.getElementById('days')


const countdown = () => {
    const newYearDate = new Date(targetDate)
    const currentDate = new Date()

    const totalSeconds = (newYearDate - currentDate) / 1000

    const days =  Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor( totalSeconds / 3600) % 24
    const minutes =  Math.floor(totalSeconds / 60) % 60
    const seconds =  Math.floor(totalSeconds) % 60

    daysEl.innerHTML = days
    hoursEl.innerHTML = hours
    minutesEl.innerHTML = minutes
    secondsEl.innerHTML = seconds
}

setInterval(() => countdown(), 1000)