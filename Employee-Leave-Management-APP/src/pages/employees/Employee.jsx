import { Outlet } from "react-router-dom";

export default function Employee() {
  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <h2>EMPLOYEE</h2>
        <Outlet />
      </div>
    </>
  );
}
