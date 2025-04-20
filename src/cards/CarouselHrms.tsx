import { motion } from "motion/react";
import Carousel from "./Carousel";
import PresenceDiv from "../animations/PresenceDiv";

export default function CarouselHrms(props:any) {
    
    return (
        <div>
            <Carousel scrollYProgress={props.scrollYProgress} >
                <PresenceDiv key="organisation">
                    <img className="lg:w-3/4 p-1 rounded-box" src="hrmsScreenshots/1.jpeg" />
                    <div className="lg:w-1/4 p-1 m-1 rounded-box bg-custom-primary">
                        <div className="font-gothic text-stone-950 text-sm my-3 mx-3">Organigram</div>
                        <p className="font-serif text-xs text-stone-950 text-sm my-3 mx-3 indent-5 text-justify">
                            The hierarchy graph structure of the company.</p>
                        <ul className="font-serif text-xs text-stone-950 text-sm my-3 mx-3">
                                <li>- Visualisation of all teams (with hierarchy tree navigation)</li>
                                <li>- Direct colleagues page</li>
                                <li>- Subordinates page</li>
                            </ul>
                    </div>
                </PresenceDiv>
                <PresenceDiv key="salary">
                    <img className="lg:w-3/4 p-1 rounded-box" src="hrmsScreenshots/2.jpeg" />
                    <div className="lg:w-1/4 p-1 m-1 rounded-box bg-custom-primary">
                        <div className="font-gothic text-stone-950 text-sm my-3 mx-3">Salary</div>
                        <ul className="font-serif text-xs text-stone-950 text-sm my-3 mx-3">
                            <li>- Evolution of salaries can be viewed as a graph</li>
                            <li>- View current salary package as well as history for each salary component (base, performance bonus, projects bonus, meal tickets, life insurance, benefits)</li>
                            <li>- Salaries of teams page shows the total costs of the organisation with each team as well as individual member salaries</li>
                            <li>- Salaries manager for modifying salary packages of any account. Also displays organisational statistics (average salary, total expenses, most expensive salary component)</li>
                        </ul>
                    </div>
                </PresenceDiv>
                <PresenceDiv key="leaves">
                    <img className="lg:w-3/4 p-1 rounded-box" src="hrmsScreenshots/3.jpeg" />
                    <div className="lg:w-1/4 p-1 m-1 rounded-box bg-custom-primary">
                        <div className="font-gothic text-stone-950 text-sm my-3 mx-3">Leaves</div>
                        <ul className="font-serif text-xs text-stone-950 text-sm my-3 mx-3">
                            <li>- Calendar for viewing and initiating leave days requests to be approved by a superior</li>
                            <li>- List of all leave days requests initiated and their status and approver name</li>
                            <li>- Leaves manager to modify any organisation user's leave requests</li>
                            <ul>
                                <li>- View of subordinates leave requests at the top</li>
                                <li>- Modify available leave days balance of any user</li>
                            </ul>
                            <li>- Holidays manager: Add/remove/modify holidays that appear in all users' calendars</li>
                        </ul>
                    </div>
                </PresenceDiv>
            </Carousel>
        </div>
    )
}