import { useState } from "react";

export default function EducationForm(){
    
    const [uni,setUni] = useState("");
    const [degree,setDegree] = useState("");
    const [GPA,setGPA] = useState("");
    const [eduFrom,setEduFrom] = useState("");
    const [eduTo,setEduTo] = useState("");

    function handleUni(e){
        setUni(e.target.value)
    }

    function handleDegree(e){
        setDegree(e.target.value)
    }

    function handleGPA(e){
        setGPA(e.target.value)
    }

    function handleEduFrom(e){
        setEduFrom(e.target.value)
    }

    function handleEduTo(e){
        setEduTo(e.target.value);
        console.log(uni,degree,GPA,eduFrom,eduTo);
    }

    return (
        <div className="educationForm">
            <input type="text" placeholder="University Name " value={uni} onChange={handleUni} />
            <input type="text" placeholder="Degree" value={degree} onChange={handleDegree} />
            <input type="text" placeholder="GPA" value={GPA} onChange={handleGPA} />
            <input type="text" placeholder="From" value={eduFrom} onChange={handleEduFrom} />
            <input type="text" placeholder="To" value={eduTo} onChange={handleEduTo} />
        </div>
    )
}