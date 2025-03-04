import { useState } from 'react';
import './App.css';
import useJeevaOnlineStatus from "./jeeva.js";


function StatusBar({isOnline}) {
  return <h1>{isOnline ? 'Online':' Disconnected'}</h1>;
}

function ActivateButton({setIsOnline}) {


  

  return (
    <button onClick={()=>setIsOnline (true)}>
     active
    </button>
  );
}
function DeactivateButton({setIsOnline}) {


  

  return (
    <button onClick={()=>setIsOnline (false)}>
     deactive
    </button>
  );
}
function App() {
  const isOnlineFromHook=useJeevaOnlineStatus();
  const [isOnline, setIsOnline]=useState(isOnlineFromHook);

  return (
    <>
      <ActivateButton setIsOnline={setIsOnline}/>
      <DeactivateButton setIsOnline={setIsOnline}/>
      <StatusBar isOnline={isOnline}/>
   </>
   
  );
}

export default App;
