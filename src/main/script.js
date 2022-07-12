import "./style.css";

function header()
{
	const head = document.createElement( "h1" );

	head.textContent = "G'day";

	return head;
}
document.body.append( header() );