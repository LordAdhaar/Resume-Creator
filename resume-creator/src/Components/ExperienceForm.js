import {  useEffect, useState } from "react";

export default function ExperienceForm(props){

    const [position, setPosition] = useState("");
    const [company,setCompany] = useState("");
    const [jobCity,setJobCity] = useState("");
    const [jobFrom,setJobFrom] = useState("");
    const [jobTo,setJobTo] = useState("");
    const [jobDescription,setJobDescription] = useState("");

    useEffect(()=>{
        
        const positionHTML = document.querySelector(`.expInfo#${props.uniqueId} #position`);
        positionHTML.innerHTML = position;
        
        const companyHTML = document.querySelector(`.expInfo#${props.uniqueId} #company`);
        companyHTML.innerHTML = company;

        const jobCityHTML = document.querySelector(`.expInfo#${props.uniqueId} #jobCity`);
        jobCityHTML.innerHTML = jobCity;

        const jobFromHTML = document.querySelector(`.expInfo#${props.uniqueId} #jobFrom`);
        jobFromHTML.innerHTML = jobFrom;

        const jobToHTML = document.querySelector(`.expInfo#${props.uniqueId} #jobTo`);
        jobToHTML.innerHTML = jobTo;

        const jobDescHTML = document.querySelector(`.expInfo#${props.uniqueId} #jobDesc`);
        jobDescHTML.innerHTML = jobDescription;

        console.log(props.uniqueId)

    },[position,company,jobCity,jobFrom,jobTo,jobDescription,props.uniqueId])

    function handlePosition(e){
        setPosition(e.target.value)
    }

    function handleCompany(e){
        setCompany(e.target.value)
    }

    function handleJobCity(e){
        setJobCity(e.target.value)
    }

    function handleJobFrom(e){
        setJobFrom(e.target.value)
    }

    function handleJobTo(e){
        setJobTo(e.target.value)
    }

    function handleJobDescription(e){
        setJobDescription(e.target.value)
        console.log(position,company,jobCity,jobFrom,jobTo,jobDescription);
    }

    return (
        <div className="experienceForm">
            <input type="text" placeholder="Position" value={position} onChange={handlePosition} />
            <input type="text" placeholder="Company" value={company} onChange={handleCompany}/>
            <input type="text" placeholder="City" value={jobCity} onChange={handleJobCity}/>
            <input type="text" placeholder="From" value={jobFrom} onChange={handleJobFrom}/>
            <input type="text" placeholder="To" value={jobTo} onChange={handleJobTo}/>
            <input type="text" placeholder="Job Description" value={jobDescription} onChange={handleJobDescription}/>          
        </div>
    )
}