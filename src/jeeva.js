import {useState,useEffect} from "react";
function useJeevaOnlineStatus(){
    const [isonline,setIsOnline]=useState(true);
    useEffect(()=>{
        const hOnline=()=>setIsOnline(true);
        const hOffline=()=>setIsOnline(false);
        window.addEventListener("online",hOnline)
        window.addEventListener("offline",hOffline);
        return()=>{
            window.removeEventListener("online",hOnline)
            window.removeEventListener("offline",hOffline);
        }
    },[]);
    return [isonline,setIsOnline];
}
export default useJeevaOnlineStatus;
