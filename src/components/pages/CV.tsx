import DownCV from "../../buttons/DownCV"

export default function CV() {
    const pdfURL = '/Vlad-Constantin_COMARLAU_2025_en.pdf'
    return (
        <div className="my-3 p-3 mt-13 rounded-box text-left max-w-5xl mx-auto"
            id="1">
            <div className='text-stone-100 font-bold font-gothic p-2 italic text-2xl'>
                / CV / RESUME</div>
            <div className="m-4 inline-flex font-extralight font-serif text-custom-primary">
                PDF download:
            </div>

            <DownCV pdfURL={pdfURL}/>
            
            <div className="mt-5">
                <iframe
                    src={pdfURL}
                    title="PDF Viewer"
                    className="w-full h-180 rounded-box">
                </iframe>
            </div>
        </div>
    )
}