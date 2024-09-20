import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { lime } from "@mui/material/colors";

export default function LeftPositionedTimeline() {
  return (
    <Timeline position="right">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ margin: "0", bgcolor: lime[500] }} />
          <TimelineConnector sx={{ bgcolor: lime[500], minHeight: "10px" }} />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            marginTop: "-8px",
            whiteSpace: "nowrap", // Prevents text wrapping
            fontSize: '0.75rem',
            fontWeight: 550,
            textOverflow: "ellipsis", // Adds ellipsis if text overflows
            fontFamily: "poppins"
          }}
        >
          Enter your name as per your passport 
          <p className="text-[10px] font-normal text-gray-600">lorem ipsum is simple down to erath</p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ margin: "0", bgcolor: lime[500] }} />
          <TimelineConnector sx={{ bgcolor: lime[500], minHeight: "10px" }} />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            marginTop: "-8px",
            whiteSpace: "nowrap", // Prevents text wrapping
            fontSize: '0.75rem',
            fontWeight: 550,
            textOverflow: "ellipsis", // Adds ellipsis if text overflows
            fontFamily: "poppins"
          }}
        >
          Upload a profile-image(passport-sized photgraph) 
          <p className="text-[10px] font-normal text-gray-600">lorem ipsum is simple down to erath</p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ margin: "0", bgcolor: lime[500] }} />
          <TimelineConnector sx={{ bgcolor: lime[500], minHeight: "10px" }} />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            marginTop: "-8px",
            whiteSpace: "nowrap", // Prevents text wrapping
            fontSize: '0.75rem',
            fontWeight: 550,
            textOverflow: "ellipsis", // Adds ellipsis if text overflows
            fontFamily: "poppins"
          }}
        >
          provide your date of birth and gender 
          <p className="text-[10px] font-normal text-gray-600">lorem ipsum is simple down to erath</p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ margin: "0", bgcolor: lime[500] }} />
          <TimelineConnector sx={{ bgcolor: lime[500], minHeight: "10px" }} />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            marginTop: "-8px",
            whiteSpace: "nowrap", // Prevents text wrapping
            fontSize: '0.75rem',
            fontWeight: 550,
            textOverflow: "ellipsis", // Adds ellipsis if text overflows
            fontFamily: "poppins"
          }}
        >
          Upload transcripts or marksheets for each qualification
          <p className="text-[10px] font-normal text-gray-600">lorem ipsum is simple down to erath</p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ margin: "0", bgcolor: lime[500] }} />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            marginTop: "-8px",
            whiteSpace: "nowrap", // Prevents text wrapping
            fontSize: '0.75rem',
            fontWeight: 550,
            textOverflow: "ellipsis", // Adds ellipsis if text overflows
            fontFamily: "poppins"
          }}
        >
          Process Completed
          <p className="text-[10px] font-normal text-gray-600">lorem ipsum is simple down to erath</p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
