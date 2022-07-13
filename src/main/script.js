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

	return head;
}
document.body.append( header() );