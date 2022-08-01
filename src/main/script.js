import { css } from "@emotion/css";
import mainImageSource from "./main.jfif";
import replaceWithMenu from "../menuTab/script.js";
import replaceWithContacts from "../contactsTab/script.js";
const content = document.querySelector( "#content" ),
	body = document.querySelector( "body" ),
	main = document.querySelector( "main" ),
	mainStyle = css( { margin: "0 20vw" } ),
	bodyStyle = css( {
		fontFamily     : "Rubik",
		backgroundColor: "#222",
		color          : "f63",
		height         : "100vh",
	} );

/* Creating an image element and appending it to a wrapper element. */
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
/*
 * This class creates a button element with the given text, adds an event listener to it, and appends
 * it to the given container.
 */
class Button
{
	constructor( text, listener, container )
	{
		const buttonStyle = css( {
			backgroundColor: "#444",
			color          : "f63",
			border         : "none",
			padding        : "10px",
			fontSize       : "1.5rem",
			cursor         : "pointer",
			opacity        : 0.8,
			transition     : "all 0.3s ease-in-out",
			"&:hover"      : {
				opacity  : 1,
				transform: "scale(1.1)",
			},
		} );

		this.button             = document.createElement( "button" );
		this.button.textContent = text;
		this.button.addEventListener( "click", listener );
		this.button.classList.add( buttonStyle );
		container.append( this.button );
	}
}
/* Creating a navbar with buttons. */
function makeNavbar()
{
	const navbar = document.createElement( "nav" ),
		_homeButton = new Button( "Home", () => { replaceWithMenu() },  navbar ),
		_menuButton = new Button( "Menu", () => { replaceWithMenu() },  navbar ),
		_contactsButton = new Button( "Contacts", () => { replaceWithContacts() },  navbar ),
		navbarStyle = css( {
			backgroundColor: "#444",
			border         : "none",
			padding        : "10px",
			margin         : "0 10px 10px 10px",
		} );

	navbar.classList.add( navbarStyle );

	return navbar;
}
function makeMainContent()
{
	// Image, headline, para about the restaurant inside a container.
	const	container = document.createElement( "div" ),
		paragraph = document.createElement( "p" ),
		headline = document.createElement( "h1" ),
		headlineStyle = css( {
			fontSize: "2.5rem",
			margin  : "0 0 10px 0",
			opacity : 0.8,
		} ),
		paraStyle = css( { opacity: 0.8 } );

	headline.textContent = "\"The Phylosophy Ingredient\" restaurant";
	headline.classList.add( headlineStyle );
	paragraph.textContent = "The pain itself is pain, it loves the container adipisicing process. As there is no such thing as none of our present, nor do we foresee the pain of the inventor, and for a similar reason, we are obliged to deem it. I'll explain it by flattering myself but not too harsh.";
	paragraph.classList.add( paraStyle );
	container.append( makeImage(), headline, paragraph );

	return container;
}
content.prepend( makeNavbar() );
body.classList.add( bodyStyle );
main.append( makeMainContent() );
main.classList.add( mainStyle );