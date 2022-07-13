import "./style.css";
import imageSource from "./main.jfif";
const content = document.querySelector( "#content" );

function makeImage()
{
	const image = document.createElement( "img" ),
		imageWrapper = document.createElement( "abbr" );

	imageWrapper.title = "Unsplash: @picturesbyalbert";
	image.src          = imageSource;
	image.name         = "Unsplash: @picturesbyalbert";
	image.alt          = "Image of a restaurant";
	image.style.width  = "400px";
	imageWrapper.append( image );

	return imageWrapper;
}
function makeButton()
{
	const button = document.createElement( "button" );

	button.textContent = "Tab1";

	return button;
}
function makeInitialElements()
{
	// Image, headline para about the restaurant
	const para = document.createElement( "p" ),
		headline = document.createElement( "h1" );

	para.textContent     = "The pain itself is pain, it loves the main adipisicing process. As there is no such thing as none of our present, nor do we foresee the pain of the inventor, and for a similar reason, we are obliged to deem it. I'll explain it by flattering myself but not too harsh.";
	headline.textContent = "The Phylosophy Ingredient";

	return [
		headline,
		para,
	];
}
document.body.append( header() );