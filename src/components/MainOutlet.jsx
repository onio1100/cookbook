import { useEffect, useState } from "react";
import { Navigate, Outlet, useOutlet } from "react-router-dom";

const MainOutlet = () => {
    const [nav, setNav] = useState(true); 
    const [language, setLanguagae] = useState(false); //false-EN, true-PL
    const isOutlet = useOutlet();

    useEffect(() => {
        window.onscroll = () => scrollFunction();

        const scrollFunction = () => {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            setNav(false);
        } else {
            setNav(true);
        }
}
    },[])

    const handleLanguage = () => {
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
                    <ul className={"menu " + (nav ? "menu--big" : "menu--small")}>
                        <li className={"menu-element menu-element--search " + (nav ? "menu-element--no-border" : "")}>SEARCH</li>
                        <li className="menu-element">HOME</li>
                        <li className="menu-element">INFO</li>
                        <li className="menu-element menu-element--switch" onClick={handleLanguage}>
                            <b className={language ? "menu-element__switch--on" : "menu-element__switch--off"}>PL</b>
                            <b className={language ? "menu-element__switch--off" : "menu-element__switch--on"}>EN</b>
                        </li>
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

export default MainOutlet;