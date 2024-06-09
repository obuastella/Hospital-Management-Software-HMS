"use client";
import React from "react";
import { Box, Typography, Avatar, Button, styled, Paper } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import MicIcon from "@mui/icons-material/Mic";

const VideoContainer = styled(Paper)({
  padding: "16px",
  marginBottom: "16px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const VideoCallSection = () => {
  return (
    <VideoContainer>
      <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
        <Avatar
          alt="Doctor"
          src="/static/images/avatar/2.jpg"
          sx={{ width: 100, height: 100, marginRight: 2 }}
        />
        <Avatar
          alt="Patient"
          src="/static/images/avatar/3.jpg"
          sx={{ width: 100, height: 100 }}
        />
      </Box>
      <Typography variant="h6">Ronnie Fleming</Typography>
      <Typography variant="caption">00:15:24</Typography>
      <Box mt={2} display="flex" justifyContent="center">
        <Button variant="outlined" startIcon={<CallIcon />} sx={{ mx: 1 }}>
          Call
        </Button>
        <Button variant="outlined" startIcon={<VideocamIcon />} sx={{ mx: 1 }}>
          Video
        </Button>
        <Button variant="outlined" startIcon={<MicIcon />} sx={{ mx: 1 }}>
          Mute
        </Button>
      </Box>
    </VideoContainer>
  );
};

export default VideoCallSection;
