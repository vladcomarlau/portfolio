import RotateScrollL from "../../animations/RotateScrollL";
import RotateScrollR from "../../animations/RotateScrollR";
import HrmsCard from "../../cards/HrmsCard";

export default function Hrms() {
    
    return (
        <>
            <RotateScrollL><HrmsCard/></RotateScrollL>
            <RotateScrollR><HrmsCard /></RotateScrollR>
        </>
    )
}