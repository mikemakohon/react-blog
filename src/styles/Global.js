import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body,
#root {
  height: 100%;
}

body {
  font-family: Raleway, sans-serif;
  margin: 0;
  font-size: 1.4em;
  background-color: #dfdfdf;
  color: #333333;
}

a.active {
  pointer-events: none;
}


.loading,
.error {
  text-align: center;
  margin: 40px auto;
}
`;

export default GlobalStyles;
