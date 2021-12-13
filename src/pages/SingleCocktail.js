import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'
import {fetchSingleCocktail} from "../redux/action"
import {useSelector, useDispatch} from 'react-redux'
import './SingleCocktail.css'
const SingleCocktail = () => {
     const {cocktail, loading} = useSelector((state) => ({...state.data}));
     const [modifiedCocktail, setModifiedCocktail] = useState([]);
     const {id} = useParams();
     let dispatch = useDispatch()


     useEffect (()=> {
        dispatch(fetchSingleCocktail(id))
        // setModifiedCocktail(cocktail[0])
     }, [id])

    useEffect(()=> {
       if(cocktail.length > 0){
          const {
              strDrink: name,
              strDrinkThumb: image,
              strAlcoholic: info,
              strCategory: category,
              strGlass: glass,
              strInstructions: instructions,
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
          } = cocktail[0];
          const strIngredients = [
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
          ]

          const newCocktail = {
              name,
              image,
              info,
              category,
              glass,
              instructions,
              strIngredients
          }
          setModifiedCocktail(newCocktail)
        
       }
    }, [id, cocktail])
    

    return(
        <div>{ loading ? (
           <h2 className="loading">Loading...</h2>):(
               <div className="cocktailBody">
                 {/* <Link to='/'>
                 <button>Go Back</button>
                 </Link> */}
                 <h2>{modifiedCocktail.name}</h2>
                 <div className='drink'>
                    <img src={modifiedCocktail.image} alt={modifiedCocktail.name} className="cocktail-detail-view" />
                    <div>
                       <p>
                       <span className='drink-data'>Name:</span>{modifiedCocktail.name}
                       </p>
                       <p>
                       <span className='drink-data'>category:</span>{modifiedCocktail.category}
                       </p>
                       <p>
                       <span className='drink-data'>Info:</span>{modifiedCocktail.info}
                       </p>
                       <p>
                       <span className='drink-data'>Glass:</span>{modifiedCocktail.glass}
                       </p>
                       <p>
                       <span className='drink-data'>Instructions:</span>{modifiedCocktail.instructions}
                       </p>
                    </div>
                 </div>
               </div>)
               }
        </div>
    )
}

export default SingleCocktail