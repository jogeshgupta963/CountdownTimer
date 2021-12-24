

const container = document.querySelector(".container");
const info = document.querySelector(".setInfo");
const heading = document.querySelector("h1");
const btn = document.querySelector(".btn")
var date;
container.style.display="none";
btn.addEventListener("click",()=>{

    info.style.display="none"
    container.style.display="flex";

    heading.innerHTML=document.querySelector("#heading").value;
    date = document.querySelector("#date").value;

    countdown(date);
})

function countdown()
{
    const setDate = new Date(date);
    const currentDate = new Date();
    const totalSecs = (setDate-currentDate)/1000;
    console.log(setDate)
    console.log(currentDate)
    console.log(totalSecs)
    const days =Math.floor(totalSecs/3600/24);
    const hours=Math.floor(totalSecs/3600)%24;
    const minutes=Math.floor(totalSecs/60)%60;
    const seconds=Math.floor(totalSecs)%60;

    console.log(setDate);
    console.log(currentDate);
    document.querySelector("#daysCount").innerHTML = days;
    document.querySelector("#hoursCount").innerHTML = hours;
    document.querySelector("#minCount").innerHTML = minutes;
    document.querySelector("#secCount").innerHTML = seconds;
}
countdown();
setInterval(countdown,1000)
