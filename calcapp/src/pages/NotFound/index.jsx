import { useNavigate } from "react-router-dom"

function NotFound() {
    const naviqate = useNavigate()
    return (
        <div className="text-center mt-5 text-danger d-flex gap-3 justify-content-center">Not Found
            <button className="btn btn-danger w-25" onClick={() => naviqate(-1)}>Go Back</button>
        </div>
    )
}

export default NotFound