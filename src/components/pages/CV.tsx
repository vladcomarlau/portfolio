export default function CV() {
    const pdfURL = '/Vlad-Constantin_COMARLAU_2025_en.pdf'
    return (
        <>
            <div className="customGlass m-3 p-3 rounded-box text-left">
                <div className='text-stone-100 font-bold font-gothic p-2 italic text-2xl'>: CV / RESUME</div>
                <div className="m-4 inline-flex font-extralight font-serif">
                    PDF download:
                </div>
                <a href={pdfURL} download
                    className="btn customButtonGlassPrimary border mx-2 shadow-sm rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Vlad-Constantin_COMARLAU_2025_en.pdf
                </a>
                
                <div className="mt-5">
                    <iframe
                        src={pdfURL}
                        title="PDF Viewer"
                        className="w-full h-180 rounded-box">
                        This browser does not support PDFs. Please download the PDF to view it.
                    </iframe>
                </div>
            </div>
        </>
    )
}