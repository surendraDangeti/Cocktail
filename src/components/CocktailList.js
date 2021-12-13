import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCocktail} from '../redux/action'
import {Link} from 'react-router-dom'
import './CocktailList.css'

const CocktailList = () => {

const {cocktails, loading} = useSelector((state)=>({...state.data}));
const [modifiedCocktail, setModifiedCocktail] = useState([]); 
console.log("cocktail", loading);

let dispatch = useDispatch()

useEffect(()=> {
    dispatch(fetchCocktail()) 
}, [])
// eslint-disable-next-line

useEffect(()=>{
    if(cocktails){
        const newCocktails = cocktails.map((item) =>{
            const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item;
            return {
                id: idDrink,
                name: strDrink,
                image: strDrinkThumb,
                info: strAlcoholic,
                glass:strGlass,
            }
        })
        setModifiedCocktail(newCocktails);

    }else{
      setModifiedCocktail([]);
    }

}, [cocktails]);// eslint-disable-next-line

return (
    <div className="container">
       <div  className="sub-container">
           { loading ?  (<h3 className="loading-text">Loading...</h3>):(
               modifiedCocktail.map((item)=> {
               const {id, name, image, glass, info} = item;
               return (
                   <div key = {id}>
                       <div className="card">
                          <img src= {image} alt={name} className="card-image"/>
                        <div className="card-body">
                           <h5>{name}</h5>
                           <h5>{glass}</h5>
                           <p>{info}</p>
                           <Link to={`/cocktail/${id}`}>
                             <button type="button">Details</button>
                           </Link>
                        </div>
                       </div>
                   </div>
               )
           }))}
       </div>
    </div>
)
}


export default CocktailList