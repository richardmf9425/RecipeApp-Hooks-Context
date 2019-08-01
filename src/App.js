import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {
	const APP_ID = 'e8d3a1136';
	const APP_KEY = '05673c850ae5cbecffbbdc7a7cf67f44';

	const [ recipes, setRecipes ] = useState([]);
	const [ search, setSearch ] = useState('');
	const [ query, setQuery ] = useState('ice cream');

	useEffect(
		() => {
			getRecipes();
		},
		// eslint-disable-next-line
		[ query ]
	);

	const getRecipes = async () => {
		const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
		const data = await response.json();
		setRecipes(data.hits);
		console.log(data.hits);
	};

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch('');
	};

	return (
		<div className="App">
			<h1 className="search-label">Search Recipes:</h1>
			<form onSubmit={getSearch} className="search-form">
				<input
					type="text"
					name=""
					className="search-bar"
					value={search}
					onChange={updateSearch}
					placeholder="Enter Recipe"
				/>
				<button type="submit" className="search-button">
					Search
				</button>
			</form>

			<div className="recipes">
				{recipes.map((recipe) => (
					<Recipe
						key={recipe.recipe.totalNutrients.totalWeight}
						title={recipe.recipe.label}
						calories={recipe.recipe.calories}
						image={recipe.recipe.image}
						ingredients={recipe.recipe.ingredients}
						url={recipe.recipe.shareAs}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
