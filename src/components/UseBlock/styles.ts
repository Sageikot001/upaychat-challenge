import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-text: center;
  gap: 30px;
  margin-bottom: 50px;
  `;
  
  export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-text: center;
    align-items: center;
    margin-top: 15rem;
    
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
