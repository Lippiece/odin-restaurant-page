import { css } from "@emotion/css";
// import images
import food1 from "./img/1.jpg";
import food2 from "./img/2.jpg";
import food3 from "./img/3.jpg";
import food4 from "./img/4.jpg";
import food5 from "./img/5.jpg";
import food6 from "./img/6.jpg";
import food7 from "./img/7.jpg";
import food8 from "./img/8.jpg";
const main = document.querySelector( "main" ),
	sources = [food1, food2, food3, food4, food5, food6, food7, food8],
	foodImageStyle = css( {
		width         : "100%",
		// Height        : "100%",
		objectFit     : "cover",
		objectPosition: "center",
	} );


