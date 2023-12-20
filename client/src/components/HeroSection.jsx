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
          <img
            src="BillelChelby.png"
            alt="billel_pic"
            style={{ width: "90%" }}
          ></img>
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
          typography={{ xs: "h6", sm: "h3" }}
          textAlign={{ xs: "center", md: "left" }}
          gutterBottom
        >
          Guiding You to Unlock Your{" "}
          <span style={{ color: "#74d143" }}>Full</span> Potential
        </Typography>
        <Typography
          typography={{ xs: "body2", sm: "h6" }}
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
            color="dggreen"
            sx={{
              mr: "4px",
              borderRadius: "10px",
              borderWidth: "1px",
            }}
            component={Link}
            to="/courses"
          >
            <Typography textAlign="center">All courses</Typography>
          </Button>
          <Button
            variant="contained"
            color="sgreen"
            sx={{ borderRadius: "10px", color: "#1f3d2b" }}
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
