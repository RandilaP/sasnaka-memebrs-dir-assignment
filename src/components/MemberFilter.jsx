import React from "react";

function MemberFilter() {
  return (
    <div className="w-72 h-96 bg-white">
      <h1>Filter Members by</h1>
      <div>
        <h2>District:</h2>
        <select className="w-60 h-10">
          <option value="" disabled selected>
            Select District
          </option>
          <option>Colombo</option>
          <option>Kandy</option>
          <option>Galle</option>
          <option>Kurunegala</option>
          <option>Anuradhapura</option>
        </select>

        <h2>Volunteer Type:</h2>
        <select className="w-60 h-10">
          <option value="" disabled selected>
            Select Volunteer Type
          </option>
          <option>Medical</option>
          <option>Engineering</option>
          <option>Education</option>
          <option>Legal</option>
          <option>Other</option>
        </select>

        <h2>Volunteer Level:</h2>
        <select className="w-60 h-10">
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
