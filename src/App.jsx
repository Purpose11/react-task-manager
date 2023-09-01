import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import CompletedTask from "./pages/CompletedTask";
import PendingTasks from "./pages/PendingTasks";
import About from "./pages/About";
import ReactCalendar from "./pages/Calendar";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-[70px] lg:ml-[250px]">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/completed" element={<CompletedTask />}></Route>
            <Route path="/pending" element={<PendingTasks />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/calendar" element={<ReactCalendar />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
