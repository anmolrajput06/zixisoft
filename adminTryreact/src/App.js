import Header from "./Layout/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Layout/Sidebar";
import Footer from "./Layout/Footer";
import Dashboard from "./pages/Dashboard";
import ManageUsers from "./pages/ManageUsers";
import ManageCategory from "./pages/ManageCategory";
import CreateCategory from "./pages/CreateCategory";
import ManageTask from "./pages/ManageTask";
import CreateTask from "./pages/CreateTask";
import PendingStatus from "./pages/PendingStatus";
import ApproveStatus from "./pages/ApproveStatus";
import DisaproveStatus from "./pages/DisaproveStatus";
import Content from "./pages/Content";
import TaskDetails from "./pages/TaskDetails";
import TaskEdit from "./pages/TaskEdit.js";
import Transaction from "./pages/Transaction";

function App() {
  return (
    <>
      <Router>
        <>
          <Header />
          <Sidebar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/manage-user" element={<ManageUsers />} />
            <Route path="/manage-category" element={<ManageCategory />} />
            <Route path="/create-category" element={<CreateCategory />} />
            <Route path="/manage-task" element={<ManageTask />} />
            <Route path="/create-task" element={<CreateTask />} />
            <Route path="/pending-status" element={<PendingStatus />} />
            <Route path="/approve-status" element={<ApproveStatus />} />
            <Route path="/disapprove-status" element={<DisaproveStatus />} />
            <Route path="/content" element={<Content />} />
            <Route path="/task-details" element={<TaskDetails />} />
            <Route path="/task-edit" element={<TaskEdit />} />
            <Route path="/transaction" element={<Transaction />} />
          </Routes>
          <Footer />
        </>
      </Router>
    </>
  );
}

export default App;