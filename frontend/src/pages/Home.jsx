import {Footer, HeroSection, Navbar} from "../components/index.js"

function Home() {
    return (
        <>
            <Navbar />
            <div className="pt-14">
                <HeroSection />
            </div>
            <Footer />
        </>
    )
}

export default Home
