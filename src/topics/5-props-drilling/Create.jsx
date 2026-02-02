import { useState } from "react";

const Create = (props) => {
  console.log(props);

  const [fullname, setfullname] = useState("");
  const [age, setage] = useState("18");

  const submitHandler = (e) => {
    e.preventDefault();
    const newuser = { fullname, age };
    console.log(newuser);
  };

  return (
    <div>
      <h1>Register user</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setfullname(e.target.value)}
          value={fullname}
          type="text"
          placeholder="Full name"
        />

        <input
          onChange={(e) => setage(e.target.value)}
          value={age}
          type="number"
          placeholder="Age"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Create;
