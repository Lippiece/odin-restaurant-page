import { css } from "@emotion/css";
// import images
import food1 from "./img/1.jpg";
import food2 from "./img/2.jpg";
import food3 from "./img/3.jpg";
import food4 from "./img/4.jpg";
import food5 from "./img/5.jpg";
import food6 from "./img/6.jpg";
import food7 from "./img/7.jpg";
import food8 from "./img/8.jpg";
const main = document.querySelector( "main" ),
	sources = [food1, food2, food3, food4, food5, food6, food7, food8],
	foodImageStyle = css( {
		width         : "100%",
		// Height        : "100%",
		objectFit     : "cover",
		objectPosition: "center",
	} );

/**
 * Create a grid of food blocks, each of which contains a food image, a food name, and a food
 * description.
 *
 * Create a div. Give it a CSS class that makes it a grid with a width from 300px
 * to 1fr. The grid has a gap of 20px between each food block.
 * @returns A function that returns a div with a class of foodBlocks.
 */
function makeFoodGrid()
{
	const foodBlocks = document.createElement( "div" );

	foodBlocks.classList.add( css( {
		display            : "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
		gridGap            : "20px",
		margin             : "20px",
	} ) );
	for ( let index = 0; index < 8; index++ )
	{
		fillFoodGrid( foodBlocks, index );
	}

	return foodBlocks;
}
function makeFoodBlock()
{
	const foodBlock = document.createElement( "div" );

	foodBlock.classList.add( css( {
		backgroundColor: "#444",
		padding        : "20px",
		margin         : "20px",
		borderRadius   : "10px",
	} ) );

	return foodBlock;
}
function makeFoodBlockHeadline( index )
{
	const foodBlockHeadline = document.createElement( "h2" ),
		style = css( {
			opacity : 0.8,
			fontSize: "1.5rem",
		} );

	foodBlockHeadline.textContent = `Food ${ index }`;
	foodBlockHeadline.classList.add( style );

	return foodBlockHeadline;
}
function makeFoodBlockImage( index )
{
	const foodBlockImage = document.createElement( "img" );

	foodBlockImage.src = sources[index];
	foodBlockImage.alt = "Food image";
	foodBlockImage.classList.add( foodImageStyle );

	return foodBlockImage;
}
function fillFoodGrid( foodBlocks, index )
{
	const foodBlock = makeFoodBlock(),
		foodBlockHeadline = makeFoodBlockHeadline( index ),
		foodBlockImage = makeFoodBlockImage( index );

	foodBlock.append( foodBlockHeadline, foodBlockImage );
	foodBlocks.append( foodBlock );
}
export default function replaceWithMenu()
{
	main.replaceChildren( makeFoodGrid() );
}