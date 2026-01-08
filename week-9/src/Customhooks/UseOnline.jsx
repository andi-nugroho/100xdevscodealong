import { useEffect, useState } from "react";

export function useIsOnline(){
    const [isOnline,setIsOnline] = useState(window.navigator.onLine);
    useEffect(()=>{
      setInterval(()=>{
    //         if(window.navigator.onLine){
    //   setIsOnline(true);
    // }else{
    //   setIsOnline(false);
    // }
    window.addEventListener('online', ()=>{setIsOnline(true)})
    window.addEventListener('offline', ()=>{setIsOnline(false)})
      },1000)
    
    },[isOnline])
    return isOnline;
  }