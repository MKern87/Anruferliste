import { Routes, Route } from "react-router-dom";
import Mainpage from "./mainpage/Mainpage";
import NeuerEintrag from "./eintrag/NeuerEintrag";


function App() {
  return (
  
      <Routes>
        <Route path = '/' element = {<Mainpage />} />
        <Route path = '/NeuerAnruf' element = {<NeuerEintrag />} />
      </Routes>
  
  );
}

export default App;
