import { Footer, Header, Navbar, RegistrationFees } from "../components/index.js"

function Registration() {
  return (
    <>
    {/* <Header/> */}
    <Navbar/>
    <div className="inter py-4 px-4 md:px-12 sm:py-4 md:py-6 max-w-[1280px] mx-auto">
      <div className="text-2xl font-semibold">Registration Fees Details</div>
      <RegistrationFees />
    </div>
    <Footer/>
    </>
  )
}

export default Registration
