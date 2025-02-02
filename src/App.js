import Board from "./components/Board/index.js";
import Toolbar from "./components/Toolbar/index.js";
import Toolbox from "./components/Toolbox/index.js";
import BoardProvider from "./store/BoardProvider.js";
import ToolboxProvider from "./store/ToolboxProvider.js";

function App() {

  return (
    <BoardProvider>
    
    <ToolboxProvider>

      <Toolbar/>
      <Board/>
      <Toolbox/>

    </ToolboxProvider>
    
    </BoardProvider>

  );
}

export default App;
