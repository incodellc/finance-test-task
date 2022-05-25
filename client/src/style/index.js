import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
export default createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  }
  :root {
    --secondary: #acacf9;
    --main: #7d91fa;
    --contrast: #d9d62e;
    --light-gray: #ddd;
    --disabled: #bbb;
  }
`;
