import styled from "styled-components";


export const Container = styled("div")`
    display: flex;
    flex-direction: column;
    align-text: center;
    align-items: center;
    margin-top: 15rem;
    
@media screen and (max-width: 768px) {
        margin-top: 3rem;
    }
    `;
    
export const CardsHolder = styled("div")`
display: flex;
gap: 50px;

@media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }

@media  screen and (max-width: 480px){
    flex-direction: column;
   flex-wrap: wrap;
`