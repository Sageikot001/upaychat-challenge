// Card.tsx
import React from 'react';
import {
  CardContainer,
  CardImage,
  CardTitle,
  CardBenefits,
  CardDescription,
  CardPrice,
  PurchaseButton,
} from './styles';
import { CardContentProps, CardType } from './types';

interface Props {
  type: CardType;
  content: CardContentProps;
}

const Card: React.FC<Props> = ({ type, content }) => {
  const { image, benefits, description, price } = content;

  return (
    <CardContainer>
      <CardImage src={image} alt="Card Image" />
      <CardTitle>{type} Card</CardTitle>
      <CardBenefits>
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </CardBenefits>
      <CardDescription>{description}</CardDescription>
      <CardPrice>${price}</CardPrice>
      <PurchaseButton>Buy Now</PurchaseButton>
    </CardContainer>
  );
};

export default Card;
