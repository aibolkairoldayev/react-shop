import React from "react";
import { useEffect, useState } from 'react';
import { AppContext } from "../App";
import Item from './../components/Item';


function Home() {

    const [items, setItems] = useState([]);
    const { searchValue } = React.useContext(AppContext);
    const { setSearchValue } = React.useContext(AppContext);
    const { onChangeSearchValue } = React.useContext(AppContext);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setItems(json))
    }, [])

    return (
        <div className='items'>
            <div className="container">
                <div className='itemsTop'>
                    <div className="itemsTitle">
                        <h1>{searchValue ? `Поиск по запросу ${searchValue}` : "Все кроссовки"}</h1>
                    </div>
                    <div className="itemsSearch">
                        {searchValue && <img onClick={() => setSearchValue('')} src="img/close-icon.svg" alt="" />}
                        <input onChange={onChangeSearchValue} value={searchValue} type="text" placeholder='Search...' />
                    </div>
                </div>
                <div className='itemsBot'>
                    {
                        items
                            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                            .map(item => (
                                <Item key={item.id} item={item} />
                            ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;