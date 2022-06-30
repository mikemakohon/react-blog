import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800&display=swap");

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

h1,
h2,
h3,
p {
  margin: 0;
}

input,
textarea {
  color: #333333;
  padding: 8px;
  font-size: 1em;
  border-radius: 4px;
  border: 1px solid #d4d4d4;
  background-color: #ffffff;
  display: block;
  width: 100%;
  box-sizing: border-box;
}

.page-title {
  text-align: center;
  margin: 40px auto;
  color: #333333;
}

.loading,
.error {
  text-align: center;
  margin: 40px auto;
}
`;

export default GlobalStyles;
