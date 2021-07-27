const countdown = () => {

    const countDate = new Date("November 9 ,2099 00:00:00").getTime();
    const currentDate = new Date().getTime();
    const gap = countDate - currentDate

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365
    
    const webYear = Math.floor(gap/year);
    const webDay = Math.floor((gap%year)/day);
    const webHour = Math.floor((gap%day)/hour);
    const webMinute = Math.floor((gap%hour)/minute);
    const webSecond = Math.floor((gap%minute)/second);

    document.querySelector(".day").innerHTML= webDay;
    document.querySelector(".hour").innerHTML= webHour;
    document.querySelector(".minute").innerHTML= webMinute;
    document.querySelector(".second").innerHTML= webSecond;
    document.querySelector(".year").innerHTML=webYear;


};

setInterval(countdown,1000);