import { css } from "@emotion/css";
const main = document.querySelector( "main" );

export default function replaceWithContacts()
{
	const paragraph = document.createElement( "p" ),
		style = css( {
			color  : "f63",
			opacity: 0.8,
		} );

	paragraph.textContent = "8-800-555-35-35";
	paragraph.classList.add( style );
	main.replaceChildren( paragraph );
}