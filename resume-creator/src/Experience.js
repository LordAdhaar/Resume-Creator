import { useState } from "react";
import uniqid from "uniqid";

export default function Experience(){
    
    const [position, setPosition] = useState("");
    const [company, setCompany] = useState("");
    const [city,setCity] = useState("");
    const [from,setFrom] = useState("");
    const [to,setTo] = useState("");
    const [jobDescription,setJobDescription] = useState("");

    function handlePosition(e){
        setPosition(e.target.value);
    }

    function handleCompany(e){
        setCompany(e.target.value);
    }

    function handleCity(e){
        setCity(e.target.value);
    }

    function handleFrom(e){
        setFrom(e.target.value);
    }

    function handleTo(e){
        setTo(e.target.value);
    }

    function handleJobDescription(e){
        setJobDescription(e.target.value);
    }

    return(
        <div className="jobInfo" key={uniqid()}  >
            <input type="text" id="position" value={position} onChange={handlePosition} placeholder="Position" />
            <input type="text" id="company" value={company} onChange={handleCompany} placeholder="Company"/>
            <input type="text" id="city" value={city} onChange={handleCity} placeholder="City"/>
            <input type="text" id="from" value={from} onChange={handleFrom} placeholder="From"/>
            <input type="text" id="to" value={to} onChange={handleTo} placeholder="To"/>
            <input type="text" id="jobDescription" value={jobDescription} onChange={handleJobDescription} placeholder="Job Description" />
            <button className="delete" >Delete</button>
            <br />
        </div>
    )
}