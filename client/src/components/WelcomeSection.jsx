import { Grid, Paper, Typography } from "@mui/material";

const WelcomeSection = () => {
  return (
    <Paper
      sx={{
        borderRadius: "0 12px 12px 0 ",
        background: "#1f3d2b",
        width: { xs: "97%", lg: "105%" },
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={2} sm={1}></Grid>
        <Grid
          item
          xs={10}
          sm={5}
          sx={{
            display: "flex",
            flexDirection: "column",

            justifyContent: "center",
          }}
        >
          <Typography
            typography={{ xs: "body1", sm: "h6" }}
            mt={3}
            // ml={24}
            gutterBottom
            sx={{ color: "#74d143" }}
          >
            WELCOME TO MY PAGE
          </Typography>
          <Typography
            // ml={24}
            color="white"
            typography={{ xs: "h5", sm: "h4" }}
          >
            My name is Billel Chelbi.
          </Typography>
          <Typography
            // mr={24}
            color="white"
            typography={{ xs: "h5", sm: "h4" }}
            gutterBottom
          >
            I’m a <span style={{ color: "#74d143" }}>certified</span> English
            teacher.
          </Typography>

          <Typography
            //ml={24}
            color="white"
            mr={2}
            typography="body1"
          >
            I’m here for one reason – to help you make an impact on the world by
            providing valuable content, remarkable skills, comprehensive
            training, and increased motivation. I’ll assist you in overcoming
            the barriers that have been holding you back. Discover the
            encouragement and support you need!
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: { xs: "center", sm: "right" },
            alignItems: { xs: "center", sm: "right" },
          }}
        >
          <img
            height="100%"
            src="welcomSec.png"
            alt="WelcomePic"
            width="75%"
            style={{ borderRadius: "0 12px 12px 0 " }}
          ></img>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default WelcomeSection;
