//your JS code here. If required.
// Timer
const timer = document.getElementById("timer");
setInterval(() => {
    let instance = new Date();
    // date = mm/dd/yyyy
    const date = `${instance.getMonth() + 1}/${instance.getDate()}/${instance.getFullYear()}`;

    let hrs = instance.getHours(); // 24hr clock
    const ampm = hrs >= 12 ? "PM" : "AM";

    // 22:31 => 10:31 PM
    hrs > 12 && (hrs -= 12);

    // time = hh:mm:ss PM
    const time = `${hrs}:${instance.getMinutes()}:${instance.getSeconds()} ${ampm}`
    timer.innerText = `${date} , ${time}`
}, 1000)