import { useEffect, useState } from "react";

export default function PersonalInfoForm(){

    const [firstName, setFirstName] = useState("First Name");
    const [lastName,setLastName] = useState("Last Name");
    const [phone,setPhone] = useState("Phone Number");
    const [yourCity,setYourCity] = useState("City");
    const [yourSate,setYourState] = useState("State");
    const [email,setEmail] = useState("E-Mail");

    useEffect(()=>{
        
        console.log("peronalInforForm was called")
    
        const fName = document.getElementById("fName");
        fName.innerHTML=firstName + "&nbsp;";

        const lName = document.getElementById("lName");
        lName.innerHTML=lastName;

        const phoneNo = document.getElementById("phone");
        phoneNo.innerHTML=phone + "&nbsp; ● &nbsp;";

        const city = document.getElementById("city");
        city.innerHTML=yourCity + ", &nbsp;";

        const state = document.getElementById("state");
        state.innerHTML=yourSate + "&nbsp; ● &nbsp;";

        const atTheRate = document.getElementById("email");
        atTheRate.innerHTML=email


    },[firstName,lastName,phone,yourCity,yourSate,email])

    function handleFirstName(e){
        setFirstName(e.target.value)
    }

    function handleLastName(e){
        setLastName(e.target.value)
    }

    function handlePhone(e){
        setPhone(e.target.value)
    }

    function handleYourCity(e){
        setYourCity(e.target.value)
    }

    function handleYourState(e){
        setYourState(e.target.value)
    }

    function handleEmail(e){
        setEmail(e.target.value)
        console.log(firstName,lastName,phone,yourCity,yourSate,email);
    }

    return(
        <div className="personalInfoForm">
            <h3>Personal Information</h3>
            <input type="text" value={firstName} onChange={handleFirstName} placeholder="First Name"/>
            <input type="text" value={lastName} onChange={handleLastName} placeholder="Last Name"/>
            <input type="text" value={phone} onChange={handlePhone} placeholder="Phone Number"/>
            <input type="text" value={yourCity} onChange={handleYourCity} placeholder="City"/>
            <input type="text" value={yourSate} onChange={handleYourState} placeholder="State"/>
            <input type="text" value={email} onChange={handleEmail} placeholder="E-Mail"/>
            <br />
        </div>
    )


}