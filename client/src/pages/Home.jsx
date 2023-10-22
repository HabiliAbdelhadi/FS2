import React from "react";
import { Container, Box } from "@mui/material";
import HeroSection from "../components/HeroSection";
import WelcomeSection from "../components/WelcomeSection";
import ThirdSection from "../components/ThirdSection";
import VideoSection from "../components/VideoSection";
import CoursesSection from "../components/CoursesSection";
import Testemonials from "../components/Testemonials";

const Home = () => {
  return (
    <>
      <Container sx={{ mt: "10px" }} maxWidth="lg">
        <br />
        <HeroSection />
      </Container>
      <Box maxWidth="lg">
        <br />
        <WelcomeSection />
      </Box>
      <Container maxWidth="lg">
        <br />
        <ThirdSection />
      </Container>
      <Box maxWidth="lg">
        <br />
        <VideoSection />
      </Box>
      <Container maxWidth="lg">
        <CoursesSection />
      </Container>
      <Box maxWidth="lg">
        <br />
        <Testemonials />
      </Box>
    </>
  );
};

export default Home;
