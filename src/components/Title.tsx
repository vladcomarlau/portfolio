import ContactBadges from "./ContactBadges"

const Title = () => {
  return (
    <>
      <div className="glass rounded-box">
        <div style={{marginTop:"-7px", marginLeft:"-18px"}} 
          className="badge badge-sm badge-warning absolute wiggle select-none">
            Full Stack Web Dev</div>
          <div className="shadow-sm rounded-box py-6">

            <div style={{marginTop:"-15px"}} 
            className="text-5xl p-3 text-center font-bold rounded-box rounded-b-none text-shadow-md">
              Vlad-Constantin Comarlau 
            </div>

            <ContactBadges/>
          </div>
      </div>
    </>
  )
}

export default Title
