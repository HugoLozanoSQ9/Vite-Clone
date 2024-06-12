import Tags from "./Tags"
export default function Content() {

    return (

        <section className="content">
            <div className="rows">
                <span className="name"> Vite </span>
                <p className="text">Next Generation Frontend Tooling</p>
                <p className="tagline">Get ready for a development environment that can finally catch up with you.</p>
                <Tags/>
            </div>
        </section>
    )
}
