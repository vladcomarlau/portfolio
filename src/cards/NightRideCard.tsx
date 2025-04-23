import GitButton from "../buttons/GitButton";
import TryButton from "../buttons/TryButton";
import { SkillBadges } from "./SkillBadges";

export default function NightRideCard() {
    return(
        <div className="bg-custom-secondary rounded-box p-5 max-w-2xl m-auto">
            <div className="-mt-8 mb-3 text-right">
                <GitButton url="https://github.com/vladcomarlau/night-ride"/>
                <TryButton url="https://vladcomarlau.itch.io/night-ride"/>
            </div>
            <span className="font-gothic bg-custom-primary px-2 text-xl text-custom-secondary">
                DRIVING VIDEO GAME
            </span>
            <div>
                <span className="text-custom-primary font-serif rounded-field">
                    Video Game</span>
            </div>
            <div className="font-serif py-3">
                <p className="indent-10">
                    "NightRide" is an 8‑level, high‑speed traffic‑dodging game in Lua for the PICO‑8 fantasy console, overcoming strict ~80s‑era memory and feature limits.
                </p>
                <p className="indent-10">
                    Custom particle systems, sprite‑rotation routines and physics/collision detection built from scratch (PICO‑8 lacks built‑in support).
                </p>
                <p className="indent-10">
                    Optimized all code, graphics and audio to fit into a single .PNG “cartridge”.
                </p>
            </div>

            <SkillBadges skills={["Lua", "PICO-8"]}/>
        </div>
    )
}