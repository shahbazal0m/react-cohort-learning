// import { Fragment } from "react";

const Day2Events = () => {
  // yahan likhegee js kaa logic 

  // return <div>App</div>; // single return

  /*return(
    <div>
      <div>App</div>
      <div>Hello</div>
      <div>World</div>
    </div>
  ); //Multiple return Estarhaa see multiple div yaa multiple containers return kar saktee hai*/

  /*return(
    <Fragment>
      <div>App</div>
      <div>Hello</div>
      <div>World</div>
    </Fragment> // fragment tag yee hamee react see miltaa hai, aur yee space bhi nahi letaa hai 
  );*/

  /*return(
    <>
      <div>App</div>
      <div>Hello</div>
      <div>World</div>
    </> // (empty tag) yee bhi same Fragment tag kii tarhaa kaam kartaa hai
  );*/


  // Event Handling
  // yee non-parameterized function hai
  const handleClick = ()=>{
    alert("Button Clicked!");
  };

  // yee parameterized function hai
  const handleparaclick = (msg)=>{
    alert(msg);
  };

  // const wrapperhandler = ()=> handleparaclick("Parameterized button Click");
  

  return(
    <>
      {/* curliy bracket kee ander joo bhi kucch likhtee hai woh direct screen par dekh jaataa hai */}
      <h1>{2 + 3}</h1>  
      <h1>Event Handling</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={()=>handleparaclick("Parameterized button Click")}>
       Click Me Parameterized
      </button>
    </>
  );

};



export default Day2Events;

// A function component will always return HTML
// we can not writ anything after return
// we can only return single data/ entity/ variable/ value
// there must be single return in a function and that must be last statement
