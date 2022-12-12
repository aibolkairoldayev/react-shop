import React from 'react';
import s from './Item.module.scss';
import { AppContext } from '../../App';
import { PageContext } from '../../App';


function Item({ item }) {
    const [cartStatus, setCartStatus] = React.useState();
    const [favStatus, setFavStatus] = React.useState();
    const { cartItem, setCartItem } = React.useContext(AppContext);
    const { favItem, setFavItem } = React.useContext(PageContext);
    return (
        <div className={s.item}>
            <button className={s.favBtn} onClick={() => {
                setFavStatus(!favStatus);
                !favStatus && !favItem.find(element => element.id == item.id) && setFavItem([...favItem, { id: `${item.id}`, title: `${item.title}`, price: `${item.price}`, image: `${item.image}` }]);
                favStatus && setFavItem(favItem.filter(obj => obj.id != item.id));

            }}>
                <img src={favItem.find(element => element.id == item.id) ? "img/fav-add.svg" : 'img/heart-icon.svg'} alt="fav" />
            </button>
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
                            !cartStatus && setCartItem([...cartItem, { id: `${item.id}`, title: `${item.title}`, price: `${item.price}`, image: `${item.image}` }]);
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