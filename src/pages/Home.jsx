import React from "react";
import { useEffect, useState } from 'react';
import { AppContext } from "../App";
import Item from './../components/Item';
import Skeleton from './../components/Skeleton/Skeleton'
import axios from "axios";


function Home() {

    const [items, setItems] = useState([]);
    const { searchValue } = React.useContext(AppContext);
    const { setSearchValue } = React.useContext(AppContext);
    const { onChangeSearchValue } = React.useContext(AppContext);
    const [isLoading, setIsLoading] = useState(true);
    const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />)

    const fetchGames = async () => {
        setIsLoading(true)
        try {
            const { data } = await axios.get(`https://fakestoreapi.com/products`)
            setItems(data)

        } catch (error) {

            console.log('error', error)
        } finally {
            setIsLoading(false)
        }
    }

    React.useEffect(() => {
        fetchGames()
    }, [])

    return (
        <div className='items'>
            <div className="container">
                <div className='itemsTop'>
                    <div className="itemsTitle">
                        <h1>{searchValue ? <p>Поиск по запросу: {searchValue}</p> : "Все кроссовки"}</h1>
                    </div>
                    <div className="itemsSearch">
                        {searchValue && <img onClick={() => setSearchValue('')} src="img/close-icon.svg" alt="" />}
                        <input onChange={onChangeSearchValue} value={searchValue} type="text" placeholder='Search...' />
                    </div>

                </div>
                <div className='itemsBot'>

                    {
                        !isLoading ?
                            items
                                .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                                .map(item => (
                                    <Item key={item.id} item={item} />
                                ))
                            :
                            skeletons

                    }
                </div>
            </div>
        </div>
    )
}

export default Home;