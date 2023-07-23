import React from "react";
import { Container, Typography, CardMedia } from "@mui/material";

const IntroVid = () => {
  return (
    <Container
      maxWidth={false}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "24px",
        borderRadius: "8px",
        marginBottom: "10px",
      }}
    >
      <Typography
        variant="h4"
        style={{
          marginBottom: "24px",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "28px", // Default font size for larger screens
        }}
      >
        Introduction Video
      </Typography>
      {/* Add the video here */}
      <CardMedia
        component="video"
        src="pexels-camila-flores-16883440 (1080p).mp4"
        controls
        sx={{ width: { xs: "100%", md: "80%" } }}
      />
    </Container>
  );
};

export default IntroVid;
