import { Navbar, RegistrationTable } from "../components/index.js"

function Registration() {
    return (
        <>
            <Navbar />
            <div className="inter primary-bg pt-20 px-8 py-4">
                <div className="text-cl text-2xl font-semibold">Registration Fees Details</div>
                <RegistrationTable/>
            </div>
        </>
    )
}

export default Registration
