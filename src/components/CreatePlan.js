import React, { useState } from 'react';
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { lime } from "@mui/material/colors";

const CreatePlan = () => {
  // State to keep track of the steps
  const [steps, setSteps] = useState([{ id: 1, value: '' }]);

  // Function to handle adding a new step
  const handleAddStep = () => {
    const newStep = { id: steps.length + 1, value: '' };
    setSteps([...steps, newStep]);
  };

  return (
    <div className="h-screen bg-slate-100 p-6 pl-9">
      {/* Top section */}
      <div className="flex-1 mb-4 lg:mb-0 ">
    <h1 className="text-2xl lg:text-3xl font-semibold">
      Hello Muhammed!
    </h1>
    <p className="text-sm lg:text-base text-black">Administrator</p>
    
  </div>
      <div className="mb-8 mt-4">
        <h1 className="text-lg font-medium">Create Plan</h1>
        <p className="text-gray-500 text-sm">
          Lorem Ipsum is simply dummy text of the printing and
          <br />
          typesetting industry. Lorem Ipsum has been the industry's.
        </p>
      </div>

      {/* Main section and timeline */}
      <div className="flex space-x-6">
        {/* Main section */}
        <div className="w-1/4">
          {/* Country Dropdown */}
          <div className="mb-6">
            <select className="w-full p-2 border border-gray-300 text-gray-700 bg-slate-100">
              <option value="Canada">Canada</option>
              <option value="USA">USA</option>
              <option value="Australia">Australia</option>
            </select>
          </div>

          {/* Render dynamic steps */}
          {steps.map((step, index) => (
            <div className="flex items-center mb-4" key={step.id}>
              <input
                type="text"
                className="w-full p-2 border border-gray-400 text-gray-700 bg-white mr-2"
                placeholder={`Step 0${step.id}`}
              />
              {index === steps.length - 1 && (
                <button
                  onClick={handleAddStep}
                  className="relative text-white bg-blue-500 p-2 rounded-full h-5 w-5"
                >
                  <p className='absolute -top-1 right-1'>+</p>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Timeline section */}
        <div className="w-1/3 bg-white  p-4 rounded-xl shadow">
          <h2 className="text-black text-sm font-semibold">Steps</h2>
          <div className='flex justify-end items-end'>
          <button className="text-xs font-semibold text-white bg-black px-3 py-2 -mt-6 rounded-lg">
      View All
    </button>
    </div>
          <p className="text-xs">
            Lorem ipsum is simply dummy text of the printing
          </p>
          <div className="mt-5 w-60">
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
          </div>
        </div>
      </div>
      <div className='flex items-end justify-end'>
      <button className="text-xs  font-semibold text-red-500 bg-black px-6 py-2  rounded-lg">
      Cancel
    </button>
    <button className="text-xs ml-3  font-semibold text-white bg-black px-6 py-2 rounded-md">
      Create
    </button>
    </div>
    </div>
  );
};

export default CreatePlan;
