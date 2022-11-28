import React from "react";
import s from './Header.module.scss'

function Header({ setSidebarOpen }) {
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.content}>
                    <div className={s.logo}>
                        <a to="/">
                            <img src="img/logo.svg" alt="logo" />
                            <span>React shop</span>
                        </a>
                    </div>
                    <div className={s.buttons} onClick={() => setSidebarOpen(true)}>
                        <div className={s.cart}>
                            <a href="#">
                                <img src="img/cart-icon.svg" alt="cart" />
                                <p>5600 тг</p>
                            </a>
                        </div>
                        <div className={s.favorites}>
                            <a href="#">
                                <img src="img/fav-icon.svg" alt="fav" />
                            </a>
                        </div>
                        <div className={s.login}>
                            <a href="#">
                                <img src="img/login-icon.svg" alt="login" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;