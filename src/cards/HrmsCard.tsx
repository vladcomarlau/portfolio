import GitButton from "../buttons/GitButton";
import { SkillBadges } from "./SkillBadges";

export default function HrmsCard() {
    return(
        <div className="bg-custom-secondary rounded-box p-5 max-w-2xl m-auto">
            <div className="-mt-8 mb-3 text-right">
                <GitButton url="https://github.com/vladcomarlau/HRMS"/>
            </div>
            <span className="font-gothic bg-custom-primary px-2 text-xl text-custom-secondary">
                HUMAN RESOURCES MANAGEMENT SYSTEM
            </span>
            <div>
                <span className="text-custom-primary font-serif rounded-field">
                    Full Stack Web Application</span>
            </div>
            <div className="font-serif py-3">
                <p className="indent-10 p-2">
                    Web app developed for employee, organizational, payroll, leaves and performance 
                    evaluation management for use on intranet across entire organization.
                </p>
            </div>

            <SkillBadges skills={["Java", "Spring", "Spring Boot", "Spring Security", "RESTful API", "JSON", "React", "JavaScript", "H2 database", "Axios", "SQL", "Maven", "JWT", "npm", "OpenAi API", "Bootstrap", "Intellij Idea"]}/>
        </div>
    )
}