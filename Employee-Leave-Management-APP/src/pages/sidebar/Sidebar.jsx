import { IconApps } from "@tabler/icons-react";
import { IconReceipt } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div
      className="bg-secondary text-white p-4 shadow"
      style={{ width: 300, minHeight: "100dvh" }}
    >
      <div className="font-logo text-center mb-5 p-2">
        <h2 className="fs-2 font-primary">
          <i>
            <b>Employee Leave</b> Management
          </i>
        </h2>
        <h2 className="fs-6 my-4 font-primary fw-bold">Backoffice</h2>
      </div>
      <nav>
        <ul className="d-flex flex-column gap-3 nav-list list-unstyled">
          <p className="fw-bold">Home</p>
          <div
            className="cursor-pointer text-white"
            onClick={() => navigate("dashboard")}
          >
            <i className="me-3">
              <IconApps />
            </i>
            <span>Dashboard</span>
          </div>
        </ul>
        <p className="fw-bold mt-4">Transaction</p>
        <div
          className="cursor-pointer text-white"
          onClick={() => navigate("employee-leave")}
        >
          <i className="me-3">
            <IconReceipt />
          </i>
          <span>Employee Leave</span>
        </div>
      </nav>
    </div>
  );
}
