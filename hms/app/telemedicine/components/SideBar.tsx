"use client";
import React from "react";
import { Box, Typography, Button, Paper, styled } from "@mui/material";

const SideBarContainer = styled(Paper)({
  padding: "16px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
});

const SideBar = () => {
  return (
    <SideBarContainer>
      <Box mb={2}>
        <Typography variant="h6" gutterBottom>
          28 Dec, 2023
        </Typography>
        <Typography variant="body2" gutterBottom>
          Discussion of blood test results and discussion of well-being.
          Prescribing medications.
        </Typography>
        <Button variant="contained" color="primary">
          More details
        </Button>
      </Box>
      <Box mb={2}>
        <Typography variant="h6">Quote of the Day</Typography>
        <Typography variant="body2">
          "Let thy food be thy medicine and thy medicine be thy food." -
          Hippocrates
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6">40% off premium</Typography>
        <Typography variant="body2" gutterBottom>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when.
        </Typography>
        <Button variant="contained" color="secondary">
          Upgrade
        </Button>
      </Box>
    </SideBarContainer>
  );
};

export default SideBar;
