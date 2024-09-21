import React, { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { lime } from "@mui/material/colors";
import { FaFileImage, FaFileVideo, FaFileAudio } from "react-icons/fa";

const CreatePlan = () => {
  const [steps, setSteps] = useState([
    { id: 1, value: "", showDropdown: false, fileType: "" },
  ]);

  const handleAddStep = () => {
    const newStep = {
      id: steps.length + 1,
      value: "",
      showDropdown: false,
      fileType: "",
    };
    setSteps([...steps, newStep]);
  };

  const handleStepChange = (id, value) => {
    const updatedSteps = steps.map((step) =>
      step.id === id ? { ...step, value } : step
    );
    setSteps(updatedSteps);
  };

  const handleCheckboxChange = (id) => {
    const updatedSteps = steps.map((step) =>
      step.id === id
        ? {
            ...step,
            showDropdown: !step.showDropdown,
            fileType: step.showDropdown ? "" : step.fileType,
          }
        : step
    );
    setSteps(updatedSteps);
  };

  const handleFileTypeChange = (id, fileType) => {
    const updatedSteps = steps.map((step) =>
      step.id === id ? { ...step, fileType } : step
    );
    setSteps(updatedSteps);
  };

  const renderFileTypeIcon = (fileType) => {
    switch (fileType) {
      case "image":
        return <FaFileImage className="text-lime-500" />;
      case "video":
        return <FaFileVideo className="text-lime-500" />;
      case "audio":
        return <FaFileAudio className="text-lime-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-slate-100 p-4 lg:p-6 flex flex-col justify-between">
      {/* Top section */}
      <div>
        <div className="mb-4 lg:mb-0">
          <h1 className="text-xl lg:text-3xl font-semibold">Hello Muhammed!</h1>
          <p className="text-sm lg:text-base text-black">Administrator</p>
        </div>

        <div className="mb-4 lg:mb-8 mt-2 lg:mt-4">
          <h1 className="text-base lg:text-lg font-medium">Create Plan</h1>
          <p className="text-gray-500 text-xs lg:text-sm">
            Lorem Ipsum is simply dummy text of the printing and
            <br className="hidden lg:block" />
            typesetting industry. Lorem Ipsum has been the industry's.
          </p>
        </div>

        {/* Main section and timeline */}
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
          {/* Main section */}
          <div className="w-full lg:w-1/4">
            {/* Country Dropdown */}
            <div className="mb-4 lg:mb-6">
              <select className="w-full p-2 border border-gray-300 text-gray-700 bg-slate-100 rounded-lg">
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
                <option value="Australia">Australia</option>
              </select>
            </div>

            {/* Render dynamic steps */}
            {steps.map((step, index) => (
              <div className="mb-4" key={step.id}>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-400 text-gray-700 bg-white mr-2 rounded-lg"
                    placeholder={`Step 0${step.id}`}
                    value={step.value}
                    onChange={(e) => handleStepChange(step.id, e.target.value)}
                  />
                  {index === steps.length - 1 && (
                    <button
                      onClick={handleAddStep}
                      className="relative text-white bg-black p-2 rounded-full h-5 w-5"
                    >
                      <p className="absolute -top-1 right-1">+</p>
                    </button>
                  )}
                </div>

                {/* Checkbox and small dropdown for file upload option */}
                <div className="flex items-center justify-end mr-8 mt-1 space-x-2 ">
                  <input
                    type="checkbox"
                    className="mr-1"
                    checked={step.showDropdown}
                    onChange={() => handleCheckboxChange(step.id)}
                  />
                  <label className="text-xs lg:text-sm text-gray-600">
                    Upload File
                  </label>
                  {step.showDropdown && (
                    <select
                      className="p-1 border border-gray-300 text-gray-700 bg-slate-100 rounded-lg text-xs"
                      value={step.fileType}
                      onChange={(e) =>
                        handleFileTypeChange(step.id, e.target.value)
                      }
                    >
                      <option value="">Select File Type</option>
                      <option value="image">Image</option>
                      <option value="video">Video</option>
                      <option value="audio">Audio</option>
                    </select>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Timeline section */}
          <div className="w-full lg:w-1/3 bg-white p-4 rounded-xl shadow">
            <h2 className="text-black text-sm font-semibold">Steps</h2>
            <div className="flex justify-end items-end">
              <button className="text-xs font-semibold text-white bg-black px-3 py-2 -mt-6 rounded-lg">
                View All
              </button>
            </div>
            <p className="text-xs">
              Lorem ipsum is simply dummy text of the printing
            </p>
            <div className="mt-5 w-full overflow-auto">
              <Timeline
                position="right"
                sx={{ display: "flex", alignItems: "flex-start" }}
              >
                {steps.map((step, index) => (
                  <TimelineItem key={step.id}>
                    <TimelineSeparator>
                      <TimelineDot sx={{ margin: "0", bgcolor: lime[500] }} />
                      {index < steps.length - 1 && (
                        <TimelineConnector
                          sx={{ bgcolor: lime[500], minHeight: "20px" }}
                        />
                      )}
                    </TimelineSeparator>
                    <TimelineContent
                      sx={{
                        marginTop: "-8px",
                        whiteSpace: "nowrap",
                        fontSize: "0.75rem",
                        fontWeight: 550,
                        textOverflow: "ellipsis",
                        fontFamily: "poppins",
                        marginLeft: "16px", // Adjust margin for better alignment
                        display: "flex",

                        gap: "4px", // Add space between icon and text
                      }}
                    >
                      {step.value || `Step 0${step.id}`}
                      {renderFileTypeIcon(step.fileType)}{" "}
                      {/* Render file type icon */}
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="flex items-end justify-end mt-4">
        <button className="text-xs font-semibold text-red-500 bg-black px-4 lg:px-7 py-2 lg:py-3 rounded-lg">
          Cancel
        </button>
        <button className="text-xs ml-3 font-semibold text-white bg-black px-4 lg:px-7 py-2 lg:py-3 rounded-md">
          Create
        </button>
      </div>
    </div>
  );
};

export default CreatePlan;
