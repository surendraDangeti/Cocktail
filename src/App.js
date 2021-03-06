import Home from './pages';
import {   Routes ,Route } from "react-router-dom"
import Header from './components/Header'
import SingleCocktail from './pages/SingleCocktail'
import './App.css';

function App() {
  return (
    <div className="App">
       <Header/>
       <Routes>
        <Route exact path = "/" element = {<Home/>}/> 
        <Route exact path = "/cocktail/:id" element = {<SingleCocktail/>}/> 
       </Routes>
    </div>
  );
}

export default App;
