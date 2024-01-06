import CalComp from "../components/Cal";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {
  Typography,
  Divider,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";

const handleSubmit = (e) => {
  e.preventDefault();
};

export default function Booking() {
  return (
    <Container maxWidth="lg">
      {/* <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
        mt={2}
      >
        <Grid item xs={12}>
          <Divider
            sx={{
              color: "#1f3d2b",
              borderTop: "2px solid #1f3d2b",
              borderBottom: "2px solid #1f3d2b",
            }}
            variant="fullwidth"
            textAlign="center"
          >
            <Typography typography={{ xs: "h6", md: "h4" }}>
              Session Booking
            </Typography>
          </Divider>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" textAlign="justify">
            Welcome to{" "}
            <span style={{ color: "#74d143" }}>BEOS Session Booking!</span> Get
            ready to embark on a personalized English learning journey tailored
            just for you. Select your preferred session type.
          </Typography>
          <Typography variant="body1" textAlign="justify">
            {" "}
            whether it's an{" "}
            <span style={{ color: "#74d143" }}>individual session</span> for
            focused attention or a{" "}
            <span style={{ color: "#74d143" }}>group session </span>
            for a dynamic learning environment.
          </Typography>
          <Typography variant="body1" textAlign="justify">
            Specify your{" "}
            <span style={{ color: "#74d143" }}>desired subject</span> and feel
            free to provide{" "}
            <span style={{ color: "#74d143" }}>additional notes</span> to guide
            me in customizing your session.
          </Typography>
          <Typography variant="body1" textAlign="justify">
            Booking with BEOS ensures a uniquely crafted experience that aligns
            with your language learning objectives –
            <span style={{ color: "#74d143" }}> reserve your spot now!</span>
          </Typography>
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
      </Grid> */}
      <CalComp />
    </Container>
  );
}
