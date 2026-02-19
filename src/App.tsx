import { BrowserRouter, Route, Routes } from "react-router-dom";
import TeacherLayout from "@/components/layouts/TeacherLayout";
import Dashboard from "@/pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TeacherLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
