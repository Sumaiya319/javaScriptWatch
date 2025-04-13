function updateTime(){
    const now = new Date();
    let hours = now.getHours().toString().padStart(2,"0");
    console.log(hours);

    let minutes = now.getMinutes().toString().padStart(2,"0");
    console.log(minutes);

    let seconds = now.getSeconds().toString().padStart(2,"0")
    console.log(seconds);

    document.getElementById("time").innerHTML = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateTime,1000);
updateTime();