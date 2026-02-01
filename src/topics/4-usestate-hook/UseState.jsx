import { useState } from "react";

const UsestateHook = () => {
  const [username, setUsername] = useState("Danish Shaikh");

  const ChangeHandler = () => {
    setUsername("Shahbaz Alam");
    // console.log(username);
  };

  console.log(username); //console hameshaa function kee bahar likhengee, agar value changing dekhnaa hai too

  return (
    <div>
      <h1>Username</h1>
      <h2>{username}</h2>
      <button onClick={ChangeHandler}>Change Name</button>
    </div>
  );
};

export default UsestateHook;
