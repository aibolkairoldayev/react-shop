import React from "react";
import s from './Sidebar.module.scss';
import { AppContext } from "../../App";

function Sidebar({ sidebarOpen, setSidebarOpen }) {

    const { cartItem, setCartItem, purchItem, setPurchItem } = React.useContext(AppContext);
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
                    {
                        cartItem.map(addedItem => (
                            <div key={addedItem.id} className={s.item}>
                                <div className={s.img}>
                                    <img src={addedItem.image} alt="item" />
                                </div>
                                <div className={s.info}>
                                    <p>{addedItem.title}</p>
                                    <b>{addedItem.price} kzt</b>
                                </div>
                                <button className={s.btn} onClick={() => {
                                    setCartItem(cartItem.filter(obj => obj.id != addedItem.id));
                                }}>
                                    <img src="img/close-icon.svg" alt="btn" />
                                </button>
                            </div>
                        ))
                    }
                </div>
                <div className={s.total}>
                    <div className={s.cost}>
                        <p>Итого: </p>
                        <span></span>
                        <b>21 498 kzt </b>
                    </div>
                    <div className={s.nds}>
                        <p>В том числе НДС: </p>
                        <span></span>
                        <b>1074 kzt </b>
                    </div>
                    <button className={cartItem.length > 0 ? s.button : s.disabled} onClick={() => {
                        setPurchItem([...cartItem])
                        setCartItem([])
                    }} >
                        <span>Оформить заказ</span>
                        <img src="img/arrow.svg" alt="arrow" />
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Sidebar;