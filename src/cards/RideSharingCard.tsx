import GitButton from "../buttons/GitButton";
import TryButton from "../buttons/TryButton";
import { SkillBadges } from "./SkillBadges";

export default function RideSharingCard() {
    return(
        <div className="bg-custom-secondary rounded-box p-5 max-w-2xl m-auto">
            <div className="-mt-8 mb-3 text-right">
                <GitButton url="https://github.com/vladcomarlau/rideSharing" />
            </div>
            <span className="font-gothic bg-custom-primary px-2 text-xl text-custom-secondary">
                Ride Sharing Android App (frontend)
            </span>
            <div>
                <span className="text-custom-primary font-serif rounded-field">
                    Android Application</span>
            </div>
            <div className="font-serif py-3">
                <p className="indent-10 p-2">
                    Java mobile app (frontend only) for scheduling ride sharing trips, developed for Mobile Devices and Applications faculty course.
                </p>
            </div>

            <SkillBadges skills={["Java", "Android Studio IDE", "Multi-threading", "JSON via network"]}/>
        </div>
    )
}