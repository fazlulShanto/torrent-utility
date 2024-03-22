import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="flex gap-2 h-screen w-screen">
            <div className="h-full w-[270px]">
                <Sidebar />
            </div>
            <div className="flex h-full w-full flex-col">
                <div className="h-16 flex-shrink-0">
                    <Header />
                </div>
                <div className="flex-shrink overflow-hidden">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;
