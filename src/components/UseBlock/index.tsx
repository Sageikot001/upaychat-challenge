
import { Container, TextWrapper, Column, Grid } from './styles'; // Import styled components
import { UseBlockProps } from './types';

const UseBlock = ({ content, title, image }: UseBlockProps) => {
  // Check if content is provided
  if (!content || !Array.isArray(content)) return null;

  // Divide the content into three equal parts
  const chunkSize = Math.ceil(content.length / 3);
  const columns = [];

  // Split the content into chunks to render in columns
  for (let i = 0; i < content.length; i += chunkSize) {
    columns.push(content.slice(i, i + chunkSize));
  }

  return (
    <Container>
    <h1>Why Use UpayChat</h1>
    <Grid>
      {columns.map((column, columnIndex) => (
        <Column key={columnIndex}>
          {column.map((item, index) => (
            <div key={index} style={{"width": "360px", "height": "140px"}}>
                <div style={{'display':'flex'}}>
                {item.image && <img src={item.image} alt={`Image ${index}`} style={{"width": "50px", "height": "50px"}}/>}
                <h6>{item.title}</h6>
                </div>
              <p>{item.content}</p>
            </div>
          ))}
        </Column>
      ))}
    </Grid>
      </Container>
  );
};

export default UseBlock;

// import React from 'react';
// import styled from 'styled-components';
// import { withTranslation, TFunction } from 'react-i18next';

// // Styled components
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const TextWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 10px;
//   max-width: 800px; /* Adjust as needed */
// `;

// const Column = styled.div`
//   display: flex;
//   flex: 1, 1, 1;
//   width: calc(33.33% - 10px); /* Divide the container into three columns with a gap of 10px */
//   padding: 10px;
//   background-color: #f0f0f0; /* Example background color */
//   border-radius: 5px;
//   text-align: center;
// `;

// interface Props {
//   title: string;
//   content: string;
//   t: TFunction;
// }

// const Block = ({ title, content, t }: Props) => {
//   return (
//     <Container>
//       <h6>{t(title)}</h6>
//       <TextWrapper>
//         {content.split('|').map((item, index) => (
//           <Column key={index}>{t(item.trim())}</Column>
//         ))}
//       </TextWrapper>
//     </Container>
//   );
// };

// export default withTranslation()(Block);
