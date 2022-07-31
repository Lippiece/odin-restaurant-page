import { css } from "@emotion/css";
const main = document.querySelector( "main" );

export default function replaceWithContacts()
{
	const paragraph = document.createElement( "p" ),
		style = css( { color: "aqua" } );

	paragraph.textContent = "8-800-555-35-35";
	paragraph.classList.add( style );
	main.replaceChildren( paragraph );
}