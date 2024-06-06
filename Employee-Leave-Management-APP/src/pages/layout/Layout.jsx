import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

export default function Layout () {
    return (
        <>
        <div className="d-flex">
            <Sidebar/>
            <main className="w-100 flex-grow-1">
              <Header/>
              <Outlet/>
            </main>
          </div>
        </>
    )
}