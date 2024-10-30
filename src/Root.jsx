import {Navbar} from "./components/user/Navbar/Navbar.jsx";
import {Outlet} from "react-router-dom";
import {Footer} from "./components/user/Footer/Footer.jsx";

export function Root() {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </>
    )
}