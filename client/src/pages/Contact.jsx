import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { Facebook, Email, Instagram } from "@mui/icons-material";
import { Link } from "react-router-dom";

const SocialLinks = ({ socialLinks }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        background: "#e0e0e0",
        borderColor: "#1f3d2b",
        borderWidth: "2px",
        borderRadius: "12px",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ color: "#1f3d2b" }}
        >
          Social Links
        </Typography>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          display="flex"
          flexDirection="column"
        >
          {socialLinks.map((item, index) => (
            <Grid item key={index} display="flex" flexDirection="row">
              <Link to={item.link} target="_blank" rel="noopener noreferrer" style={{display:"flex",flexDirection:"row",textDecoration:"none",color:"black"}} >
               <span style={{color:`${item.color}`}}>{item.icon}</span> <Typography marginLeft={2}>{item.text}</Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

const BookSessionCard = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        background: "#e0e0e0",
        borderColor: "#1f3d2b",
        borderWidth: "2px",
        borderRadius: "12px",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ color: "#1f3d2b" }}
        >
          Book a Session
        </Typography>
        <Typography paragraph>
          Embark on a personalized English language journey with us! Elevate
          your skills through tailored learning experiences designed just for
          you. Whether you're here to refine your communication or conquer
          complex grammar, your path to mastery begins with personalized
          sessions.
        </Typography>
        <Button
          variant="contained"
          color="mgreen"
          fullWidth
          component={Link}
          to="/booking"
        >
          Book a session
        </Button>
      </CardContent>
    </Card>
  );
};

const Contact = () => {
  const socialLinks = [
    { icon: <Facebook />, link: "https://www.facebook.com/YeahMrWhite" ,text : "Facebook page",color : "#4267B2"},
    { icon: <Instagram />, link: "#" ,text : "Instagram page",color : "#C13584"},
    { icon: <Email />, link: "mailto:yourteacher@example.com" ,text : "yourteacher@example.com",color : "#FFC72C"},
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle form submission (e.g., send email or store data)
  };

  return (
    <Container maxWidth="md" sx={{ mt: 3 }}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <SocialLinks socialLinks={socialLinks} />
            </Grid>
            <Grid item xs={12}>
              <BookSessionCard />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card
            variant="outlined"
            sx={{
              background: "#e0e0e0",
              borderColor: "#1f3d2b",
              borderWidth: "2px",
              borderRadius: "12px",
            }}
          >
            <CardContent>
              <Typography variant="h6" color="grey" textAlign="center">
                Got Questions? Need Assistance?
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                textAlign="center"
                sx={{ color: "#1f3d2b" }}
              >
                Reach Out!
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  sx={{ background: "white" }}
                  required
                  fullWidth
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  color="dggreen"
                />
                <TextField
                  sx={{ background: "white" }}
                  required
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  margin="normal"
                  color="dggreen"
                />
                <TextField
                  sx={{ background: "white" }}
                  required
                  fullWidth
                  multiline
                  rows={4}
                  label="Message"
                  variant="outlined"
                  margin="normal"
                  color="dggreen"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="mgreen"
                  fullWidth
                >
                  Leave me a message
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
