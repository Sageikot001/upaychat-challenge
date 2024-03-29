import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  H6,
  ButtonWrapper,
} from "./styles";

const ContentBlock = ({
  icon,
  subtitle,
  title,
  content,
  section,
  link,
  t,
  image,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
            {title ? <h1>{t(title)}</h1> : null}
              {!title && subtitle ? <H6>{t(subtitle)}</H6> : null}
              <Content>{t(content)}</Content>
              {Array.isArray(section) && (
            <ServiceWrapper>
              <Row justify="space-between">
                {section.map((item, index) => (
                  <Col key={index} span={11}>
                    <MinTitle>{t(item.title)}</MinTitle>
                  </Col>
                ))}
              </Row>
            </ServiceWrapper>
          )}
              {direction === "right" ? (
                <ButtonWrapper>
                   {Array.isArray(image) &&
                    image.map((item: { src: string }, index: number) => (
                      <img
                        key={index}
                        src={item.src}
                        alt={`Image ${index}`}
                        onClick={() => { window.location.href = item.link; }}
                      />
                    ))}
                  </ButtonWrapper>
              ) : (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {typeof section === "object" &&
                      section.map(
                        (
                          item: {
                            title: string;
                            content: string;
                            icon: string;
                          },
                          id: number
                        ) => {
                          return (
                            <Col key={id} span={11}>
                              <SvgIcon
                                src={item.icon}
                                width="60px"
                                height="60px"
                              />
                              <MinTitle>{t(item.title)}</MinTitle>
                              <MinPara>{t(item.content)}</MinPara>
                            </Col>
                          );
                        }
                      )}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
