import React from "react";
import { AppContext } from "../App";
import s from './../components/Item/Item.module.scss';

function Purchases() {

    const { purchItem } = React.useContext(AppContext);

    return (
        <div className='items'>
            <div className="container">
                <div className='itemsTop'>
                    <div className="itemsTitle">
                        <h1>Покупки</h1>
                    </div>
                </div>
                <div className='itemsBot'>
                    {
                        purchItem.map(elem =>
                            <div className={s.item} key={elem.id}>
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

export default Purchases