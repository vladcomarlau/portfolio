import GitButton from "../buttons/GitButton";
import { SkillBadges } from "./SkillBadges";

export default function PortfolioCard() {
    return(
        <div className="bg-custom-secondary rounded-box p-5 max-w-2xl m-auto">
            <div className="-mt-8 mb-3 text-right">
                <GitButton url="https://github.com/vladcomarlau/portfolio"/>
            </div>
            <span className="font-gothic bg-custom-primary px-2 text-xl text-custom-secondary">
                THIS WEBSITE
            </span>
            <div>
                <span className="text-custom-primary font-serif rounded-field">
                    Frontend & Deployment Project
                </span>
            </div>
            <div className="font-serif py-3 text-stone-100">
                <p className="indent-10">
                    Personal projects website with scroll based animations and 3D components.
                </p>
            </div>

            <SkillBadges skills={["React", "Vite", "TypeScript", "Kubernetes", "Docker", "Private Docker Registry", "Jenkins", "AWS", "npm", "Motion Framer", "TailwindCSS"]}/>
        </div>
    )
}