const clock_div = document.getElementById('clock');


function clock () {
    let d = new Date()
    let time = d.toLocaleTimeString();
    /* let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds(); 
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    clock_div.innerHTML = `${hours}:${minutes}:${seconds}`; */

    clock_div.innerHTML = time;
}
setInterval(clock, 1000);

