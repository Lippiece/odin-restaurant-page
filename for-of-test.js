const array   = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let forResult = 0;

for ( let index = 1; index <= array.length; index++ )
{
	forResult += array[index - 1];

}
const reduceResult = array.reduce( ( accumulator, value ) =>
{
	accumulator += value;

	return accumulator;
} );

console.log( forResult, reduceResult );