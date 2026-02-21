import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayout from "./ui/Applayout";
import AllTask from "./components/AllTask";
import TaskStats from "./components/TaskStats";
import AddNewTask from "./components/AddNewTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applayout />}>
          <Route index element={<Navigate replace to="AllTask" />} />
          <Route path="AllTask" element={<AllTask />} />
          <Route path="TaskStats" element={<TaskStats />} />
          <Route path="AddNewTask" element={<AddNewTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
