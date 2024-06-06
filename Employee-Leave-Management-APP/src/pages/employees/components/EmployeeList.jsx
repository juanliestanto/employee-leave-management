import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteEmployeeAction,
  getAllEmployeeAction,
} from "../../store/slice/employeeSlice";
import LoadingAnimation from "../../animation/LoadingAnimation";
import { IconEdit, IconForms, IconTrash } from "@tabler/icons-react";

export default function EmployeeList() {
  const { employees, isLoading } = useSelector((state) => state.employee);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEmployeeAction());
  }, [dispatch]);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  const handleDelete = (id) => {
    if (!confirm("Are You Sure You Want to Delete Data? ?")) return;

    dispatch(deleteEmployeeAction(id));
    console.log(id)
  };

  return (
    <>
      <h2 className="text-center" colSpan={4}>
        Employee Leave List
      </h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr className="align-middle text-center">
              <th>No</th>
              <th>Name</th>
              <th>NIP</th>
              <th>Division</th>
              <th>Leave Active</th>
              <th>Leave Available</th>
              <th>Total Leave</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="justify-content-center text-center">
            {employees.length != 0 ? (
              <>
                {employees.map((employees, idx) => {
                  return (
                    <>
                      <tr className="align-middle" key={employees.id}>
                        <td>{++idx}</td>
                        <td>{employees.fullName}</td>
                        <td>{employees.nip}</td>
                        <td>{employees.division}</td>
                        <td>{employees.leaveActive}</td>
                        <td>{employees.leaveAvailable}</td>
                        <td>{employees.totalLeave}</td>
                        <td>
                          <span
                            className={`badge text-white ${
                              employees.isLeave
                                ? "text-bg-danger"
                                : "text-bg-success"
                            }`}
                          >
                            {employees.isLeave
                              ? "CURRENTLY ON LEAVE"
                              : "ACTIVE"}
                          </span>
                        </td>
                        <td className="align-items-center text-center">
                          <div className="d-flex gap-2 align-middle justify-content-center">
                            <button type="edit" className="btn btn-primary">
                              <i style={{ color: "white" }}>
                                <IconEdit />
                                Edit
                              </i>
                            </button>
                            <button
                              type="delete"
                              className="btn btn-danger"
                              onClick={() => handleDelete(employees.id)}
                            >
                              <i style={{ color: "white" }}>
                                <IconTrash />
                                Delete
                              </i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </>
            ) : (
              <>
                <tr>
                  <td className="text-center" colSpan={9}>
                    Not Data Available
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
      <div className="text-end">
        <button
          type="button"
          className="btn btn-primary me-2 gap-2 align-middle"
          onClick={() => navigate("form")}
        >
          <i style={{ color: "white" }}>
            <IconForms />
            Form Table
          </i>
        </button>
      </div>
    </>
  );
}
