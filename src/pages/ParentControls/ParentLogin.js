
import { useParams } from "react-router-dom";
const ParentLogin = () => {
    const { mode } = useParams();
    const id = decodeURIComponent(mode);



    return <>
    <h1>We can use the ID in login to choose what to bring the next person to </h1>
    <h2>{id}</h2>
</>
}

export default ParentLogin