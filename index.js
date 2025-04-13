function date(){
    const now = new Date();
    let days = [
        "Sunday",
        "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    ]
    let months = [
        "january",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

let day = days[now.getDay()];
console.log("day", day);

let date = now.getDate()



let month = months[now.getMonth()];
  console.log(month);

  let year = now.getFullYear();
  document.getElementById(
    "date"
  ).innerText = `${day}, ${month} ${date}, ${year}`;
}

setInterval(date, 1000);
date();