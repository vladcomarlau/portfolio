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
                    <TechBadge name="java" className="" />
                    <TechBadge name="spring" className="" />
                    <TechBadge name="react" className="" />
                    <TechBadge name="js" className="" />
                    <TechBadge name="maven" className="" />
                    <TechBadge name="jwt" className="" />
                    <TechBadge name="npm" className="" />
                    <TechBadge name="openai" className="" />
                    <TechBadge name="bootstrap" className="" />
                    <TechBadge name="intellij" className="" />
                </div>
            </div>
        </>
    )
}