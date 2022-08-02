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
		_homeButton = new Button( "Home", () => { main.replaceChildren( makeMainContent() ) },  navbar ),
		_menuButton = new Button( "Menu", () => { replaceWithMenu() },  navbar ),
		_contactsButton = new Button( "Contacts", () => { replaceWithContacts() },  navbar ),
		navbarStyle = css( {
			backgroundColor: "#444",
			borderRadius   : "0 0 1em 1em",
			padding        : "10px",
			margin         : "0 25vw 10px",
			display        : "flex",
			justifyContent : "space-evenly",
			alignItems     : "center",
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
		containerStyle = css( {
			backgroundColor: "rgba(255,255,255,0.1)",
			backgroundImage: `url(${ mainImageSource })`,
			backgroundSize : "cover",
		} ),
		headlineStyle = css( {
			fontSize: "5rem",
			margin  : "0 0 10px 0",
			opacity : 0.8,
		} ),
		paraStyle = css( {
			fontSize: "4rem",
			// opacity : 0.2,
			color   : "rgba( 0, 0, 0, .4 )",
		} );

	headline.textContent = "\"The Phylosophy Ingredient\" restaurant";
	headline.classList.add( headlineStyle );
	paragraph.textContent = "The pain itself is pain, it loves the container adipisicing process. As there is no such thing as none of our present, nor do we foresee the pain of the inventor, and for a similar reason, we are obliged to deem it. I'll explain it by flattering myself but not too harsh.";
	paragraph.classList.add( paraStyle );
	container.classList.add( containerStyle );
	container.append( headline, paragraph );

	return container;
}
content.prepend( makeNavbar() );
body.classList.add( bodyStyle );
main.append( makeMainContent() );
main.classList.add( mainStyle );