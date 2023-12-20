import { Grid, Paper, Typography } from "@mui/material";

const WelcomeSection = () => {
  return (
    <Paper
      sx={{
        borderRadius: "0 12px 12px 0 ",
        background: "#acf460",
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
            sx={{ color: "#505e11" }}
          >
            WELCOME TO MY PAGE
          </Typography>
          <Typography
            // ml={24}
            typography={{ xs: "h5", sm: "h4" }}
          >
            My name is Billel Chelbi.
          </Typography>
          <Typography
            // mr={24}
            typography={{ xs: "h5", sm: "h4" }}
            gutterBottom
          >
            I’m a certified English teacher.
          </Typography>

          <Typography
            //ml={24}
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
          mb={1}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="picWelcome.png" alt="WelcomePic" width="75%"></img>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default WelcomeSection;
