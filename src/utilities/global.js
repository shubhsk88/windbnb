import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
${normalize()};

*{
    box-sizing:border-box;
}

a{
    text-decoration:none;
    color:inherit;

}
body{
   font-family:'Lato',sans-serif;
}

input,button{
    &:focus,&:active{
        outline:none;
    }
}


`;
