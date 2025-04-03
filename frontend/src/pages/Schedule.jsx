import { Footer, Navbar, Timeline } from "../components/index.js"

function Schedule() {
  return (
    <>
      {/* <Header/> */}
      <Navbar />
      <div className="inter primary-bg text-cl py-2 px-4 md:px-12 sm:py-4 md:py-8 max-w-[1280px] mx-auto">
            <div className="flex md:space-x-8">
                <div className="md:w-[70%]">
                    <div>
                        <div className="text-2xl font-semibold">
                          Schedule will be updated soon.
                        </div>
                        <div className="md:hidden my-5 border-t-1 pt-6">
                            <div className="text-2xl md:text-3xl heading-cl font-bold mb-3">Important Dates</div>
                            <Timeline />
                        </div>
                    </div>
                </div>
                <div className="max-md:hidden w-[30%]">
                    <div className="text-2xl md:text-3xl heading-cl font-bold mb-3">Important Dates</div>
                    <Timeline />
                </div>
            </div>

        </div>
      <Footer />
    </>
  )
}

export default Schedule
