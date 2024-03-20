import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        image={IntroContent.image}
        section={IntroContent.section}
        icon="phones.png"
        id="intro"
      />
      <ContentBlock
        direction="left"
        subtitle={AboutContent.title}
        content={AboutContent.text}
        icon="people.png"
        id="about"
      />
      <ContentBlock
        direction="right"
        subtitle={MissionContent.title}
        content={MissionContent.text}
        icon="role.png"
        id="mission"
      />
    </Container>
  );
};

export default Home;
