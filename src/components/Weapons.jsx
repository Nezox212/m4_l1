import { useState } from "react"
import { weapons } from "../data"

const types = ["all", "rifle", "sniper", "pistol", "smg"]
const sides = ["All", "T", "CT"]
const MAX_PRICE = 4750

const slug = (name) => name.toLowerCase().replace(/\s+/g, "-")

const WeaponImage = ({ name }) => {
    const [failed, setFailed] = useState(false)

    if (failed) {
        return <div className="card__img card__img--empty">{name}</div>
    }

    return (
        <div className="card__img">
            <img
                src={"/weapons/" + slug(name) + ".png"}
                alt={name}
                loading="lazy"
                onError={() => setFailed(true)}
            />
        </div>
    )
}

const Weapons = () => {
    const [type, setType] = useState("all")
    const [side, setSide] = useState("All")
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("default")

    let list = weapons.filter((w) => {
        const okType = type === "all" || w.type === type
        const okSide = side === "All" || w.side === side || w.side === "Both"
        const okName = w.name.toLowerCase().includes(search.trim().toLowerCase())
        return okType && okSide && okName
    })

    if (sort === "cheap") list = [...list].sort((a, b) => a.price - b.price)
    if (sort === "expensive") list = [...list].sort((a, b) => b.price - a.price)
    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name))

    const reset = () => {
        setType("all")
        setSide("All")
        setSearch("")
        setSort("default")
    }

    return (
        <section className="section" id="weapons">
            <div className="container">
                <h2 className="title">Weapons</h2>
                <p className="subtitle">Prices may change with game updates.</p>

                <div className="toolbar">
                    <input
                        className="input"
                        type="text"
                        placeholder="Search weapon..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <select
                        className="input"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <option value="default">Sort: default</option>
                        <option value="cheap">Price: low to high</option>
                        <option value="expensive">Price: high to low</option>
                        <option value="name">Name A-Z</option>
                    </select>
                </div>

                <div className="filters">
                    {types.map((t) => (
                        <button
                            key={t}
                            className={t === type ? "filter filter--active" : "filter"}
                            onClick={() => setType(t)}
                        >
                            {t}
                        </button>
                    ))}
                    <span className="filters__gap"></span>
                    {sides.map((s) => (
                        <button
                            key={s}
                            className={s === side ? "filter filter--active" : "filter"}
                            onClick={() => setSide(s)}
                        >
                            {s}
                        </button>
                    ))}
                </div>

                <p className="count">Found: {list.length}</p>

                {list.length === 0 ? (
                    <div className="empty">
                        <p>Nothing found.</p>
                        <button className="btn" onClick={reset}>Reset filters</button>
                    </div>
                ) : (
                    <div className="cards">
                        {list.map((w) => (
                            <div className="card" key={w.id}>
                <span className={"badge badge--" + w.side.toLowerCase()}>
                  {w.side}
                </span>
                                <WeaponImage name={w.name} />
                                <h3>{w.name}</h3>
                                <p className="card__type">{w.type}</p>
                                <p className="card__price">${w.price}</p>
                                <div className="bar">
                                    <div
                                        className="bar__fill"
                                        style={{ width: (w.price / MAX_PRICE) * 100 + "%" }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Weapons