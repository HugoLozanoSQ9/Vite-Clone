import Content from "./Content"
import Img from "./Img"
export default function Container() {
    return (
        <>
            <aside className="asideL"></aside>
            <Content/>
            <Img/>
            <aside className="asideR"></aside>
        </>
    )
}