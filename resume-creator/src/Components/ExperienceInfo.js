export default function ExperienceInfo(props){
    return (
        <div className="expInfo" id={props.uniqueId}>
            <p id="position"></p>
            <p id="company"></p>
            <p id="jobCity"></p>
            <p id="jobFrom"></p>
            <p id="jobTo"></p>
            <p id="jobDesc"></p>
        </div>
    )
}