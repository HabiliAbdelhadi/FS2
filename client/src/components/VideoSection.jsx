import {
  Grid,
  Paper,
  Typography,
  Container,
  CardMedia,
  Box,
} from "@mui/material";

const VideoSection = () => {
  return (
    <Paper
      sx={{
        borderRadius: "12px 0 0 12px",
        background: "#1f3d2b",
        width: { xs: "97%", lg: "105%" },
        marginLeft: { xs: "3%", lg: "5%" },
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
            alignItems: "center",
          }}
        >
          <Typography
            // mr={24}
            mt={1}
            typography={{ xs: "h5", sm: "h4" }}
            gutterBottom
            color="white"
          >
            Check out a short{" "}
            <span style={{ color: "#74d143" }}>video presentation</span>
          </Typography>

          <Typography
            //ml={24}
            mr={2}
            typography="body1"
            gutterBottom
            color="white"
            textAlign="justify"
          >
            I am sure that we all have far more potential than we believe or
            use, and I enjoy the process of helping my students bring that
            potential to the fore. I love seeing people happy and fulfilled in
            both their lives and business or career after acquiring new skills
            with me.
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
            }}
          >
            <img src="arrow.png" alt="arrow" width="35%"></img>
          </Box>
        </Grid>
        <Grid
          my={1}
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container>
            <CardMedia
              component="video"
              src="pexels-camila-flores-16883440 (1080p).mp4"
              controls
              sx={{
                borderRadius: "12px",
              }}
            />
          </Container>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default VideoSection;
