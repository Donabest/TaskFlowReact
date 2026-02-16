import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayout from "./ui/Applayout";
import AllTask from "./components/AllTask";
import CompletedTask from "./components/CompletedTask";
import ImportantTask from "./components/ImportantTask";
import UnCompletedTask from "./components/UnCompletedTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applayout />}>
          <Route index element={<Navigate replace to="AllTask" />} />
          <Route path="AllTask" element={<AllTask />} />
          <Route path="CompletedTask" element={<CompletedTask />} />
          <Route path="ImportantTask" element={<ImportantTask />} />
          <Route path="UnCompletedTask" element={<UnCompletedTask />} />
          <Route path="CompletedTask" element={<CompletedTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
