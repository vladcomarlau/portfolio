import GitButton from "../buttons/GitButton";
import { SkillBadges } from "./SkillBadges";

export default function TVStreamerCard() {
    return(
        <div className="bg-custom-secondary rounded-box p-5 max-w-2xl m-auto">
            <div className="-mt-8 mb-3 text-right">
                <GitButton url="https://github.com/vladcomarlau/tvStreamer" />
            </div>
            <span className="font-gothic bg-custom-primary px-2 text-xl text-custom-secondary">
                Live TV Web Streamer
            </span>
            <div>
                <span className="text-custom-primary font-serif rounded-field">
                    Full Stack Web Application</span>
            </div>
            <div className="font-serif py-3 text-stone-100">
                <p className="indent-10 p-2">
                    Live TV web server (tv box remote control and viewer) with auto-updating channel list.
                    Uses arduino board to send IR signals and a capture card to obtain the image of the TV signal
                    and broadcast it over the internet.
                </p>
            </div>

            <SkillBadges skills={["Java", "Java Swing", "JavaScript", "Maven", "FFMPEG + HLS", "jSerialComm", "Java Simple File Server", "ESP8266"]}/>
        </div>
    )
}