import { useState } from "react";

const AddUser = () => {
  const [users, setUsers] = useState([]);

  const handleAddUser = (event) => {
    event.preventDefault();
    // console.log(event.target);
    const form = event.target.elements;
    // console.log(form);
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    // console.log(userName, userEmail);
    const newUser = { userName, userEmail };
    const allUsers = [...users, newUser];
    setUsers(allUsers);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        console.log("New User Added Succefully");
        console.log(`welcome ${data.userName}`);
      });
  };
  console.log(users);
  return (
    <>
      <div>
        <h1>User Management Server</h1>
      </div>
      <div>
        <form onSubmit={handleAddUser}>
          <input
            type="text"
            name="userName"
            id=""
            placeholder="Enter Your Name..."
          />
          <input
            type="email"
            name="userEmail"
            id=""
            placeholder="Enter Your Email..."
          />
          <input type="submit" value="Add User" />
        </form>
      </div>
    </>
  );
};

export default AddUser;
