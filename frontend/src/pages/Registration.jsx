import { Footer, Navbar, RegistrationFees } from "../components/index.js"

function Registration() {
  return (
    <>
    {/* <Header/> */}
    <Navbar/>
    <div className="inter py-4 px-4 md:px-12 sm:py-4 md:py-6 max-w-[1280px] mx-auto">
      <div className="text-2xl font-semibold">Registration Fees Details</div>
      <RegistrationFees />
      <div className="py-4">
        <div className="font-semibold">The account details for payment of Registration fees are given as follows:</div>
        <div className="mt-2 text-sm ml-5 space-y-1">
          <p><span className="font-bold">Account Name: </span>ABVIIITMG IEEE REACS 2025</p>
          <p><span className="font-bold">Account Number: </span>946210210000051</p>
          <p><span className="font-bold">Bank Name and Branch: </span>Bank of India, IIITM Campus, Morena Link Road, Gwalior, M.P. -474003</p>
          <p><span className="font-bold">Account Type: </span>Saving</p>
          <p><span className="font-bold">MICR Code: </span>474013010</p>
          <p><span className="font-bold">IFSC Code: </span>BKID0009462</p>
          <p><span className="font-bold">SWIFT Code: </span>BKIDINBBGWA</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Registration
