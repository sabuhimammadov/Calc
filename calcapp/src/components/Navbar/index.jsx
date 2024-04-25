import { useNavigate } from "react-router-dom"

function Navbar() {
    const naviqate = useNavigate()
    return (
    <ul className="d-flex justify-content-around gap-3 h-50 p-5 " style={{background:"green",listStyle:"none"}}>
        <li onClick={()=>naviqate("/")}>Home</li>
        <li onClick={()=>naviqate("/about")}>About</li>
        <li onClick={()=>naviqate("/calc")}>Calc</li>
        <li onClick={()=>naviqate("/life")}>Lifecycle</li>
        <li onClick={()=>naviqate("/setting")}>Setting</li>

    </ul>
)
}

export default Navbar