import RotateScrollL from "../../animations/RotateScrollL";
import RotateScrollR from "../../animations/RotateScrollR";
import ScrollPause from "../../animations/ScrollPause";
import HrmsCard from "../../cards/HrmsCard";

export default function Hrms() {
    
    return (
        <>
            <RotateScrollL><HrmsCard/></RotateScrollL>
            <div className="h-600">
                <div className="sticky top-28 my-20">
                    <HrmsCard />
                </div>
            </div>
            <RotateScrollR><HrmsCard /></RotateScrollR>
        </>
    )
}