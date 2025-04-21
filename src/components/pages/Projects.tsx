import Hrms from "./Hrms";
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
                        <TVStreamer />
                    </div>
                </div>

                <div className='text-stone-100 font-bold font-gothic px-2 italic text-2xl mt-20'>/ PROJECTS </div>
                <div className='text-stone-100 font-bold font-gothic px-2 italic'>/ OTHER </div>
                <div className='px-3 text-stone-100 font-extralight mt-20'>
                    <RideSharing/>
                </div>
                
            </div>
        </div>
    )
}