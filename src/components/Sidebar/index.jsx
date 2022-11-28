import React from "react";
import s from './Sidebar.module.scss';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
    return (
        <div className={`${s.sidebar}  ${sidebarOpen ? 'open' : 'close'}`}>
            <div className={s.content}>

            </div>
            <div className={s.side}>
                <button className={s.close}>
                    <img onClick={() => setSidebarOpen(false)} src="img/close-icon.svg" alt="close" />
                </button>
                <div className={s.title}>
                    Корзина
                </div>
                <div className={s.items}>
                    <div className={s.item}>
                        <div className={s.img}>
                            <img src="img/item1.jpg" alt="item" />
                        </div>
                        <div className={s.info}>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 kzt</b>
                        </div>
                        <button className={s.btn}>
                            <img src="img/cart-btn.svg" alt="btn" />
                        </button>
                    </div>
                </div>
                <div className={s.total}>
                    <div className={s.cost}>
                        <p>Итого: </p>
                        <b>21 498 kzt </b>
                    </div>
                    <div className={s.nds}>
                        <p>Налог 5%: </p>
                        <b>1074 kzt </b>
                    </div>
                    <button className={s.button}>
                        <span>Оформить заказ</span>
                        <img src="img/arrow.svg" alt="arrow" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;