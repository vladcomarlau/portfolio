export default function Home() {
  const redirect = () => {
    window.location.href ='https://comarlau.com/business-management/';
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Vlad Comarlau
      </h1>
      <button onClick={redirect}>go to business-management web app</button>
    </>
  )
}


