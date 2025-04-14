const Title = () => {
  return (
    <>
      <div className="glass rounded-box">
      <div style={{marginTop:"-7px", marginLeft:"-18px"}} className="badge badge-sm badge-warning absolute wiggle">Full Stack Web Dev</div>
        <div className="shadow-sm rounded-box py-6">
          <div style={{marginTop:"-15px"}} className="text-5xl p-3 text-center font-semibold rounded-box rounded-b-none">
            Vlad-Constantin Comarlau 
          </div>
          <div className="text-center">
            <div className="badge badge-soft p-3 m-1 shadow-lg">
              <svg style={{color:"rgb(51,112,216)"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
              </svg>
              <a href="mailto:vladcom95@gmail.com">vladcom95@gmail.com</a>
            </div>
            <div className="badge badge-soft p-3 shadow-lg">
              <svg style={{color:"green"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clip-rule="evenodd" />
              </svg>
              <a href="tel:0752230503">0752 230 503</a>
            </div>
            <div className="badge badge-soft p-3 m-1 shadow-lg">
              <svg style={{width:"17px", marginTop:"2px"}} aria-hidden="true" className="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
              <a href="https://github.com/vladcomarlau">github.com/vladcomarlau</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Title
