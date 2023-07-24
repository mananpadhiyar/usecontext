import { Route, Routes } from "react-router-dom";
import "./App.css";
import LifeCycle from "./components/LifeCycle";
import MergeUseState from "./components/MergeUseState";
import Unmouting from "./components/Unmouting";
import UpdateArrayState from "./components/UpdateArrayState";
import Task1 from "./components/Task1";
import ComA from "./useContext/ComA";
import Chart from "./components/Chart";

function App() {
  return (
    <div className="all">
      <Routes>
        <Route path="/shallowmerge" element={<MergeUseState />} />
        <Route path="/" element={<LifeCycle />} />
        <Route path="/" element={<Unmouting />} />
        <Route path="/updatearrayinstate" element={<UpdateArrayState />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/comA" element={<ComA />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </div>
  );
}

export default App;
