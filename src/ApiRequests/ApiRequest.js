import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function ApiRequest() {
  const [crscode, setCrscode] = useState("course");
  const [title, setTitle] = useState("sahdjk");
  const [instructor, setInstructor] = useState("jasd");
  const [total_seats, setTotalSeats] = useState(1);
  const [deadline, setDeadline] = useState("2019-04-28T14:45:15");
  const [sessions_allowed, setSessionsAllowed] = useState("jasd");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(crscode);
    // console.log(title);
    // console.log(instructor);
    // console.log(total_seats);
    // console.log(deadline);
    // console.log(sessions_allowed);

    const newCourse = {
      crscode: crscode,
      title: title,
      instructor: instructor,
      total_seats: total_seats,
      deadline: deadline,
      sessions_allowed: sessions_allowed,
    };
    const json = JSON.stringify(newCourse);
    console.log("Course code:", newCourse.crscode);

    ////Posting Correctly.......................
    //   axios.post('http://localhost:3001/admin/add-course', { json })
    //     .then(res=>{
    //       console.log(res);
    //       console.log(res.data);
    //       // window.location = "/" //This line of code will redirect you once the submission is succeed
    //     })

    const response = await axios({
      method: "post",
      url: "http://localhost:3001/admin/add-course",
      data: { newCourse },
      // headers: { "Content-Type": "multipart/form-data" },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Course Name:</label>
      <input
        type="text"
        name="title"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Course Code:</label>
      <input
        type="text"
        name="crscode"
        required
        value={crscode}
        onChange={(e) => setCrscode(e.target.value)}
      />

      <label>Instructor name:</label>
      <input
        type="text"
        name="instructor_name"
        value={instructor}
        required
        onChange={(e) => setInstructor(e.target.value)}
      />

      <label>Total Seats:</label>
      <input
        type="number"
        name="total_seats"
        value={total_seats}
        required
        onChange={(e) => setTotalSeats(e.target.value)}
      />

      <label>Deadline:</label>
      <input
        type="date"
        name="deadline"
        value={deadline}
        required
        onChange={(e) => setDeadline(e.target.value)}
      />
      <label>Allowed Sessions</label>
      <input
        type="text"
        name="sessions"
        required
        value={sessions_allowed}
        onChange={(e) => setSessionsAllowed(e.target.value)}
      />
      <button type="submit">Submit form</button>
    </form>
  );
}

export default ApiRequest;
