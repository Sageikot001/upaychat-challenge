import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
// import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  Button,
} from "./styles";

const Header = () => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        
          <CustomNavLinkSmall onClick={() => scrollTo("intro")}>
            <Span>{("Send & Receive")}</Span>
          </CustomNavLinkSmall>
          <CustomNavLinkSmall onClick={() => scrollTo("about")}>
            <Span>{("Buy airtime & Data")}</Span>
          </CustomNavLinkSmall>
          <CustomNavLinkSmall onClick={() => scrollTo("mission")}>
            <Span>{("Pay Bills")}</Span>
          </CustomNavLinkSmall>
      
        <CustomNavLinkSmall
          style={{ marginLeft: "180px" }}
          onClick={() => ("")}
        >
          <Span>
            <Button>{("Login")}</Button>
          </Span>
        </CustomNavLinkSmall>

        <CustomNavLinkSmall
          onClick={() => ("")}
        >
          <Span>
            <Button>{("Register")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="upayLogo.png" width="40px" height="40px" />
            UpayChat
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default Header;
