import React from "react";

function MemberFilter() {
  return (
    <div className="w-72 p-16 bg-white flex justify-center flex-col rounded-lg">
      <h1 className="font-medium text-lg text-center">Filter Members by</h1>
      <div className="mt-2">
        <h2 className="font-medium text-md mt-2">District:</h2>
        <select className=" h-10">
          <option value="" disabled selected>
            Select District
          </option>
          <option>Colombo</option>
          <option>Kandy</option>
          <option>Galle</option>
          <option>Kurunegala</option>
          <option>Anuradhapura</option>
        </select>

        <h2 className="font-medium text-md mt-2">Volunteer Type:</h2>
        <select className="h-10">
          <option value="" disabled selected>
            Select Volunteer Type
          </option>
          <option>Medical</option>
          <option>Engineering</option>
          <option>Education</option>
          <option>Legal</option>
          <option>Other</option>
        </select>

        <h2 className="font-medium text-md mt-2">Volunteer Level:</h2>
        <select className="h-10">
          <option value="" disabled selected>
            Select Volunteer Level
          </option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
          <option>Expert</option>
        </select>
      </div>
    </div>
  );
}

export default MemberFilter;
