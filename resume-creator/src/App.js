import './App.css';
import PersonalInfoForm from "./Components/PersonalInfoForm"
import ExperienceForm from "./Components/ExperienceForm"
import EducationForm from "./Components/EducationForm"
import { useEffect, useState } from 'react';
import uniqid from "uniqid";
import PersonalInfo from "./Components/PersonalInfo"
import ExperienceInfo from "./Components/ExperienceInfo";
import EducationInfo from "./Components/EducationInfo";
import SkillForm from "./Components/SkillForm";
import SkillInfo from "./Components/SkillInfo";


function App() {

  const [uniqueId, setUniqueId] = useState(uniqid());

  useEffect(()=>{

    setUniqueId(uniqid());

    let printer = document.createElement("button");
    printer.addEventListener("click",()=>{window.print()});
    printer.innerHTML="Print Resume";

    let form = document.querySelector("div.form");
    form.appendChild(printer)

  },[])

  const [jobArr, setJobArr] = useState([[<ExperienceForm key={uniqid()} uniqueId={uniqueId}/>,uniqid(),<ExperienceInfo key={uniqid()} uniqueId={uniqueId}/>]]);

  function handleJobArr(){
    setJobArr([...jobArr,[<ExperienceForm key={uniqid()} uniqueId={uniqueId}/>,uniqid(),<ExperienceInfo key={uniqid()} uniqueId={uniqueId}/>]])
  }

  function handleUniqueId(){
    setUniqueId(uniqid());
  }

  function deleteJob(jobDelId){
    console.log("lamo")
    setJobArr(jobArr.filter(job => job[1]!==jobDelId))
  }

  const jobChildren = jobArr.map(job => {
    return(
      <div className="jobForm" key={job[1]} id={job[1]}>
        {job[0]}
        <button onClick={()=>{deleteJob(job[1])}}>DELETE</button>
        <br />
      </div>
    )
  })

  const jobChildrenResume = jobArr.map(job =>{
    return(
    <div className="experienceResume" key={job[1]}>
      {job[2]}
    </div>
  )})

  const [eduArr, setEduArr] = useState([[<EducationForm key={uniqid()} uniqueId={uniqueId}/>,uniqid(),<EducationInfo key={uniqueId} uniqueId={uniqueId}/>]])

  function handleEduArr(){
    setEduArr([...eduArr,[<EducationForm key={uniqid()} uniqueId={uniqueId}/>,uniqid(),<EducationInfo key={uniqueId} uniqueId={uniqueId}/>]])
  }

  function deleteEdu(eduDelId){
    setEduArr(eduArr.filter(edu => edu[1]!==eduDelId))
  }

  const eduChildren = eduArr.map(edu=>{
    return(
      <div className="eduForm" key={edu[1]} id={edu[1]}> 
        {edu[0]}
        <button onClick={()=>{deleteEdu(edu[1])}}>DELETE</button>
        <br />
      </div>
    )
  })

  const eduChildrenResume = eduArr.map(edu=>{
    return(
      <div className="eduResume" key={edu[1]}>
        {edu[2]}
      </div>

    )
  })

  const [skillArr, setSkillArr] = useState([[<SkillForm key={uniqid()} uniqueId={uniqueId}/>,uniqid(),<SkillInfo key={uniqueId} uniqueId={uniqueId} />]]);

  function handleSkillArr(){
    setSkillArr([...skillArr,[<SkillForm key={uniqid()} uniqueId={uniqueId}/>,uniqid(),<SkillInfo key={uniqueId} uniqueId={uniqueId} />]]);
  }

  function deleteSkill(skillDelId){
    setSkillArr(skillArr.filter(skill => skill[1]!==skillDelId));
  }

  const skillChildren = skillArr.map(skill=>{
    return(
      <div className="skillFormMain" key={skill[1]} id={skill[1]}>
          {skill[0]}
          <button onClick={()=>{deleteSkill(skill[1])}} >DELETE</button>
      </div>
    )
  });

  const skillChildrenResume = skillArr.map(skill=>{
    return(
      <div className="skillResume" key={skill[1]}>
        {skill[2]}
      </div>
    )
  })

/* function reset(){
    setJobArr([[<ExperienceForm key={uniqid()} uniqueId={uniqueId}/>,uniqid(),<ExperienceInfo key={uniqid()} uniqueId={uniqueId}/>]])
    setEduArr([[<EducationForm key={uniqid()} uniqueId={uniqueId}/>,uniqid(),<EducationInfo key={uniqueId} uniqueId={uniqueId}/>]])
    setSkillArr([[<SkillForm key={uniqid()} uniqueId={uniqueId}/>,uniqid(),<SkillInfo key={uniqueId} uniqueId={uniqueId} />]])
  }
*/

  //RETURN THE FINAL APPLICATION
  return (
    <div className="container">

      <div id="header">
        <h1>RESUME CREATOR</h1>
      </div>

      <div className="form">
        
        <PersonalInfoForm/>
      
        <div className="jobHeader">
          <h3>Experience </h3>
          <button onClick={()=>{handleUniqueId();handleJobArr();}}>+</button>
        </div>

        <div className="jobContent">
          {jobChildren}
        </div>
        

        <div className="eduHeader">
          <h3>Education</h3>
          <button onClick={()=>{handleUniqueId();handleEduArr()}}>+</button>
        </div>

        <div className="eduContent">
          {eduChildren}
        </div>

        <div className="skillHeader">
          <h3>Skills</h3>
          <button onClick={()=>{handleUniqueId();handleSkillArr()}} >+</button>
        </div>

        <div className="skillContent">
          {skillChildren}
        </div>
      </div>

      <div className="resume">
            <PersonalInfo />
            <h3 className='expHeaderResume'>EXPERIENCE</h3>
            {jobChildrenResume}
            <h3 className='eduHeaderResume'>EDUCATION</h3>
            {eduChildrenResume}
            <h3 className="skillHeaderResume">SKILL</h3>
            <div className="allSkill">
              {skillChildrenResume}
            </div>
        </div>

    </div>
)
}

export default App;