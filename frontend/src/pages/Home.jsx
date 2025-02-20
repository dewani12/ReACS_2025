import {Carousel, Footer, HeroSection, Navbar} from "../components/index.js"

function Home() {
    return (
        <>
            <Navbar />
            <div className="pt-14">
                <Carousel/>
            </div>
            <HeroSection />
            <Footer />
        </>
    )
}

export default Home
