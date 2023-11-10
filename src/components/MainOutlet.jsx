import { useEffect, useState } from "react";
import { Navigate, Outlet, useOutlet } from "react-router-dom";

export default function MainOutlet(){
    const [nav, setNav] = useState(true);
    const isOutlet = useOutlet();

    useEffect(() => {
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            setNav(false);
        } else {
            setNav(true);
        }
}
    },[])

    return( 
        <div className="main">
            <nav className={"nav " + (nav ? "nav--big" : "nav--small")}>
                <h2 className={"logo " + (nav ? "logo--big" : "logo--small")}>CookBook</h2>
                <div className={"menu-background " + (nav ? "menu-background--big" : "menu-background--small")}>
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
                {isOutlet ? "" : <Navigate to="/home" /> }
            </div>
        </div>
    )
}