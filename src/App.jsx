import ExportImport, { x, y } from "./topics/1-export-import/ExportImport";
import EventHandling from "./topics/2-event-handling/EventHandling";
import RenderingJSON from "./topics/3-rendering/RenderingJSON";
import UseStateHook from "./topics/4-usestate-hook/UseState";

// Console log for topic 1
// console.log(x, y);

const App = () => {
  return (
    <div>
      {/* Jo din practice karna ho, bas use uncomment kar dein baaki ko comment */}
      
      {/* <ExportImport /> */}
      {/* <EventHandling /> */}
      {/* <RenderingJSON />    */}
      < UseStateHook/>
    </div>
  );
};

export default App;

