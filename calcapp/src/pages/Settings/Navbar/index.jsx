import { useNavigate } from "react-router-dom"

function Navbar() {
    const naviqate = useNavigate()
    return (
        <ul >
            <li onClick={()=>naviqate("/general")}>General</li>
            <li onClick={()=>naviqate("/personal")}>Personal</li>

        </ul>
    )
}
export default Navbar