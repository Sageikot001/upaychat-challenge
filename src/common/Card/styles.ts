// styles.ts
import styled, { keyframes } from 'styled-components';

// Define the keyframes for the color transition animation
const colorTransition = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

// Define the CardContainer styled component with the transitioning color
export const CardContainer = styled.div`
  background: linear-gradient(to right, green, yellow);
  background-size: 200% auto; /* Increase background size for animation */
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  animation: ${colorTransition} 3s linear infinite; /* Adjust animation duration as needed */
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;


export const CardImage = styled.img`
  width: 10rem;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const CardBenefits = styled.ul`
  margin-bottom: 10px;
  list-style-type: disc;
  padding-left: 20px;
`;

export const CardDescription = styled.p`
  margin-bottom: 10px;
`;

export const CardPrice = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const PurchaseButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
