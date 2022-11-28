import React from 'react';
import s from './Item.module.scss';

function Item({ item }) {
    return (
        <div className={s.item}>
            <div className={s.favBtn}>
                <img src="img/heart-icon.svg" alt="fav" />
            </div>
            <a href="">
                <div className={s.img}>
                    <img src={item.image} alt="item" />
                </div>
                <div className={s.title}>{item.title}</div>
                <div className={s.bot}>
                    <div className={s.price}>
                        <p>Цена:</p>
                        <b>{item.price} kzt</b>
                    </div>
                    <div className={s.cartBtn}>
                        <button>
                            <img src="img/cart-btn.svg" alt="" />
                        </button>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Item;