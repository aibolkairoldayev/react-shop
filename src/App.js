import './App.css';
import React, { useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Purchases from './pages/Purchases';

export const AppContext = React.createContext({});

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const [searchValue, setSearchValue] = React.useState('');

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  useEffect(() => {
    setSidebarOpen();
  }, [])



  return (
    <div className="App">
      <AppContext.Provider value={{ setSidebarOpen, searchValue, onChangeSearchValue, setSearchValue }}>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className='overlay'>
          <Header />
          <hr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/purchases" element={<Purchases />} />
          </Routes>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
