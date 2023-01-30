export default function EducationInfo(props){
    return (
        <div className="eduInfo" id={props.uniqueId}>
            <div className="branch">
                <p id="uni"></p>
                <p id="degree"></p>
            </div>
            
            <p id="gpa"></p>
            
            <div className="uniTenure">
                <p id="eduFrom"></p>
                <p id="eduTo"></p>
            </div>
        </div>
    )
}