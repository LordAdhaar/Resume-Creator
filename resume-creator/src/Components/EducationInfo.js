export default function EducationInfo(props){
    return (
        <div className="eduInfo" id={props.uniqueId}>
            <p id="uni"></p>
            <p id="degree"></p>
            <p id="gpa"></p>
            <p id="eduFrom"></p>
            <p id="eduTo"></p>
        </div>
    )
}