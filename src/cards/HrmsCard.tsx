import GitButton from "../buttons/GitButton";
import TryButton from "../buttons/TryButton";
import TechBadge from "../components/TechBadge";

export default function HrmsCard() {
    return(
        <>
            <div className="bg-custom-secondary rounded-box p-3">
                <div className="-mt-8 mb-3 text-right">
                    <GitButton url="https://github.com/vladcomarlau/HRMS" />
                    <TryButton url="" />
                </div>
                <span className="font-gothic bg-custom-primary px-2 text-xl text-custom-secondary">
                    HUMAN RESOURCES MANAGEMENT SYSTEM
                </span>
                <div>
                    <span className="text-custom-primary font-serif px-2 rounded-field">
                        Full Stack Web Application</span>
                </div>
                <div className="font-serif">
                    <p className="indent-10 m-2">
                        Web app developed for employee, organizational, payroll, leaves and performance evaluation management for use on intranet across entire organization.
                    </p>
                </div>

                <div className="p-1 saturate-0">
                    <TechBadge name="java" />
                    <TechBadge name="spring" />
                    <TechBadge name="react" />
                    <TechBadge name="js" />
                    <TechBadge name="maven" />
                    <TechBadge name="jwt" />
                    <TechBadge name="npm" />
                    <TechBadge name="openai" />
                    <TechBadge name="bootstrap" />
                    <TechBadge name="intellij" />
                </div>
            </div>
        </>
    )
}