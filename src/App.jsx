import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Weapons from "./components/Weapons"
import Maps from "./components/Maps"
import Footer from "./components/Footer"

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Weapons />
                <Maps />
            </main>
            <Footer />
        </>
    )
}

export default App