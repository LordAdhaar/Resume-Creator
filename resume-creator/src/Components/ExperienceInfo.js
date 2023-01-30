export default function ExperienceInfo(props){
    return (
        <div className="expInfo" id={props.uniqueId}>
            <p id="position"></p>
            <div className="companyInfo">
                <p id="company"></p>
                <p id="jobCity"></p>
            </div>
            <div className="tenure">
                <p id="jobFrom"></p>
                <p id="jobTo"></p>
            </div>
            
            <p id="jobDesc"></p>
        </div>
    )
}