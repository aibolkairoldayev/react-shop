import React from "react";
import s from './Header.module.scss'
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

function Header() {
    const { setSidebarOpen } = React.useContext(AppContext);
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.content}>
                    <div className={s.logo}>
                        <Link to="/">
                            <img src="img/logo.svg" alt="logo" />
                            <span>React shop</span>
                        </Link>
                    </div>

                    <div className={s.buttons} >
                        <div className={s.cart} onClick={() => setSidebarOpen(true)}>

                            <img src="img/cart-icon.svg" alt="cart" />
                            <p>5600 тг</p>

                        </div>
                        <div className={s.favorites}>
                            <Link to="/favorites">
                                <img src="img/fav-icon.svg" alt="fav" />
                            </Link>
                        </div>
                        <div className={s.login}>
                            <Link to="/purchases">
                                <img src="img/login-icon.svg" alt="login" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;