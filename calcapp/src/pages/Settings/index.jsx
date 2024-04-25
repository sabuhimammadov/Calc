import { Route, Routes, useNavigate } from "react-router-dom";
import General from "./Pages/General";
import Personal from "./Pages/Personal";

function Setting() {
    const naviqate = useNavigate()
    return (

        <div className="d-flex">
            <div className="w-50 h-100  text-center" style={{ background: "teal", minHeight: "100vh" }}>
                <ul style={{ listStyle: "none", color: "wheat", fontSize: "28px", fontWeight: "700" }} className="p-5 d-flex flex-column gap-5">
                    <li onClick={()=>naviqate("/general")}>General</li>
                    <li onClick={()=>naviqate("/personal")}>Personal</li>

                </ul>
            </div>
            <div className="w-75 h-100 d-flex flex-column p-5" style={{ background: "wheat", minHeight: "100vh" }}>
                <h1 className="h-20">Setting</h1>
                <div className="p-5" style={{ height: "500px" }}>
                    {/* deyisilecek ereazi */}
                    <Routes>
                        <Route path='/general' element={<General />} />
                        <Route path='/personal' element={<Personal />} />
                    </Routes>
                </div>
            </div>


        </div>

    )

}
export default Setting