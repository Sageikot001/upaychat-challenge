import CardContent from "../../content/CardContent.json";
import Card from "../../common/Card";
import { CardContentProps } from "../../common/Card/types";
import { Container } from "./styles";

const CardSection = () => {
  
    const { standardCard, premiumCard, vipCard }: Record<string, CardContentProps> = CardContent;

  return (
    <>
    <Container>
        <h1>Cards</h1>
    <div style={{display: "flex", gap: "20px"}}>
        <Card type="standard" content={standardCard} />
        <Card type="premium" content={premiumCard} />
        <Card type="vip" content={vipCard} />
      </div>
    </Container>
    </>
  )
}

export default CardSection