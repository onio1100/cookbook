import { Outlet } from "react-router-dom";

export default function MainOutlet(){
    return( 
        <div className="main">
            <nav className="nav">
                <h2 className="logo">CookBook</h2>
                <div className="menu-background">
                    <ul className="menu">
                        <li>search</li>
                        <li>home</li>
                        <li>info</li>
                        <li>switch</li>
                    </ul>
                </div>
            </nav>
            <div className="outlet-wraper">
                <Outlet />
            </div>
        </div>
    )
}