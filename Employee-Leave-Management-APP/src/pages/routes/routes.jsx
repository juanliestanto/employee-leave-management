import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Dashboard from "../dashboard/Dashboard";
import Employee from "../employees/Employee";
import EmployeeList from "../employees/components/EmployeeList";
import EmployeeForm from "../employees/components/EmployeeForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "dashboard",
        element: <Dashboard />,
      },{
        path: "employee-leave",
        element: <Employee />,
        children: [
          {
            index: true,
            element: <EmployeeList />,
          },
          {
            path: "form",
            element: <EmployeeForm/>,
          },
        ],
      }
    ],
  },
]);

export default router;
