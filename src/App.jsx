import ExportImport, { x, y } from "./topics/1-export-import/ExportImport";
import EventHandling from "./topics/2-event-handling/EventHandling";
import RenderingJSON from "./topics/3-rendering/RenderingJSON";

// Console log for topic 1
console.log(x, y);

const App = () => {
  return (
    <div>
      {/* Jo din practice karna ho, bas use uncomment kar dein baaki ko comment */}
      
      <ExportImport />
      <EventHandling />
      <RenderingJSON />   
    </div>
  );
};

export default App;

