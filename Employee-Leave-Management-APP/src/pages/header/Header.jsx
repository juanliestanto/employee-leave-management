import avatar from "../../assets/avatar.png";
import { IconDoorExit } from "@tabler/icons-react";

export default function Header() {
  return (
    <div className="d-flex justify-content-end shadow-sm p-4 bg-light">
      <div className="dropdown">
        <button
          data-bs-toggle="dropdown"
          aria-expanded="false"
          className="btn btn-link"
        >
          <img
            src={avatar}
            alt="profile-icon"
            width={40}
            height={40}
            className="rounded-circle cursor-pointer bg-white"
          />
        </button>
        <ul className="dropdown-menu">
          <li className="dropdown-item-text">
            <div className="flex-grow-1 ms-3">
              <h6 className="mb-1">Juan Liestanto</h6>
              <span>juan@gmail.com</span>
            </div>
          </li>
          <hr />
          <li className="dropdown-item-text">
            <a className="dropdown-item" href="#">
              <i className="me-2">
                <IconDoorExit size={16} />
              </i>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
