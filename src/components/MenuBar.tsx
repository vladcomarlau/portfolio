import ContactBadges from "./ContactBadges";

export default function MenuBar() {
    return(
        <>
            <div className="navbar bg-base-100 fixed glass my-2 rounded-full"
            style={{top:"0px", zIndex:"300", width:"92%", left: "46%",
                transform: "translate(-46%)"
            }}>
                <a className="btn btn-ghost text-xl hole text-shadow-lg"
                style={{mixBlendMode: "luminosity"}}>
                    Vlad Comarlau</a>
                <ContactBadges/>
            </div>
        </>
    )
}