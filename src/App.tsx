import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import {
  amber,
  grey,
  lightBlue,
  lightGreen,
  yellow,
} from "@mui/material/colors";
import Tab from "@mui/material/Tab";
import * as React from "react";
import FormPropsTextFields from "./components/FormPropsTextFields";
import { SimpleDialog } from "./components/SimpleDialog";

const emails = ["username@gmail.com", "user02@gmail.com"];

export default function LabTabs() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel
          value="1"
          sx={{ minHeight: 1900, backgroundColor: amber[50] }}
        >
          <Box
            component="section"
            sx={(theme) => ({
              backgroundColor: grey[50],
              padding: theme.spacing(2),
              minHeight: 500,
              borderRadius: 6,
            })}
          >
            <Typography variant="subtitle1" component="div">
              Selected: {selectedValue}
            </Typography>
            <br />
            <Button variant="outlined" onClick={handleClickOpen}>
              Open simple dialog
            </Button>
            <SimpleDialog
              selectedValue={selectedValue}
              open={open}
              onClose={handleClose}
            />
          </Box>
        </TabPanel>
        <TabPanel
          value="2"
          sx={{ minHeight: 1900, backgroundColor: lightBlue[50] }}
        >
          <Box
            component="section"
            sx={(theme) => ({
              backgroundColor: yellow[50],
              padding: theme.spacing(2),
              minHeight: 500,
              borderRadius: 6,
            })}
          >
            <Typography variant="h6">Item Two</Typography>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/aQa43wuGGyo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
        </TabPanel>
        <TabPanel
          value="3"
          sx={{ minHeight: 1900, backgroundColor: lightGreen[50] }}
        >
          <FormPropsTextFields />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
