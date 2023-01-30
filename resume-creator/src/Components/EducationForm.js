import { useEffect, useState } from "react";

export default function EducationForm(props){
    
    const [uni,setUni] = useState("");
    const [degree,setDegree] = useState("");
    const [GPA,setGPA] = useState("");
    const [eduFrom,setEduFrom] = useState("");
    const [eduTo,setEduTo] = useState("");

    useEffect(()=>{

        const uniHTML = document.querySelector(`.eduInfo#${props.uniqueId} #uni`);
        uniHTML.innerHTML = uni + "&nbsp;";

        const degreeHTML = document.querySelector(`.eduInfo#${props.uniqueId} #degree`)
        degreeHTML.innerHTML = "| &nbsp;" + degree;

        const gpaHTML = document.querySelector(`.eduInfo#${props.uniqueId} #gpa`)
        gpaHTML.innerHTML =  "GPA : " + GPA + "/10";

        const eduFromHTML = document.querySelector(`.eduInfo#${props.uniqueId} #eduFrom`)
        eduFromHTML.innerHTML = eduFrom + "&nbsp; - &nbsp;";

        const eduToHTML = document.querySelector(`.eduInfo#${props.uniqueId} #eduTo`)
        eduToHTML.innerHTML = eduTo;

    },[uni,degree,GPA,eduFrom,eduTo,props.uniqueId])


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