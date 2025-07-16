import RotateScrollL from "../../animations/RotateScrollR";
import AuthenticationServerCard from "../../cards/AuthenticationServerCard";
import Hit8ox from "./Hit8ox";
import Hrms from "./Hrms";
import NightRide from "./NightRide";
import Portfolio from "./Portfolio";
import RideSharing from "./RideSharing";
import TVStreamer from "./TVStreamer";

export default function Projects() {

    return (
        <div className="m-3 p-3 mb-20 max-w-5xl mx-auto"
            id="0">
            <div className=''>
                <div className='text-stone-100 font-bold font-gothic px-2 italic text-2xl'>/ PROJECTS </div>
                
                <div className='px-3 text-stone-100 font-extralight'>
                    <RotateScrollL>
                        <AuthenticationServerCard/>
                    </RotateScrollL>
                </div>

                <div className='px-3 text-stone-100 font-extralight'>
                    <Hrms/>
                </div>

                <div className="mt-[75vh]">
                    <Portfolio />
                </div>

                <div className="px-3 mt-[15vh]">
                    <TVStreamer />
                </div>                

                <div className='px-3 text-stone-100 font-extralight mt-30'>
                    <RideSharing/>
                </div>

                <div className='text-stone-100 font-bold font-gothic px-2 italic mt-30'>/ VIDEO GAMES </div>
                
                <div className='px-3 text-stone-100 font-extralight'>
                    <Hit8ox/>
                </div>

                <div className='px-3 text-stone-100 font-extralight mt-40'>
                    <NightRide/>
                </div>
            </div>
        </div>
    )
}