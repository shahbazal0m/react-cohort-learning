const RenderingJSON = () => {
  /*let n = 12; //number
  let s = "Hello World"; //string
  let b = false; //boolean true/false
  let nu = null; 
  let un = undefined;
  let arr = [<h1>Shahbaz</h1>, 12, "Hii", true, null, undefined, "Hello"];
  let obj = {name: "Shahbaz", age: 22};


  return (
    <div>
      <h1>Data Types</h1>
      <h2>Number: {n}</h2>
      <h2>String: {s}</h2>
      <h2>Boolean: {b}</h2>
      <h2>Boolean: {b ? "Hello" : "Not Hello"}</h2> //example of boolean 
      <h2>Null: {nu}</h2>
      <h2>Undefined: {un}</h2>
      <h2>Array: {arr}</h2>
      <h2>Object: {obj.name} | {obj.age}</h2>
    </div>
  );*/



  const Profiles = [
    {
      name: "Aman Sharma",
      age: 22,
      email: "aman.sharma@gmail.com",
      mobile: "9876543210",
      course: "B.Tech"
    },
    {
      name: "Neha Verma",
      age: 21,
      email: "neha.verma@gmail.com",
      mobile: "9123456789",
      course: "BCA"
    },
    {
      name: "Rahul Singh",
      age: 23,
      email: "rahul.singh@gmail.com",
      mobile: "9988776655",
      course: "B.Sc"
    },
    {
      name: "Pooja Patel",
      age: 20,
      email: "pooja.patel@gmail.com",
      mobile: "9090909090",
      course: "MBA"
    },
    {
      name: "Rohit Kumar",
      age: 24,
      email: "rohit.kumar@gmail.com",
      mobile: "9012345678",
      course: "MCA"
    }
  ];



  const updatedprofiles = Profiles.map((profile, index)=>{
    return(
      <li key = {index}>
        <h3>Name: {profile.name}</h3>
        <h3>Age: {profile.age}</h3>
        <h3>Email id: {profile.email}</h3>
        <h3>Mobile No: {profile.mobile}</h3>
        <h3>Course: {profile.course}</h3>
      </li>
    );
  });


  return(
    <div>
      <h1>Rendering JSON Data - Array of object</h1>
      <ol>{updatedprofiles}</ol>
    </div>
  );
};

export default RenderingJSON;