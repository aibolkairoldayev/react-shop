import React from "react";
import { PageContext } from "../App";
import s from './../components/Item/Item.module.scss';

function Favorites() {
    const { favItem } = React.useContext(PageContext);
    const { setFavItem } = React.useContext(PageContext);

    return (
        <div className='items'>
            <div className="container">
                <div className='itemsTop'>
                    <div className="itemsTitle">
                        <h1>Избранные</h1>
                    </div>
                </div>
                <div className='itemsBot'>
                    {
                        favItem.map(elem =>
                            <div className={s.item} key={elem.id}>
                                <button className={s.favClose} onClick={() => {
                                    setFavItem(favItem.filter(obj => obj.id != elem.id));
                                }}>
                                    <img src="img/close-icon.svg" alt="btn" />
                                </button>
                                <div>
                                    <div className={s.img}>
                                        <img src={elem.image} alt="item" />
                                    </div>
                                    <div className={s.title}>{elem.title}</div>
                                    <div className={s.bot}>
                                        <div className={s.price}>
                                            <p>Цена:</p>
                                            <b>{elem.price} kzt</b>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Favorites;