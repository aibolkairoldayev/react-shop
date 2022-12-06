import React from 'react';
import s from './Item.module.scss';
import { AppContext } from '../../App';

function Item({ item }) {
    const [cartStatus, setCartStatus] = React.useState();
    const { cartItem } = React.useContext(AppContext);
    const { setCartItem } = React.useContext(AppContext);

    return (
        <div className={s.item}>
            <div className={s.favBtn}>
                <img src="img/heart-icon.svg" alt="fav" />
            </div>
            <div>
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
                        <button onClick={() => {
                            setCartStatus(!cartStatus);
                            !cartStatus && setCartItem([...cartItem, { id: `${item.id}`, title: `${item.title}`, price: `${item.price}`, image: `${item.image}`, added: true }]);
                            cartStatus && setCartItem(cartItem.filter(obj => obj.id != item.id))
                        }} >

                            <img src={!cartItem.find(element => element.id == item.id) ? `img/cart-btn.svg` : 'img/cart-added.svg'} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;