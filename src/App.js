import { Routes, Route } from "react-router-dom";
import Mainpage from "./mainpage/Mainpage";
import NeuerEintrag from "./eintrag/NeuerEintrag";
import NeuerKunde from "./eintrag/NeuerKunde";


function App() {
  return (
  
      <Routes>
        <Route path = '/' element = {<Mainpage />} />
        <Route path = '/NeuerAnruf' element = {<NeuerEintrag />} />
        <Route path = '/NeuerKunde' element = {<NeuerKunde />} />
      </Routes>
  
  );
}

export default App;
