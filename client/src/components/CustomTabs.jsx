import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const StyledTabs = styled((props) => (
  <Tabs
    centered
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#74d143",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
      color: "#fff",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

const TabPanel = ({ value, index, children }) => {
  return <div hidden={value !== index}>{children}</div>;
};

export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: { xs: "100%", sm: "90%", md: "80%", lg: "70%" } }}>
      <Box sx={{ bgcolor: "#1f3d2b" }}>
        <StyledTabs value={value} onChange={handleChange}>
          <StyledTab label="Education" />
          <StyledTab label="Work experience" />
          <StyledTab label="Certification" />
        </StyledTabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Paper
          variant="outlined"
          sx={{ borderRadius: "0 0 12px 12px ", borderColor: "#1f3d2b" }}
          //   elevation={0}
        >
          <Grid container spacing={1} p={3}>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                flexDirection: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6"> 2019 — 2022</Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="body1">Université d'Alger II</Typography>
              <Typography variant="body1" color="grey">
                Bachlor's degree in the French Language
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Paper
          variant="outlined"
          sx={{ borderRadius: "0 0 12px 12px ", borderColor: "#1f3d2b" }}
          //   elevation={0}
        >
          <Grid container spacing={1} p={3}>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                flexDirection: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6"> 2021 — 2022</Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="body1">Skyeng</Typography>
              <Typography variant="body1" color="grey">
                Speaking coach / Language consultant
              </Typography>
            </Grid>

            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                flexDirection: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6"> 2020 — 2021</Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="body1">Britannia School</Typography>
              <Typography variant="body1" color="grey">
                English Language Teacher
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                flexDirection: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6"> 2019 — 2020</Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="body1">WM English School</Typography>
              <Typography variant="body1" color="grey">
                English Language Teacher
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Paper
          variant="outlined"
          sx={{ borderRadius: "0 0 12px 12px ", borderColor: "#1f3d2b" }}
          //   elevation={0}
        >
          <Grid container spacing={1} p={3}>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                flexDirection: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6"> 2021 — 2022</Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="body1">
                Teaching English as a Foreign Language
              </Typography>
              <Typography variant="body1" color="grey">
                TEFL
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </TabPanel>
    </Box>
  );
}
