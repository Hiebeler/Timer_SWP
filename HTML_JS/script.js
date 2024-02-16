

const start = () => {
    let seconds = document.getElementById("seconds").value;
    setSecondsInHtml(seconds)
    let interval = setInterval(() => {
        seconds -= 0.1;
        setSecondsInHtml(seconds)
        if (seconds <= 0) {
            clearInterval(interval)
        }
    }, 100)
}

const setSecondsInHtml = (seconds) => {
    document.getElementById("timer").innerHTML = Math.round(seconds * 10) /10
}