import GitButton from "../buttons/GitButton";
import TryButton from "../buttons/TryButton";
import { SkillBadges } from "./SkillBadges";

export default function Hit8oxCard() {
    return(
        <div className="bg-custom-secondary rounded-box p-5 max-w-2xl m-auto">
            <div className="-mt-8 mb-3 text-right">
                <GitButton url="https://github.com/vladcomarlau/hit8ox"/>
                <TryButton url="https://vladcomarlau.itch.io/hit8ox"/>
            </div>
            <span className="font-gothic bg-custom-primary px-2 text-xl text-custom-secondary">
                3D FIGHTING VIDEO GAME
            </span>
            <div>
                <span className="text-custom-primary font-serif rounded-field">
                    Video Game</span>
            </div>
            <div className="font-serif py-3">
                <p className="indent-10 p-2">
                    "Hit8ox" is a 3D fighting video game with a rendering engine built from the ground up with animation, particles systems and real time reflections. Game fits in under 42k of memory with 3 environments, character customisation, AI and 2 player mode. An animation and environment editor was built alongside.
                </p>
                <p className="indent-10 py-3">
                    Over 95.000 views on X.com with appreciation from Tom Hall (DOOM designer).
                </p>
            </div>

            <SkillBadges skills={["Lua", "PICO-8", "3D"]}/>
        </div>
    )
}