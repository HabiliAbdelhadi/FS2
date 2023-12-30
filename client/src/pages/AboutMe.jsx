import React from "react";
import {
  Typography,
  Grid,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import VerifiedIcon from "@mui/icons-material/Verified";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import GroupsIcon from "@mui/icons-material/Groups";
import CustomizedTabs from "../components/CustomTabs";
const AboutMe = () => {
  return (
    <Container maxWidth="lg" margin={4}>
      <Grid container spacing={1.5} mt={2}>
        <Grid item xs={12} sm={4}>
          <img
            alt="Bilel_Chelbi"
            src="bilelpfp.jpg"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "18px",
              margin: "5px",
            }}
          ></img>
        </Grid>
        <Grid item xs={12} sm={8}>
          {/* 9edam el pic */}
          <List dense={{ xs: "true", md: "false" }}>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{
                  typography: { xs: "h6", md: "h4" },
                  gutterBottom: "true",
                }}
                primary="Meet Your Instructor"
              />{" "}
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: "#74d143" }}>
                <VerifiedIcon />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  typography: { xs: "body2", md: "h6" },
                }}
                primary="Certified & Experienced Native English Teacher with 5+ years of experience."
              />{" "}
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: "#74d143" }}>
                <TrendingUpIcon />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  typography: { xs: "body2", md: "h6" },
                }}
                primary="Improve your SPEAKING skills & confidence for career/business."
              />{" "}
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: "#74d143" }}>
                <WorkspacePremiumIcon />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  typography: { xs: "body2", md: "h6" },
                }}
                primary="A highly rated and experienced tutor."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: "#74d143" }}>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  typography: { xs: "body2", md: "h6" },
                }}
                primary="Speaks English (Native), Arabic (C2), French (Native)."
              />{" "}
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: "#74d143" }}>
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  typography: { xs: "body2", md: "h6" },
                }}
                primary=" +1100 lessons taught, +1100 student satisfied."
              />{" "}
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12} mt={2}>
          <Divider
            sx={{
              marginBottom: "10px",
              color: "#1f3d2b",
              borderTop: "2px solid #1f3d2b",
              borderBottom: "2px solid #1f3d2b",
            }}
            variant="fullwidth"
            textAlign="center"
          >
            <Typography typography={{ xs: "h6", md: "h4" }}>
              About Me
            </Typography>
          </Divider>

          <Typography typography={{ xs: "body2", md: "h6" }} gutterBottom>
            Hello! I'm Bilel. I have been teaching English for years! [I have
            around 2500 hours of Online teaching]
          </Typography>
          <Typography typography={{ xs: "body2", md: "h6" }} ml={1.5}>
            - I enjoy it so much, I have a lot of fun whenever I teach here on
            BEOS.
          </Typography>
          <Typography typography={{ xs: "body2", md: "h6" }} ml={1.5}>
            - I'm talkative, respectful, disciplined, lighthearted, resourceful
            and humorous. 😌
          </Typography>
          <Typography
            typography={{ xs: "body2", md: "h6" }}
            gutterBottom
            ml={1.5}
          >
            - I am calm and patient with students. 🙏
          </Typography>
          <Typography typography={{ xs: "body2", md: "h6" }}>
            I am a HUGE fan of music, psychology, philosophy, yoga & fitness,
            and geography and I always appreciate nice conversations.
          </Typography>
          <Typography typography={{ xs: "body2", md: "h6" }}>
            I have experience in teaching many age groups in all levels for
            multiple purposes. 🔄 (Business English, IELTS exam preparation,
            conversational classes, advanced vocabulary...)
          </Typography>
          <Typography typography={{ xs: "body2", md: "h6" }}>
            We will be mainly discussing many topics of your interest in order
            to motivate you to absorb more vocabulary ⭐️
          </Typography>
          <Typography typography={{ xs: "body2", md: "h6" }}>
            I will correct your mistakes verbally and in the form of written
            notes on our chat log. ✍️
          </Typography>
          <Typography typography={{ xs: "body2", md: "h6" }}>
            My classes are SAFE, I patiently work with my students to reach
            their goals. 🤓
          </Typography>
          <Typography typography={{ xs: "body2", md: "h6" }}>
            I encourage and inspire students to do their best at all times
            throughout the subscription! 😄
          </Typography>
          <Typography typography={{ xs: "body2", md: "h6" }}>
            So, I invite you to book a lesson with me and let's improve your
            speaking skills, shall we? 😁
          </Typography>
        </Grid>
        <Grid item xs={12} mt={2}>
          <Divider
            sx={{
              marginBottom: "10px",
              color: "#1f3d2b",
              borderTop: "2px solid #1f3d2b",
              borderBottom: "2px solid #1f3d2b",
            }}
            variant="fullwidth"
            textAlign="center"
          >
            <Typography typography={{ xs: "h6", md: "h4" }}>Resume</Typography>
          </Divider>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CustomizedTabs />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;
