import { useEffect, useState } from "react";
import { Navigate, Outlet, useOutlet } from "react-router-dom";

export default function MainOutlet(){
    const [nav, setNav] = useState(true);
    const [search, setSearch] = useState(false);
    const [language, setLanguagae] = useState(false); //false-EN, true-PL
    const isOutlet = useOutlet();

    useEffect(() => {
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            setNav(false);
        } else {
            setNav(true);
        }
}
    },[])

    function handleLanguage() {
        setLanguagae((prevState) => {
            return prevState ? false : true
        })
        console.log(language)
    }

    return( 
        <div className="main">
            <nav className={"nav " + (nav ? "nav--big" : "nav--small")}>
                <h2 className={"logo " + (nav ? "logo--big" : "logo--small")}>CookBook</h2>
                <div className={"menu-background " + (nav ? "menu-background--big" : "menu-background--small")}>
                    <ul className="menu">
                        <li className="menu-element">SEARCH</li>
                        <li className="menu-element">HOME</li>
                        <li className="menu-element">INFO</li>
                        <li className="menu-element" onClick={handleLanguage}>{language ? "PL | en" : "pl | EN"}</li>
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