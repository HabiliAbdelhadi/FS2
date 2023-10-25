import { Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6}>
        <Container
          maxWidth={false}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="Billel.png" alt="billel_pic" style={{ width: "90%" }}></img>
        </Container>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          typography={{ xs: "h5", sm: "h2" }}
          textAlign={{ xs: "center", md: "left" }}
          gutterBottom
        >
          Guiding You to Unlock Your Potential
        </Typography>
        <Typography
          typography={{ xs: "body1", sm: "h5" }}
          textAlign={{ xs: "center", md: "left" }}
          gutterBottom
        >
          Studying is a lifelong journey. And the beautiful thing about learning
          is that nobody can take it away from you. Stop searching, enjoy the
          process.
        </Typography>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            mt: "10px",
          }}
        >
          <Button
            variant="outlined"
            color="mgreen"
            sx={{ mr: "4px", borderRadius: "12px", borderWidth: "1px" }}
            component={Link}
            to="/courses"
          >
            <Typography textAlign="center">All courses</Typography>
          </Button>
          <Button
            variant="contained"
            color="mgreen"
            sx={{ borderRadius: "12px" }}
            component={Link}
            to="/booking"
          >
            <Typography textAlign="center">Book a session</Typography>
          </Button>
        </Container>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
