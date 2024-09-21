import React from "react";
import image from "../components/Ai Profile image.png";
import { IoSendSharp } from "react-icons/io5";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { lime } from "@mui/material/colors";

import LeftPositionedTimeline from "./Timeline";

const PlanSubmission = () => {
  return (
    <div className="p-4 bg-slate-100 min-h-screen">
      {/* Container for the header and process completed section */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:p-2">
        {/* Left Section */}
        <div className="flex-1 mb-4 lg:mb-0">
          <h1 className="text-2xl lg:text-3xl font-semibold">
            Hello Muhammed!
          </h1>
          <p className="text-sm lg:text-base text-black">Administrator</p>
          <div className="mt-3">
            <h1 className="text-sm lg:text-base font-semibold">
              Plan Submission
            </h1>
            <p className="text-xs text-gray-600">
              Lorem ipsum is simply dummy text
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start lg:items-end lg:ml-4">
          {/* Name Section */}
          <div className="flex items-center mb-2">
            <div className="bg-gray-200 w-9 h-9 mr-2 rounded-full">
              <img src={image} alt="User" className="rounded-full w-9 h-9" />
            </div>
            <div className="">
              <p className="text-sm  lg:text-base  font-semibold">
                Muhammed Riyas AV
              </p>

              {/* Time Section */}
              <div className="flex  items-center ">
                <p className="text-xs mr-12 lg:text-xs text-gray-600">
                  Started at: 10:00 AM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 mt-4">
        {/* Left Section - Course Selection and List */}
        <div className="lg:w-[25%]">
          <div>
            <select className="block w-full p-2 border border-gray-300 text-sm bg-gray-50 rounded text-gray-500">
              <option>Choose Course</option>
            </select>
          </div>
          {/* Courses List */}
          <div className="bg-white h-full w-full rounded-xl p-4 mt-3">
            <div>
              <h3 className="text-base font-semibold text-gray-500 text-left">
                Courses
              </h3>
              <div className="text-black text-[12px] mt-3">
                {[
                  "Bachelor of Mechanical Engineering",
                  "Master of Electrical and Computer Engineering",
                  "MSc in Civil Engineering",
                  "MSc in Robotics and Automation",
                ].map((course, index) => (
                  <div
                    key={index}
                    className="mt-3 border-t border-gray-200 pt-2"
                  >
                    <p className="text-left font-medium">{course}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-base font-semibold text-left text-gray-500">
                Universities
              </h3>
              <div className="text-black text-[13px] mt-3">
                {[
                  "Harvard University, USA",
                  "University of Oxford, UK",
                  "University of Sydney, Australia",
                ].map((university, index) => (
                  <div
                    key={index}
                    className="mt-3 border-t border-gray-200 pt-2"
                  >
                    <p className="text-left font-medium">{university}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Center Section - Process Completed and Timeline */}
        <div className="lg:w-[30%]">
          <div className="bg-white h-full p-4 rounded-xl flex items-center justify-between lg:justify-start w-full mt-4 lg:mt-0">
            <div className="flex items-center">
              <h2 className="text-3xl font-normal mr-3">20%</h2>
              <div>
                <h2 className="text-base font-semibold">Process Completed</h2>
                <p className="text-xs text-gray-500">
                  Lorem Ipsum is simply dummy text
                </p>
              </div>
            </div>
            <button className="bg-black text-white text-[13px] font-semibold px-6 py-2 rounded ml-5">
              View Analysis
            </button>
          </div>
          <div className="h-[27rem] w-full bg-white mt-3 p-4 rounded-xl shadow">
            <h2 className="text-black text-sm font-semibold">
              Process Timeline
            </h2>
            <p className="text-xs">
              Lorem ipsum is simply dummy text of the printing
            </p>
            <div className="mr-96  mt-6">
              <Timeline position="right">
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot sx={{ margin: "0", bgcolor: lime[500] }} />
                    <TimelineConnector
                      sx={{ bgcolor: lime[500], minHeight: "10px" }}
                    />
                  </TimelineSeparator>
                  <TimelineContent
                    sx={{
                      marginTop: "-8px",
                      whiteSpace: "nowrap", // Prevents text wrapping
                      fontSize: "0.75rem",
                      fontWeight: 550,
                      textOverflow: "ellipsis", // Adds ellipsis if text overflows
                      fontFamily: "poppins",
                    }}
                  >
                    Enter your name as per your passport
                    <p className="text-[10px] font-normal text-gray-600">
                      lorem ipsum is simple down to erath
                    </p>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot sx={{ margin: "0", bgcolor: lime[500] }} />
                    <TimelineConnector
                      sx={{ bgcolor: lime[500], minHeight: "10px" }}
                    />
                  </TimelineSeparator>
                  <TimelineContent
                    sx={{
                      marginTop: "-8px",
                      whiteSpace: "nowrap", // Prevents text wrapping
                      fontSize: "0.75rem",
                      fontWeight: 550,
                      textOverflow: "ellipsis", // Adds ellipsis if text overflows
                      fontFamily: "poppins",
                    }}
                  >
                    Upload a profile-image(passport-sized photgraph)
                    <p className="text-[10px] font-normal text-gray-600">
                      lorem ipsum is simple down to erath
                    </p>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot sx={{ margin: "0", bgcolor: lime[500] }} />
                    <TimelineConnector
                      sx={{ bgcolor: lime[500], minHeight: "10px" }}
                    />
                  </TimelineSeparator>
                  <TimelineContent
                    sx={{
                      marginTop: "-8px",
                      whiteSpace: "nowrap", // Prevents text wrapping
                      fontSize: "0.75rem",
                      fontWeight: 550,
                      textOverflow: "ellipsis", // Adds ellipsis if text overflows
                      fontFamily: "poppins",
                    }}
                  >
                    provide your date of birth and gender
                    <p className="text-[10px] font-normal text-gray-600">
                      lorem ipsum is simple down to erath
                    </p>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot sx={{ margin: "0", bgcolor: lime[500] }} />
                    <TimelineConnector
                      sx={{ bgcolor: lime[500], minHeight: "10px" }}
                    />
                  </TimelineSeparator>
                  <TimelineContent
                    sx={{
                      marginTop: "-8px",
                      whiteSpace: "nowrap", // Prevents text wrapping
                      fontSize: "0.75rem",
                      fontWeight: 550,
                      textOverflow: "ellipsis", // Adds ellipsis if text overflows
                      fontFamily: "poppins",
                    }}
                  >
                    Upload transcripts or marksheets for each qualification
                    <p className="text-[10px] font-normal text-gray-600">
                      lorem ipsum is simple down to erath
                    </p>
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
                      fontSize: "0.75rem",
                      fontWeight: 550,
                      textOverflow: "ellipsis", // Adds ellipsis if text overflows
                      fontFamily: "poppins",
                    }}
                  >
                    Process Completed
                    <p className="text-[10px] font-normal text-gray-600">
                      lorem ipsum is simple down to erath
                    </p>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </div>

        {/* Right Section - Chat */}
        <div className="lg:w-[28%] mt-4 lg:mt-0 h-[28rem]">
          {/* Chat Heading */}

          {/* Chat Container */}
          <div className="bg-white p-4 rounded-xl shadow h-full">
            <div className="flex items-center mb-2">
              <img
                src={image}
                alt="User"
                className="rounded-full w-8 h-8 mr-2"
              />
              <h2 className="text-[13px] font-semibold">Greeshma B</h2>
            </div>
            <div className="mt-2 w-[100%] border-t border-gray-200 pt-2"></div>

            {/* Chat Messages */}
            <div className="space-y-4 mb-4 h-full overflow-y-auto">
              <div className="text-black font-medium max-w-1245:text-[10px] text-xs flex justify-center items-center">
                17 Apr, 2024
              </div>
              <div className="flex space-x-2">
                <div className="bg-gray-200 w-7 h-7 max-w-1245:w-6 max-w-1245:h-6 rounded-full">
                  <img
                    src={image}
                    alt="User"
                    className="rounded-full w-8 h-8 mr-2"
                  />
                </div>
                <div className="text-[13px] max-w-1245:text-[10px] bg-lime-100 text-black p-2 px-2 max-w-1245:p-1.5 rounded-md">
                  Any doubts?
                </div>
              </div>

              <div className="flex space-x-2 justify-end">
                <div className="text-[13px] max-w-1245:text-[10px] font-medium text-black bg-gray-200 p-2 px-2 rounded-md">
                  OK, understood.
                </div>
                <div className="bg-gray-200 w-7 h-7 max-w-1245:w-6 max-w-1245:h-6 rounded-full">
                  <img
                    src={image}
                    alt="User"
                    className="rounded-full w-8 h-8 mr-2"
                  />
                </div>
              </div>

              <div className="flex space-x-2">
                <div className="bg-gray-200 w-7 h-7 max-w-1245:w-6 max-w-1245:h-6 rounded-full">
                  <img
                    src={image}
                    alt="User"
                    className="rounded-full w-8 h-8 mr-2"
                  />
                </div>
                <div className="text-[13px] max-w-1245:text-[10px] bg-lime-100 text-black p-2 px-2 max-w-1245:p-1.5 rounded-md">
                  Any doubts?
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="bg-gray-200 w-7 h-7 max-w-1245:w-6 max-w-1245:h-6 rounded-full">
                  <img
                    src={image}
                    alt="User"
                    className="rounded-full w-8 h-8 mr-2"
                  />
                </div>
                <div className="text-[13px] max-w-1245:text-[10px] bg-lime-100 text-black p-2 px-2 max-w-1245:p-1.5 rounded-md">
                  Any doubts?
                </div>
              </div>
              <div className="flex space-x-2 justify-end">
                <div className="text-[13px] max-w-1245:text-[10px] font-medium text-black bg-gray-200 p-2 px-2 rounded-md">
                  OK, understood.
                </div>
                <div className="bg-gray-200 w-7 h-7 max-w-1245:w-6 max-w-1245:h-6 rounded-full">
                  <img
                    src={image}
                    alt="User"
                    className="rounded-full w-8 h-8 mr-2"
                  />
                </div>
              </div>
              <div className="flex items-center p-2 pt-8 border-gray-200">
                <input
                  type="text"
                  placeholder="Send message"
                  className="flex-1 p-2 pl-4 border bg-gray-200 rounded-full focus:outline-none"
                />

                <div className="ml-2 cursor-pointer flex items-center justify-center bg-black rounded-full p-2 h-[40px] max-w-1245:h-[35px] w-[40px]">
                  <IoSendSharp className="text-lime-500 text-lg max-w-1245:text-[15px]" />
                </div>
              </div>
            </div>

            {/* Input Form */}
          </div>
          <div className="flex items-end justify-end">
            <button className="flex bg-black text-white text-sm font-semibold px-6 py-2 rounded-lg mt-4">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanSubmission;
