import { Footer, RegistrationFees } from "../components/index.js"

function Registration() {
  return (
    <>
    <div className="inter py-2 px-4 md:px-12 sm:py-4 md:py-8 max-w-[1280px] mx-auto">
        <div className="text-2xl font-bold">Registration Fees Details</div>
        <RegistrationFees/>
    </div>
    <Footer/>
    </>
  )
}

export default Registration
