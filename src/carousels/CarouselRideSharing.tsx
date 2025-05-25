import CarouselFade from "./CarouselFade";
import PresenceDiv from "../animations/PresenceDiv";

export default function CarouselRideSharing(props: any) {

    return (
        <div >
            <div className="pb-1 mx-2 md:mb-4">
                <span className="font-gothic bg-custom-primary px-2 text-custom-secondary text-xs">
                    RIDE SHARING ANDROID APP
                </span>
            </div>
            <CarouselFade scrollYProgress={props.scrollYProgress}>
                <PresenceDiv key="img1">
                    <div className="h-[70vh]">
                        <img className="h-full m-auto rounded-box" src="rideSharingScreenshots/1.jpeg" />
                    </div>
                </PresenceDiv>

                <PresenceDiv key="img2">
                    <div className="h-[70vh]">
                        <img className="h-full m-auto rounded-box" src="rideSharingScreenshots/3.jpeg" />
                    </div>
                </PresenceDiv>

                <PresenceDiv key="img3">
                    <div className="h-[70vh]">
                        <img className="h-full m-auto rounded-box" src="rideSharingScreenshots/2.jpeg" />
                    </div>
                </PresenceDiv>

                <PresenceDiv key="img4">
                    <div className="h-[70vh]">
                        <img className="h-full m-auto rounded-box" src="rideSharingScreenshots/4.jpeg" />
                    </div>
                </PresenceDiv>

                <PresenceDiv key="img5">
                    <div className="h-[70vh]">
                        <img className="h-full m-auto rounded-box" src="rideSharingScreenshots/5.jpeg" />
                    </div>
                </PresenceDiv>

                <PresenceDiv key="img6">
                    <div className="h-[70vh]">
                        <img className="h-full m-auto rounded-box" src="rideSharingScreenshots/6.jpeg" />
                    </div>
                </PresenceDiv>

                <PresenceDiv key="img7">
                    <div className="h-[70vh]">
                        <img className="h-full m-auto rounded-box" src="rideSharingScreenshots/7.jpeg" />
                    </div>
                </PresenceDiv>
            </CarouselFade>
        </div>
    )
}