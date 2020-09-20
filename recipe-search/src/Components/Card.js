import React from 'react';
import recipePic from '../Assets/example-recipe.jpg';

const CardTemp = ({recipe}) => {
    return (
        <div className="card">
            <div className="flex flex-ai-c">
                <div className="card__image">
                    <img src={recipe.thumbnail ? recipe.thumbnail : recipePic} width="60" height="60" alt="recipe"/>
                </div>
                <div className="card__title">
                    <h3>{recipe.title}</h3>
                </div>
            </div>
            <div className="flex flex-fd-c card__ingredients">
                <h6>Ingredients:</h6>
                <p>{recipe.ingredients}</p>
            </div>
            <div className="card__link">
                <h6>
                    Link to full recipe: <a href={recipe.href} target="_blank" rel="noopener noreferrer">here.</a>
                </h6>
            </div>
        </div>
    )
}

export default CardTemp