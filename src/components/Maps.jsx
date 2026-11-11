import { useState } from "react"
import { maps } from "../data"

const Maps = () => {
    const [active, setActive] = useState(null)

    return (
        <section className="section section--dark" id="maps">
            <div className="container">
                <h2 className="title">Maps</h2>
                <p className="subtitle">Click a card to select your next map.</p>

                <div className="maps">
                    {maps.map((m) => (
                        <button
                            key={m.id}
                            className={active === m.id ? "map map--active" : "map"}
                            style={{
                                background: `linear-gradient(135deg, ${m.colors[0]}, ${m.colors[1]})`,
                            }}
                            onClick={() => setActive(active === m.id ? null : m.id)}
                        >
                            <h3>{m.name}</h3>
                            <p>{m.text}</p>
                            {active === m.id && <span className="map__check">Selected</span>}
                        </button>
                    ))}
                </div>

                <p className="picked">
                    {active
                        ? "Your map: " + maps.find((m) => m.id === active).name
                        : "No map selected yet."}
                </p>
            </div>
        </section>
    )
}

export default Maps