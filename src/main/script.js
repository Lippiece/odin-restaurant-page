import "./style.css";
import imageSource from "./main.jfif";
const content = document.querySelector( "#content" );

function header()
{
	const head = document.createElement( "h1" );

	head.textContent = "G'day";

	return head;
}
document.body.append( header() );