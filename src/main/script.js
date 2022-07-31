import { css } from "@emotion/css";
import mainImageSource from "./main.jfif";
import replaceWithMenu from "../menuTab/script.js";
import replaceWithContacts from "../contactsTab/script.js";
const content = document.querySelector( "#content" ),
	main = document.querySelector( "main" ),
	mainStyle = css( { margin: "0 20vw" } );

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
/* Creating a navbar with two buttons. */
function makeNavbar()
{
	const navbar = document.createElement( "nav" ),
		homeButton = document.createElement( "button" ),
		menuTab = document.createElement( "button" ),
		contactsTab = document.createElement( "button" ),
		menuTabStyle = css( {
			backgroundColor: "green",
			color          : "white",
			border         : "none",
			padding        : "10px",
			margin         : "10px",
		} );

	// Home button
	homeButton.textContent = "Home";
	homeButton.addEventListener( "click", () =>
	{ main.replaceChildren( makeMainContent() ) } );
	navbar.append( homeButton );
	// Menu tab
	menuTab.textContent = "Menu";
	menuTab.addEventListener( "click", () =>
	{ replaceWithMenu() } );
	navbar.append( menuTab );
	// Contacts tab
	contactsTab.textContent = "Contacts";
	contactsTab.addEventListener( "click", () =>
	{ replaceWithContacts() } );
	navbar.append( contactsTab );
	navbar.classList.add( menuTabStyle );

	return navbar;
}
function makeMainContent()
{
	// Image, headline, para about the restaurant inside a container.
	const	container = document.createElement( "div" ),
		paragraph = document.createElement( "p" ),
		headline = document.createElement( "h1" ),
		paraStyle = css( { color: "green" } );

	headline.textContent  = "\"The Phylosophy Ingredient\" restaurant";
	paragraph.textContent = "The pain itself is pain, it loves the container adipisicing process. As there is no such thing as none of our present, nor do we foresee the pain of the inventor, and for a similar reason, we are obliged to deem it. I'll explain it by flattering myself but not too harsh.";
	paragraph.classList.add( paraStyle );
	container.append( makeImage(), headline, paragraph );

	return container;
}
content.append( makeNavbar() );
main.append( makeMainContent() );
main.classList.add( mainStyle );