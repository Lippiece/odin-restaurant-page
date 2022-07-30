import { css } from "@emotion/css";
const content = document.querySelector( "#content" );

export default function replaceWithFirstTab()
{
	const paragraph = document.createElement( "p" ),
		style = css`
		color:red;
		`;

	paragraph.textContent = "And by that, who would look at him as a whole with his body? He seeks to gain something, no one hates to explain it, but his duties are never to be repudiated; Home And by that, who would look at him as a whole with his body? He seeks to gain something, no one hates to explain it, but his duties are never to be repudiated; Home And by that, who would look at him as a whole with his body? He seeks to gain something, no one hates to explain it, but his duties are never to be repudiated; Home And by that, who would look at him as a whole with his body? Someone wants to get something that no one hates to explain, but never repudiate their responsibilities;";
	paragraph.classList.add( style );
	content.replaceChildren( paragraph );
}