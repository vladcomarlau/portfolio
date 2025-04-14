import Card from '../Card'

export default function Projects() {
    const divider = (title:string) => {
        return(<div className="h-px bg-gray-300 mx-2 my-5 w-full"><div style={{marginTop:"-27px"}} className='badge badge-sm justify-center'>{title}</div></div>)
    }

    return (
        <>
            <div className="glass m-3 p-3 rounded-box mb-30">
                <div className='flex flex-wrap'>
                    {divider("Full-Stack Web Projects")}
                    <Card title="Business Operations and Finances Web App" description="Human resources management system"/>
                    <Card title="Human Resources Management Web App" description="Human resources management system"/>
                    <Card title="COMARLAU.com - you are on it right now" description="Personal projects portfolio website"/>                
                    {divider("Video Games")}
                    <Card title="Fighting Game" description="3D fighting game called Hit8ox (with rendering engine)"/>
                    <Card title="Driving Game" description="2D driving vertical scrolling game called Night Ride"/>
                </div>
            </div>
        </>
    )
}