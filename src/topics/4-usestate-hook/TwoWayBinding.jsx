import { useState } from "react";

const TwoWayBinding = () => {
  const [fullname, setfullname] = useState("");
  const [age, setage] = useState("18");

  const submitHandler = (e) => {
    e.preventDefault();
    const newuser = { fullname, age };
    console.log(newuser); //q hum 2-way binding lagaa rahee thee q kii yahee woh dataa hai jise hum bhejengee api mein backend mein aur database mein call kar kee
    // console.log("Form Submit Successfull")
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
      <hr />
    </div>
  );
};

export default TwoWayBinding;
