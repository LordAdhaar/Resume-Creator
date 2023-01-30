export default function PersonalInfo(){

    console.log("personal Info was Called")

    return(
        <div className="personalInfo">
            <div className="fullName">
                <p id="fName"></p>
                <p id="lName"></p>
            </div>
            <div className="generalInfo">
                <p id="phone"></p>
                <p id="city"></p>
                <p id="state"></p>
                <p id="email"></p>
            </div>
            


        </div>
    )
}