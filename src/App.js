import './App.css';
import React, { useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Purchases from './pages/Purchases';

export const AppContext = React.createContext({});
export const PageContext = React.createContext({});

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [cartItem, setCartItem] = React.useState([]);
  const [favItem, setFavItem] = React.useState([]);
  const [purchItem, setPurchItem] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  useEffect(() => {
    setSidebarOpen();
  }, [])



  return (
    <div className="App">
      <AppContext.Provider value={{ setSidebarOpen, searchValue, onChangeSearchValue, setSearchValue, cartItem, setCartItem, purchItem, setPurchItem }}>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className='overlay'>
          <PageContext.Provider value={{ favItem, setFavItem, }}>
            <Header />
            <hr />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/purchases" element={<Purchases />} />
            </Routes>
          </PageContext.Provider>
        </div>

      </AppContext.Provider>
    </div>
  );
}

export default App;
