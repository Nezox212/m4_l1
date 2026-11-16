import { useState } from "react"

const slug = (name) => name.toLowerCase().replace(/\s+/g, "-")

const WeaponImage = ({ name }) => {
    const [failed, setFailed] = useState(false)

    if (failed) {
        return <div className="card__img card__img--empty">{name}</div>
    }

    return (
        <div className="card__img">
            <img
                src={import.meta.env.BASE_URL + "weapons/" + slug(name) + ".png"}
                alt={name}
                loading="lazy"
                onError={() => setFailed(true)}
            />
        </div>
    )
}

const WeaponCard = ({ id, name, type, side, price, maxPrice }) => {
    const handleClick = () => {
        console.log({ id, name, type, side, price })
    }

    return (
        <div className="card" onClick={handleClick}>
            <span className={"badge badge--" + side.toLowerCase()}>{side}</span>
            <WeaponImage name={name} />
            <h3>{name}</h3>
            <p className="card__type">{type}</p>
            <p className="card__price">${price}</p>
            <div className="bar">
                <div
                    className="bar__fill"
                    style={{ width: (price / maxPrice) * 100 + "%" }}
                ></div>
            </div>
        </div>
    )
}

export default WeaponCard