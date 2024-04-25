import { useEffect } from "react"
import Navbar from "../../components/Navbar"

function Home() {
    useEffect(() => {
        document.title = "Home"
    }, [])
    return (
        <>
        <Navbar />

        <div>Home</div>
        </>

    )
}

export default Home