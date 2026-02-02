import ExportImport, { x, y } from "./topics/1-export-import/ExportImport";
import EventHandling from "./topics/2-event-handling/EventHandling";
import RenderingJSON from "./topics/3-rendering/RenderingJSON";
import UseStateHook from "./topics/4-usestate-hook/UseState";
import TwoWayBinding from "./topics/4-usestate-hook/TwoWayBinding";

import { useState } from "react";
import Create from "./topics/5-props-drilling/Create";
import Read from "./topics/5-props-drilling/Read";

// Console log for topic 1
// console.log(x, y);

const App = () => {
  const [users,setusers]= useState([
    { name:"Shahbaz Alam", age:20 },
    { name:"Danish Shaikh", age:22 },
    { name:"Md Furquan Afroz", age:24 },
    { name:"Raj Kumar", age:23 },
  ])


  return (
    <div>
      {/* Jisse practice karna ho, bas use uncomment kar dein baaki ko comment */}
      
      {/* <ExportImport /> */}
      {/* <EventHandling /> */}
      {/* <RenderingJSON />    */}
      {/* < UseStateHook/> */}
      {/* <TwoWayBinding /> */}

      <Create />
      <Read users={users} setusers={setusers} />
      {/* Read mein data pass kar diyaa joo uper banayaa hai dataa */}
    </div>
  );
};


export default App;
