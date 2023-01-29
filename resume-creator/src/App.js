import './App.css';
import PersonalInfoForm from "./Components/PersonalInfoForm"
import ExperienceForm from "./Components/ExperienceForm"
import EducationForm from "./Components/EducationForm"
import { useState } from 'react';
import uniqid from "uniqid";
import PersonalInfo from "./Components/PersonalInfo"
import ExperienceInfo from "./Components/ExperienceInfo";


function App() {

  const [jobArr, setJobArr] = useState([[<ExperienceForm key={uniqid()}/>,uniqid()]]);

  function handleJobArr(){
    setJobArr([...jobArr,[<ExperienceForm key={uniqid()} />,uniqid()]])
  }

  function deleteJob(jobDelId){
    console.log("lamo")
    setJobArr(jobArr.filter(job => job[1]!==jobDelId))
  }

  const jobChildren = jobArr.map(job => {
    return(
      <div className="jobForm" key={job[1]}>
        {job[0]}
        <button onClick={()=>{deleteJob(job[1])}}>DELETE</button>
        <br />
        <br />
      </div>
    )
  })

  const [eduArr, setEduArr] = useState([[<EducationForm key={uniqid}/>,uniqid()]])

  function handleEduArr(){
    setEduArr([...eduArr,[<EducationForm key={uniqid()}/>,uniqid()]])
  }

  function deleteEdu(eduDelId){
    setEduArr(eduArr.filter(edu => edu[1]!==eduDelId))
  }

  const eduChildren = eduArr.map(edu=>{
    return(
      <div className="eduForm" key={edu[1]}> 
        {edu[0]}
        <button onClick={()=>{deleteEdu(edu[1])}}>DELETE</button>
        <br />
        <br />
      </div>
    )
  })



  //RETURN THE FINAL APPLICATION
  return (
    <div className="container">

      <div className="form">
        
        <PersonalInfoForm/>
      
        <div className="jobHeader">
          <h3>Experience </h3>
          <button onClick={handleJobArr}>ADD</button>
        </div>

        <div className="jobContent">
          {jobChildren}
          <br />
        </div>
        

        <div className="eduHeader">
          <h3>Education</h3>
          <button onClick={handleEduArr}>ADD</button>
        </div>

        <div className="eduContent">
          {eduChildren}
          <br />
        </div>

      </div>

      <div className="resume">
            <PersonalInfo />
            <ExperienceInfo />
        </div>

    </div>
);
}

export default App;