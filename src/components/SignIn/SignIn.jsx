import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const SignIn = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack sx={{ padding: "2rem", gap: "1rem" }}>
      <Typography mb="4" fontWeight={"bold"}>
        Socio.Me
      </Typography>
      {/* Tab Layout */}
      <Box sx={{ width: "100%" }}>
        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab sx={{ width: "50%" }} label="Sign In" />
            <Tab sx={{ width: "50%" }} label="Sign Up" />
          </Tabs>
        </Box>
        {/* Tabs Content */}
        {/* For Sign IN  */}
        <CustomTabPanel value={value} index={0}>
          <Stack gap="1rem" mt={2}>
            <TextField id="username" label="User Name" variant="outlined" />
            <TextField id="password" label="Password" variant="outlined" />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Show Password"
              />
            </FormGroup>
          </Stack>
        </CustomTabPanel>
        {/* For Sign Up */}
        <CustomTabPanel value={value} index={1}>
          <Stack gap={"1rem"} mt={2}>
            <TextField id="firstname" label="First Name" variant="outlined" />
            <TextField id="lastname" label="Last Name" variant="outlined" />
            <TextField id="email" label="Email" variant="outlined" />
            <TextField id="password" label="Password" variant="outlined" />
            <TextField
              id="confirmPassword"
              label="Confirm Password"
              variant="outlined"
            />
            <TextField
              type="date"
              id="dob"
              variant="outlined"
              placeholder="DOB"
            />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Agree to terms and conditions"
              />
            </FormGroup>
          </Stack>
        </CustomTabPanel>
      </Box>
      {/* Submit Button */}
      <Button variant="contained">{value === 0 ? "Sign In" : "Sign Up"}</Button>
    </Stack>
  );
};

export default SignIn;
