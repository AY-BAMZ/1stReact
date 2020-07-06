import React from 'react'
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div>
            <div className={style.recipe} >
                <div className={style.tit}><h1 >{title}</h1></div>
                <ol>
                    {ingredients.map(ingredients =>(
                        <li>{ingredients.text}</li>
                    ))}
                </ol>
                <p>{calories}</p>
                <div>
                    <img className={style.product_image} src={image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Recipe
