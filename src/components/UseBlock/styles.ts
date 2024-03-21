import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center; /* Corrected property name */
  gap: 30px;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center; /* Corrected property name */
  align-items: center;
  margin-top: 15rem;

  @media screen and (max-width: 768px) {
    margin-top: 10rem; /* Adjust the margin as needed */
  }

  @media screen and (max-width: 480px) {
    margin-top: 5rem; /* Adjust the margin as needed */
  }
`;

export const Column = styled.div`
  flex: 1;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  max-width: 800px; /* Adjust as needed */

  @media screen and (max-width: 480px) {
    max-width: 100%; /* Adjust the width for smaller screens */
  }
`;
