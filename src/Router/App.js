import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';

function App() {

  function handleScroll(){
    if (window.scrollY > 5) {
      const search = document.getElementsByClassName('containerNav')[0]
      search.style["position"] = "sticky"
      search.style["background"] = "rgb(20, 20, 20)"
      search.style["top"] = "0px"
    }
    if (window.scrollY <= 0) {
      const search = document.getElementsByClassName('containerNav')[0]
      search.style["position"] = "relative"
      search.style["background"] = "transparent"
    }
  }

  useEffect(() => {
      window.addEventListener('scroll', handleScroll)
  },[]);

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
