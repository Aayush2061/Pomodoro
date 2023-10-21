import { useState,useEffect } from "react";
export default function Timer(){
    const [seconds,setSeconds] = useState(1500);
    const [isActive,setIsActive] = useState(false);
    function formatTime(seconds){
        const remaningMinutes = Math.floor(seconds/60);
        const remainingSeconds = seconds%60;
        return `${remaningMinutes}:${(remainingSeconds<10)?'0':''}${remainingSeconds}`
    }
    useEffect(()=>{
        let interval
        if(isActive&&seconds>0){
            interval = setInterval(()=>{
                setSeconds((seconds)=>{return seconds-1});
            },1000);
        }else if(seconds === 0){
            setIsActive(false);
        }
        return ()=>{clearInterval(interval)};
    },[isActive,seconds])

    return(
        <div>
            <div>{formatTime(seconds)}</div>
            <button onClick={()=>{setIsActive(!isActive)}}>{isActive?'Pause':'Start'}</button>
        </div>
    )
}