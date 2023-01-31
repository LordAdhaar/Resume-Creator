import { useEffect, useState } from "react";

export default function SkillForm(props){
    
    const [skill, setSkill] = useState("Skill");

    useEffect(()=>{
        const skillHTML = document.querySelector(`.skillInfo#${props.uniqueId} p`);
        skillHTML.innerHTML = skill + "&nbsp; | &nbsp;";
    },[skill,props.uniqueId])

    function handleSkill(e){
        setSkill(e.target.value);
    }

    return(
        <div className="skillForm">
            <input type="text" placeholder="Skill" value={skill} onChange={handleSkill} />
        </div>
    )

}