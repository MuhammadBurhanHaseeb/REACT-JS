
import React,{useState,useRef,useEffect} from "react";

function StopWatch() {

    const [isRunning, setIsRunning] = useState(false);//isRunning is used to store the state of the stopwatch
    const [elapsedTime, setElapsedTime] = useState(0);//elapsedTime is used to store the time that has passed since the stopwatch started
    const intervalRef = useRef(null);//useRef is used to store the reference of the interval
    const startTimeRef = useRef(0);//useRef is used to store the reference of the start time

    useEffect(() => {
        if(isRunning){
            intervalRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            },10);
            return () => clearInterval(intervalRef.current);
        }
      
    }, [isRunning]);

    function start() {
        if (isRunning) return;
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
        
    }
    function stop() {
        if (!isRunning) return;
        setIsRunning(false);
       
    }
    function reset() {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setElapsedTime(0);
    }
    function formatTime(){
        let hours = Math.floor(elapsedTime / 3600000);
        let minutes = Math.floor((elapsedTime % 3600000) / 60000);
        let seconds = Math.floor((elapsedTime % 60000) / 1000);
        let milliseconds = Math.floor(elapsedTime % 1000 / 10);
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}`;
    }
    function padZero(number){
        return (number <10 ? "0" :"")+number;
    }
 


    return(
        <>
        <h1>Stop Watch</h1>
        <div className="StopWatch">
            <h1>{formatTime()}</h1>
            <div className="buttonDivv">
                <button className="stopwacthbut" style={{backgroundColor:"green"}} onClick={start} >Start</button>
                <button className="stopwacthbut" style={{backgroundColor:"red"}} onClick={stop}>Stop</button>
                <button className="stopwacthbut" style={{backgroundColor:"blue"}} onClick={reset}>Reset</button>
            </div>
            
        </div>
        </>
    );

}
export default StopWatch;
