import Hit8ox from "./Hit8ox";
import Hrms from "./Hrms";
import NightRide from "./NightRide";
import RideSharing from "./RideSharing";
import TVStreamer from "./TVStreamer";

export default function Projects() {

    return (
        <div className="m-3 p-3 mb-20">
            <div className=''>
                <div className='text-stone-100 font-bold font-gothic px-2 italic text-2xl'>/ PROJECTS </div>
                <div className='text-stone-100 font-bold font-gothic px-2 italic'>/ FULL STACK - WEB APPLICATIONS </div>
                <div className='px-3 text-stone-100 font-extralight'>
                    <Hrms/>
                    <div className="mt-[50vw]">
                        <TVStreamer/>
                    </div>
                </div>

                <div className='text-stone-100 font-bold font-gothic px-2 italic mt-30'>/ JAVA APPLICATIONS </div>
                <div className='px-3 text-stone-100 font-extralight mt-10'>
                    <RideSharing/>
                </div>

                <div className='text-stone-100 font-bold font-gothic px-2 italic mt-40'>/ VIDEO GAMES </div>
                <div className='px-3 text-stone-100 font-extralight'>
                    <Hit8ox/>
                </div>
                <div className='px-3 text-stone-100 font-extralight mt-120'>
                    <NightRide/>
                </div>
            </div>
        </div>
    )
}