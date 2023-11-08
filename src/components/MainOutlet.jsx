import { Outlet } from "react-router-dom";

export default function MainOutlet(){
    return( 
        <main className="main">
            <nav>nav</nav>
            <Outlet />
        </main>
    )
}