import './App.css';
import Header from './components/Header';
import Item from './components/Item';
import Sidebar from './components/Sidebar';
import { useEffect, useState } from 'react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setItems(json))
  }, [])

  return (
    <div className="App">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className='overlay'>
        <Header setSidebarOpen={setSidebarOpen} />
        <hr />
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
      </div>
    </div>
  );
}

export default App;
