import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayout from "./ui/Applayout";
import AllTask from "./components/AllTask";
import CompletedTask from "./components/CompletedTask";
import ImportantTask from "./components/ImportantTask";
import UnCompletedTask from "./components/UnCompletedTask";
import TaskStats from "./components/TaskStats";
import AddNewTask from "./components/AddNewTask";
import { Toaster } from "react-hot-toast";

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
          <Route path="/TastStats" element={<TaskStats />} />
          <Route path="AddNewTask" element={<AddNewTask />} />
        </Route>
      </Routes>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
