import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
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
  `;
// Add additional styles as needed

// import styled from 'styled-components';

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;


// export const Column = styled.div`
//   width: calc(33.33% - 10px); /* Divide the container into three columns with a gap of 10px */
//   padding: 10px;
//   background-color: #f0f0f0; /* Example background color */
//   border-radius: 5px;
//   text-align: center;
// `;
