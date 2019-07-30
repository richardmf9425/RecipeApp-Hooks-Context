import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients, url }) => {
	return (
		<div className={style.recipe}>
			<h1>{title}</h1>
			<ul>{ingredients.map((ingredient) => <li>{ingredient.text}</li>)}</ul>
			<p>{Math.trunc(calories)} cals.</p>
			<img className={style.image} src={image} alt="" />
			<a className={style.learnBtn} href={url} rel="noreferrer noopener" target="_blank">
				Learn More
			</a>
		</div>
	);
};

export default Recipe;
