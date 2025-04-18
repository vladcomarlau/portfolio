import ContactBadges from "./ContactBadges"

const Title = () => {
  return (
    <>
      <div className="glass rounded-box">
          <div className="shadow-sm rounded-box py-6">
            
            <div style={{marginTop:"-15px"}} 
            className="text-5xl p-3 text-center font-bold rounded-box rounded-b-none text-shadow-md">
              Vlad-Constantin Comârlău 
            </div>

            <ContactBadges/>
          </div>
      </div>
    </>
  )
}

export default Title
