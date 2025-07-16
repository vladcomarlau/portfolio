import GitButton from "../buttons/GitButton";
import { SkillBadges } from "./SkillBadges";

export default function AuthenticationServerCard() {
    return(
        <div className="bg-custom-secondary rounded-box p-5 max-w-2xl m-auto ">
            <div className="-mt-8 mb-3 text-right">
                <GitButton url="https://github.com/vladcomarlau/SpringSecurity-OAuth2-AuthenticationServer"/>
            </div>
            <span className="font-gothic bg-custom-primary px-2 text-xl text-custom-secondary">
                SPRING SECURITY OAUTH2 AUTHENTICATION SERVER
            </span>
            <div>
                <span className="text-custom-primary font-serif rounded-field">
                    Full Stack Web Application
                </span>
            </div>
            <div className="font-serif py-3 text-stone-100">
                <p className="indent-10">
                     A full stack web app that configures and implements Spring Security OAuth2 login. A dedicated authentication server that securely logins users based on multiple redirects.
                </p>
                <p className="indent-10"> 
                    <br></br>- Secure backend REST API with Java, Spring Boot, Spring Security, OAuth2 Authorization Server and Gradle for build automation
                    <br></br>- Deployed on AWS EC2 using Kubernetes (K3S), Docker with private Docker registry
                    <br></br>- Vite React frontend using TypeScript, TailwindCSS, react-oidc-context
                    <br></br>- Automated CI/CD pipeline using Jenkins</p>
            </div>

            <SkillBadges skills={["Java", "Spring", "Spring Boot", "Spring Security", "OAuth2 Authorization Server", 
                "react-oidc-context", "RESTful API", "JSON", "Vite", "React", "TypeScript", "Kubernetes", 
                "Docker", "Private Docker Registry", "Jenkins", "AWS", "Gradle", "npm", 
                "TailwindCSS", "Git", "GitHub"]}/>
        </div>
    )
}