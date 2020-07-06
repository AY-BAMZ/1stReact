import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';
import ceoImage from './4.JPG'

const App= () =>{

  const APP_ID ='b1c96d6d'
  const APP_KEY = 'e81a56a581145adeaf22afa39a47bf4a'

  const [recipes, setRecipies] = useState([]);

  const [search, setSearch] = useState('');
  const [query, setQueary] = useState('chicken');

  useEffect(()=>{
    getRecipes();
  }, [query]);

  const getRecipes = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipies(data.hits);
  }

  const updateSearch = e =>{
    setSearch(e.target.value); 
  }
  const getSearch = e =>{
    e.preventDefault();
    setQueary(search)
    setSearch('')
  }
  function booni(){
    alert('thanks for greeting us oo')
  }
  return(
    <div className="App">
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch}/>
        <button className='search-button' type='submit'>search </button>
      </form>
      <div className="boddy">
      {recipes.map(recipe=>{
        return <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} 
        image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />  
        })}
      </div>
      <div className="footer">
        <img className="ceo_Image" src={ceoImage} alt="#LLL" />
        <h1>ENGR AYOBAMI PAUL</h1>
        <h3>C.E.O</h3>
        <input className="greet_bamz" type="text" placeholder="send your greetings to bamz" />
        <div>        
          <button onClick={()=> booni()} className="greet_button" type="submit">SEND</button>
         </div>
      </div>
    </div>
  )
}

export default App;
