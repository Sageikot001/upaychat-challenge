import CardContent from "../../content/CardContent.json";
import Card from "../../common/Card";
import { CardContentProps } from "../../common/Card/types";
import { CardsHolder, Container } from "./styles";

const CardSection = () => {
  
    const { standardCard, premiumCard, vipCard }: Record<string, CardContentProps> = CardContent;

  return (
    <>
    <Container>
        <h1>Cards</h1>
    <CardsHolder>
        <Card type="standard" content={standardCard} />
        <Card type="premium" content={premiumCard} />
        <Card type="vip" content={vipCard} />
      </CardsHolder>
    </Container>
    </>
  )
}

export default CardSection