import { RegistrationFees } from "../components/index.js"

function Registration() {
  return (
    <div className="inter py-4 px-4 md:px-12 sm:py-4 md:py-6 max-w-[1280px] mx-auto">
      <div className="text-2xl font-semibold">Registration Fees Details</div>
      <RegistrationFees />
      <div className="my-4 text-sm">
        <p className="mb-2">1. Registration Fee for IEEE Professionals is Rs. 7080/- including GST, and for Non-IEEE Professionals is Rs. 8260/- including GST.</p>
        <p className="mb-2">2. Students will get 10% discount, Registration fee for IEEE Student Member Rs. 6372/- including GST and IEEE Professional Member Rs. 7434/- including GST and for Industry Participants Rs. 9440/- including GST.</p>
      </div>
    </div>
  )
}

export default Registration
