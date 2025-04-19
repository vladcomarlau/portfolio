import Card from '../Card'

export default function Projects() {
    const divider = (title:string) => {
        return (<div className="h-px bg-none mx-2 my-5 w-full"><div style={{ marginTop: "-27px" }} className='badge customGlass'>{title}</div></div>)
    }

    return (
        <>
            <div className="customGlass m-3 p-3 mb-20">
                <div className='flex flex-wrap'>
                    {divider("Full-Stack Web Projects")}
                    
                </div>
            </div>
        </>
    )
}