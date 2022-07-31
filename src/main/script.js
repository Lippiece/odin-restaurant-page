import { css } from "@emotion/css";
import mainImageSource from "./main.jfif";
import replaceWithMenu from "../menuTab/script.js";
import replaceWithContacts from "../contactsTab/script.js";
const content = document.querySelector( "#content" ),
	main = document.querySelector( "main" ),
	mainStyle = css( { margin: "0 20vw" } );

export default content;
function makeImage()
{
	const image = document.createElement( "img" ),
		imageWrapper = document.createElement( "abbr" );

	imageWrapper.title = "Unsplash: @picturesbyalbert";
	image.src          = mainImageSource;
	image.alt          = "Image of a restaurant";
	image.style.width  = "400px";
	imageWrapper.append( image );

	return imageWrapper;
}
function makeButton()
{
	const button = document.createElement( "button" );

	button.textContent = "Tab1";
	button.addEventListener( "click", () =>
	{
		replaceWithFirstTab();
		// import "style.css";
	} );

	return button;
}
function makeInitialElements()
{
	// Image, headline para about the restaurant
	const paragraph = document.createElement( "p" ),
		headline = document.createElement( "h1" ),
		paraStyle = css( { color: "green" } );

	headline.textContent  = "The Phylosophy Ingredient";
	paragraph.textContent = "The pain itself is pain, it loves the main adipisicing process. As there is no such thing as none of our present, nor do we foresee the pain of the inventor, and for a similar reason, we are obliged to deem it. I'll explain it by flattering myself but not too harsh.";
	paragraph.classList.add( paraStyle );

	return [
		headline,
		paragraph,
	];
}
main.classList.add( mainStyle );