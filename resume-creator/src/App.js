import { useState } from 'react';
import './App.css';
import Experience from "./Experience";
import uniqid from "uniqid";

function App() {

  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("")
  const [phone,setPhone] = useState("")
  const [location,setLocation] = useState("")
  const [email,setEmail] = useState("")

  const [jobChildren, setJobChildren] = useState([<Experience key={uniqid()}  />]);

  function handleJobChildren(){
    setJobChildren([...jobChildren,<Experience key={uniqid()} />])
  }


  function handleFirstName(e){
    setFirstName(e.target.value)
  }
  
  function handleLastName(e){
    setLastName(e.target.value)
  }

  function handlePhone(e){
    setPhone(e.target.value)
  }

  function handleLocation(e){
    setLocation(e.target.value)
  }

  function handleEmail(e){
    setEmail(e.target.value);
    console.log(firstName,lastName,phone,location,email,e.target.value,e.target);
  }

  return (
    <div className="Container">
      <div className="personalInfo">
        <input type="text" placeholder='First Name' id="firstName" value={firstName} onChange={handleFirstName}  />
        <input type="text" placeholder='Last Name' id="lastName" value={lastName}  onChange={handleLastName}/>
        <input type="text" placeholder='Phone Number' id="phoneNumber" value={phone} onChange={handlePhone}/>
        <input type="text" placeholder='Location' id="location"  value={location} onChange={handleLocation} />
        <input type="text" placeholder='E-Mail' id="email" value={email} onChange={handleEmail}/>
      </div>
      <br/>
      <div className="jobContainer">
        {jobChildren}
        <button className="add" onClick={handleJobChildren}>ADD</button>
      </div>
    </div>
  );
}

export default App;
