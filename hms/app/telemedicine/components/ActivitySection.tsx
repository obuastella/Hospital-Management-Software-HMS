"use client";
import React from "react";
import { Box, Typography, Button, Avatar, styled, Paper } from "@mui/material";

const ActivityContainer = styled(Paper)({
  padding: "16px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
});

const activities = [
  {
    name: "Ronnie Fleming",
    date: "Sep 18",
    time: "9:00 AM",
    summary: "Consultation, prescription of medicines",
  },
  {
    name: "Jane Moss",
    date: "Sep 2",
    time: "10:00 AM",
    summary: "Counseling Psychology",
    repeat: true,
  },
  {
    name: "John Greene",
    date: "Aug 24",
    time: "10:30 AM",
    summary: "Eating Plan Diet",
  },
];

const ActivitySection = () => {
  return (
    <ActivityContainer>
      <Typography variant="h6" gutterBottom>
        Last activity
      </Typography>
      {activities.map((activity, index) => (
        <Box
          key={index}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Avatar alt={activity.name} src="/static/images/avatar/1.jpg" />
          <Typography variant="body1" sx={{ flexGrow: 1, mx: 2 }}>
            {activity.name}
          </Typography>
          <Typography variant="body2">{activity.date}</Typography>
          <Typography variant="body2">{activity.time}</Typography>
          <Typography variant="body2" sx={{ flexGrow: 2, mx: 2 }}>
            {activity.summary}
          </Typography>
          <Button
            variant="contained"
            color={activity.repeat ? "secondary" : "primary"}
          >
            {activity.repeat ? "Repeat" : "Get info"}
          </Button>
        </Box>
      ))}
    </ActivityContainer>
  );
};

export default ActivitySection;
