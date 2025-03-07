import { useParams } from "react-router-dom"

const ChildMain = () => {
    const { name } = useParams();
    return <h1>Hello from ChildMain {name}</h1>
}

export default ChildMain