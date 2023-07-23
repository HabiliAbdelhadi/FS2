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
    <Card variant="outlined" sx={{ background: "#e0e0e0" }}>
      <CardContent>
        <Typography variant="h6" align="center" gutterBottom>
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
              <Link to={item.link} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </Link>
              <Typography marginLeft={2}>{item.link}</Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

const BookSessionCard = () => {
  return (
    <Card variant="outlined" sx={{ background: "#e0e0e0" }}>
      <CardContent>
        <Typography variant="h6" align="center" gutterBottom>
          Book a Session
        </Typography>
        <Typography paragraph>
          You can book an individual or a group session after signing up or
          logging in. We offer personalized learning experiences to improve your
          English language skills.
        </Typography>
        <Button variant="contained" color="success" fullWidth>
          Sign Up / Book session
        </Button>
      </CardContent>
    </Card>
  );
};

const Contact = () => {
  const socialLinks = [
    { icon: <Facebook />, link: "#" },
    { icon: <Instagram />, link: "#" },
    { icon: <Email />, link: "mailto:yourteacher@example.com" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle form submission (e.g., send email or store data)
  };

  return (
    <Container maxWidth="md" sx={{ padding: "16px", maxWidth: { xs: "90%" } }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <SocialLinks socialLinks={socialLinks} />
            </Grid>
            <Grid item>
              <BookSessionCard />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ background: "#e0e0e0" }}>
            <CardContent>
              <Typography variant="h4" align="center" gutterBottom>
                Contact English Teacher
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  sx={{ background: "white" }}
                  required
                  fullWidth
                  label="Name"
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  sx={{ background: "white" }}
                  required
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  margin="normal"
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
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Send Message
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
