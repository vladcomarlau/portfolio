import CarouselFade from "./CarouselFade";
import PresenceDiv from "../animations/PresenceDiv";

export default function CarouselHrms(props:any) {
    
    return (
        <CarouselFade scrollYProgress={props.scrollYProgress}>
            
            <PresenceDiv key="organisation">
                <div className="w-[min(80vw,80vh)] h-[min(80vw,80vh)] max-w-4xl mx-auto">
                    <div className="font-gothic my-1 mt-3 text-xl">Organigram</div>
                    <img className="w-full rounded-box" src="hrmsScreenshots/1.jpeg" />
                </div>
            </PresenceDiv>

            <PresenceDiv key="organisationText">
                <div className="mt-11">
                    <img className="rounded-box absolute h-full w-full block max-h-[60vh]" src="hrmsScreenshots/1.jpeg" />
                    <div className="rounded-box relative -mb-11 pb-7 -mb-11 max-h-[60vh] backdrop-blur-2xl text-shadow-sm pt-2 font-light px-5 overflow-scroll">
                        <div className="px-3 py-1 text-left text-stone-950">
                            <div className="font-gothic my-3 text-xl">Organigram</div>
                            <p className="my-3">
                                The hierarchy graph structure of the company.</p>
                            <ul className="">
                                <li>- Visualisation of all teams (with hierarchy tree navigation)</li>
                                <li>- Direct colleagues page</li>
                                <li>- Subordinates page</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </PresenceDiv>

            <PresenceDiv key="salary">
                <div className="w-[min(80vw,80vh)] h-[min(80vw,80vh)] max-w-4xl mx-auto">
                    <div className="font-gothic my-1 mt-3 text-xl">Salary</div>
                    <img className="w-full rounded-box" src="hrmsScreenshots/2.jpeg" />
                </div>
            </PresenceDiv>

            <PresenceDiv key="salaryText">
                <div className="mt-11">
                    <img className="rounded-box absolute h-full w-full" src="hrmsScreenshots/1.jpeg" />
                    <div className="text-center rounded-box relative h-auto pb-7 -mb-11 max-h-[60vh] backdrop-blur-2xl text-shadow-sm pt-2 font-light px-5 text-stone-950 overflow-scroll">
                        <div className="px-3 py-1 text-left">
                            <div className="my-3 text-xl font-gothic">Salary</div>
                            <ul className="">
                                <li>- Evolution of salaries can be viewed as a graph</li>
                                <li>- View current salary package as well as history for each salary component (base, performance bonus, projects bonus, meal tickets, life insurance, benefits)</li>
                                <li>- Salaries of teams page shows the total costs of the organisation with each team as well as individual member salaries</li>
                                <li>- Salaries manager for modifying salary packages of any account. Also displays organisational statistics (average salary, total expenses, most expensive salary component)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </PresenceDiv>

            <PresenceDiv key="leaves">
                <div className="w-[min(80vw,80vh)] h-[min(80vw,80vh)] max-w-4xl mx-auto">
                    <div className="font-gothic my-1 mt-3 text-xl">Leaves</div>
                    <img className="w-full rounded-box" src="hrmsScreenshots/3.jpeg" />
                </div>
            </PresenceDiv>

            <PresenceDiv key="leavesText">
                <div className="mt-11">
                    <img className="rounded-box absolute h-full w-full" src="hrmsScreenshots/3.jpeg" />
                    <div className="text-center rounded-box relative h-auto pb-7 -mb-11 max-h-[60vh] backdrop-blur-2xl text-shadow-sm pt-2 font-light px-5 text-stone-950 overflow-scroll">
                        <div className="px-3 py-1 text-left">
                            <div className="my-3 text-xl font-gothic">Leaves</div>
                            <ul className="">
                                <li>- Calendar for viewing and initiating leave days requests to be approved by a superior</li>
                                <li>- List of all leave days requests initiated and their status and approver name</li>
                                <li>- Leaves manager to modify any organisation user's leave requests:</li>
                                <ul className="ml-6">
                                    <li>- View of subordinates leave requests at the top</li>
                                    <li>- Modify available leave days balance of any user</li>
                                </ul>
                                <li>- Holidays manager: Add/remove/modify holidays that appear in all users' calendars</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </PresenceDiv>

            <PresenceDiv key="accountsManager">
            <div className="w-[min(80vw,80vh)] h-[min(80vw,80vh)] max-w-4xl mx-auto">
                    <div className="font-gothic my-1 mt-3 text-xl">Accounts Manager</div>
                    <img className="w-full rounded-box" src="hrmsScreenshots/4.jpeg" />
                </div>
            </PresenceDiv>

            <PresenceDiv key="accountsManagerText">
                <div className="mt-11">
                    <img className="rounded-box absolute h-full w-full" src="hrmsScreenshots/4.jpeg" />
                    <div className="text-center rounded-box relative h-auto pb-7 bg-stone-100/30 -mb-11 -mb-11 max-h-[60vh] backdrop-blur-2xl text-shadow-sm pt-2 font-light px-5 text-stone-950 overflow-scroll">
                        <div className="px-3 py-1 text-left">
                            <div className="my-3 text-xl font-gothic">Accounts Manager</div>
                            <ul className="">
                                <li>- Modify, remove accounts:</li>
                                <ul className="ml-6">
                                    <li>- Attempting to remove accounts with subordinates will prompt the user to select a new manager in order to transfer the subordinates to it before account deletion takes place</li>
                                </ul>
                                <li>- Account creation</li>
                                <li>- Team manager:</li>
                                <ul className="ml-6">
                                    <li>- Create a new team by selecting a manager and subordinates</li>
                                    <li>- Team visualisation with options to add/remove selected members, change the team's manager or remove all members</li>
                                    <li>- Backend performs checks for circular references</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </PresenceDiv>

            <PresenceDiv key="performanceEvaluation">
                <div className="w-[min(80vw,80vh)] h-[min(80vw,80vh)] max-w-4xl mx-auto">
                    <div className="font-gothic my-1 mt-3 text-xl">Performance Evaluation</div>
                    <img className="w-full rounded-box" src="hrmsScreenshots/5.jpeg" />
                </div>
            </PresenceDiv>

            <PresenceDiv key="performanceEvaluationText">
                <div className="mt-11">
                    <img className="rounded-box absolute h-full w-full" src="hrmsScreenshots/5.jpeg" />
                    <div className="text-center rounded-box relative h-auto pb-7 -mb-11 max-h-[60vh] backdrop-blur-2xl text-shadow-sm pt-2 font-light px-5 text-stone-950 overflow-scroll">
                        <div className="px-3 py-1 text-left">
                            <div className="my-3 text-xl font-gothic">Performance Evaluation</div>
                            <ul className="">
                                <li>- Current evaluation grading with history (based on 5 criterias: Communication, Efficiency, Expertise, Initiative, Leadership) and feedback</li>
                                <li>- Feedback of an evaluation can be generated using OpenAi API</li>
                                <li>- Teams performance page with the average grade of each team</li>
                                <li>- View individual performance grades of each team member (emphasizing the least and most performant criterias)</li>
                                <li>- Evaluations manager for the entire organization</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </PresenceDiv>

            <PresenceDiv key="profile">
                <div className="w-[min(80vw,80vh)] h-[min(80vw,80vh)] max-w-4xl mx-auto">
                    <div className="font-gothic my-1 mt-3 text-xl">Profile</div>
                    <img className="w-full rounded-box" src="hrmsScreenshots/6.jpeg" />
                </div>
            </PresenceDiv>
        </CarouselFade>
    )
}