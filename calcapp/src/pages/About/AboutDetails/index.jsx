import { useParams } from "react-router-dom"

function AboutDetail() {
    const {about_details}= useParams()
    return (
        <div>AboutDetail {about_details}</div>
    )
}
export default AboutDetail