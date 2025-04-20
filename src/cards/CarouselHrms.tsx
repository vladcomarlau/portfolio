import { motion } from "motion/react";
import Carousel from "./Carousel";
import PresenceDiv from "../animations/PresenceDiv";

export default function CarouselHrms(props:any) {
    
    return (
        <div>
            <div className='text-stone-100 font-bold font-gothic px-2 italic text-xs'>
                / PROJECTS / FULL STACK - WEB APPLICATIONS
            </div>
            <div className="py-1 mx-2">
                <span className="font-gothic bg-custom-primary px-2 text-custom-secondary">
                    HUMAN RESOURCES MANAGEMENT SYSTEM
                </span>
            </div>
            <Carousel scrollYProgress={props.scrollYProgress}>
                <PresenceDiv key="organisationText">
                    <img className="rounded-box absolute h-full w-auto block" src="hrmsScreenshots/1.jpeg"/>
                    <div className="rounded-box relative h-[75vh] backdrop-blur-xl pt-8 font-serif px-5 overflow-scroll">
                        <div className="px-3 py-1 text-left text-stone-950">
                            <div className="font-gothic my-3 text-center text-xl">Organigram</div>
                            <p className="my-3 indent-5 text-center">
                                The hierarchy graph structure of the company.</p>
                            <ul className="">
                                <li>- Visualisation of all teams (with hierarchy tree navigation)</li>
                                <li>- Direct colleagues page</li>
                                <li>- Subordinates page</li>
                            </ul>
                        </div>
                    </div>
                </PresenceDiv>

                <PresenceDiv key="organisation">
                    <div className="h-[80vh]">
                        <div className="font-gothic text-center my-1 mt-3 text-xl">Organigram</div>
                        <img className="w-full rounded-box " src="hrmsScreenshots/1.jpeg" />
                    </div>
                </PresenceDiv>

                <PresenceDiv key="salaryText">
                    <img className="rounded-box absolute h-full w-auto" src="hrmsScreenshots/1.jpeg"/>
                    <div className="text-center rounded-box relative h-[75vh] backdrop-blur-xl pt-8 font-serif px-5 text-stone-950 overflow-scroll">
                        <div className="px-3 py-1 text-left">
                            <div className="my-3 text-center text-xl font-gothic">Salary</div>
                            <ul className="">
                                <li>- Evolution of salaries can be viewed as a graph</li><br></br>
                                <li>- View current salary package as well as history for each salary component (base, performance bonus, projects bonus, meal tickets, life insurance, benefits)</li><br></br>
                                <li>- Salaries of teams page shows the total costs of the organisation with each team as well as individual member salaries</li><br></br>
                                <li>- Salaries manager for modifying salary packages of any account. Also displays organisational statistics (average salary, total expenses, most expensive salary component)</li><br></br>
                            </ul>
                        </div>
                    </div>
                </PresenceDiv>

                <PresenceDiv key="salary">
                <div className="h-[80vh]">
                        <div className="font-gothic text-center my-1 mt-3 text-xl">Salary</div>
                        <img className="w-full rounded-box " src="hrmsScreenshots/2.jpeg" />
                    </div>
                </PresenceDiv>

                <PresenceDiv key="leavesText">
                    <img className="rounded-box absolute h-full w-auto" src="hrmsScreenshots/3.jpeg"/>
                    <div className="text-center rounded-box relative h-[75vh] backdrop-blur-xl pt-8 font-serif px-5 text-stone-950 overflow-scroll">
                        <div className="px-3 py-1 text-left">
                            <div className="my-3 text-center text-xl font-gothic">Leaves</div>
                            <ul className="">
                                <li>- Calendar for viewing and initiating leave days requests to be approved by a superior</li><br></br>
                                <li>- List of all leave days requests initiated and their status and approver name</li><br></br>
                                <li>- Leaves manager to modify any organisation user's leave requests:</li>
                                <ul className="ml-6">
                                    <li>- View of subordinates leave requests at the top</li>
                                    <li>- Modify available leave days balance of any user</li>
                                </ul><br></br>
                                <li>- Holidays manager: Add/remove/modify holidays that appear in all users' calendars</li>
                            </ul>
                        </div>
                    </div>
                </PresenceDiv>

                <PresenceDiv key="leaves">
                <div className="h-[80vh]">
                        <div className="font-gothic text-center my-1 mt-3 text-xl">Leaves</div>
                        <img className="w-full rounded-box " src="hrmsScreenshots/3.jpeg" />
                    </div>
                </PresenceDiv>

                <PresenceDiv key="accountsManagerText">
                    <img className="rounded-box absolute h-full w-auto" src="hrmsScreenshots/4.jpeg"/>
                    <div className="text-center rounded-box relative h-[75vh] backdrop-blur-xl pt-8 font-serif px-5 text-stone-950 overflow-scroll">
                        <div className="px-3 py-1 text-left">
                            <div className="my-3 text-center text-xl font-gothic">Accounts Manager</div>
                            <ul className="">
                                <li>- Modify, remove accounts:</li>
                                <ul className="ml-6">
                                    <li>- Attempting to remove accounts with subordinates will prompt the user to select a new manager in order to transfer the subordinates to it before account deletion takes place</li>
                                </ul><br></br>
                                <li>- Account creation</li><br></br>
                                <li>- Team manager:</li>
                                <ul className="ml-6">
                                    <li>- Create a new team by selecting a manager and subordinates</li>
                                    <li>- Team visualisation with options to add/remove selected members, change the team's manager or remove all members</li>
                                    <li>- Backend performs checks for circular references</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </PresenceDiv>

                <PresenceDiv key="accountsManager">
                <div className="h-[80vh]">
                        <div className="font-gothic text-center my-1 mt-3 text-xl">Accounts Manager</div>
                        <img className="w-full rounded-box " src="hrmsScreenshots/4.jpeg" />
                    </div>
                </PresenceDiv>

                <PresenceDiv key="performanceEvaluationText">
                    <img className="rounded-box absolute h-full w-auto" src="hrmsScreenshots/5.jpeg"/>
                    <div className="text-center rounded-box relative h-[75vh] backdrop-blur-xl pt-8 font-serif px-5 text-stone-950 overflow-scroll">
                        <div className="px-3 py-1 text-left">
                            <div className="my-3 text-center text-xl font-gothic">Performance Evaluation</div>
                            <ul className="">
                                <li>- Current evaluation grading with history (based on 5 criterias: Communication, Efficiency, Expertise, Initiative, Leadership) and feedback</li>
                                <li>- Feedback of an evaluation can be generated using OpenAi API</li>
                                <li>- Teams performance page with the average grade of each team</li><br></br>
                                <li>- View individual performance grades of each team member (emphasizing the least and most performant criterias)</li>
                                <li>- Evaluations manager for the entire organization</li>
                            </ul>
                        </div>
                    </div>
                </PresenceDiv>

                <PresenceDiv key="performanceEvaluation">
                <div className="h-[80vh]">
                        <div className="font-gothic text-center my-1 mt-3 text-xl">Performance Evaluation</div>
                        <img className="w-full rounded-box " src="hrmsScreenshots/5.jpeg" />
                    </div>
                </PresenceDiv>
            </Carousel>
        </div>
    )
}