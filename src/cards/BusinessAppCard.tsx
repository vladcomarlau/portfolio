import GitButton from "../buttons/GitButton";
//import TryButton from "../buttons/TryButton";
import { SkillBadges } from "./SkillBadges";

export default function BusinessAppCard() {
    return(
        <div className="bg-custom-secondary rounded-box p-5 max-w-2xl m-auto ">
            <div className="-mt-8 mb-3 text-right">
                <GitButton url="https://github.com/vladcomarlau/Business-Operations-Finance"/>
                {/*<TryButton url="/business/"/>*/}
            </div>
            <span className="font-gothic bg-custom-primary px-2 text-xl text-custom-secondary">
                BUSINESS OPERATIONS & FINANCE
            </span>
            <div>
                <span className="text-custom-primary font-serif rounded-field">
                    Full Stack Web Application
                </span>
            </div>
            <div className="font-serif py-3 text-stone-100">
                <p className="indent-10 mb-4 font-bold italic">Work in progress</p>
                <p className="indent-10">
                     A full stack web application designed to help businesses track and 
                     manage their financial and operational performance using A.i.
                </p>
                <p className="indent-10 mt-3"> Secure backend with responsive frontend hosted on AWS EC2 
                    with complete CI/CD pipeline.</p>
                <p className="indent-10 mt-3"> The app will be hosted on this website when it's ready.</p>
            </div>

            <SkillBadges skills={["Java", "Spring", "Spring Boot", "Spring Security", "OAuth2 Authorization Server", 
                "react-oidc-context", "RESTful API", "JSON", "Vite", "React", "TypeScript", "Kubernetes", 
                "Docker", "Private Docker Registry", "Jenkins", "AWS", "Gradle", "npm", "JWT", "Motion", 
                "TailwindCSS", "OpenAi API", "Git", "GitHub"]}/>
        </div>
    )
}