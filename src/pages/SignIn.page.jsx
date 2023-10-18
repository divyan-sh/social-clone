import { Grid } from "@mui/material";
import React from "react";
import SignIn from "../components/SignIn/SignIn";
import Hero from "../components/SignIn/Hero";

const SignInPage = () => {
  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid item xs={4}>
        <SignIn />
      </Grid>
      <Grid item xs={8}>
        <Hero />
      </Grid>
    </Grid>
  );
};

export default SignInPage;
