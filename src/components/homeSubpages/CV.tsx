export default function CV() {
    const pdfURL = '/Vlad-Constantin_COMARLAU_2025_en.pdf'
    return (
        <>
            <div className="glass m-3 p-3 rounded-box text-center">
                <a href={pdfURL} download
                className="btn btn-info btn-soft border border-info mt-2 shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Vlad-Constantin_COMARLAU_2025_en.pdf
                </a>
                
                <div className="mt-5">
                    <iframe
                        src={pdfURL}
                        title="PDF Viewer"
                        className="w-full h-270 rounded-box">
                        This browser does not support PDFs. Please download the PDF to view it.
                    </iframe>
                </div>
            </div>
        </>
    )
}