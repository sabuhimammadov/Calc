import { useEffect } from "react"
import Navbar from "../../components/Navbar"

function About() {
    useEffect(() => {
        document.title = "About"
    }, [])
    return (
        <>
        <Navbar />

        <div>About</div>
        </>    )
}

export default About