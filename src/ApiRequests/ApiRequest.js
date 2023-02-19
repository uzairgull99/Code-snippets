import React from "react";
import { useState } from "react";
import axios from "axios";

function ApiRequest() {
  const [user, setUser] = useState({
    crscode: "crscode",
    title: "title",
    instructor: "instructor",
    total_seats: "",
    deadline: "2019-04-28T14:45:15",
    sessions_allowed: "sessions_allowed",
  });

  const changeHandler=(e)=>{
    const {name,value}=e.target;
    setUser({...user,[name]:value});
    console.log(user);
}
  
  const submit = async (e) => {
    e.preventDefault();
    console.log(user);
    const response = await axios({
      method: "post",
      url: "http://localhost:3001/admin/add-course",
      data: user,
      // headers: { "Content-Type": "multipart/form-data" },
    });
  };

  return (
    <div>
      <h2>Add Course: </h2>

      <form onSubmit={submit}>
        <input
          type="text"
          name="crscode"
            value={user.crscode}
          onChange={changeHandler}
       

        />
        <input
          type="text"
          name="title"
          value={user.title}
          onChange={changeHandler}
        

        />
        <input
          type="text"
          name="instructor"
          value={user.instructor}
          onChange={changeHandler}
       

        />
        <input
          type="number"
          name="total_seats"
          value={user.total_seats}
          onChange={changeHandler}
          

        />
        <input
          value={user.sessions_allowed}
          type="text"
          name="sessions_allowed"
          onChange={changeHandler}
         
        />
        <input
          type="date"
          name="deadline"
          value={user.deadline}
          onChange={changeHandler}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ApiRequest;
