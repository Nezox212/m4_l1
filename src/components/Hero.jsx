const stats = [
    { value: "5v5", label: "Competitive" },
    { value: "115s", label: "Round time" },
    { value: "13", label: "Rounds to win" },
    { value: "64", label: "Tick sub-tick" },
]

const Hero = () => {
    return (
        <section className="hero" id="top">
            <div className="container">
                <p className="hero__tag">Counter-Strike 2</p>
                <h1 className="hero__title">
                    Plant. Defuse. <span>Win.</span>
                </h1>
                <p className="hero__text">
                    A fan page about CS2: browse the weapons, compare their prices and
                    pick a map for your next match.
                </p>
                <div className="hero__buttons">
                    <a href="#weapons" className="btn">View weapons</a>
                    <a href="#maps" className="btn btn--ghost">Explore maps</a>
                </div>

                <div className="stats">
                    {stats.map((s) => (
                        <div className="stats__item" key={s.label}>
                            <b>{s.value}</b>
                            <span>{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero