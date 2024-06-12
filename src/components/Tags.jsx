export default function Tags() {
    const elementos = [
        { name: "Get Started", active: true },
        { name: "Why Vite?", active: false },
        { name: "View on GitHub", active: false },
        { name: "🎉 ViteConf 23!", active: true },
    ]

    return (
        <>
            <div className="boton">
                {elementos.map((elemento) => {
                    return (
                        <a href="#" className={`button-element ${elemento.active ? 'active' : 'no-active'}`}>{elemento.name}</a>
                    )
                })}
            </div>
        </>
    )

}