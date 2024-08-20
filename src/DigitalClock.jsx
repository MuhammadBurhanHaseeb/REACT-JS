import React,{useState, useEffect} from "react";
import address from "./assets/h.jpg";

function DigitalClock(){

    const [time, setTime] = useState(new Date());


    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
            console.log("Time Updated");
        },1000);

        return () =>{
            clearInterval(interval);
        } 
    },[]);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const maridiem = hours >= 12 ? "PM" : "AM";
        hours = hours % 12  || 12;

         return `${padZero(hours)}:${padZero(minutes) }:${padZero(seconds)} ${maridiem}`;
    }

    function padZero(number){
        return (number <10 ? "0" :"")+number;
    }

    useEffect(() =>
        {
            document.documentElement.style.backgroundImage = `url(${address})`;
            document.documentElement.style.backgroundPosition ="center";
        },[] );


        return(
            <div className="clockContainer">
                <div className="clock">
                    <span>{formatTime()}</span>
                </div>
            </div>
        );

}
export default DigitalClock;