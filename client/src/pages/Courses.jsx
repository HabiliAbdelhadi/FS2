import React from "react";
import CoursesCards from "../components/CoursesCards";
import { Container, Grid, Typography } from "@mui/material";
import axios from "../api/axios";
import { useState, useEffect } from "react";

const Courses = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/courses");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container fullWidth="lg">
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            typography={{ xs: "body1", sm: "h6" }}
            textAlign="center"
            color="grey"
            mt={2}
          >
            MOST POPULAR COURSES
          </Typography>
          <Typography
            typography={{ xs: "h5", sm: "h4" }}
            textAlign="center"
            gutterBottom
          >
            Let's Work Together To Help You Achieve Your Goals Today!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CoursesCards data={data} sm={3} />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            allignItems: "center",
            my: 1,
          }}
        ></Grid>
      </Grid>
    </Container>
  );
};

export default Courses;
