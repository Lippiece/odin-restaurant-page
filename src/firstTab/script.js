const content = document.querySelector( "#content" );

function makeInitialElements()
{
	// Image, headline para about the restaurant
	const para = document.createElement( "p" ),
		headline = document.createElement( "h1" );

	para.textContent     = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis totam eum cum corporis at? Aliquid, adipisci quaerat nemo explicabo odit, officia nisi numquam repudiandae, ipsum obcaecati repellat asperiores impedit.";
	headline.textContent = "The Phylosophy Ingredient";

	return {
		headline,
		para,
	};
}
const elements = makeInitialElements();

for ( const key in elements )
{
	const element = elements[key];

	content.append( element );
}