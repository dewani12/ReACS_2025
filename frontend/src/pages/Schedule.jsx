import { Footer, Navbar, Timeline } from "../components/index.js"

function Schedule() {
  return (
    <>
    <Navbar/>
    <div className="inter py-2 px-4 md:px-12 sm:py-4 md:py-8 max-w-[1280px] mx-auto">
      <div className="text-2xl md:text-3xl heading-cl font-bold mb-3">Schedule</div>
      <Timeline/>
    </div>
    <Footer/>
    </>
  )
}

export default Schedule
