import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }

    a:hover {
        color: #18216d;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0px 0px 0px 1px;
        }
    }

    h1,
    h2 {
        font-family: 'Motiva Sans Bold', serif;
        color: rgb(78, 229, 74);
        font-size: 100px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }
    
    
    
    h3,
    h4
     {
        font-size: 40px;
        font-weight:300;
        line-height: 2rem;
        padding: 0.5rem 0;
        text-transform: uppercase;
        color: #000;
        font-family: 'Motiva Sans Bold', serif;
        
        @media only screen and (max-width: 890px) {
          font-size: 30px;
        }
      
        @media only screen and (max-width: 414px) {
            font-size: 20px;
        }
    }

    h5,
    h6 {
        font-size: 20px;
        font-weight:300;
        line-height: 2rem;
        padding: 0.5rem 0;
        // text-transform: uppercase;
        color: #000;
        font-family: 'Motiva Sans Bold', serif;
        
        @media only screen and (max-width: 890px) {
          font-size: 20px;
        }
      
        @media only screen and (max-width: 414px) {
            font-size: 10px;
        }
    }

    p {
        color: #18216d;
        font-size: 15px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;

    // color: #18216d;
    // font-size: 56px;
    // line-height: 1.18;